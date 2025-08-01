import type { Album } from "@/types/album"
import { FaPlay} from "react-icons/fa";
import LikeButton from "@/components/icons/LikeButton";
import AlbumPlaysongButton from "./AlbumPlaysongButton";
import { useDispatch } from "react-redux";
import { setCurrentIndex, setPlayingFrom, setQueue } from "@/features/song/songSlice";
import { playSongByIndex } from "@/utils/PlaySongByIndex";

const AlbumSongPlayCard = ({album}:{album:Album}) => {

  const dispatch = useDispatch();

  const handlePlayAlbum = async (album:Album,idx:string)=>{
    if (!album.songs || album.songs.length === 0) return;

    const index = album.songs.findIndex(song=>song._id === idx)
    if(index === -1) return;

    if(!album.songs || album.songs.length === 0) return;
     console.log(album)
     console.log(idx)
     console.log(album.songs)
    dispatch(setQueue(album.songs ));
    dispatch(setCurrentIndex(0));
    dispatch(setPlayingFrom({type:'album',albumId:album._id}));
    await playSongByIndex(album.songs,index,dispatch)
  }
  return (
    <>
       {album?.songs.map((song, idx) => (
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
            <span className="flex justify-center items-center gap-0.5 text-[17px] text-white"><LikeButton/> {song.likes}</span>
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
    ))}
    </>
  )
}

export default AlbumSongPlayCard
