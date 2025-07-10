import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface songStats{
    audioFile:string|null;
    title:string|null;
    artist:string|null;
    coverImage:string|null;
    isPlaying:boolean;
    currentTime:number;
    duration:number;
    volume:number;
}

const initialState:songStats={
    audioFile:null,
    title:null,
    artist:null,
    coverImage:null,
    isPlaying:false,
    currentTime:0,
    duration:0,
    volume:50,
};


const songSlice = createSlice({
    name:"song",
    initialState,
    reducers:{
        setSong:(state,action:PayloadAction<string | null | undefined>)=>{
            state.audioFile = action.payload ?? null;
            state.currentTime = 0;
            state.duration = 0;
            state.isPlaying = false;
        },
        setSongDetails:(state,action:PayloadAction<{title:string |null;artist:string|null;coverImage:string|null}>)=>{
            state.title = action.payload.title;
            state.artist = action.payload.artist;
            state.coverImage = action.payload.coverImage;
        },
        setVolume:(state,action:PayloadAction<number>)=>{
            state.volume = action.payload;
        },
        togglePlay:(state) =>{
            state.isPlaying = !state.isPlaying;
        },
        setIsPlaying:(state,action:PayloadAction<boolean>) =>{
            state.isPlaying = action.payload;
        },
        setCurrentTime:(state,action:PayloadAction<number>) =>{
            state.currentTime = action.payload;
        },
        setDuration:(state,action:PayloadAction<number>) =>{
            state.duration = action.payload;
        }
    }
})

export const {
    setSong,
    setSongDetails,
    togglePlay,
    setIsPlaying,
    setCurrentTime,
    setDuration,
    setVolume,
}= songSlice.actions;

export default songSlice.reducer;