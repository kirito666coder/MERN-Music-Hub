import type { Artist } from "./artist";

export interface PopulatedSong {
  _id: string;
  title: string;
  coverUrl: string;
  likes: number;
  plays: number;
}

export interface Album {
    _id: string;
    title: string;
    artistId: Artist;
    coverUrl: string;
    description: string;
    releaseDate: string;
    genres: string[];
    songs: PopulatedSong[]; 
    createdAt: string;
  }
  
  export interface ApiError {
    error: true;
    message: string;
  }
  