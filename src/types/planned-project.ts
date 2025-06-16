export interface PlannedProject {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  status: string;
  plannedFeatures: string[];
  estimatedCompletion: string;
  gitHubLink?: string;
}
