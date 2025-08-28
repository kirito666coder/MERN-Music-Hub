import { imageUpload } from "../services/cloudinaryUpload.service.js";
import { editUserService } from "../services/userCreate.service.js";


export const EditUserController = async (req,res)=>{
    try {
        const { username, bio } = req.body;
        const userId = req.user.id; 
        
        let updateData = {};
    
        if (username) updateData.username = username;
        if (bio) updateData.bio = bio;
    
       
        if (req.file) {
          const profileImageUrl = await imageUpload(req.file);
          updateData.profileImage = profileImageUrl;
        }
    
        const updatedUser = await editUserService({userId,updateData})
    
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.json({updatedUser});
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})
    }
  }