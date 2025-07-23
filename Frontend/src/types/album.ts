import type { Artist } from "./artist";

export interface Album {
    _id: string;
    title: string;
    artistId: Artist;
    coverUrl: string;
    description: string;
    releaseDate: string;
    genres: string[];
    songs: string[]; 
    createdAt: string;
  }
  
  export interface ApiError {
    error: true;
    message: string;
  }
  