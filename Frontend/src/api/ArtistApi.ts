import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

interface artistSearch {
    _id: string,
    name: string,
  }
  
  export const SearchArtistApi = async (value:string):Promise<artistSearch[]|null> => {
    try {
      const res = await api.get(`/api/artist/search?search=${encodeURIComponent(value)}`)
      console.log(res.data)
      return res.data;
    } catch (error) {
      return null;
    }
  }

export const CreateArtisApi = async (formDataToSend)=>{
    try {
        const res = await api.post('/api/artist/create',formDataToSend)
        console.log(res.data)
        return res.data;
    } catch (error) {
        return null
    }
}