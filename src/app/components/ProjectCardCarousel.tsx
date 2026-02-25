"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Project } from "../../data/projects";

type SlideItem =
  | { type: "video"; src: string; poster?: string }
  | { type: "image"; src: string };

const slideContainerStyle = {
  aspectRatio: "16/9" as const,
  width: "100%",
  borderRadius: "12px",
  overflow: "hidden" as const,
  background: "#000",
  flex: "0 0 100%",
  minWidth: 0,
};

const captionStyle = {
  color: "#99989A" as const,
  fontSize: "1rem" as const,
  lineHeight: "1.6" as const,
  marginTop: "16px" as const,
};

interface ProjectCardCarouselProps {
  project: Project;
  slides: SlideItem[];
  captions: string[] | undefined;
}

export default function ProjectCardCarousel({
  project,
  slides,
  captions,
}: ProjectCardCarouselProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const firstSlideIsVideo = slides[0]?.type === "video";

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: "x",
    loop: true,
    align: "start",
  });

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enableAutoplay = () => setHasUserInteracted(true);
    document.addEventListener("click", enableAutoplay, { once: true });
    document.addEventListener("scroll", enableAutoplay, { once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasUserInteracted) {
            if (firstSlideIsVideo && selectedIndex === 0) {
              video.play().catch(console.error);
            } else {
              video.pause();
            }
          } else {
            video.pause();
          }
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
  }, [hasUserInteracted, firstSlideIsVideo, selectedIndex]);

  useEffect(() => {
    if (!firstSlideIsVideo || !videoRef.current) return;
    if (selectedIndex !== 0) {
      videoRef.current.pause();
    } else if (hasUserInteracted) {
      videoRef.current.play().catch(console.error);
    }
  }, [selectedIndex, firstSlideIsVideo, hasUserInteracted]);

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <div style={{ position: "relative", width: "100%" }}>
        <div ref={emblaRef} style={{ overflow: "hidden", width: "100%" }}>
          <div
            style={{
              display: "flex",
              touchAction: "pan-y pinch-zoom",
            }}
          >
            {slides.map((slide, i) => (
              <div key={i} style={slideContainerStyle}>
                {slide.type === "video" ? (
                  <video
                    ref={i === 0 ? videoRef : undefined}
                    src={slide.src}
                    poster={slide.poster}
                    preload="metadata"
                    loop
                    muted
                    playsInline
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                ) : (
                  <img
                    src={slide.src}
                    alt={i === 0 ? project.title : ""}
                    style={{
                      width: "100%",
                      height: "100%",
                      display: "block",
                      borderRadius: "12px",
                      objectFit: "cover",
                    }}
                  />
                )}
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          onClick={scrollPrev}
          aria-label="Previous slide"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-black/30 transition-colors border border-white/30"
          style={{ zIndex: 2 }}
        >
          <span aria-hidden>←</span>
        </button>
        <button
          type="button"
          onClick={scrollNext}
          aria-label="Next slide"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full flex items-center justify-center text-white/90 hover:text-white hover:bg-black/30 transition-colors border border-white/30"
          style={{ zIndex: 2 }}
        >
          <span aria-hidden>→</span>
        </button>
      </div>
      {captions?.[selectedIndex] ? (
        <p className="font-bodymono text-left italic" style={captionStyle}>
          {captions[selectedIndex]}
        </p>
      ) : null}
    </>
  );
}

export function ProjectCardCarouselPlaceholder({
  project,
  slides,
  captions,
}: ProjectCardCarouselProps) {
  const first = slides[0];
  if (!first) return null;
  if (first.type === "video") {
    return (
      <>
        <div
          style={{
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: "12px",
            overflow: "hidden",
            background: "#000",
          }}
        >
          <video
            src={first.src}
            poster={first.poster}
            preload="metadata"
            muted
            playsInline
            style={{
              width: "100%",
              height: "100%",
              display: "block",
              borderRadius: "12px",
              objectFit: "cover",
            }}
          />
        </div>
        {captions?.[0] ? (
          <p className="font-bodymono text-left italic" style={captionStyle}>
            {captions[0]}
          </p>
        ) : null}
      </>
    );
  }
  return (
    <>
      <div
        style={{
          aspectRatio: "16/9",
          width: "100%",
          borderRadius: "12px",
          overflow: "hidden",
          background: "#000",
        }}
      >
        <img
          src={first.src}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            display: "block",
            borderRadius: "12px",
            objectFit: "cover",
          }}
        />
      </div>
      {captions?.[0] ? (
        <p className="font-bodymono text-left italic" style={captionStyle}>
          {captions[0]}
        </p>
      ) : null}
    </>
  );
}
