export type ResumeEntry = {
  id: number;
  created_at: string;
  section: string;
  title: string;
  date: string;
  organization: string;
  textContent: string;
  descriptor: string;
  github: string;
  website: string;
  img: string;
  video: string;
};

export type Resume = ResumeEntry[];
