import SongPlayBarSongLogoAndTital from "./SongPlayBarComponents/SongPlayBarSongLogoAndTital"

const SongPlayBar = () => {
  return (
    <div className="h-19 w-full bg-black flex justify-center items-center">
      <div className="w-4/10 md:w-3/10">
      <SongPlayBarSongLogoAndTital/>
      </div>
      <div className="w-3/10 md:w-4/10">
 
      </div>
      <div className="w-3/10">
  
      </div>
    </div>
  )
}

export default SongPlayBar
