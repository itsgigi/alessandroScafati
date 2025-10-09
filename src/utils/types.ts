export interface Bio {
  content: string;
}

export interface Event {
  id: string;
  title: string;
  description: string;
  images: { url: string }[];
  date: Date;
  type: string;
  bookingUrl: string;
}

export interface YoutubeVideo {
    youtubeUrl: string;
    videoUrl: string;
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
    category: 'cinema' | 'teatro' | 'televisione' | 'evento';
    content: string;
    image: { url: string };
    publisher: string;
    subtitle: string;
    createdAt: Date;
}