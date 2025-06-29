import { audioUpload, imageUpload } from "../services/cloudinaryUpload.service.js";

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
      console.log(userId)

     } catch (error) {
        res.status(500).json({ message: "Something went wrong", error })
     }
};
