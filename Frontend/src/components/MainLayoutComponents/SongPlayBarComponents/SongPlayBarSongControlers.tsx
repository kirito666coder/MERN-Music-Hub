import { GradientIconButton } from "@/components/Buttons/GradientIconButton";
import { useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward,FaMinus, FaPlus } from "react-icons/fa";

const SongPlayBarSongControlers = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–100 range
  const [volume, setVolume] = useState(50); // 0–100
  const duration = 240; // dummy: 240 seconds (4 minutes)

  // Converts seconds to mm:ss
  const formatTime = (seconds: number): string => {
    const m = Math.floor(seconds / 60);
    const s = Math.floor(seconds % 60);
    return `${m}:${s < 10 ? "0" : ""}${s}`;
  };

  // Derived current time based on progress %
  const currentTime = (progress / 100) * duration;

  const handleNext = () => {
    console.log("Next song");
  };

  return (
    <div className="w-full h-full flex justify-center items-center bg-black text-white">
      <div className="w-6/8 h-full flex flex-col justify-center items-center  px-4">
        {/* Control Buttons */}
        <div className="flex items-center gap-4">
          <GradientIconButton onClick={() => console.log("Previous song")}>
            <FaBackward className="w-6 h-6 fill-white" />
          </GradientIconButton>

          <GradientIconButton onClick={() => setIsPlaying(!isPlaying)}>
            {isPlaying ? (
              <FaPause className="w-6 h-6 fill-white" />
            ) : (
              <FaPlay className="w-6 h-6 fill-white" />
            )}
          </GradientIconButton>

          <GradientIconButton onClick={handleNext}>
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
            onChange={(e) => setProgress(Number(e.target.value))}
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
    onClick={() => setVolume((v) => Math.max(0, v - 10))}
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
    onClick={() => setVolume((v) => Math.min(100, v + 10))}
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
        onChange={(e) => setVolume(Number(e.target.value))}
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
