import { useState } from "react";
import { Search as SearchIcon } from "lucide-react";

const Search = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([
    "Shape of You",
    "Blinding Lights",
    "Levitating",
    "Stay",
    "Bad Guy",
    "Happier Than Ever",
    "Peaches",
    "Industry Baby",
    "Heat Waves",
    "Save Your Tears",
  ]);

  const handleSearch = () => {
    console.log("Searching for:", query);
    // 🔍 Call your API here with query
  };

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
          onClick={handleSearch}
          className="bg-gradient-to-r from-[#f43f5e] to-[#0062ff] px-4 py-3 flex items-center justify-center hover:opacity-90 transition"
        >
          <SearchIcon className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* Suggestions */}
      {query && (
        <div className="absolute top-full left-0 w-full bg-neutral-800 mt-2 rounded-lg shadow-lg z-40 max-h-60 overflow-y-auto">
          {suggestions
            .filter((s) => s.toLowerCase().includes(query.toLowerCase()))
            .map((s, index) => (
              <div
                key={index}
                onClick={() => {
                  setQuery(s);
                  handleSearch();
                }}
                className="px-4 py-2 text-gray-200 hover:bg-neutral-700 cursor-pointer transition"
              >
                {s}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Search;
