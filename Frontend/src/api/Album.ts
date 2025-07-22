import api from "./util/Api";

export const CreateAlbumApi = async (formData:FormData) =>{
    try {
        const res = await api.post('/api/album/create',formData)
        console.log(res)
        return res
    } catch (error) {
        return error;
    }
}