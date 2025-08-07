import { GetAllSongApi } from "@/api/SongApi"
import AllNewSongCard from "./Components/AllNewSongCard"
import { useEffect, useState } from "react"
import type { SongData } from "@/types/song"
import PopupSongcompo from "./PopupSongcompo" 

const AllNewSongs = () => {
  
  const [AllSongs, setAllSongs] = useState<SongData[] | null>(null)
  
  const getAllNewSongs = async ()=>{
  const allsongs:SongData[] | null = await GetAllSongApi()
  setAllSongs(allsongs??[])
}

useEffect(() => {
   console.log(AllSongs)
 }, [AllSongs])
 

 useEffect(() => {
   getAllNewSongs()
 }, [])
 
 const [showpopup, setshowpopup] = useState(false)
  return (
    <>
    <h2 className="mx-6 my-2 text-2xl font-bold">All NewSongs</h2>
    <div
   
    className="mx-4 my-2 grid md:grid-cols-2 gap-2 md:gap-5">
      {
        AllSongs?.map((song)=>(
          <AllNewSongCard key={song._id} song={song}  setshowpopup={setshowpopup}/>
        ))
      }
    </div>
    <PopupSongcompo showpopup={showpopup} setshowpopup={setshowpopup}/>
    </>
  )
}

export default AllNewSongs
