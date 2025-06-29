
const bufferToDataURL = (fileBuffer,mimetype) =>{
  const base64 = fileBuffer.toString('base64');
  return `data:${mimetype};base64,${base64}`
}

// src/controllers/song.controller.js
export const AddSongController = (req, res) => {
  console.log("📝 Form Fields:", req.body);
  console.log("🎧 Audio File:", req.files?.["audioFile"]?.[0]);
  console.log("🖼️ Image File:", req.files?.["imageFile"]?.[0]);

  res.status(200).json({ message: "File and form received!" });
};
