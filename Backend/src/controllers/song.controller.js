import { FindArtistWithArtistId } from "../services/artist.service.js";
import { audioUpload, getSongUrl, imageUpload } from "../services/cloudinaryUpload.service.js";
import { AddSong, AddsongInAlbum, artistSongsService, findSong, genreMododSongSService, getAllSongs, recentSongService } from "../services/songAdd.service.js";

export const AddSongController = async (req, res) => {
     try {
      
       const audioUrl = req.files.audioUrl?.[0];
       const coverUrl = req.files.coverUrl?.[0];
       
       if(!audioUrl || !coverUrl){
         return res.status(400).json({message:"Audio and image files are required."})
        }
        
        
        const user = req.user;
        const userId = user._id;
        
        const data = req.body;
        

        const isValidArtistId = await FindArtistWithArtistId({artistId:data.artist})

        if(!isValidArtistId){
          res.status(400).json({message:"Artist not found"})
        }
        

      const songUrl = await audioUpload(audioUrl)
      const imageUrl = await imageUpload(coverUrl)
       
      const song = await AddSong({userId, data, songUrl, imageUrl})

      const AddsongonAlbum = await AddsongInAlbum({song})
     
     res.status(201).json(song)

     } catch (error) {
      console.log(error)
        res.status(500).json({ message: error.message})
     }
};

export const GetAllSongControllere = async (req,res) =>{
  try {
    const songs = await getAllSongs()
    
   res.status(200).json(songs)
  } catch (error) {
    res.status(500).json({message:"Internal server Error",error})
  } 
}


export const GetStreamSongController = async (req,res)=>{
  try {
    
    const {songId} = req.params;
   
    const song = await findSong({songId})
    
    const songurl = await getSongUrl({song})
    
    if(!songurl){
      return res.status(400).json({message:"not find song url"})
    }

    res.status(200).json({songurl})
    
  } catch (error) {
    res.status(500).json({message:"Internal server Error",error})
  }
}

export const GetSimilarSongController = async(req,res)=>{
  try {

    const {id}= req.params;

    const song = findSong({songId:id})

    const generModod = await genreMododSongSService({song,id})
    const artistSong = await artistSongsService({song,id})
    const recentSong = await recentSongService({id})

    const combined = [...generModod,...artistSong,...recentSong];
    const uniqueMap = new Map();
    combined.forEach(song=>{
      uniqueMap.set(song._id.toString(),song)
    })

    const unique = Array.from(uniqueMap.values());
    const shuffled = unique.sort(()=>0.5-Math.random())

    const similarSongs = shuffled.slice(0,10).map(s=>({
      _id:s._id,
      title:s.title,
      artist:s.artist?.name ?? "Unknown",
      coverUrl:s.coverUrl ?? undefined
    }))

    res.status(200).json(similarSongs)
    
  } catch (error) {
    res.status(500).json({message:"Internal server error",error})
  }
}