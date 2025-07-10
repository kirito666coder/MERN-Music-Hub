import { useSelector } from "react-redux"
import SongPlayBarSongControlers from "./SongPlayBarComponents/SongPlayBarSongControlers"
import SongPlayBarSongLogoAndTital from "./SongPlayBarComponents/SongPlayBarSongLogoAndTital"
import type { RootState } from "@/app/store"

const SongPlayBar = () => {
  const {title} = useSelector((state:RootState)=>state.song)
  return (
    <div className=" h-19 w-full bg-black flex justify-center items-center relative">

       <div className="z-1 absolute top-[-28px] w-full md:hidden overflow-hidden flex justify-center">
  <h5 className="text-xl truncate max-w-[90%] bg-black rounded-t-3xl px-5 font-semibold">
    {title}
  </h5>
</div>

      <div className="w-2/10 z-10">
      <SongPlayBarSongLogoAndTital/>
      </div>
      <div className="w-8/10  h-full z-10 ">
       <SongPlayBarSongControlers/>
      </div>
      
    </div>
  )
}

export default SongPlayBar
