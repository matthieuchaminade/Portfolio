"use client";
import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";
import BackgroundTriangles from "./BackgroundTriangles";
import {
  PROJECT_HEADING_CLASS,
  PROJECT_HEADING_STYLE,
} from "./projectHeadingStyles";

const MyProjects = () => {
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
      <BackgroundTriangles />
      <div
        style={{
          position: "relative",
          zIndex: 10,
          width: "100%",
          padding: "0 16px",
          boxSizing: "border-box",
        }}
      >
        <h1
          className={`${PROJECT_HEADING_CLASS} w-full text-center`}
          style={{
            ...PROJECT_HEADING_STYLE,
            marginBottom: "2rem",
          }}
        >
          Work Samples
        </h1>
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
