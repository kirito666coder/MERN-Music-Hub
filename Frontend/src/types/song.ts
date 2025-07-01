

export interface SongFormData {
  _id:string;
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
  audioFile: File | null;
 coverUrl: File | null;
}