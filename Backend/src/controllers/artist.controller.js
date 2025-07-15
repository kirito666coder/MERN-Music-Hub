import ArtistModel from "../Models/artist.model.js";


export const SearchArtistController = async (req,res) =>{
    try {
        const search = req.query.search;
        
        if(!search || search.trim() === ''){
            return res.status(400).json({message:"missing search query"});
        }

        const artists = await ArtistModel.find({
            name:{$regex:search,$options:'i'}
        })
        .limit(10)
        .select('name _id photoUrl');
        
        res.json({artists})

    } catch (error) {
        console.error("Error searching artists:", error);
        res.status(500).json({ message: "Server error" });
    }
}

export const CreateArtistController = async (req,res) =>{
    try {
        const data = req.body;
        console.log(data)
    } catch (error) {
        console.error("Error searching artists:", error);
        res.status(500).json({ message: "Server error" });
    }
}