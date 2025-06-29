import cloudinary from "../configs/cloudinary/cloudinary.config.js";

const bufferToDataURL = (fileBuffer,mimetype) =>{
  const base64 = fileBuffer.toString('base64');
  return `data:${mimetype};base64,${base64}`
}

export const audioUpload = ()=>{
    
}

export const imageUpload = ()=>{

}