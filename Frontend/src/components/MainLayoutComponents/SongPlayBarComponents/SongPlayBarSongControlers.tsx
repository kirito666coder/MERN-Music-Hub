import type { RootState } from "@/app/store";
import { GradientIconButton } from "@/components/Buttons/GradientIconButton";
import { setCurrentTime, setIsPlaying, setVolume } from "@/features/song/songSlice";
import { FaPlay, FaPause, FaForward, FaBackward, FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import usePlayerControls from "./Handlers/handlers";

const SongPlayBarSongControlers = () => {

  const dispatch = useDispatch();
  const { isPlaying, duration, currentTime } = useSelector((state: RootState) => state.song)
  const volume = useSelector((state:RootState)=>state.song.volume)


  const progress = duration?(currentTime/duration)*100:0;

  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };


 const {handleNext,handlePrev} =  usePlayerControls()



  return (
    <div className="w-full h-full flex justify-center items-center bg-black text-white">
      <div className="w-6/8 h-full flex flex-col justify-center items-center  px-4">
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





      <div className="w-2/8 h-full flex justify-center items-center">
        <div className="flex flex-col items-center md:flex-row gap-2 md:gap-4">

          {/* Mobile Volume Controls with Icons */}
          <div className="flex md:hidden items-center gap-2 text-white">
            {/* Decrease */}
            <button
             onClick={() => dispatch(setVolume(Math.max(0, volume - 10)))}
              className="p-2 rounded-full border-2 border-white 
               bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] 
               hover:brightness-110 transition-all duration-300"
            >
              <FaMinus className="w-4 h-4 fill-white" />
            </button>

            {/* Volume Value */}
            <span className="text-sm font-mono">
              {volume === 0 ? "00" : volume}%
            </span>


            {/* Increase */}
            <button
             onClick={() => dispatch(setVolume(Math.min(100, volume + 10)))}
              className="p-2 rounded-full border-2 border-white 
               bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] 
               hover:brightness-110 transition-all duration-300"
            >
              <FaPlus className="w-4 h-4 fill-white" />
            </button>
          </div>


          {/* Desktop Range and Icons */}
          <div className="hidden md:flex items-center gap-3 text-white">
            <span className="text-xl">🔈</span>
            <input
              type="range"
              min="0"
              max="100"
              value={volume}
              onChange={(e) => dispatch(setVolume(Number(e.target.value)))}
              className="appearance-none w-[120px] h-2 
          bg-gradient-to-r from-[#f43f5e] to-[#3b82f6] 
          rounded-lg
          [&::-webkit-slider-thumb]:appearance-none 
          [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 
          [&::-webkit-slider-thumb]:rounded-full 
          [&::-webkit-slider-thumb]:bg-white 
          [&::-webkit-slider-thumb]:border-2 
          [&::-webkit-slider-thumb]:border-blue-500 
          [&::-webkit-slider-thumb]:shadow 
          [&::-moz-range-thumb]:bg-white"
            />
            <span className="text-xl">🔊</span>
          </div>

        </div>
      </div>




    </div>
  );
};

export default SongPlayBarSongControlers;
