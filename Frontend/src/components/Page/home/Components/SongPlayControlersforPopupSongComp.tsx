import type { RootState } from "@/app/store";
import { GradientIconButton } from "@/components/Buttons/GradientIconButton";
import { setCurrentTime, setIsPlaying, } from "@/features/song/songSlice";
import { FaPlay, FaPause, FaForward, FaBackward, } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import usePlayerControls from "@/components/MainLayoutComponents/SongPlayBarComponents/Handlers/handlers";


const SongPlayControlersforPopupSongComp = () => {
    const dispatch = useDispatch();
    const { isPlaying, duration, currentTime } = useSelector((state: RootState) => state.song)
    const volume = useSelector((state:RootState)=>state.song.volume)
  
    const {title,artist} = useSelector((stats:RootState)=>stats.song)
  
    const progress = duration?(currentTime/duration)*100:0;
  
    const formatTime = (seconds: number): string => {
      const m = Math.floor(seconds / 60);
      const s = Math.floor(seconds % 60);
      return `${m}:${s < 10 ? "0" : ""}${s}`;
    };
  
  
   const {handleNext,handlePrev} =  usePlayerControls()
  return (
    <div className="h-full flex flex-col justify-center items-center  px-4">
    {/* Control Buttons */}
    <div className="flex items-center gap-4">
      <GradientIconButton onClick={() => {handlePrev()}}>
        <FaBackward className="w-6 h-6 fill-white" />
      </GradientIconButton>

      <GradientIconButton onClick={() => dispatch(setIsPlaying(!isPlaying))}>
        {isPlaying ? (
          <FaPause className="w-6 h-6 fill-white" />
        ) : (
          <FaPlay className="w-6 h-6 fill-white" />
        )}
      </GradientIconButton>

      <GradientIconButton onClick={() => {handleNext()}}>
        <FaForward className="w-6 h-6 fill-white" />
      </GradientIconButton>
    </div>

    {/* Progress Bar */}
    <div className="w-full flex items-center gap-4">
      <span className="text-sm font-mono">{formatTime(currentTime)}</span>

      <input
        type="range"
        min="0"
        max="100"
        value={progress}
        onChange={(e) => {
          const newProgress = Number(e.target.value);
          const newTime = (newProgress / 100) * duration;
          dispatch(setCurrentTime(newTime));
        }}
        className="w-full h-2 appearance-none rounded-lg 
          bg-gradient-to-r from-[#f43f5e] to-[#3b82f6] 
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:border-2 
          [&::-webkit-slider-thumb]:border-pink-500 
          [&::-webkit-slider-thumb]:shadow 
          [&::-moz-range-thumb]:bg-white"
      />

      <span className="text-sm font-mono">{formatTime(duration)}</span>
    </div>
  </div>
  )
}

export default SongPlayControlersforPopupSongComp
