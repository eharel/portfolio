import type { Project } from "../types";
import "../style.css";

interface ProjectModalProps {
  project: Project | null; // The selected project or null
  onClose: () => void; // Callback to close the modal
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null; // Don't render anything if no project is selected

  return (
    <div className="project-modal">
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer">
          View Live Project
        </a>
      </div>
    </div>
  );
}
