import mongoose from "mongoose";
import SongModel from "../Models/song.model.js";
import UserModel from "../Models/user.model.js"
import AlbumModel from "../Models/album.model.js"

export const AddSong = async ({ userId, data, songUrl, imageUrl }) => {
    if (!userId || !data || !songUrl || !imageUrl) {
        throw new Error("some fields are missing")
    }

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error("Invalid user ID");
    }

    const user = await UserModel.findById({ _id: userId })

    if (!user) {
        throw new Error("user not found")
    }
    
    const {
        title,
        artist,
        duration,
        album,
        genre,
        language,
        lyrics,
        description,
        releaseDate,
        tags,
        isPublic,
        visibility,
        mood,
    } = data;
    if (!title || !artist || !duration) {
        throw new Error("Title, artist, and duration are required");
    }
    console.log(data)
    
    if (!mongoose.Types.ObjectId.isValid(artist)) {
        throw new Error("Invalid artist id");
    }

    if (!mongoose.Types.ObjectId.isValid(album)) {
        throw new Error("Invalid album id");
    }
    
    
    const newSong = await SongModel.create({
        userId,
        title,
        artist,
        duration,
        album: album,
        genre: genre || [],
        language: language || "Unknown",
        lyrics: lyrics || '',
        description: description || "",
        releaseDate: releaseDate || new Date(),
        audioUrl:songUrl,
        coverUrl: imageUrl,
        tags: tags || [],
        isPublic: isPublic === 'true',
        visibility: visibility || "public",
        mood: mood || 'none',
    })


    return newSong;
}

export const AddsongInAlbum = async({song})=>{
    if(!song){
        throw new Error ('Failed to add song in album')
    }
    const {
       album,
       _id,
    } = song

    if(!album || !_id){
        throw new Error ('Failed to add song in album')
    }

    const updatedAlbum = AlbumModel.findByIdAndUpdate(album,
        {$addToSet:{songs:_id}},
        {new:true}
    );

    if (!updatedAlbum) {
        throw new Error('Album not found or failed to add song');
      }

    return updatedAlbum;
}

export const getAllSongs = async ()=>{    
    const song = await SongModel.find().sort({createdAt:-1}).limit(10).populate('artist').populate('album','name');
    
    if(!song || song.length === 0){
        throw new Error('Error in finding songs')
    }

    return song;
}


export const findSong = async ({songId})=>{
    
    if(!mongoose.Types.ObjectId.isValid(songId)){
        throw new Error ('Invalid songId')
    }
    
    const song = await SongModel.findById(songId).populate('artist').populate('album','name')

    if(!song){
        throw new Error('Song not find')
    }

    return song;
}

export const genreMododSongSService = async({song,id})=>{
    const FindSong = await SongModel.find({
        _id:{$ne:id},
        $or:[
            {genre:{$in:song.genre}},
            {mood:song.mood}
        ],
        isPublic:true
    })
    .populate("artist", "name")
    .limit(4)
    .lean();

    return FindSong;
}

export const artistSongsService = async({song,id})=>{

    console.log("song.artist",song.artist)
    console.log("song",song)
    const artistsong = await SongModel.find({
        _id:{$ne:id},
        artist:song.artist,
        isPublic: true
    })
    .populate("artist", "name")
    .limit(3)
    .lean();

    return artistsong;
}

export const recentSongService = async({id})=>{
    const recentSong = await SongModel.find({
        _id:{$ne:id},
        isPublic: true
    })
    .populate("artist", "name")
    .sort({createdAt:-1})
    .limit(3)
    .lean()
    
    return recentSong;
}


export const FindSongIDinUserLikeSeverice = async ({ userId, songId }) => {
    console.log(userId, songId);
  
    if (!mongoose.Types.ObjectId.isValid(songId)) {
      throw new Error('Invalid songId');
    }
  
    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error('Invalid userId');
    }
  
    const user = await UserModel.findById(userId);
  
    if (!user) {
      throw new Error('User not found');
    }
  
    const isLiked = user.likeSongs.includes(songId); 
    return isLiked;
  };
  

  export const unlikeSong = async ({ userId, songId }) => {
    if (!userId || !songId) throw new Error('Missing userId or songId');
  
    const user = await UserModel.findById(userId);
    if (!user.likeSongs.includes(songId)) return;
  
    await UserModel.findByIdAndUpdate(
      userId,
      { $pull: { likeSongs: songId } },
      { new: true }
    );
  
    await SongModel.findOneAndUpdate(
      { _id: songId, likes: { $gt: 0 } }, 
      { $inc: { likes: -1 } },
      { new: true }
    );
  };
  

export const likeSong = async ({ userId, songId }) => {
    console.log(userId,songId)
  if (!userId || !songId) throw new Error('Missing userId or songId');

  await UserModel.findByIdAndUpdate(
    userId,
    { $addToSet: { likeSongs: songId } },
    { new: true }
  );

  await SongModel.findByIdAndUpdate(
    songId,
    { $inc: { likes: 1 } },
    { new: true }
  );
};
  
export const getLikesongService = async ({userId})=>{

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        throw new Error('Invalid userId');
      }
    
      const user = await UserModel.findById(userId);
    
      if (!user) {
        throw new Error('User not found');
      }

      const likedSongs = await SongModel.find({
        _id: { $in: user.likeSongs }
      });

      return likedSongs;
}