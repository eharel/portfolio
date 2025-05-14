import { useEffect, useRef } from "react";
import { hierarchy, tree } from "d3-hierarchy";
import styles from "./Skills.module.css";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface SkillNode {
  name: string;
  children?: SkillNode[];
  value?: number;
}

interface SkillTreeProps {
  data: Record<string, SkillCategory>;
}

export default function SkillTree({ data }: SkillTreeProps) {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const hierarchicalData: SkillNode = {
      name: "Skills",
      children: Object.values(data).map((category) => ({
        name: category.name,
        children: category.skills.map((skill) => ({
          name: skill.name,
          value: skill.level,
        })),
      })),
    };

    const width = 1000;
    const height = 600;
    const margin = { top: 20, right: 200, bottom: 20, left: 200 };

    // Create the tree layout
    const treeLayout = tree<SkillNode>().size([
      height - margin.top - margin.bottom,
      width - margin.right - margin.left,
    ]);

    // Generate the tree data
    const root = hierarchy(hierarchicalData);
    const treeData = treeLayout(root);

    // Clear previous content
    const svg = svgRef.current;
    svg.innerHTML = "";

    // Create tooltip div
    const tooltip = document.createElement("div");
    tooltip.className = styles.tooltip;
    document.body.appendChild(tooltip);

    // Create the SVG group with margin
    const g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("transform", `translate(${margin.left},${margin.top})`);
    svg.appendChild(g);

    // Draw links
    const links = treeData.links();
    links.forEach((link) => {
      const path = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "path"
      );
      path.setAttribute(
        "d",
        `M${link.source.y},${link.source.x}
         C${(link.source.y + link.target.y) / 2},${link.source.x}
          ${(link.source.y + link.target.y) / 2},${link.target.x}
          ${link.target.y},${link.target.x}`
      );
      path.setAttribute("fill", "none");
      path.setAttribute("stroke", "var(--border-color)");
      path.setAttribute("class", styles.link);
      g.appendChild(path);
    });

    // Draw nodes
    const nodes = treeData.descendants();
    nodes.forEach((node) => {
      const nodeGroup = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "g"
      );
      nodeGroup.setAttribute("transform", `translate(${node.y},${node.x})`);
      nodeGroup.setAttribute("class", styles.node);

      // Add circle
      const circle = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "circle"
      );
      circle.setAttribute("r", "8");
      circle.setAttribute("fill", "var(--accent)");
      circle.setAttribute("class", styles.nodeCircle);
      nodeGroup.appendChild(circle);

      // Add text
      const text = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "text"
      );
      text.textContent = node.data.name;
      text.setAttribute("dy", "0.31em");
      text.setAttribute("x", String(node.children ? -20 : 20));
      text.setAttribute("text-anchor", node.children ? "end" : "start");
      text.setAttribute("class", styles.nodeText);
      nodeGroup.appendChild(text);

      // Add hover events for leaf nodes (skills)
      if (!node.children && node.data.value !== undefined) {
        nodeGroup.addEventListener("mouseenter", (event) => {
          // Show tooltip
          tooltip.innerHTML = `
            <strong>${node.data.name}</strong>
            <br>
            Proficiency: ${node.data.value}%
          `;
          tooltip.style.display = "block";
          tooltip.style.left = `${event.pageX + 10}px`;
          tooltip.style.top = `${event.pageY - 20}px`;

          // Highlight node
          circle.setAttribute(
            "class",
            `${styles.nodeCircle} ${styles.nodeHover}`
          );
        });

        nodeGroup.addEventListener("mousemove", (event) => {
          tooltip.style.left = `${event.pageX + 10}px`;
          tooltip.style.top = `${event.pageY - 20}px`;
        });

        nodeGroup.addEventListener("mouseleave", () => {
          tooltip.style.display = "none";
          circle.setAttribute("class", styles.nodeCircle);
        });
      }

      g.appendChild(nodeGroup);
    });

    // Cleanup function
    return () => {
      if (tooltip && tooltip.parentNode) {
        tooltip.parentNode.removeChild(tooltip);
      }
    };
  }, [data]);

  return (
    <div className={styles.skillTree}>
      <svg
        ref={svgRef}
        width="100%"
        height="600"
        viewBox={`0 0 1000 600`}
        preserveAspectRatio="xMidYMid meet"
      />
    </div>
  );
}
