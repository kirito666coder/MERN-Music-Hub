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
  title: string;
  artist: string;
  album: string;
  genre: string;
  language: string;
  releaseDate: string;
  lyrics: string;
  description: string;
  tags: string;
  isPublic: boolean;
  mood: string;
}