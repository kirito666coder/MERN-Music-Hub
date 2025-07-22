import { FindArtistService } from "../services/artist.service.js";
import { audioUpload, getSongUrl, imageUpload } from "../services/cloudinaryUpload.service.js";
import { AddSong, findSong, getAllSongs } from "../services/songAdd.service.js";

export const AddSongController = async (req, res) => {
     try {
      
       const audioUrl = req.files.audioUrl?.[0];
       const coverUrl = req.files.coverUrl?.[0];
       
       if(!audioUrl || !coverUrl){
         return res.status(400).json({message:"Audio and image files are required."})
        }
        
        
        const user = req.user;
        const userId = user._id;
        
        const data = req.body;
        
        console.log(data.artist)

        const isValidArtistId = await FindArtistService({artist:data.artist})

        console.log(isValidArtistId)
        

      // const songUrl = await audioUpload(audioUrl)
      // const imageUrl = await imageUpload(coverUrl)
       
      // const song = await AddSong({userId, data, songUrl, imageUrl})
     
     res.status(201).json()

     } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
     }
};

export const GetAllSongControllere = async (req,res) =>{
  try {
    const songs = await getAllSongs()
    
   res.status(200).json(songs)
  } catch (error) {
    res.status(500).json({message:"Internal server Error",error})
  } 
}


export const GetStreamSongController = async (req,res)=>{
  try {
    
    const {songId} = req.params;
   
    const song = await findSong({songId})
    
    const songurl = await getSongUrl({song})
    
    if(!songurl){
      return res.status(400).json({message:"not find song url"})
    }

    res.status(200).json({songurl})
    
  } catch (error) {
    res.status(500).json({message:"Internal server Error",error})
  }
}