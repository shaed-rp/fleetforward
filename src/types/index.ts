export interface Stat {
  value: string;
  label: string;
}

export interface Topic {
  id: string;
  title: string;
  icon: string;
  description: string;
  details: string[];
}

export interface Panelist {
  name: string;
  role: string;
  initials: string;
  color: string;
  description: string;
}

export interface Takeaway {
  title: string;
  description: string;
}

export interface AppState {
  activeSection: string | null;
}
