export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tech: string[];
  status: "LIVE" | "WIP" | "ARCHIVED";
  image: string;
  imagePosition?: string;
  liveUrl: string | null;
  githubUrl: string | null;
  caseStudy: string | null;
  year: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  label: string;
}

export interface Skill {
  name: string;
  icon?: string;
}
