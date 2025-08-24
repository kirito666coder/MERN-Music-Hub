import { useEffect, useState } from "react";
import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection";
import type { SongData } from "@/types/song";
import { getPopularSongsapi } from "@/api/SongApi";
import PopupSongcompo from "./PopupSongcompo";

const PopularSongs = () => {
  const [popularSongsData, setPopularSongsData] = useState<SongData[] | null>(null);
  const [showpopup, setShowpopup] = useState(false);

  const GetPopularSongs = async () => {
    const songs = await getPopularSongsapi();
    setPopularSongsData(songs);
  };

  useEffect(() => {
    GetPopularSongs();
  }, []);

  if(!popularSongsData) return (
   <div className="mt-8">
  {/* Section header skeleton */}
  <div className="flex justify-between items-center mx-6 mb-4">
    <div className="h-6 w-40 bg-gray-500 rounded-md animate-pulse" />
  </div>

  {/* Song grid skeleton */}
  <div className="mx-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
    {[...Array(6)].map((_, i) => (
      <div
        key={i}
        className="group relative rounded-2xl overflow-hidden backdrop-blur-md shadow-md bg-gradient-to-br from-gray-700/20 to-gray-800/20 animate-pulse cursor-pointer"
      >
        {/* Cover skeleton */}
        <div className="relative w-full h-48 bg-gray-600/30 rounded-md overflow-hidden" />

        {/* Overlay circle (simulating play button) */}
        <div className="absolute bottom-3 right-3 w-10 h-10 bg-gray-500/50 rounded-full" />

        {/* Song info skeleton */}
        <div className="p-3 space-y-2">
          <div className="h-4 w-3/4 bg-gray-500 rounded-md" />
          <div className="h-3 w-1/2 bg-gray-500 rounded-md" />
        </div>
      </div>
    ))}
  </div>
</div>)

  return (
    <div className="mt-8">
      {/* Section header */}
      <div className="flex justify-between items-center mx-6 mb-4">
        <h3 className="text-2xl font-extrabold tracking-tight">
          Popular Songs
        </h3>
      </div>

      {/* Song grid */}
      <div className="mx-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
        {popularSongsData?.map((song, index) => (
          <PopularSongsCarForPopularSongsSection
            key={index}
            song={song}
            setshowpopup={setShowpopup}
          />
        ))}
      </div>

      <PopupSongcompo showpopup={showpopup} setshowpopup={setShowpopup} />
    </div>
  );
};

export default PopularSongs;
