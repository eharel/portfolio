import type { PlannedProject } from "../types/planned-project";
import "../style.css";
import styles from "./PlannedProjectCard.module.css";

interface PlannedProjectCardProps {
  project: PlannedProject;
}

export default function PlannedProjectCard({ project }: PlannedProjectCardProps) {
  return (
    <div className={styles.plannedProjectCard}>
      <h3>{project.title}</h3>
      <div className={styles.statusBadge}>{project.status}</div>
      <p className={styles.description}>{project.description}</p>
      
      <div className={styles.features}>
        <h4>Planned Features:</h4>
        <ul>
          {project.plannedFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {project.technologies.length > 0 && (
        <div className={styles.technologies}>
          <h4>Technologies:</h4>
          <ul>
            {project.technologies.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
      )}

      {project.estimatedCompletion && (
        <div className={styles.completion}>
          <h4>Estimated Completion:</h4>
          <p>{project.estimatedCompletion}</p>
        </div>
      )}
    </div>
  );
}
