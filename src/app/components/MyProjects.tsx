import React from "react";
import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

const MyProjects = () => {
  return (
    <section style={{ 
      background: "#1E1D20", 
      minHeight: "40vh", 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      padding: "48px 0" 
    }}>
      <div style={{ maxWidth: "1200px", width: "100%", padding: "0 24px" }}>
        <h2 className="font-title tracking-tight mb-2 text-center w-full" style={{ 
          color: '#B9B9BB', 
          fontSize: '3rem', 
          fontWeight: 400, 
          marginBottom: '2rem'
        }}>
          Selected Work
        </h2>
        <div style={{ 
          display: "flex", 
          flexDirection: "column", 
          gap: "48px",
          alignItems: "center"
        }}>
          {projects.slice(0, -3).map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyProjects; 