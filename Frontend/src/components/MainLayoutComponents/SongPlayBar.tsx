import SongPlayBarSongControlers from "./SongPlayBarComponents/SongPlayBarSongControlers"
import SongPlayBarSongLogoAndTital from "./SongPlayBarComponents/SongPlayBarSongLogoAndTital"

const SongPlayBar = () => {
  return (
    <div className=" h-19 w-full flex justify-center items-center relative ">

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
