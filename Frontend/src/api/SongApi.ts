import type { SongFields, SongData } from "@/types/song";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export const AddSongApi = async (song: SongFields): Promise<SongFields | null> => {
  try {
    const formData = new FormData();

    // Append primitive fields
    formData.append("title", song.title);
    formData.append("artist", song.artist);
    formData.append("album", song.album);
    formData.append("language", song.language);
    formData.append("releaseDate", song.releaseDate);
    formData.append("lyrics", song.lyrics);
    formData.append("description", song.description);
    formData.append("isPublic", String(song.isPublic));
    formData.append("mood", song.mood);
    formData.append("duration", String(song.duration));

    // Append genre and tags arrays
    song.genre.forEach((g) => formData.append("genre", g));
    song.tags.forEach((t) => formData.append("tags", t));

    // Append files
    if (song.audioUrl) {
      formData.append("audioUrl", song.audioUrl);
    }

    if (song.coverUrl) {
      formData.append("coverUrl", song.coverUrl);
    }

    const res = await api.post("/api/song/addsong", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return res.data;
  } catch (error) {
    console.error("Upload failed:", error);
    return null;
  }
};


export const GetAllSongApi = async (): Promise<SongData[] | null> => {
  try {
    const res = await api.get("/api/song/getAllSongs")
    return res.data
  } catch (error) {
    console.log("Not Get any songs", error)
    return null;
  }
}


interface SongStreamResponse {
  songurl: string;
}


export const GetSong = async ({ songId }: { songId: string }): Promise<SongStreamResponse | null> => {
  try {
    const res = await api.get<SongStreamResponse>(`/api/song/stream/${songId}`)
    return res.data
  } catch (error) {
    console.log("Not Get any song Url", error)
    return null;
  }
}

interface artistSearch {
  _id: string,
  name: string,
}

export const SearchArtistApi = async (value:string):Promise<artistSearch[]|null> => {
  try {
    const res = await api.get(`/api/artists?search=${encodeURIComponent(value)}`)
    console.log(res.data)
    return res.data;
  } catch (error) {
    return null;
  }
}