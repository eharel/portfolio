import type { Project } from "../types";
import "../style.css";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void; // Callback for handling clicks
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      className="project-card"
      onClick={() => onClick(project)} // Trigger the callback with the project
    >
      <img src={project.image} alt={project.title} className="project-image" />
      <p>{project.title}</p>
    </div>
  );
}
