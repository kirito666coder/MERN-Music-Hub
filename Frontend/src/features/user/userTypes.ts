import { createAsyncThunk } from "@reduxjs/toolkit";
import { GetUserApi } from "../../api/UserApi";


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