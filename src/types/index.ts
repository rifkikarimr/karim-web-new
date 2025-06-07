export interface Project {
  id: string;
  name: string;
  description: string;
  technologies: string[];
  outcome: string;
  link?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  responsibilities: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  status: 'earned' | 'placeholder';
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  snippet: string;
  readTime: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}