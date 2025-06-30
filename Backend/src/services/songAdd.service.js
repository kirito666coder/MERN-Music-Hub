import mongoose from "mongoose";
import SongModel from "../Models/song.model.js";
import UserModel from "../Models/user.model.js"

export const AddSong = async ({ userId, data, audioUrl, imageUrl }) => {

    if (!userId || !data || !audioUrl || !imageUrl) {
        throw new Error("some fields are missing")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }

    const user = await UserModel.findById({ _id: userId })

    if (!user) {
        throw new Error("user not found")
    }

    const {
        title,
        artist,
        duration,
        album,
        genre,
        language,
        lyrics,
        description,
        releaseDate,
        tags,
        isPublic,
        visibility,
        mood,
    } = data;

    if (!title || !artist || !duration) {
        throw new Error("Title, artist, and duration are required");
    }

    const newSong = await SongModel.create({
        userId,
        title,
        artist,
        duration,
        album: album || 'Single',
        genre: genre || [],
        language: language || "Unknown",
        lyrics: lyrics || '',
        description: description || "",
        releaseDate: releaseDate || new Date(),
        audioUrl,
        coverUrl: imageUrl,
        tags: tags || [],
        isPublic: isPublic != undefined ? isPublic : true,
        visibility: visibility || "public",
        mood: mood || 'none',
    })

    return newSong;
}

export const getAllSongs = async ()=>{
    
}