import type { MinimalSong} from "@/types/song";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface songStats {
    audioFile: string | null;
    title: string | null;
    artist: string | null;
    coverImage: string | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;

    queue: MinimalSong[];
    currentIndex: number;
    playingFrom: { type: "album"; albumId: string } | { type: "single" } | null;
}

const initialState: songStats = {
    audioFile: null,
    title: null,
    artist: null,
    coverImage: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 100,
    queue: [],
    currentIndex: 0,
    playingFrom: null,
};


const songSlice = createSlice({
    name: "song",
    initialState,
    reducers: {
        setSong: (state, action: PayloadAction<string | null | undefined>) => {
            state.audioFile = action.payload ?? null;
            state.currentTime = 0;
            state.duration = 0;
            state.isPlaying = false;
        },
        setSongDetails: (state, action: PayloadAction<{ title: string | null; artist: string | null; coverImage: string | null }>) => {
            state.title = action.payload.title;
            state.artist = action.payload.artist;
            state.coverImage = action.payload.coverImage;
        },
        setVolume: (state, action: PayloadAction<number>) => {
            state.volume = action.payload;
        },
        togglePlay: (state) => {
            state.isPlaying = !state.isPlaying;
        },
        setIsPlaying: (state, action: PayloadAction<boolean>) => {
            state.isPlaying = action.payload;
        },
        setCurrentTime: (state, action: PayloadAction<number>) => {
            state.currentTime = action.payload;
        },
        setDuration: (state, action: PayloadAction<number>) => {
            state.duration = action.payload;
        },
        setQueue: (state, action: PayloadAction<MinimalSong[]>) => {
            state.queue = action.payload;
        },
        setCurrentIndex: (state, action: PayloadAction<number>) => {
            state.currentIndex = action.payload;
        },
        setPlayingFrom: (state, action: PayloadAction<{ type: "album"; albumId: string } | { type: "single" } | null>) => {
            state.playingFrom = action.payload;
        },
        nextSong: (state) => {
            if (state.currentIndex < state.queue.length - 1) {
                state.currentIndex += 1;
            }
        },
        prevSong: (state) => {
            if (state.currentIndex > 0) {
                state.currentIndex -= 1;
            }
        },
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
    setQueue,
    setCurrentIndex,
    setPlayingFrom,
    nextSong,
    prevSong,
} = songSlice.actions;

export default songSlice.reducer;