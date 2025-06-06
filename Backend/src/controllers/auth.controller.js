import jwt from 'jsonwebtoken'

export const GoogleCallBack = (req,res)=>{
    try {
        const user = req.user;

        if(!user){
            res.status(401).json({message:"Authentication failed"})
        }

        const token = jwt.sign({_id:user._id},)
        
    } catch (error) {
        res.status(500).json({message:'internal server error during Google Login'})
    }
}