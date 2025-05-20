import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import PlannedProjectCard from "../components/PlannedProjectCard";
import projects from "../data/projects.json";
import plannedProjects from "../data/planned-projects.json";
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

      <div className="planned-projects-section">
        <h2>Planned Projects</h2>
        <div className="planned-projects-container">
          {plannedProjects.map((project) => (
            <PlannedProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
}
