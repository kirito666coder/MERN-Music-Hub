import axios from "axios"

const api = axios.create({
    baseURL: import.meta.env.VITE.BACKEND_URL,
    withCredentials:true,
})

export const GetUserApi = async ()=>{
      
    const res = await api.get("/api/auth/profile")

    return res;
}