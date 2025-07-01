import { audioUpload, imageUpload } from "../services/cloudinaryUpload.service.js";
import { AddSong, getAllSongs } from "../services/songAdd.service.js";

export const AddSongController = async (req, res) => {
     try {
      const audioFile = req.files.audioFile?.[0];
      const imageFile = req.files.imageFile?.[0];

      if(!audioFile || !imageFile){
        return res.status(400).json({message:"Audio and image files are required."})
      }

      const audioUrl = await audioUpload(audioFile)
      const imageUrl = await imageUpload(imageFile)

      const user = req.user;
      const userId = user._id;

      const data = req.body;


      const song = await AddSong({userId, data, audioUrl, imageUrl})

     res.status(201).json(song)

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
    const {songId} = req.params;

    const song = await findSong(songId)
}