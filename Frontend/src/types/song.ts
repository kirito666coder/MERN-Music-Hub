export interface Artist {
  _id: string;
  userId: string;               
  name: string;
  bio: string;
  photoUrl: string;
  genres: string[];
  socialLinks: { [key: string]: string };
  location: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Album {
  _id: string;
  title: string;
  artist: string;            
  coverUrl: string;
  description: string;
  releaseDate: string;
  genres: string[];
  songs: string[];             
  createdAt: string;
  updatedAt: string;
}



export interface SongData {
  _id: string;
  title: string;
  artist: Artist;
  album: Album;
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


