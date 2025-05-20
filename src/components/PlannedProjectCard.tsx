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
        <h3>{project.title}</h3>
        <div className={styles.statusBadge}>{project.status}</div>
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
