import type { Project, ProjectStatus } from "../types";
import { useEffect } from "react";
import "../style.css";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

interface ProjectModalProps {
  project: Project | null; // The selected project or null
  onClose: () => void; // Callback to close the modal
}

/**
 * Converts a ProjectStatus to a CSS class-friendly string
 * Example: "In Development" -> "in-development"
 */
function getStatusClass(status: ProjectStatus): string {
  return status.toLowerCase().replace(/\s+/g, "-");
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // Only close if clicking the backdrop, not the content
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    // Add event listener when modal opens
    document.addEventListener("keydown", handleKeyDown);

    // Cleanup event listener when modal closes
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null; // Don't render anything if no project is selected

  return (
    <div className="project-modal" onClick={handleBackdropClick}>
      <div className="project-modal-content">
        <button className="project-modal-close" onClick={onClose}>
          &times;
        </button>
        <h2>{project.title}</h2>

        {/* Badges section for category and status */}
        <div className="project-modal-badges">
          <span className="badge badge-category">{project.category}</span>
          <span
            className={`badge badge-status badge-status-${getStatusClass(
              project.status
            )}`}
          >
            {project.status}
          </span>
        </div>

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
