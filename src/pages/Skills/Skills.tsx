import { useState } from "react";
import styles from "./Skills.module.css";
import RadarChart from "./RadarChart";
import SkillTree from "./SkillTree";
import skillsData from "../../constants/skills.json";

export default function Skills() {
  const [visualizationType, setVisualizationType] = useState<"radar" | "tree">(
    "radar"
  );

  return (
    <section className="section" id="skills">
      <h2 className="section-title">Skills</h2>

      <div className={styles.visualizationToggle}>
        <button
          className={`${styles.toggleButton} ${
            visualizationType === "radar" ? styles.active : ""
          }`}
          onClick={() => setVisualizationType("radar")}
        >
          Radar Chart
        </button>
        <button
          className={`${styles.toggleButton} ${
            visualizationType === "tree" ? styles.active : ""
          }`}
          onClick={() => setVisualizationType("tree")}
        >
          Skill Tree
        </button>
      </div>

      <div className={styles.visualizationContainer}>
        {visualizationType === "radar" ? (
          <RadarChart data={skillsData} />
        ) : (
          <SkillTree data={skillsData} />
        )}
      </div>
    </section>
  );
}
