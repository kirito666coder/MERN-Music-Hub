export type User = {
    _id: string;
    name: string;
    email: string;
    image: string;
    githubId?: string;
    googleId?: string;
    facebookId?: string;
};



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
  imageFile: File | null;
}
