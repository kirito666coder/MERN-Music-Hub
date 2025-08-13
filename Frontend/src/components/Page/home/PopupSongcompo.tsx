import { useSelector } from "react-redux";
import type { RootState } from "@/app/store";
import SongPlayControlersforPopupSongComp from "./Components/SongPlayControlersforPopupSongComp";
import { motion, AnimatePresence } from "framer-motion";
import React from "react";

interface PopupSongcompoProps {
  showpopup: boolean;
  setshowpopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const PopupSongcompo: React.FC<PopupSongcompoProps> = ({ showpopup, setshowpopup }) => {
  const { title, artist, coverImage } = useSelector(
    (state: RootState) => state.song
  );

  return (
    <AnimatePresence>
      {showpopup && (
        <motion.div
          className="fixed inset-0 z-50 flex justify-center items-center px-4 sm:px-8 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop with animated gradient */}
          <motion.div
            className="absolute inset-0 backdrop-blur-xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,0,0,0.85), rgba(0,0,0,0.7), rgba(0,0,0,0.85))",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Popup Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-5xl  bg-gradient-to-br from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] 
                       text-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.3)] overflow-hidden"
          >
            {/* Close Button */}
            <button
              onClick={() => setshowpopup(false)}
              className="absolute top-5 right-6 text-4xl font-bold hover:rotate-90 transition-transform duration-300 
                         text-white hover:text-red-300/70 z-10"
            >
              &times;
            </button>

            {/* Main Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 p-8 sm:p-12 items-center">
              
              {/* Song Info (Mobile) */}
              <div className="flex flex-col justify-center items-center md:hidden">
                <motion.h2
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 }}
                  className="text-4xl sm:text-5xl font-extrabold mb-2 text-center drop-shadow-lg"
                >
                  {title}
                </motion.h2>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-white/90 text-lg sm:text-xl text-center italic"
                >
                  {artist}
                </motion.p>
              </div>

              {/* Cover Image */}
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.15 }}
                className="relative md:w-full w-[80%] m-auto aspect-square rounded-2xl overflow-hidden 
                           shadow-[0_12px_50px_rgba(255,255,255,0.2)] border border-white/20"
              >
                <motion.img
                  src={coverImage || ""}
                  alt="Cover"
                  className="w-full h-full object-cover"
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
              </motion.div>

              {/* Info + Controls */}
              <div className="flex flex-col justify-between space-y-8">
                {/* Song Info (Desktop) */}
                <div className="md:flex flex-col justify-center items-center hidden">
                  <motion.h2
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-4xl sm:text-5xl font-extrabold mb-2 text-center drop-shadow-lg"
                  >
                    {title}
                  </motion.h2>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="text-white/90 text-lg sm:text-xl text-center italic"
                  >
                    {artist}
                  </motion.p>
                </div>

                {/* Player Controls */}
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25 }}
                >
                  <SongPlayControlersforPopupSongComp />
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupSongcompo;
