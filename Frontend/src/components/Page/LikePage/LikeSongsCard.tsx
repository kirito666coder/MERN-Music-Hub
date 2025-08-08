import type { RootState } from "@/app/store";
import PlayButton from "../../Buttons/PlayButton";
import LikeButton from "../../icons/LikeButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { SongData } from "@/types/song";
import { getLikesongsListApi } from "@/api/SongApi";


const LikeSongsCard = () => {

  const {user} = useSelector((state:RootState)=>state.user)

  const [likedSongs, setlikedSongs] = useState<SongData[]|null>(null)

  const GetLike = async()=>{
    const songs = await getLikesongsListApi()
    setlikedSongs(songs)
    console.log(songs)
  }

  useEffect(() => {
    GetLike()
  }, [])
  

  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
      {likedSongs ? (
        likedSongs.map((song, index) => {
          const isLiked = user?.likeSongs?.some((id:string)=> id === song._id) ?? false
          return (
          <div
            key={index}
            className="text-white relative flex items-center bg-gradient-to-br from-[#ff788f] to-[#70a4f7] 
              dark:from-[#c4213c] dark:to-[#1770ff] rounded-xl p-3 shadow-lg 
              hover:scale-105 transition-transform overflow-hidden group"
          >
            <img
              src={song.coverUrl||''}
              alt={song.title}
              className="w-16 h-16 rounded-xl object-cover mr-3"
            />

            <div className="flex-1 overflow-hidden">
              <h3 className="text-lg font-bold truncate">{song.title}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                <span>{song.artist.name}</span>
                <span>{song.plays} plays</span>
                <span className="flex items-center">
                  <LikeButton Liked={isLiked} songId={song._id}/>
                  {song.likes}
                </span>
              </div>
            </div>

            {/* Play button appears on hover */}
            <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayButton />
            </div>
          </div>
        )})
      ) : (
        <div className="col-span-full text-center text-gray-500 dark:text-gray-400 font-semibold py-8">
          No liked songs yet
        </div>

      )}
    </div>
  );
};

export default LikeSongsCard;
