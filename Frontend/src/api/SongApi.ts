import type { SongFormData } from "@/types/user";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export const AddSongApi = async (song: SongFormData): Promise<SongFormData | null> => {
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
    if (song.audioFile) {
      formData.append("audioFile", song.audioFile);
    }

    if (song.imageFile) {
      formData.append("imageFile", song.imageFile);
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
