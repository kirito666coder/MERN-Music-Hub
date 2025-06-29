import cloudinary from "../configs/cloudinary/cloudinary.config.js";

const bufferToDataURL = (fileBuffer,mimetype) =>{
  const base64 = fileBuffer.toString('base64');
  return `data:${mimetype};base64,${base64}`
}

export const audioUpload = async(audioFile)=>{
     const audioDataUrl = bufferToDataURL(audioFile.buffer,audioFile.mimetype);
      const audioUpload = await cloudinary.uploader.upload(audioDataUrl,{
        resource_type:'video',
        folder:'songs/audio'
      })
      return audioUpload.secure_url;
}

export const imageUpload = async(imageFile)=>{
 const imageDataUrl = bufferToDataURL(imageFile.buffer,imageFile.mimetype);
      const imageUpload = await cloudinary.uploader.upload(imageDataUrl,{
        resource_type:"image",
        folder:"songs/image"
      })

      return imageUpload.secure_url;
}