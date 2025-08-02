import { GetsimilarSongApi, GetSong } from "@/api/SongApi"
import { setCurrentIndex, setIsPlaying, setPlayingFrom, setQueue, setSong, setSongDetails } from "@/features/song/songSlice"
import type { MinimalSong, SongData } from "@/types/song"
import { useDispatch } from "react-redux"

type Props ={
  song:SongData
}

const PlayButton = ({song}:Props) => {

  const dispatch = useDispatch();

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

  return (
    <button
    onClick={()=>{
      HandelPlaysong()
    }}
    className=" cursor-pointer w-13 h-13 flex items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:brightness-110 transition-all duration-300">
        <svg
          className="w-7 h-7 fill-white"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </button>
  )
}

export default PlayButton
