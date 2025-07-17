import { GetSong } from "@/api/SongApi"
import { setIsPlaying, setSong, setSongDetails } from "@/features/song/songSlice"
import type { SongData } from "@/types/song"
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
        dispatch(setSong(audioUrl?.songurl));
        dispatch(setSongDetails({
          title: song.title ?? null,
          artist: song.artist.name ?? null,
          coverImage: song.coverUrl
            ? typeof song.coverUrl === "string"
              ? song.coverUrl
              : URL.createObjectURL(song.coverUrl)
            : null
        }))
        dispatch(setIsPlaying(true))
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
