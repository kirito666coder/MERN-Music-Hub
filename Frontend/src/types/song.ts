

export interface SongData {
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
  audioUrl: null |string;
  coverUrl: null |string;
  createdAt: string;
  likes: number;
  plays: number;
  downloads: number;
  userId: string;
  visibility: string;
}


export interface SongFormFields {
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
}
export interface SongFields {
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
  audioUrl: File | null;   // required
  coverUrl: File | null;   // required
}


