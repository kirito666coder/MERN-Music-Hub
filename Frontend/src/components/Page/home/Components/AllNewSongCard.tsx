import PlayButton from "@/components/Buttons/PlayButton"
import LikeButton from "@/components/icons/LikeButton"
import type { SongFormData } from "@/types/song"

type Props={
  song:SongFormData
}

const AllNewSongCard = ({song}:Props) => {
  console.log(song)
  return (
      <div className="bg-gradient-to-br  from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] h-20 w-full rounded-md flex items-center relative group overflow-hidden">
      <div className=" ml-2 flex justify-between items-center gap-2  ">
      <img src={`${song.coverUrl}`} alt="" className="h-15 w-15 rounded-full object-cover " />
      <div className="">
        <h3 className="text-xl font-bold ">{song.title}</h3>
        <div className="flex gap-2  font-semibold ">
          <span>{song.artist}</span>
          <span>{song.plays}</span>
          <span className="flex"><LikeButton Liked={false}/>{song.likes}</span>
        </div>

      </div>
      <div className=" absolute group-hover:bottom-2.5 right-2 bottom-[-100px] transition-all duration-300 ">
        <PlayButton song={song}/>
      </div>
      </div>

    </div>
  )
}

export default AllNewSongCard

