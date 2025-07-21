


export const createAlbumController = (req, res) => {
    try {
        const data = req.body;

        if(!data){
            return res.status(400).json({message:"data is Empty! Please try again"})
        }


        const album = 



    } catch (error) {
    res.status(500).json({message:"Internal server error",error})
    }
}