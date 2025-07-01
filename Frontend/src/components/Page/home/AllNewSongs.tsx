import { GetAllSongApi } from "@/api/SongApi"
import AllNewSongCard from "./Components/AllNewSongCard"
import { useEffect, useState } from "react"
import type { SongFormData } from "@/types/user"

const AllNewSongs = () => {
  
  const [AllSongs, setAllSongs] = useState<SongFormData[] | null>(null)
  
  const getAllNewSongs = async ()=>{
  const allsongs:SongFormData[] | null = await GetAllSongApi()
  setAllSongs(allsongs??[])
}

useEffect(() => {
   console.log(AllSongs)
 }, [AllSongs])
 

 useEffect(() => {
   getAllNewSongs()
 }, [])
 

  return (
    <>
    <h2 className="mx-6 my-2 text-2xl font-bold">All NewSongs</h2>
    <div className="mx-4 my-2 grid md:grid-cols-2 gap-2">
      {
        AllSongs?.map((song)=>(
          <AllNewSongCard song={song}/>
        ))
      }
    </div>
    </>
  )
}

export default AllNewSongs
