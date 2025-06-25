import type { SongFormData} from "@/types/user";
import axios from "axios";

const api = axios.create({
    baseURL:import.meta.env.VITE_BACKEND_URL,
    withCredentials:true,
})

type ApiResponse ={
  song:SongFormData
}

export const AddSongApi = async (): Promise<ApiResponse | null>=>{
     try{
         const res = await api.post<ApiResponse>('/api/song/addsong')
         const data = res?.data
         return data
        }catch(error){
            console.log(error)
            return null
        }
}