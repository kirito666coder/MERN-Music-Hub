import { SearchSongsApi } from "@/api/SongApi";
import Search from "@/components/MainLayoutComponents/Search";
import type { Artist } from "@/types/artist";
import type { SongData } from "@/types/song";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

const SearchPage = () => {
  const { slug } = useParams();
  const [songs, setSongs] = useState<SongData[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async () => {
    if (!slug) return;
    setLoading(true);
    try {
      const data = await SearchSongsApi(slug);
      setSongs(data?.songs ?? []);
      setArtists(data?.artists ?? []);
    } catch (err) {
      console.error(err);
      setSongs([]);
      setArtists([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, [slug]);

  return (
    <div className="w-full min-h-screen p-4 md:p-8">
      {/* Search box only on small screens */}
      <div className="md:hidden mb-4">
        <Search />
      </div>

      {loading && (
        <div className="h-1 w-full mb-4 overflow-hidden relative">
          <div className="absolute left-0 top-0 h-full w-1/2 bg-gradient-to-r from-pink-500 via-blue-500 to-purple-500 animate-loading" />
        </div>
      )}

    {/* Artists Section */}
{artists.length > 0 && (
  <div className="mb-8">
    <h2 className="text-xl font-semibold mb-4">Artists</h2>
    <div className="flex gap-4 overflow-x-auto pb-2">
      {artists.map((artist) => (
        <motion.div
          key={artist._id}
          className="flex-shrink-0 w-32 cursor-pointer rounded-lg overflow-hidden shadow-sm border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.05 }}
        >
          <div className="w-full h-32 relative">
            <img
              src={artist.photoUrl}
              alt={artist.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition">
              <span className="text-white font-medium">View</span>
            </div>
          </div>
          <div className="p-2 text-center">
            <h3 className="truncate font-medium">{artist.name}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)}

{/* Songs Section */}
{songs.length > 0 && (
  <div>
    <h2 className="text-xl font-semibold mb-4">Songs</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {songs.map((song) => (
        <motion.div
          key={song._id}
          className="rounded-lg overflow-hidden shadow-sm cursor-pointer border border-gray-200 dark:border-gray-700"
          whileHover={{ scale: 1.03 }}
        >
          <div className="w-full h-40 relative">
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-2">
            <h3 className="text-sm font-semibold truncate">{song.title}</h3>
            <p className="text-xs text-gray-500 truncate">
              {song.artist?.name ?? "Unknown Artist"}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
)}


      {songs.length === 0 && artists.length === 0 && !loading && (
        <p className="text-center text-gray-500 mt-10">No results found for "{slug}"</p>
      )}
    </div>
  );
};

export default SearchPage;
