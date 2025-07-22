
export interface Album {
    _id: string;
    title: string;
    artistId: string;
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
  