"use client";
import React, { useRef, useEffect, useState } from "react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Build slides: video first (optional), then hero, then gallery images
  const hasVideo = Boolean(project.assets.video);
  const gallery = project.assets.gallery ?? [];
  const imageSlides = [project.assets.hero, ...gallery].filter(Boolean);
  const slideCount = (hasVideo ? 1 : 0) + imageSlides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const isCarousel = slideCount > 1;
  const [isVideoInView, setIsVideoInView] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enableAutoplay = () => setHasUserInteracted(true);
    document.addEventListener("click", enableAutoplay, { once: true });
    document.addEventListener("scroll", enableAutoplay, { once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVideoInView(entry.isIntersecting);
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => {
      observer.unobserve(video);
      document.removeEventListener("click", enableAutoplay);
      document.removeEventListener("scroll", enableAutoplay);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const canAutoplay = video.muted || hasUserInteracted;
    const shouldPlay =
      hasVideo && isVideoInView && canAutoplay && (!isCarousel || currentSlide === 0);

    if (shouldPlay) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  }, [currentSlide, hasUserInteracted, isCarousel, isVideoInView]);

  const goPrev = () => setCurrentSlide((i) => (i <= 0 ? slideCount - 1 : i - 1));
  const goNext = () => setCurrentSlide((i) => (i >= slideCount - 1 ? 0 : i + 1));

  const handleCarouselClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCarousel) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mid = rect.left + rect.width / 2;
    if (e.clientX < mid) goPrev();
    else goNext();
  };

  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          onClick={isCarousel ? handleCarouselClick : undefined}
          style={{
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#000",
            position: "relative",
            cursor: isCarousel ? "pointer" : undefined,
          }}
        >
          <div
            style={{
              display: "flex",
              width: "100%",
              height: "100%",
              transform: `translate3d(-${currentSlide * 100}%, 0, 0)`,
              transition: "transform 0.5s ease-in-out",
              willChange: "transform",
            }}
          >
            {hasVideo ? (
              <div
                key="video"
                style={{
                  flex: "0 0 100%",
                  width: "100%",
                  height: "100%",
                  isolation: "isolate",
                  overflow: "hidden",
                }}
              >
                <video
                  ref={videoRef}
                  src={project.assets.video}
                  poster={project.assets.poster}
                  preload="metadata"
                  loop
                  muted
                  playsInline
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    transform: "scale(1.01)",
                    transformOrigin: "center",
                  }}
                />
              </div>
            ) : null}
            {imageSlides.map((src, i) => (
              <div
                key={`${i}-${src}`}
                style={{
                  flex: "0 0 100%",
                  width: "100%",
                  height: "100%",
                  overflow: "hidden",
                }}
              >
                <img
                  src={src}
                  alt={i === 0 ? project.title : ""}
                  style={{
                    width: "100%",
                    height: "100%",
                    display: "block",
                    objectFit: "cover",
                    transform: "scale(1.01)",
                    transformOrigin: "center",
                  }}
                />
              </div>
            ))}
          </div>

          {isCarousel && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goPrev();
                }}
                aria-label="Previous slide"
                style={{
                  position: "absolute",
                  left: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/icons/carousel_prev.svg" alt="" width={40} height={40} style={{ display: "block" }} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goNext();
                }}
                aria-label="Next slide"
                style={{
                  position: "absolute",
                  right: "16px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  width: "40px",
                  height: "40px",
                  border: "none",
                  background: "transparent",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img src="/icons/carousel_next.svg" alt="" width={40} height={40} style={{ display: "block" }} />
              </button>
            </>
          )}
        </div>
      </div>
      
      <div style={{ padding: "24px 0", width: "100%" }}>
        <div className="text-left w-full font-bodymono" style={{ color: '#99989A', fontSize: '1rem', lineHeight: '1.6' }}>
          <div className="mb-4">
            <span
              className="font-bold"
              style={{
                color: "#D0D0D2",
                display: "block",
                marginBottom: "8px",
                fontSize: "20px",
                lineHeight: "1.15",
              }}
            >
              {project.title}
            </span>
            <p>
              {project.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard; 