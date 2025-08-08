import PlayButton from "@/components/Buttons/PlayButton"
import LikeButton from "@/components/icons/LikeButton"
import type { SongData } from "@/types/song"


import { GetsimilarSongApi, GetSong } from "@/api/SongApi"
import { setCurrentIndex, setIsPlaying, setPlayingFrom, setQueue, setSong, setSongDetails } from "@/features/song/songSlice"
import type { MinimalSong } from "@/types/song"
import { useDispatch, useSelector } from "react-redux"
import type { RootState } from "@/app/store"
type Props = {
  song: SongData
  setshowpopup:React.Dispatch<React.SetStateAction<boolean>>;
}

const AllNewSongCard = ({ song,setshowpopup }: Props) => {
  const dispatch = useDispatch();

  const {user} = useSelector((state:RootState)=>state.user)

  const HandelPlaysong = async()=>{
    try {
      const audioUrl = await GetSong({ songId: song._id });

     console.log(song)
      if (audioUrl?.songurl) {

        const similarSongs:MinimalSong[] = await GetsimilarSongApi({songId:song._id})

        
        const queue: MinimalSong[] =[ 
          {
            _id: song._id,
            title: song.title,
            artist: song.artist?.name ?? '',   
          coverUrl: song.coverUrl ?? undefined,
        },
        ...similarSongs?.map(similar => ({
          _id: similar._id,
          title: similar.title,
          artist: similar.artist,
          coverUrl: similar.coverUrl ?? undefined,
        }))
      ];
      console.log('similarsong',similarSongs)
      console.log('queue',queue)

        dispatch(setQueue(queue));
        dispatch(setCurrentIndex(0));
        dispatch(setPlayingFrom({ type: "single" }));
       
        dispatch(setSong(`${audioUrl.songurl}?t=${Date.now()}`));
        dispatch(setSongDetails({
          title: song.title ?? null,
          artist: song.artist?.name ?? null,
          coverImage: song.coverUrl ?? null
        }));
        dispatch(setIsPlaying(true));
      } else {
        console.error("Song URL not found!");
      }
    } catch (err) {
      console.error("Error fetching song:", err);
    }
  }

const isLiked = user?.likeSongs?.some((id:string)=> id === song._id) ?? false
  
  return (
    <div
  onClick={()=>{
    setshowpopup(true)
    HandelPlaysong()
  }}
    className="relative flex items-center bg-gradient-to-br from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] rounded-xl p-3 shadow-lg   hover:scale-105 transition-transform overflow-hidden group ">
      <div className=" flex justify-between items-center gap-2  ">
        <img src={`${song.coverUrl}`} alt="" className="h-15 w-15 rounded-xl object-cover " />
        <div className="">
          <h3 className="text-lg font-bold truncate">{song.title}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <span>{song.artist.name}</span>
            <span>{song.plays} plays</span>
            <span className="flex items-center">
              <LikeButton Liked={isLiked} songId={song._id} />
            </span>
          </div>

        </div>
        <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayButton song={song} />
        </div>
      </div>
     
    </div>
  )
}

export default AllNewSongCard

