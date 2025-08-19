import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import type { SongData } from "@/types/song";
import { SearchSongsApi } from "@/api/SongApi";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SongData[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (value: string) => {
    if (!value.trim()) {
      setResults([]);
      return;
    }
    setLoading(true);
    try {
      const data = await SearchSongsApi(value);
      setResults(data || []);
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

  return (
    <div className="relative flex flex-col items-center w-[90%] md:w-[60%] mx-auto mt-3">
      {/* Search Box */}
      <div className="flex items-center w-full bg-neutral-900 rounded-full shadow-md focus-within:shadow-xl transition-all overflow-hidden">
        <input
          type="text"
          placeholder="Search songs, artists..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-5 py-3 bg-transparent text-gray-200 placeholder-gray-400 focus:outline-none"
        />
        <button
          onClick={() => handleSearch(query)}
          className="bg-gradient-to-r from-[#f43f5e] to-[#0062ff] px-4 py-3 flex items-center justify-center hover:opacity-90 transition"
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Results Dropdown */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 mt-2 rounded-xl shadow-2xl z-40 max-h-72 overflow-y-auto">
          {loading && (
            <div className="px-4 py-3 text-gray-400 animate-pulse">Searching...</div>
          )}

          {!loading && results.length > 0 ? (
            results.map((song) => (
              <div
                key={song._id}
                onClick={() => {
                  setQuery(song.title);
                  // 👉 add play / navigate logic here
                }}
                className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-gradient-to-r hover:from-[#1f1f1f] hover:to-[#2a2a2a] cursor-pointer transition border-b-1 border-b-gray-400 "
              >
                {/* Song Cover */}
                <img
                  src={song.coverUrl || "/placeholder-cover.png"}
                  alt={song.title}
                  className="w-12 h-12 rounded-lg object-cover shadow-md"
                />

                {/* Song + Artist */}
                <div className="flex flex-col">
                  <span className="font-semibold truncate">{song.title}</span>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    {song.artist?.photoUrl && (
                      <img
                        src={song.artist?.photoUrl}
                        alt={song.artist?.name || "Artist"}
                        className="w-5 h-5 rounded-full object-cover"
                      />
                    )}
                    <span className="truncate">{song.artist?.name || "Unknown Artist"}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            !loading && (
              <div className="px-4 py-3 text-gray-400">No results found</div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
