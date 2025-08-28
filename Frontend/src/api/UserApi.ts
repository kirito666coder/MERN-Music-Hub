import type { User } from "../types/user";
import api from "./util/Api";


type ApiResponse = {
    user:User
}

export const GetUserApi = async (): Promise<User | null> => {
    try {
        const res = await api.get<ApiResponse>("/api/auth/profile")
        const data = await res.data?.user
        console.log(data)
        return data;
    } catch (error) {
        console.log("Error fetching user:", error)
        return null;
    }
}
interface ChangedData {
    username?: string;
    bio?: string;
    profileImage?: string;
  }
export const EditUserApi = async ({changedata}:{changedata:ChangedData}):Promise<User|null>=>{
    try {
        const res = await api.put('api/user/edituser',changedata)
        return res.data
    } catch (error) {
        console.log("Error fetching user:", error)
        return null;
    }
}