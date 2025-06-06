import jwt from 'jsonwebtoken'

export const GoogleCallBack = (req, res) => {
    try {
        const user = req.user;

        if (!user) {
           return res.status(401).json({ message: "Authentication failed" })
        }

        const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "24h" })

        res.cookie("token", token, {
            httpOnly: true,
            secure: true,
            sameSite: "strict",
            maxAge: 24 * 60 * 60 * 1000
        })
      
        res.status(200).json({user})
    } catch (error) {
        res.status(500).json({ message: 'internal server error during Google Login' })
    }
}

export const profileController = (req,res) =>{
    res.status(200).json({message:"Authorized",user:req.user})
}