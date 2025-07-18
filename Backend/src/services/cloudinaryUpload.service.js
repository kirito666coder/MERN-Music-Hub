import cloudinary from "../configs/cloudinary/cloudinary.config.js";
import streamifier from "streamifier";

export const audioUpload = async (audioFile) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: 'video',
        folder: 'songs/audio',
        type: "authenticated",
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.public_id);
      }
    );
    streamifier.createReadStream(audioFile.buffer).pipe(uploadStream);
  });
};

export const imageUpload = async (imageFile) => {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        resource_type: "image",
        folder: "songs/image"
      },
      (error, result) => {
        if (error) return reject(error);
        resolve(result.secure_url);
      }
    );
    streamifier.createReadStream(imageFile.buffer).pipe(uploadStream);
  });
};

export const getSongUrl = ({song})=>{
  console.log(song)
  const signedUrl = cloudinary.url(song.audioUrl,{
    type:"authenticated",
    sign_url:true,
    expires_at: Math.floor(Date.now()/1000) + 300,
    resource_type:"video",
    secure:true,
  })
  return signedUrl;
}