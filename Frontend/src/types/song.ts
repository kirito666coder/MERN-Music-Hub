

export interface SongFormData {
  _id: string;
  title: string;
  artist: string;
  album: string;
  genre: string[];
  language: string;
  releaseDate: string;
  lyrics: string;
  description: string;
  tags: string[];
  isPublic: boolean;
  mood: string;
  duration: number;
  audioUrl: File | null |string;
  coverUrl: File | null |string;
  createdAt: string;
  likes: number;
  plays: number;
  downloads: number;
  userId: string;
  visibility: string;
}

