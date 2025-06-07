import axios from "axios"
import type { User } from "../types/user";

const api = axios.create({
    baseURL: import.meta.env.VITE.BACKEND_URL,
    withCredentials: true,
})

export const GetUserApi = async (): Promise<User | null> => {
    try {
        const res = await api.get<User>("/api/auth/profile")
        return res.data;
    } catch (error) {
        console.log("Error fetching user:", error)
        return null;
    }
}