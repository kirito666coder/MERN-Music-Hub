import mongoose from "mongoose";
import AlbumModel from "../Models/album.model.js";


export const CreateAlbumService = async ({data,artistId,coverUrl}) =>{

    if (!artistId) {
        throw new Error("ArtistID is missing")
    }
    if (!data) {
        throw new Error("data is missing")
    }
    
    if (!mongoose.Types.ObjectId.isValid(artistId)) {
        throw new Error("Invalid user ID");
    }

    try {
        const album = await AlbumModel.create({
            title:data.title,
            artistId,
            coverUrl,
            description:data.description,
            genres:data.genres,
        })
        
        console.log(album,'data coming')
        return album;
        
    } catch (error) {
        throw new Error ('Failled to create album ')
    }
}

export const findIsAlbumNameisTaken = async ({data,artistId})=>{
    try {
       const album = await AlbumModel.findOne({artistId,title:data.title.trim()})
       return album;
    } catch (error) {
        throw new Error ('Failled to create album')
    }
}

export const yourAllAlbumsService = async ({userId})=>{
    
}