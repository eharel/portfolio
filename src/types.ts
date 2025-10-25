/**
 * Status of a project in its lifecycle
 */
export type ProjectStatus =
  | "In Development"
  | "Completed"
  | "In Production"
  | "Ongoing"
  | "Archived";

/**
 * Category classification of a project
 */
export type ProjectCategory =
  | "Mobile App"
  | "Web App"
  | "Full-Stack"
  | "Backend Tool"
  | "Frontend";

/**
 * Project data structure representing a portfolio project
 *
 * @property id - Unique identifier for the project
 * @property title - Display name of the project
 * @property description - Full HTML description with detailed information about the project
 * @property shortDescription - Plain text summary, 1-2 sentences (~100-150 characters)
 * @property status - Current lifecycle stage of the project
 * @property category - Type/category of the project
 * @property gitHubLink - URL to the project's GitHub repository
 * @property liveLink - URL to the live/deployed version (empty string if not available)
 * @property technologies - Array of technologies, frameworks, and tools used
 * @property image - Path to the project's representative image
 */
export interface Project {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  status: ProjectStatus;
  category: ProjectCategory;
  gitHubLink: string;
  liveLink: string;
  technologies: string[];
  image: string;
}
