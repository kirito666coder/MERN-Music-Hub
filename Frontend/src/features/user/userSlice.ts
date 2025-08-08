import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { GetUserApi } from "../../api/UserApi";
import type { User } from "@/types/user";
import type { AxiosError } from "axios";


export const fetchUser = createAsyncThunk(
    'user/fetchUser',
    async (_, thunkApi) =>{
        try{
          const user = await GetUserApi()
          return user
        }catch(error:unknown){
            const err = error as AxiosError<{message?:string}>;
            return thunkApi.rejectWithValue(err.response?.data|| 'Failed to fetch User')
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
    loading:true,
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
        updateIsArtist:(state,action:PayloadAction<boolean>)=>{
            if (state.user) {
                state.user.isArtist = action.payload;
              }
        },
        updateLikedSongs: (state, action) => {
            const { songId, Liked } = action.payload;
            if (!state.user) return
            if (Liked) {
              state.user.likeSongs.push(songId);
            } else {
              state.user.likeSongs = state.user.likeSongs.filter(id => id !== songId);
            }
          }
          
    },
    extraReducers:(builder) =>{
        builder
        .addCase(fetchUser.pending, (state)=>{
            state.error = null
            state.loading = true
        })
        .addCase(fetchUser.fulfilled, (state,action)=>{
            state.user= action.payload
            state.loading = false
        })
        .addCase(fetchUser.rejected, (state,action)=>{
            state.loading = false
            state.error = action.payload as string
        })
    }
})

export const {logout,setUser,updateIsArtist} = userSlice.actions
export default userSlice.reducer