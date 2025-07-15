import type { Artist, artistSearch, CreateArtistPayload } from "@/types/artist";
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});
  
  export const SearchArtistApi = async (value:string):Promise<artistSearch[]|null> => {
    try {
      const res = await api.get(`/api/artist/search?search=${encodeURIComponent(value)}`)
      console.log(res.data)
      return res.data;
    } catch (error) {
      return null;
    }
  }

  export const CreateArtisApi = async (payload: CreateArtistPayload): Promise<Artist | null> => {
    try {
      const formData = new FormData()
      formData.append('name', payload.name)
      formData.append('bio', payload.bio)
      formData.append('genres', JSON.stringify(payload.genres))
      formData.append('location', payload.location)
      if (payload.photo) formData.append('photo', payload.photo)
  
      const res = await api.post('/api/artist/create', formData)
      return res.data
    } catch (error) {
      console.error('API error:', error)
      return null
    }
  }