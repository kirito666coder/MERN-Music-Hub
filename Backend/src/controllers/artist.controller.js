import ArtistModel from "../Models/artist.model.js";
import { CreateArtistService, IsArtistTrue } from "../services/artist.service.js";
import { imageUpload } from "../services/cloudinaryUpload.service.js";


export const SearchArtistController = async (req,res) =>{
    try {
        const search = req.query.search;
        
        if(!search || search.trim() === ''){
            return res.status(400).json({message:"missing search query"});
        }

        const artists = await ArtistModel.find({
            name:{$regex:search,$options:'i'}
        })
        .limit(10)
        .select('name _id photoUrl');
        
        res.json({artists})

    } catch (error) {
        console.error("Error searching artists:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export const CreateArtistController = async (req,res) =>{
    try {
        const data = req.body;
        const photo = req.files.photo?.[0];
        const user = req.user;
        
        const artistPhoto = await imageUpload(photo)

        const finalPhoto = artistPhoto?artistPhoto:user.image;

        const artist = await CreateArtistService({data,finalPhoto,userId:user._id})

        console.log(artist)

        if(!artist){
            return res.status(400).json({message:"Fall to make artist try again.."})
        }

        const makeIsArtistTrue = await IsArtistTrue({userId:user._id})

        console.log(makeIsArtistTrue)
        
        res.status(200).json({artist})
    } catch (error) {
        console.error("Error searching artists:", error);
        res.status(500).json({ message: "Server error" });
    }
}