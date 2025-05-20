export interface PlannedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: "planned" | "in-progress";
  plannedFeatures: string[];
  estimatedCompletion?: string;
}
