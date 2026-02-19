"use client";
import React, { useRef, useEffect, useState } from "react";
import { Project } from "../../data/projects";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Listen for user interaction to enable autoplay
    const enableAutoplay = () => {
      setHasUserInteracted(true);
    };

    document.addEventListener('click', enableAutoplay, { once: true });
    document.addEventListener('scroll', enableAutoplay, { once: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && hasUserInteracted) {
            video.play().catch(console.error);
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
      document.removeEventListener('click', enableAutoplay);
      document.removeEventListener('scroll', enableAutoplay);
    };
  }, [hasUserInteracted]);

  return (
    <div style={{
      borderRadius: "16px",
      overflow: "hidden"
    }}>
      <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
        {project.assets.video ? (
          <div
            style={{
              aspectRatio: "1/1",
              minHeight: 200,
              width: "100%",
              borderRadius: "32px",
              overflow: "hidden",
              background: "#000",
              isolation: "isolate",
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
                borderRadius: "32px",
                objectFit: "contain",
              }}
            />
          </div>
        ) : (
          <img
            src={project.assets.hero}
            alt={project.title}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              borderRadius: "32px"
            }}
          />
        )}
      </div>
      
      <div style={{ padding: "24px 0", maxWidth: "800px", margin: "0 auto" }}>
        <div className="text-left w-full font-bodymono" style={{ color: '#99989A', fontSize: '1rem', lineHeight: '1.6' }}>
          <div className="mb-4">
            <span className="font-bold" style={{ color: '#B9B9BB', display: 'block', marginBottom: '0.25rem' }}>
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