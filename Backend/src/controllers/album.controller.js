import { CreateAlbumService } from "../services/album.service.js";
import { FindArtistService } from "../services/artist.service.js";



export const createAlbumController = async (req, res) => {
    try {
        const data = req.body;

        if(!data){
            return res.status(400).json({message:"data is Empty! Please try again"})
        }

        const user = req.user;

        const artistId = await FindArtistService({userId:user._id})


        const album = await CreateAlbumService({data,artistId})

        res.status(200).json({album})

    } catch (error) {
    res.status(500).json({message:"Internal server error",error})
    }
}