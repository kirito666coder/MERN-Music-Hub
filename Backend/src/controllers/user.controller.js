import { imageUpload } from "../services/cloudinaryUpload.service.js";
import { editUserService } from "../services/userCreate.service.js";


export const EditUserController = async (req,res)=>{
    try {
        const { username, bio } = req.body;
        const userId = req.user.id; 
        
        const profileImage = req.files.profileImage?.[0];
        console.log(profileImage)
        let updateData = {};
    
        if (username) updateData.name = username;
        if (bio) updateData.bio = bio;
    
       

        if (profileImage) {
          const profileImageUrl = await imageUpload(profileImage);
          updateData.image = profileImageUrl;
          console.log(updateData)
        }
    
        const updatedUser = await editUserService({userId,updateData})
    
        if (!updatedUser) {
          return res.status(404).json({ message: "User not found" });
        }
    
        res.status(200).json({updatedUser});
    } catch (error) {
      res.status(500).json({message:"Internal server Error"})
    }
  }