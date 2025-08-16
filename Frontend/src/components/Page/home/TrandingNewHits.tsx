import { getPopularSongsapi } from "@/api/SongApi";
import type { SongData } from "@/types/song";
import { useEffect, useState } from "react";
import { Play, Music2 } from "lucide-react"; // icons

const TrandingNewHits = () => {
  const [trendingSong, setTrendingSong] = useState<SongData | null>(null);

  const getPopularSongs = async () => {
    const songs = await getPopularSongsapi();
    if (!songs) return;
    setTrendingSong(songs[0]);
  };

  useEffect(() => {
    getPopularSongs();
  }, []);

  if (!trendingSong) {
    return (
      <div className="mx-3 mt-4 h-48 flex items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-900 via-cyan-950 to-black text-white shadow-xl animate-pulse">
        Loading trending hit...
      </div>
    );
  }

  return (
    <div className="relative mx-3 mt-6 flex h-52 overflow-hidden rounded-3xl bg-gradient-to-br from-cyan-800/90 via-cyan-950 to-black shadow-lg transition-all duration-500 hover:shadow-2xl hover:scale-[1.02]">
      {/* Background Cover with blur */}
      <div className="absolute inset-0">
        <img
          src={`${trendingSong.coverUrl}`}
          alt={trendingSong.title}
          className="h-full w-full object-cover opacity-50 blur-[2px]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex w-full flex-col justify-between px-8 py-6 text-white">
        <div>
          <h2 className="text-xs uppercase tracking-[3px] text-cyan-300/80">
            Trending New Hit
          </h2>
          <h1 className="mt-1 max-w-[80%] truncate text-3xl font-extrabold drop-shadow-md">
            {trendingSong.title}
          </h1>
          <h3 className="mt-1 text-sm font-medium text-gray-200/90">
            {trendingSong.artist?.name || "Unknown Artist"}
          </h3>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-br from-pink-500 to-blue-500 px-5 py-2 font-semibold shadow-lg transition-all duration-300 hover:scale-105 hover:brightness-110">
            <Play size={18} /> Listen Now
          </button>
          <span className="flex items-center gap-1 text-sm font-medium text-gray-200/80">
            <Music2 size={16} className="text-cyan-300" />
            {trendingSong.plays.toLocaleString()} Plays
          </span>
        </div>
      </div>

      {/* Right side cover floating */}
      <div className="relative hidden h-full w-44 md:flex">
        <img
          src={`${trendingSong.coverUrl}`}
          alt={trendingSong.title}
          className="h-full w-full object-cover transition-all duration-500 hover:scale-105 hover:grayscale-0 grayscale rounded-l-xl"
        />
        <div className="absolute inset-0 rounded-l-xl bg-gradient-to-l from-black/30 to-transparent" />
      </div>
    </div>
  );
};

export default TrandingNewHits;
