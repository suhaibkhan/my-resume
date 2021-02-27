export interface Skill {
  label: string;
  rating: number;
}

export interface SkillSet {
  category: string;
  skills: Partial<Skill>[];
}

export interface Education {
  degree: string;
  school: string;
  dateRange: string;
  details: string;
}

export interface Experience {
  company: string;
  location: string;
  role: string;
  dateRange: string;
  contributions: string[];
}

export interface PersonalDetail {
  label: string;
  value: string;
}

export interface LatestTemplateData {
  docTitle: string;
  name: string;
  currentLocation: string;
  contactNumber: string;
  email: string;
  skype: string;
  github: string;
  linkedin: string;
  summary: string;
  skillSet: SkillSet[];
  education: Partial<Education>[];
  experience: Partial<Experience>[];
  personalDetails: PersonalDetail[];
}
