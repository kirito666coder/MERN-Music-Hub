import axios from "axios"
import type { User } from "../types/user";

const api = axios.create({
    baseURL: import.meta.env.VITE_BACKEND_URL,
    withCredentials: true,
})

type ApiResponse = {
    user:User
}

export const GetUserApi = async (): Promise<User | null> => {
    try {
        const res = await api.get<ApiResponse>("/api/auth/profile")
        const data = await res.data?.user
        return data;
    } catch (error) {
        console.log("Error fetching user:", error)
        return null;
    }
}