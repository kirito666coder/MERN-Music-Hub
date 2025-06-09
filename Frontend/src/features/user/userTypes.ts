import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
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

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        logout:(state) =>{
            state.user = null
        },
        setUser:(state,action:PayloadAction<User>)=>{
         state.user = action.payload
        },
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.loading = true
            state.error = null
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.loading = false
            state.user= action.payload
        })
        .addCase(fetchUser.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export const {logout,setUser} = userSlice.actions
export default userSlice.reducer