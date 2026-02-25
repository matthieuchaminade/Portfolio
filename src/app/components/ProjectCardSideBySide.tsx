"use client";
import React from "react";
import { Project } from "../../data/projects";

interface ProjectCardSideBySideProps {
  project: Project;
}

const imageStyle = {
  aspectRatio: "16/9" as const,
  width: "100%" as const,
  borderRadius: "12px" as const,
  overflow: "hidden" as const,
  background: "#000" as const,
};

const ProjectCardSideBySide: React.FC<ProjectCardSideBySideProps> = ({
  project,
}) => {
  const images = project.assets.sideBySideImages;
  if (!images || images.length !== 2) return null;

  const captions = project.assets.sideBySideCaptions;

  return (
    <div
      style={{
        borderRadius: "12px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "40px",
          width: "100%",
        }}
      >
        {images.map((src, i) => (
          <div key={i}>
            <div style={imageStyle}>
              <img
                src={src}
                alt=""
                style={{
                  width: "100%",
                  height: "100%",
                  display: "block",
                  borderRadius: "12px",
                  objectFit: "cover",
                }}
              />
            </div>
            {captions?.[i] ? (
              <p
                className="font-bodymono text-left italic"
                style={{
                  color: "#99989A",
                  fontSize: "1rem",
                  lineHeight: "1.6",
                  marginTop: "16px",
                }}
              >
                {captions[i]}
              </p>
            ) : null}
          </div>
        ))}
      </div>

      <div style={{ padding: "24px 0", width: "100%" }}>
        <div
          className="text-left w-full font-bodymono"
          style={{
            color: "#99989A",
            fontSize: "1rem",
            lineHeight: "1.6",
          }}
        >
          <div className="mb-4">
            <h3 className="project-card-title">{project.title}</h3>
            <p>{project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCardSideBySide;
