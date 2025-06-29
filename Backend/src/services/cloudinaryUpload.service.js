import cloudinary from "../configs/cloudinary/cloudinary.config.js";

const bufferToDataURL = (fileBuffer,mimetype) =>{
  const base64 = fileBuffer.toString('base64');
  return `data:${mimetype};base64,${base64}`
}

export const audioUpload = ()=>{
     const audioDataUrl = bufferToDataURL(audioFile.buffer,audioFile.mimetype);
      const audioUpload = await cloudinary.uploader.upload(audioDataUrl,{
        resource_type:'video',
        folder:'songs/audio'
      })
}

export const imageUpload = ()=>{

}