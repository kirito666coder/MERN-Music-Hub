import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import type { SongData } from "@/types/song";
import { SearchSongsApi } from "@/api/SongApi";
import type { Artist } from "@/types/artist";
import PlayButton from "../Buttons/PlayButton";
import slugify from "slugify";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [songs, setSongs] = useState<SongData[]>([]);
  const [artists, setArtists] = useState<Artist[]>([]);
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState(false); 

  const navigate = useNavigate()

  const handleSearch = async (value: string) => {
    if (!value.trim()) {
      setSongs([]);
      setArtists([]);
      return;
    }
    setLoading(true);
    try {
      const data = await SearchSongsApi(value);
      setSongs(data?.songs || []);
      setArtists(data?.artists || []);
      console.log("Search results:", data);
    } catch (error) {
      console.error("Search error:", error);
    } finally {
      setLoading(false);
    }
  };

  // debounce search
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(query);
    }, 400);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleClick = () => {
    if(!query.trim()) return;
    const slug = slugify(query, { lower: true });
    navigate(`/search/${slug}`);
    setQuery('')
  };

  const HandleClickArtis = ({artistName,artistId}:{artistName:string,artistId:string})=>{
   const slug = slugify(artistName,{lower:true})
   navigate(`/artist/${slug}-${artistId}`)
  }

  return (
    <div className="relative flex flex-col items-center w-[90%] md:w-[60%] mx-auto mt-3">
      {/* Search Box */}
      <div className="flex items-center w-full  rounded-full shadow-md focus-within:shadow-xl transition-all overflow-hidden">
        <input
          type="text"
          placeholder="Search songs, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setFocused(true)}  
          onBlur={() => setTimeout(() => setFocused(false), 150)} 
          className="w-full px-5 py-3 bg-transparent focus:outline-none"
        />
        <button
          onMouseDown={() => handleClick()}
          className="bg-gradient-to-r from-[#f43f5e] to-[#0062ff] px-4 py-3 flex items-center justify-center hover:opacity-90 transition cursor-pointer"
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Results Dropdown */}
      {query && focused && ( // 👈 only show when focused
        <div className="absolute top-full left-0 w-full  mt-2 rounded-xl shadow-2xl z-40 max-h-80 overflow-y-auto divide-y bg-accent">
          {loading && (
            <div className="px-4 py-3  animate-pulse">Searching...</div>
          )}

          {!loading && (
            <>
              {/* Artists */}
              {artists.length > 0 && (
                <div className="px-2 py-2">
                  <h3 className="px-2 text-xs uppercase tracking-wide  mb-1">
                    Artists
                  </h3>
                  {artists.map((artist) => (
                    <div
                      key={artist._id}
                      onMouseDown={() => {
                        HandleClickArtis({artistName:artist.name,artistId:artist._id})
                        setQuery('')
                        setFocused(false); // close after selection
                      }}
                      className="flex items-center gap-3 px-3 py-2 dark:hover:bg-neutral-700 hover:bg-white/90 cursor-pointer rounded-md transition"
                    >
                      <img
                        src={artist.photoUrl || "/placeholder-artist.png"}
                        alt={artist.name}
                        className="w-10 h-10 rounded-full object-cover"
                      />
                      <span className="font-medium">{artist.name}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Songs */}
              {songs.length > 0 && (
                <div className="px-2 py-2">
                  <h3 className="px-2 text-xs uppercase tracking-wide mb-1">
                    Songs
                  </h3>
                  {songs.map((song) => (
                    <div
                      key={song._id}
                      onClick={() => {
                        setQuery(song.title);
                        setFocused(false); // close after selection
                      }}
                      className="flex items-center justify-between px-3 py-2 dark:hover:bg-neutral-700 hover:bg-white/90 cursor-pointer rounded-md transition"
                    ><div className="flex gap-3">
                      <img
                        src={song.coverUrl || "/placeholder-cover.png"}
                        alt={song.title}
                        className="w-12 h-12 rounded-lg object-cover shadow-md"
                        />
                      <div className="flex flex-col">
                        <span className="font-semibold truncate">{song.title}</span>
                        <div className="flex items-center gap-2 text-sm ">
                          {song.artist?.photoUrl && (
                            <img
                            src={song.artist.photoUrl}
                            alt={song.artist?.name || "Artist"}
                            className="w-5 h-5 rounded-full object-cover"
                            />
                          )}
                          <span className="truncate">{song.artist?.name || "Unknown Artist"}</span>
                        </div>
                      </div>
                          </div>
                      <div>
                      <PlayButton song={song} onPlay={()=>{
                        setQuery('')
                        setFocused(false)
                      }}/>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {songs.length === 0 && artists.length === 0 && (
                <div className="px-4 py-3 text-gray-400">No results found</div>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
