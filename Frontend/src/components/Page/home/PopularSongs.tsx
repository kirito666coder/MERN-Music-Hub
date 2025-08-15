import { useEffect, useState } from "react";
import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection"
import type { SongData } from "@/types/song";
import { getPopularSongsapi } from "@/api/SongApi";


const PopularSongs = () => {

  const [popularSongsData, setpopularSongsData] = useState<SongData[] | null>(null)

  const GetpopularSongs = async ()=>{
    const songs = await getPopularSongsapi()
    
    setpopularSongsData(songs)
  }

  useEffect(() => {
    GetpopularSongs()
  }, [])
  

  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mx-5 mb-3">
        <h3 className="text-2xl font-bold">Popular Songs</h3>
      </div>
      
      <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 overflow-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {popularSongsData?.map((song, index) => (
          <PopularSongsCarForPopularSongsSection 
            key={index}
            title={song.title}
            artist={song.artist.name}
            coverUrl={song.coverUrl??''}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularSongs
