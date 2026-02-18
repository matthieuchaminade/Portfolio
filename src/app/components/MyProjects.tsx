"use client";
import React, { useEffect, useState } from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const PROJECTS_BG_IMAGES = [
  "/images/projects_section_background/doodle_lamp_inverted.jpg",
  "/images/projects_section_background/doodle_phone_inverted.jpg",
  "/images/projects_section_background/doodle_surface_inverted.jpg",
];

const MyProjects = () => {
  const [backgroundImage, setBackgroundImage] = useState(() => PROJECTS_BG_IMAGES[0]);

  useEffect(() => {
    setBackgroundImage(
      PROJECTS_BG_IMAGES[Math.floor(Math.random() * PROJECTS_BG_IMAGES.length)]
    );
  }, []);

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background: "#1E1D20",
        minHeight: "40vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 0",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <img
          src={backgroundImage}
          alt=""
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center",
            opacity: 0.15,
          }}
        />
      </div>
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          width: "100%",
          padding: "0 24px",
        }}
      >
        <h2
          className="font-title tracking-tight mb-2 text-center w-full"
          style={{
            color: "#B9B9BB",
            fontSize: "3rem",
            fontWeight: 400,
            marginBottom: "2rem",
          }}
        >
          Selected Work
        </h2>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "48px",
            alignItems: "center",
          }}
        >
          {projects.slice(0, -3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;
