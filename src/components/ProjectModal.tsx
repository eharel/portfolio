import type { Project } from "../types";
import "../style.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

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
        <div
          className="project-modal-description"
          dangerouslySetInnerHTML={{ __html: project.description }}
        />
        <div className="project-modal-footer">
          <a
            href={project.gitHubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="project-modal-github"
            title="View Source Code on GitHub"
          >
            <FaGithub />
          </a>
          {project.liveLink && (
            <a
              href={project.liveLink}
              target="_blank"
              rel="noopener noreferrer"
              className="project-modal-live"
              title="Open Live Project"
            >
              <FaExternalLinkAlt />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
