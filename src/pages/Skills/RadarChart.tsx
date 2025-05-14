import {
  Radar,
  RadarChart as RechartsRadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";
import type { TooltipProps } from "recharts";
import styles from "./Skills.module.css";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  name: string;
  skills: Skill[];
}

interface RadarChartProps {
  data: Record<string, SkillCategory>;
}

interface CustomTooltipProps extends TooltipProps<number, string> {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      subject: string;
      value: number;
      category: string;
    };
  }>;
}

// Custom tooltip content component
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className={styles.skillTooltip}>
        <p>{`${payload[0].payload.subject}`}</p>
        <p>{`Level: ${payload[0].value}`}</p>
        <p
          className={styles.categoryLabel}
        >{`${payload[0].payload.category}`}</p>
      </div>
    );
  }
  return null;
};

export default function RadarChart({ data }: RadarChartProps) {
  // Transform the data for the radar chart
  const chartData = Object.values(data).flatMap((category) =>
    category.skills.map((skill) => ({
      subject: skill.name,
      value: skill.level,
      category: category.name,
    }))
  );

  return (
    <div className={styles.radarChart}>
      <ResponsiveContainer width="100%" height={500}>
        <RechartsRadarChart
          cx="50%"
          cy="50%"
          outerRadius="80%"
          data={chartData}
        >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Tooltip content={<CustomTooltip />} />
          <Radar
            name="Skills"
            dataKey="value"
            stroke="var(--accent)"
            fill="var(--accent)"
            fillOpacity={0.5}
          />
        </RechartsRadarChart>
      </ResponsiveContainer>
    </div>
  );
}
