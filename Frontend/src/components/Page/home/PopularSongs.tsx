import { useEffect, useState } from "react";
import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection";
import type { SongData } from "@/types/song";
import { getPopularSongsapi } from "@/api/SongApi";
import PopupSongcompo from "./PopupSongcompo";
import LoadingSkeletionforPopularsongsSectioninHomepage from "@/components/loading/LoadingSkeletionforPopularsongsSectioninHomepage";

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

  if(!popularSongsData) return <LoadingSkeletionforPopularsongsSectioninHomepage/>

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
