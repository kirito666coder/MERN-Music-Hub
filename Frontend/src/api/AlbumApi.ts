import type { Album } from "@/types/song";
import api from "./util/Api";
import type { ApiError } from "@/types/album";

export const CreateAlbumApi = async (formData:FormData):Promise<Album|ApiError> =>{
    try {
        const res = await api.post('/api/album/create',formData)
        console.log(res)
        return res.data as Album
    } catch (error:any) {
        if (error.response && error.response.data) {
            return { error: true, message: error.response.data.message };
          }
          return { error: true, message: 'Something went wrong' };
    }
}

export const getAllAlbumsApi = async ():Promise<Album|ApiError> =>{
    try {
        const res = await api.get('/api/album/youralbum')
        console.log(res)
        return res.data as Album
    } catch (error:any) {
        if (error.response && error.response.data) {
            return { error: true, message: error.response.data.message };
          }
          return { error: true, message: 'Something went wrong' };
    }
}

