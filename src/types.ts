export interface ServiceItem {
  id: number;
  icon: string;
  title: string;
  accent: string;
  description: string;
  items: string[];
}

export interface ProcessStep {
  title: string;
  desc: string;
  icon: string;
}

export interface Course {
  id: number;
  title: string;
  duration: string;
  projects: string;
  difficulty: string;
  icon: string;
  color: string;
  topics: string[];
  desc: string;
}

export interface StudentReview {
  name: string;
  role: string;
  text: string;
  company: string;
}

export interface Project {
  id: number;
  category: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  details: string;
  accent: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  quote: string;
  avatar: string;
  rating: number;
  color: string;
}

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  color: string;
  icon: string;
}

export interface SkillItem {
  name: string;
  level: number;
  color: string;
}
