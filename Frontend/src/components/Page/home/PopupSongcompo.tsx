import React, { useState } from "react";
import {
  FaPlay,
  FaPause,
  FaStepBackward,
  FaStepForward,
  FaRandom,
  FaRedo,
} from "react-icons/fa";

const PopupSongcompo = ({ onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlay = () => setIsPlaying(!isPlaying);

  const song = {
    title: "Lost in Echoes",
    artist: "Kirito",
    album: "Dreamwave",
    coverUrl: "/covers/lost-in-echoes.jpg",
    audioUrl: "/songs/lost-in-echoes.mp3",
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center px-4 sm:px-8 py-6 overflow-auto">
      <div className="relative w-full max-w-6xl bg-gradient-to-br from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] text-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-6 text-3xl text-white hover:text-black/70 transition z-10"
        >
          &times;
        </button>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-12 items-center">
          {/* Cover Image */}
          <div className="md:w-full w-[80%] m-auto  aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/20">
            <img
              src={song?.coverUrl}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info + Controls */}
          <div className="flex flex-col justify-between h-full space-y-8">
            <div>
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">{song?.title}</h2>
              <p className="text-white/90 text-lg sm:text-xl">🎤 {song?.artist}</p>
              <p className="text-white/70 text-sm sm:text-base mt-1">💿 {song?.album}</p>
            </div>

            {/* Audio Player */}
            <audio className="w-full rounded-md mt-4" controls>
              <source src={song?.audioUrl} type="audio/mp3" />
              Your browser does not support the audio element.
            </audio>

            {/* Dummy Controls */}
            <div className="flex justify-center items-center gap-8 text-2xl sm:text-3xl mt-6">
              <FaRandom className="hover:scale-110 transition cursor-pointer" />
              <FaStepBackward className="hover:scale-110 transition cursor-pointer" />
              <button
                onClick={togglePlay}
                className="bg-white text-black rounded-full p-4 sm:p-5 text-3xl shadow-md hover:scale-110 transition"
              >
                {isPlaying ? <FaPause /> : <FaPlay />}
              </button>
              <FaStepForward className="hover:scale-110 transition cursor-pointer" />
              <FaRedo className="hover:scale-110 transition cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSongcompo;


