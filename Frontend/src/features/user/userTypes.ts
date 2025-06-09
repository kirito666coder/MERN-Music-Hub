import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserApi } from "../../api/UserApi";
import type { User } from "../../types/user";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkApi) =>{
        try{
          const user = await GetUserApi()
          return user
        }catch(error:any){
            return thunkApi.rejectWithValue(error.response?.data|| 'Failed to fetch User')
        }
    }
)

interface UserState {
    user:User|null,
    loading:boolean,
    error:string|null
}

const initialState:UserState={
    user:null,
    loading:false,
    error:null,
}
