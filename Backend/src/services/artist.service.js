import mongoose from "mongoose";
import ArtistModel from "../Models/artist.model.js";
import UserModel from "../Models/user.model.js";


export const CreateArtistService = async ({data,finalPhoto,userId})=>{
    
    if (!data||!finalPhoto||!userId) {
        throw new Error("some fields are missing")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }

    const user = await UserModel.findById({ _id: userId })

    if (!user) {
        throw new Error("user not found")
    }

    const artist = await ArtistModel.create({
        userId,
        name:data.name,
        bio:data.bio,
        photoUrl:finalPhoto,
        genres:data.genres,
        location:data.location
    })

    return artist;
}

export const IsArtistTrue = async ({userId})=>{

    if (!userId) {
        throw new Error("userId is missing")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }

    try {
        const updateUser = await UserModel.findByIdAndUpdate(
            userId,
            {isArtist:true},
            {new:true}
        );
        return updateUser;
    } catch (error) {
        throw new Error("Failed to update user as artist");
    }
}

export const FindArtistService = async ({userId})=>{

    if (!userId) {
        throw new Error("userId is missing")
    }
    
    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }
    
    try {
        const user = await ArtistModel.findOne({userId})
        
        return user;
    } catch (error) {
        throw new Error("Failed to get artist");
    }


}