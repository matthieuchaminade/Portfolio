"use client";
import React, { useRef, useEffect, useState, useCallback } from "react";

interface MusingsMediaContainerProps {
  heroImage?: string;
  heroVideo?: string;
  heroPoster?: string;
  gallery?: string[];
  title: string;
}

const SWIPE_THRESHOLD_PX = 50;

const MusingsMediaContainer: React.FC<MusingsMediaContainerProps> = ({
  heroImage,
  heroVideo,
  heroPoster,
  gallery = [],
  title,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const hasVideo = Boolean(heroVideo);
  const imageSlides = [heroImage, ...gallery].filter(Boolean) as string[];
  const slideCount = (hasVideo ? 1 : 0) + imageSlides.length;
  const [currentSlide, setCurrentSlide] = useState(0);
  const isCarousel = slideCount > 1;
  const [isVideoInView, setIsVideoInView] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [showControls, setShowControls] = useState(true);
  const hideTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const scheduleHide = useCallback(() => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    setShowControls(true);
    hideTimeout.current = setTimeout(() => setShowControls(false), 2500);
  }, []);

  const handlePointerMove = useCallback(() => {
    if (hasVideo) scheduleHide();
  }, [hasVideo, scheduleHide]);

  useEffect(() => {
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const enableAutoplay = () => setHasUserInteracted(true);
    document.addEventListener("click", enableAutoplay, { once: true });
    document.addEventListener("scroll", enableAutoplay, { once: true });

    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => setIsVideoInView(entry.isIntersecting));
      },
      { threshold: 0.5 }
    );
    observer.observe(video);
    return () => {
      observer.unobserve(video);
      document.removeEventListener("click", enableAutoplay);
      document.removeEventListener("scroll", enableAutoplay);
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
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
  }, [currentSlide, hasUserInteracted, isCarousel, isVideoInView, hasVideo]);

  const togglePlay = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
    scheduleHide();
  }, [scheduleHide]);

  const toggleMute = useCallback((e: React.MouseEvent) => {
    e.stopPropagation();
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
    scheduleHide();
  }, [scheduleHide]);

  const goPrev = () => setCurrentSlide((i) => (i <= 0 ? slideCount - 1 : i - 1));
  const goNext = () => setCurrentSlide((i) => (i >= slideCount - 1 ? 0 : i + 1));

  const handleCarouselClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isCarousel) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const mid = rect.left + rect.width / 2;
    if (e.clientX < mid) goPrev();
    else goNext();
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isCarousel) return;
    const t = e.touches[0];
    touchStart.current = { x: t.clientX, y: t.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isCarousel || !touchStart.current) return;
    const t = e.changedTouches[0];
    const dx = t.clientX - touchStart.current.x;
    const dy = t.clientY - touchStart.current.y;
    touchStart.current = null;
    if (Math.abs(dx) < SWIPE_THRESHOLD_PX) return;
    if (Math.abs(dx) < Math.abs(dy)) return;
    if (dx > 0) goPrev();
    else goNext();
  };

  if (slideCount === 0) return null;

  return (
    <div style={{ borderRadius: "20px", overflow: "hidden" }}>
      <div style={{ position: "relative", width: "100%" }}>
        <div
          onClick={isCarousel ? handleCarouselClick : undefined}
          onTouchStart={isCarousel ? handleTouchStart : undefined}
          onTouchEnd={isCarousel ? handleTouchEnd : undefined}
          onPointerMove={handlePointerMove}
          onPointerEnter={handlePointerMove}
          style={{
            aspectRatio: "16/9",
            width: "100%",
            borderRadius: "20px",
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
                  src={heroVideo}
                  poster={heroPoster}
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
                  alt={i === 0 ? title : ""}
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

          {hasVideo && (
            <div
              style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                display: "flex",
                gap: "8px",
                opacity: showControls ? 1 : 0,
                transition: "opacity 0.3s ease",
                pointerEvents: showControls ? "auto" : "none",
              }}
            >
              <button
                type="button"
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause" : "Play"}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(0, 0, 0, 0.55)",
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {isPlaying ? (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <rect x="1" y="1" width="4" height="12" rx="1" />
                    <rect x="9" y="1" width="4" height="12" rx="1" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor">
                    <polygon points="2,0 14,7 2,14" />
                  </svg>
                )}
              </button>
              <button
                type="button"
                onClick={toggleMute}
                aria-label={isMuted ? "Unmute" : "Mute"}
                style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "50%",
                  border: "none",
                  background: "rgba(0, 0, 0, 0.55)",
                  backdropFilter: "blur(8px)",
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                }}
              >
                {isMuted ? (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none" />
                    <line x1="23" y1="9" x2="17" y2="15" />
                    <line x1="17" y1="9" x2="23" y2="15" />
                  </svg>
                ) : (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11,5 6,9 2,9 2,15 6,15 11,19" fill="currentColor" stroke="none" />
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
                  </svg>
                )}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MusingsMediaContainer;
