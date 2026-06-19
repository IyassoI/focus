export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  iconName: string; // Used to dynamically map Lucide icons
}

export interface ProcessStep {
  step: string; // e.g., "Process 01"
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  partnership?: string; // e.g., "(Granty Food)"
}

export interface SuccessStory {
  id: string;
  title: string;
  location: string;
  description: string;
  imageUrl: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  experience: string; // e.g., "24 years of experience"
  contactUrl: string; // e.g., "linkedin.com/in/..." or email
  type: 'linkedin' | 'email';
  imageUrl?: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  website?: string;
  address: string;
}
