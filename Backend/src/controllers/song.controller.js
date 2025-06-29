
export const AddSongController = async (req, res) => {
     try {
      const audioFile = req.files.audioFile?.[0];
      const imageFile = req.files.imageFile?.[0];

      if(!audioFile || !imageFile){
        return res.status(400).json({message:"Audio and image files are required."})
      }

      const audioDataUrl = bufferToDataURL(audioFile.buffer,audioFile.mimetype);
      const audioUpload = await cloudinary.uploader.upload(audioDataUrl,{
        resource_type:'video',
        folder:'songs/audio'
      })

      const imageDataUrl = bufferToDataURL(imageFile.buffer,imageFile.mimetype);
      const imageUpload = await cloudinary.uploader.upload(imageDataUrl,{
        resource_type:"image",
        folder:"songs/image"
      })


      console.log(imageUpload.secure_url)
      console.log(audioUpload.secure_url)


     } catch (error) {
      
     }
};
