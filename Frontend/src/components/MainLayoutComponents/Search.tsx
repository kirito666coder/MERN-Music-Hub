import { useState } from "react";
import { Search as SearchIcon } from "lucide-react"; // icon library

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // Mock songs list (replace with backend API later)
  const allSongs = [
    "Blinding Lights",
    "Shape of You",
    "Believer",
    "Perfect",
    "Someone Like You",
    "Despacito",
    "Stay",
    "Senorita",
  ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setResults([]);
      return;
    }

    // Filter songs
    const filtered = allSongs.filter((song) =>
      song.toLowerCase().includes(value.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl font-bold text-white mb-6">Search Songs</h1>

      {/* Search Bar */}
      <div className="relative w-full max-w-lg">
        <input
          type="text"
          value={query}
          onChange={handleSearch}
          placeholder="Search for a song..."
          className="w-full px-5 py-3 rounded-2xl bg-white/10 backdrop-blur-md 
                     text-white placeholder-gray-400 outline-none border border-white/20 
                     focus:ring-2 focus:ring-purple-500 shadow-lg"
        />
        <SearchIcon className="absolute right-4 top-3.5 text-gray-400" size={22} />
      </div>

      {/* Results */}
      <div className="mt-6 w-full max-w-lg space-y-2">
        {results.length > 0 ? (
          results.map((song, index) => (
            <div
              key={index}
              className="p-3 rounded-xl bg-white/10 text-white 
                         hover:bg-purple-600/40 cursor-pointer transition-all shadow-md"
            >
              {song}
            </div>
          ))
        ) : query !== "" ? (
          <p className="text-gray-400 text-center mt-4">No songs found</p>
        ) : null}
      </div>
    </div>
  );
};

export default Search;
