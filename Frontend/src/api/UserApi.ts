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
    profileImage?: File; // Use File instead of string
  }
  
  export const EditUserApi = async ({ changedData }: { changedData: ChangedData }): Promise<User | null> => {
    try {
      const formData = new FormData();
  
      if (changedData.username) formData.append("username", changedData.username);
      if (changedData.bio) formData.append("bio", changedData.bio);
      if (changedData.profileImage) formData.append("profileImage", changedData.profileImage);
      console.log(formData)
      const res = await api.put("api/user/edituser", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
  
      return res.data;
    } catch (error) {
      console.log("Error fetching user:", error);
      return null;
    }
  };
  