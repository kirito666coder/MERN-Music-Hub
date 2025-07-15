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

export const CreateArtisApi = async (formDataToSend:CreateArtistPayload):Promise<Artist | null>=>{
    try {
        const res = await api.post('/api/artist/create',formDataToSend)
        console.log(res.data)
        return res.data;
    } catch (error) {
        return null
    }
}