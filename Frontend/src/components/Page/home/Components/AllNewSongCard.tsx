import PlayButton from "@/components/Buttons/PlayButton"
import LikeButton from "@/components/icons/LikeButton"
import type { SongData } from "@/types/song"

type Props = {
  song: SongData
}

const AllNewSongCard = ({ song }: Props) => {
  console.log(song)
  return (
    <div className="relative flex items-center bg-gradient-to-br from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] rounded-xl p-3 shadow-lg   hover:scale-105 transition-transform overflow-hidden group ">
      <div className=" ml-2 flex justify-between items-center gap-2  ">
        <img src={`${song.coverUrl}`} alt="" className="h-15 w-15 rounded-xl object-cover " />
        <div className="">
          <h3 className="text-lg font-bold truncate">{song.title}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
            <span>{song.artist.name}</span>
            <span>{song.plays} plays</span>
            <span className="flex items-center">
              <LikeButton Liked={false} />
              {song.likes}
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

