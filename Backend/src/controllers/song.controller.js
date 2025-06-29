
export const AddSongController = async (req, res) => {
     try {
      const audioFile = req.files.audioFile?.[0];
      const imageFile = req.files.imageFile?.[0];

      if(!audioFile || !imageFile){
        return res.status(400).json({message:"Audio and image files are required."})
      }

      

      console.log(imageUpload.secure_url)
      console.log(audioUpload.secure_url)


     } catch (error) {
      
     }
};
