import type { PlannedProject } from "../types/planned-project";
import "../style.css";
import styles from "./PlannedProjectCard.module.css";
import { useState } from 'react';

interface PlannedProjectCardProps {
  project: PlannedProject;
}

export default function PlannedProjectCard({
  project,
}: PlannedProjectCardProps) {
  const [isFeaturesExpanded, setIsFeaturesExpanded] = useState(false);

  return (
    <div className={styles.plannedProjectCard}>
      <div className={styles.header}>
        <div className={styles.leftSection}>
          {project.gitHubLink && (
            <a 
              href={project.gitHubLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.githubLink}
              aria-label="View project on GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {!project.gitHubLink && <div></div>} {/* Placeholder when no GitHub link */}
        </div>
        
        <div className={styles.centerSection}>
          <h3>{project.title}</h3>
        </div>
        
        <div className={styles.rightSection}>
          <div className={styles.statusBadge}>{project.status}</div>
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.features}>
          <div 
            className={styles.featuresHeader}
            onClick={() => setIsFeaturesExpanded(!isFeaturesExpanded)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && setIsFeaturesExpanded(!isFeaturesExpanded)}
            aria-expanded={isFeaturesExpanded}
          >
            <h4>Planned Features</h4>
            <span className={styles.toggleIcon}>{isFeaturesExpanded ? "▼" : "▶"}</span>
          </div>
          <div className={`${styles.featuresList} ${isFeaturesExpanded ? styles.expanded : styles.collapsed}`}>
            <div className={styles.featureTags}>
              {project.plannedFeatures.map((feature, index) => (
                <span key={index} className={styles.featureTag}>
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </div>

        {project.technologies.length > 0 && (
          <div className={styles.technologies}>
            <h4>Technologies:</h4>
            <div className={styles.techTags}>
              {project.technologies.map((tech, index) => (
                <span key={index} className={styles.techTag}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {project.estimatedCompletion && (
          <div className={styles.completion}>
            <h4>Estimated Completion:</h4>
            <p>{project.estimatedCompletion}</p>
          </div>
        )}
      </div>
    </div>
  );
}
