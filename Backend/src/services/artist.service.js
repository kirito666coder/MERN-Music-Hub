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