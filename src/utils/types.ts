export interface Bio {
  content: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  image: { url: string };
  dates: string[];
  type: string;
  bookingUrl: string;
  isTIcketAvailable: boolean;
  location: string;
}

export interface YoutubeVideo {
    title: string;
    videoUrl: string;
    displayOrder: number;
}

export interface Media {
    id: string;
    url: string;
    height: number;
}

export interface Article {
    id: string;
    author: string;
    title: string;
    category: ('cinema' | 'teatro' | 'televisione' | 'evento')[];
    content: string;
    image: { url: string };
    publisher: string;
    subtitle: string;
    createdAt: Date;
    articleUrl: string;
}

export interface Curriculum {
    experience: string;
    prizes: { html: string };
    studies: { html: string };
}

export interface Experience {
    cinema: ExperienceEntry[];
    teather: ExperienceEntry[];
    television: ExperienceEntry[];
    advertise: ExperienceEntry[];
}

export interface ExperienceEntry {
    description: string;
    role: string;
    year: number;
}

export interface Showreel {
    title: string;
    url: string;
}