import type { Album } from "@/types/album"
import { FaPlay} from "react-icons/fa";
import LikeButton from "@/components/icons/LikeButton";
import AlbumPlaysongButton from "./AlbumPlaysongButton";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentIndex, setPlayingFrom, setQueue } from "@/features/song/songSlice";
import { playSongByIndex } from "@/utils/PlaySongByIndex";
import type { MinimalSong } from "@/types/song";
import type { RootState } from "@/app/store";

const AlbumSongPlayCard = ({album}:{album:Album}) => {

  const dispatch = useDispatch();

  const handlePlayAlbum = async (album:Album,idx:string)=>{
    if (!album.songs || album.songs.length === 0) return;

    const index = album.songs.findIndex(song=>song._id === idx)
    if(index === -1) return;

    const artistName = album.artistId.name ?? 'Unknown Artist'

    const queue:MinimalSong[] = album.songs.map(song =>({
      _id:song._id,
      title:song.title,
      artist:artistName,
      coverUrl:song.coverUrl ?? undefined
    }))

    if(!album.songs || album.songs.length === 0) return;
     console.log(album)
     console.log(idx)
     console.log(album.songs)
    dispatch(setQueue(queue ));
    dispatch(setCurrentIndex(index));
    dispatch(setPlayingFrom({type:'album',albumId:album._id}));
    await playSongByIndex(queue,index,dispatch)
  }

  const {user} = useSelector((state:RootState)=>state.user)

  
  return (
    <>
       {album?.songs.map((song, idx) =>{
    const isLiked = user?.likeSongs?.some((id:string)=> id === song._id) ?? false

         return (
           <li
           key={idx}
           className="flex items-center gap-4 p-2 rounded  transition border-2 "
           >
        {/* Cover thumbnail */}
        <img
          src={song.coverUrl}
          alt={song.title}
          className="w-12 h-12 rounded object-cover shadow"
          />
  
        {/* Song info */}
        <div className="flex-1">
          <div className="font-semibold truncate text-lg">{song.title}</div>
          <div className="flex gap-3 text-xs text-gray-500">
            <span className="flex justify-center items-center gap-0.5 text-[17px] text-white">
              <LikeButton Liked={isLiked} songId={song._id}/> 
              {song.likes}
              </span>
            <span className="flex justify-center items-center text-[17px] text-white gap-1.5"> <FaPlay/>{song.plays}</span>
          </div>
        </div>
  
        {/* Optional: play button */}
        <div
         onClick={()=>{
           handlePlayAlbum(album,song._id)
          }}
          className="p-2 rounded-full hover:bg-gray-200 hover:scale-105 transition">
         <AlbumPlaysongButton/>
        </div>
      </li>
    )})}
    </>
  )
}

export default AlbumSongPlayCard
