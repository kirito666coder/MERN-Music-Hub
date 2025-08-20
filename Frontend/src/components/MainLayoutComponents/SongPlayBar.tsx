import SongPlayBarSongControlers from "./SongPlayBarComponents/SongPlayBarSongControlers"
import SongPlayBarSongLogoAndTital from "./SongPlayBarComponents/SongPlayBarSongLogoAndTital"

const SongPlayBar = () => {
  return (
    <div className=" h-19 w-full flex justify-center items-center relative ">

       <div className="z-1 absolute top-[-28px] w-full md:hidden overflow-hidden flex justify-center">
</div>

      <div className="w-2/10 z-10 hidden md:block">
      <SongPlayBarSongLogoAndTital/>
      </div>
      <div className="md:w-8/10 w-full h-full z-10 ">
       <SongPlayBarSongControlers/>
      </div>
      
    </div>
  )
}

export default SongPlayBar
