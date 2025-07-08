import { GradientIconButton } from "@/components/Buttons/GradientIconButton";
import { useState } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const SongPlayBarSongControlers = () => {
const [isPlaying, setIsPlaying] = useState(false)
const [togglePlay, settogglePlay] = useState(false)

const handleNext = () => {
  console.log("Next song")
}

  return (
    <div className="w-full h-full flex justify-center items-center">
     <div className="w-4/5 h-full bg-red-400">
     <div className="flex items-center gap-4">
  {/* Previous Button */}
  <GradientIconButton onClick={() => console.log("Previous song")}>
    <FaBackward className="w-6 h-6 fill-white" />
  </GradientIconButton>

  {/* Play/Pause Button */}
  <GradientIconButton onClick={togglePlay}>
    {isPlaying ? (
      <FaPause className="w-6 h-6 fill-white" />
    ) : (
      <FaPlay className="w-6 h-6 fill-white" />
    )}
  </GradientIconButton>

  {/* Next Button */}
  <GradientIconButton onClick={handleNext}>
    <FaForward className="w-6 h-6 fill-white" />
  </GradientIconButton>
</div>
     </div>


     <div className="w-1/5 h-full bg-blue-400">
      sound
     </div>
    </div>
  )
}

export default SongPlayBarSongControlers
