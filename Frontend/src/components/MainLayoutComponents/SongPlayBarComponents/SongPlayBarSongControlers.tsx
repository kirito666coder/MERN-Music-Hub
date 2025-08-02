import type { RootState } from "@/app/store";
import { GradientIconButton } from "@/components/Buttons/GradientIconButton";
import { setCurrentTime, setIsPlaying, setVolume } from "@/features/song/songSlice";
import { FaPlay, FaPause, FaForward, FaBackward, } from "react-icons/fa";
import { HiOutlineSpeakerXMark,HiOutlineSpeakerWave } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import usePlayerControls from "./Handlers/handlers";



const SongPlayBarSongControlers = () => {

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
    <div className="w-full h-full flex justify-center items-center ">
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

          {/* Mobile*/}
          <div className="w-full overflow-hidden md:hidden ml-3  ">
                <h3 className=" w-full text-lg font-bold overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </h3>
                <h3 className=" w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">{artist}</h3>
            </div>


          {/* Desktop Range and Icons */}
          <div className="hidden md:flex items-center gap-3 text-white">
          <HiOutlineSpeakerXMark className="w-7 h-7 text-black dark:text-white" />
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
            <HiOutlineSpeakerWave className="w-7 h-7 text-black dark:text-white" />
          </div>

        </div>
      </div>




    </div>
  );
};

export default SongPlayBarSongControlers;
