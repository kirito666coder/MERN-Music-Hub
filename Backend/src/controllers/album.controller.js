import { CreateAlbumService, findIsAlbumNameisTaken, yourAllAlbumsService } from "../services/album.service.js";
import { FindArtistService, FindArtistWithArtistId } from "../services/artist.service.js";
import { imageUpload } from "../services/cloudinaryUpload.service.js";



export const createAlbumController = async (req, res) => {
    try {
        const data = req.body;
        const cover = req.files.cover?.[0]

        const user = req.user;

        const artistId = await FindArtistService({ userId: user._id })

        const existingAlbum = await findIsAlbumNameisTaken({ data, artistId })

        if (existingAlbum) {
            return res.status(400).json({ message: "An album with this name already exists" })
        }
        let coverUrl;
       if(cover){
           coverUrl = await imageUpload(cover)
        }

        if (!data) {
            return res.status(400).json({ message: "data is Empty! Please try again" })
        }

        const album = await CreateAlbumService({ data, artistId, coverUrl })

        res.status(201).json({ album })

    } catch (error) {
        res.status(500).json({ message: "Internal server error", error })
    }
}

export const getYourAlbumsController = async (req,res) =>{
    try {

        const user = req.user;

        if(!user){
            return res.status(400).json({message:"user not find"})
        }

        const artist = await FindArtistWithArtistId({userId:user._id})

        const albums = await yourAllAlbumsService({artistId:artist._id})

        res.status(200).json({albums})
        
    } catch (error) {
        req.status(500).json({message:"Interal server error"})
    }
}