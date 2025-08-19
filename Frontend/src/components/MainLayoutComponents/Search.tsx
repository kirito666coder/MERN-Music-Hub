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
    const data = await SearchSongsApi(value);
    setResults(data || []);
    setLoading(false);
  };

  // 🔍 call API when user types (debounced effect)
  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(query);
    }, 400); // debounce 400ms
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <div className="relative flex flex-col items-center w-full max-w-lg mx-auto mt-3">
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
        <div className="absolute top-full left-0 w-full bg-neutral-800 mt-2 rounded-lg shadow-lg z-40 max-h-60 overflow-y-auto">
          {loading && (
            <div className="px-4 py-2 text-gray-400">Searching...</div>
          )}

          {!loading && results.length > 0 ? (
            results.map((song) => (
              <div
                key={song._id}
                onClick={() => {
                  setQuery(song.title);
                  // 👉 play song or navigate here
                }}
                className="px-4 py-2 text-gray-200 hover:bg-neutral-700 cursor-pointer transition"
              >
                🎵 {song.title} —{" "}
                <span className="text-gray-400">{song.artist.name}</span>
              </div>
            ))
          ) : (
            !loading && (
              <div className="px-4 py-2 text-gray-400">No results found</div>
            )
          )}
        </div>
      )}
    </div>
  );
};

export default Search;
