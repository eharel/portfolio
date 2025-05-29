// Social Media Links
export const SOCIAL_LINKS = {
  GITHUB: {
    url: "https://github.com/eharel",
    label: "GitHub Profile",
    icon: "FaGithub", // If you're using react-icons/fa
  },
  LINKEDIN: {
    url: "https://linkedin.com/in/eliharel",
    label: "LinkedIn Profile",
    icon: "FaLinkedin",
  },
  GOODREADS: {
    url: "https://www.goodreads.com/eliharel",
    label: "Goodreads Profile",
    icon: "FaGoodreads",
  },
} as const;

// Type for social media platform keys
export type SocialPlatform = keyof typeof SOCIAL_LINKS;
