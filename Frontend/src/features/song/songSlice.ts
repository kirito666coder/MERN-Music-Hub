import { createSlice,PayloadAction } from "@reduxjs/toolkit";

interface songStats{
    audioFile:string|null;
    isPlaying:boolean;
    currentTime:number;
    duration:number;
}

const initialState:songStats={
    audioFile:null,
    isPlaying:false,
    currentTime:0,
    duration:0,
};


const songSlice = createSlice({
    name:"song",
    initialState,
    reducers:{
        setSong:(state,action:PayloadAction<string>)=>{
            state.audioFile = action.payload;
            state.currentTime = 0;
            state.duration = 0;
            state.isPlaying = false;
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
    togglePlay,
    setIsPlaying,
    setCurrentTime,
    setDuration,
}= songSlice.actions;

export default songSlice.reducer;