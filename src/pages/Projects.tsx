import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import projects from "../data/projects.json";
import type { Project } from "../types";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleCardClick = (project: Project) => {
    setSelectedProject(project); // Set the clicked project as selected
  };

  const handleCloseModal = () => {
    setSelectedProject(null); // Clear the selected project
  };

  return (
    <div>
      <h1>Projects</h1>
      <div className="projects-container">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleCardClick}
          />
        ))}
      </div>
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
