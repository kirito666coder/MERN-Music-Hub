import cloudinary from "../configs/cloudinary/cloudinary.config.js";


const bufferToDataURL = (fileBuffer,mimetype) =>{
  const base64 = fileBuffer.toString('base64');
  return `data:${mimetype};base64,${base64}`
}

export const audioUpload = async(audioFile)=>{
     const audioDataUrl = bufferToDataURL(audioFile.buffer,audioFile.mimetype);
      const audioUpload = await cloudinary.uploader.upload(audioDataUrl,{
        resource_type:'video',
        folder:'songs/audio',
        type:"authenticated",
      })
      return audioUpload.public_id;
}

export const imageUpload = async(imageFile)=>{
 const imageDataUrl = bufferToDataURL(imageFile.buffer,imageFile.mimetype);
      const imageUpload = await cloudinary.uploader.upload(imageDataUrl,{
        resource_type:"image",
        folder:"songs/image"
      })

      return imageUpload.secure_url;
}


export const getSongUrl = ({song})=>{
  const signedUrl = cloudinary.url(song.audioUrl,{
    type:"authenticated",
    sign_url:true,
    expires_at: Math.floor(Date.now()/1000) + 60,
    resource_type:"video",
    secure:true,
  })
  return signedUrl;
}