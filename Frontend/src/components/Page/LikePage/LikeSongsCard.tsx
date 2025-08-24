import type { RootState } from "@/app/store";
import PlayButton from "../../Buttons/PlayButton";
import LikeButton from "../../icons/LikeButton";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import type { SongData } from "@/types/song";
import { getLikesongsListApi } from "@/api/SongApi";
import { FaPlay } from "react-icons/fa";
import LoadingPageForLikeSongs from "@/components/loading/LoadingPageForLikeSongs";
import { useNavigate } from "react-router-dom";

const LikeSongsCard = () => {
  const { user } = useSelector((state: RootState) => state.user);
  const [likedSongs, setLikedSongs] = useState<SongData[] | null>(null);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate()

  const getLike = async () => {
    try {
      setLoading(true);
      const songs = await getLikesongsListApi();
      setLikedSongs(songs);
    } catch (err) {
      console.error("Error fetching liked songs:", err);
      setLikedSongs([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getLike();
  }, []);


  if (loading) {
    return <LoadingPageForLikeSongs/>
  }


  if (!likedSongs || likedSongs.length === 0) {
    return (
      <div className="col-span-full flex flex-col items-center justify-center py-12 px-6 bg-gray-800/20 dark:bg-gray-700/20 rounded-2xl shadow-lg space-y-4">

  <svg
  xmlns="http://www.w3.org/2000/svg"
  className="w-16 h-16 text-pink-500 animate-bounce"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M9 19V5l12-2v14"
  />
  <circle cx="6" cy="18" r="3" />
  <circle cx="18" cy="16" r="3" />
</svg>



  <h2 className="text-2xl font-extrabold text-white">
    No liked songs yet
  </h2>


  <p className="text-center text-gray-300 max-w-xs">
    Browse and like your favorite tracks to see them appear here. Start discovering music now!
  </p>


  <button onClick={()=>{
  navigate('/')
  }} className="cursor-pointer mt-2 px-6 py-2 bg-gradient-to-br from-pink-500 to-blue-500 text-white font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
    Discover Songs
  </button>
</div>

    );
  }

  // Render liked songs
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
      {likedSongs.map((song, index) => {
        const isLiked =
          user?.likeSongs?.some((id: string) => id === song._id) ?? false;
        return (
          <div
            key={index}
            className="text-white relative flex items-center bg-gradient-to-br from-[#ff788f] to-[#70a4f7] 
              dark:from-[#c4213c] dark:to-[#1770ff] rounded-xl p-3 shadow-lg 
              hover:scale-105 transition-transform overflow-hidden group"
          >
            <img
              src={song.coverUrl || ""}
              alt={song.title}
              className="w-16 h-16 rounded-xl object-cover mr-3"
            />

            <div className="flex-1 overflow-hidden">
              <h3 className="text-lg font-bold truncate">{song.title}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                <span>{song.artist.name}</span>
                <span className=" flex justify-center items-center gap-1.5">
                  <FaPlay />
                  {song.plays}
                </span>
                <span className="flex items-center">
                  <LikeButton Liked={isLiked} songId={song._id} />
                  {song.likes}
                </span>
              </div>
            </div>

            {/* Play button appears on hover */}
            <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayButton song={song} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default LikeSongsCard;
