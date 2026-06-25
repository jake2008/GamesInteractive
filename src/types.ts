export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription?: string;
  imageUrl: string;
  color: string;
  youtubeId?: string;
  awards?: string[];
  stats?: { label: string; value: string }[];
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export interface EthosPoint {
  id: string;
  title: string;
  description: string;
  iconName: string;
  color: string;
}
