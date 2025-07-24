import type { Artist } from "./artist";
import type { SongData } from "./song";

export interface Album {
    _id: string;
    title: string;
    artistId: Artist;
    coverUrl: string;
    description: string;
    releaseDate: string;
    genres: string[];
    songs: SongData[]; 
    createdAt: string;
  }
  
  export interface ApiError {
    error: true;
    message: string;
  }
  