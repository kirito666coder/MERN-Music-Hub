import { useState } from "react";
import SongPlayControlersforPopupSongComp from "./Components/SongPlayControlersforPopupSongComp";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "@/app/store";

const PopupSongcompo = ({showpopup,setshowpopup}) => {
 
  const dispatch = useDispatch();

  const {title,artist,coverImage} = useSelector((stats:RootState)=>stats.song)

  if(!showpopup) return ''

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-center items-center px-4 sm:px-8 py-6 overflow-auto">
      <div className="relative w-full max-w-6xl bg-gradient-to-br from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] text-white rounded-3xl shadow-2xl overflow-hidden animate-fadeIn">
        
        {/* Close Button */}
        <button
          onClick={()=>{
            setshowpopup(false)
          }}
          className="absolute top-5 right-6 text-3xl text-white hover:text-black/70 transition z-10"
        >
          &times;
        </button>

        {/* Main Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-12 items-center">
        <div className="flex flex-col justify-center items-center md:hidden">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">{title}</h2>
              <p className="text-white/90 text-lg sm:text-xl">{artist}</p>
            </div>
          {/* Cover Image */}
          <div className="md:w-full w-[80%] m-auto  aspect-square rounded-2xl overflow-hidden shadow-xl border border-white/20">
          
            <img
              src={coverImage||''}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info + Controls */}
          <div className="flex flex-col justify-between  space-y-8">
          <div className="md:flex flex-col justify-center items-center hidden">
              <h2 className="text-4xl sm:text-5xl font-extrabold mb-2">{title}</h2>
              <p className="text-white/90 text-lg sm:text-xl">{artist}</p>
            </div>
           <SongPlayControlersforPopupSongComp/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupSongcompo;


