import type { SongFormFields } from "@/types/song";
import { useState } from "react";
import type { ChangeEvent ,FormEvent } from "react";
import { renderLabel } from "./HandlerForAddSongForm";
import { AddSongApi } from "@/api/SongApi";

const AddSongForm = () => {
  const [formData, setFormData] = useState<SongFormFields>({
    title: "",
    artist: "",
    album: "",
    genre: [],
    language: "",
    releaseDate: "",
    lyrics: "",
    description: "",
    tags:[],
    isPublic: true,
    mood: "none",
  });

  const [audioUrl, setaudioUrl] = useState<File | null>(null);
  const [coverUrl, setcoverUrl] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);

  const [artistSuggestions, setArtistSuggestions] = useState<{ _id: string, name: string }[]>([]);


  const [albumSuggestions, setAlbumSuggestions] = useState<{ _id: string, name: string }[]>([]);
  const [showAlbumOptions, setShowAlbumOptions] = useState(false);
  

 const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
) => {
  const { name, value } = e.target;

  const isCheckbox = (target: EventTarget): target is HTMLInputElement =>
    (target as HTMLInputElement).type === "checkbox";

  setFormData((prev) => ({
    ...prev,
    [name]: isCheckbox(e.target) ? (e.target as HTMLInputElement).checked : value,
  }));
};

  const handleAudioChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setaudioUrl(file);
      const audio = new Audio(URL.createObjectURL(file));
      audio.onloadedmetadata = () => {
        setDuration(Math.floor(audio.duration));
      };
    }
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setcoverUrl(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const songData = {
      ...formData,
      genre: formData.genre,
      tags: formData.tags,
      duration,
      audioUrl,
      coverUrl,
    };

    const song = await AddSongApi(songData)
 
    console.log("song" ,song)

  };

  const handleArtistChange = async (e) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, artist: value }));
  
    if (value.length >= 2) {
      try {
        const res = await fetch(`/api/artists?search=${encodeURIComponent(value)}`);
        const data = await res.json();
        setArtistSuggestions(data);
      } catch (error) {
        console.error("Artist search error:", error);
        setArtistSuggestions([]);
      }
    } else {
      setArtistSuggestions([]); // clear suggestions if too short
    }
  };
  

  const handleShowAllAlbums = async () => {
    try {
      const res = await fetch('/api/albums'); // adjust endpoint if needed
      const data = await res.json();
      setAlbumSuggestions(data);
      setShowAlbumOptions(true);
    } catch (error) {
      console.error("Album fetch error:", error);
      setAlbumSuggestions([]);
      setShowAlbumOptions(true);
    }
  };
  

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Song</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Basic Fields */}
        {([
  ["title", "Title", true],
  ["artist", "Artist", true],
  ["album", "Album"],
  ["genre", "Genre (comma separated)"],
  ["language", "Language"],
  ["releaseDate", "Release Date", false, "date"]
] as [keyof SongFormFields, string, boolean?, string?][]).map(
  ([name, label, isRequired = false, type = "text"]) => (
    <div key={name} className="relative">
      {renderLabel(label, isRequired)}

      {name === "artist" ? (
        <>
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleArtistChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required={isRequired}
          />

          {/* Artist suggestions */}
          {artistSuggestions.length > 0 && (
            <ul className="absolute z-10 w-full bg-white border rounded shadow mt-1 max-h-48 overflow-auto">
              {artistSuggestions.map((artist) => (
                <li
                  key={artist._id}
                  onClick={() => {
                    setFormData((prev) => ({ ...prev, artist: artist.name }));
                    setArtistSuggestions([]);
                  }}
                  className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                >
                  {artist.name}
                </li>
              ))}
            </ul>
          )}
        </>
      ) : name === "album" ? (
        <>
          <input
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
            onFocus={handleShowAllAlbums} // show albums when input is focused
            className="w-full border border-gray-300 rounded px-3 py-2"
          />

          {showAlbumOptions && (
            <ul className="absolute z-10 w-full bg-white border rounded shadow mt-1 max-h-48 overflow-auto">
              {albumSuggestions.length > 0 ? (
                albumSuggestions.map((album) => (
                  <li
                    key={album._id}
                    onClick={() => {
                      setFormData((prev) => ({ ...prev, album: album.name }));
                      setShowAlbumOptions(false);
                    }}
                    className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                  >
                    {album.name}
                  </li>
                ))
              ) : (
                <li className="px-3 py-2 text-gray-500">You don’t have any albums yet.</li>
              )}

              {/* Always show create button */}
              <li className="border-t px-3 py-2">
                <button
                  type="button"
                  onClick={() => {
                    // optional: open modal to create album or handle inline
                    console.log("Create new album clicked");
                    setShowAlbumOptions(false);
                  }}
                  className="w-full text-left text-blue-600 hover:underline"
                >
                  + Create New Album
                </button>
              </li>
            </ul>
          )}
        </>
      ) : (
        <input
          type={type}
          name={name}
          value={formData[name] as string}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2"
          required={isRequired}
        />
      )}
    </div>
  )
)}


        {/* Audio File */}
        <div className="md:col-span-2">
          {renderLabel("Upload Song (Audio)", true)}
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioChange}
            className="w-full"
            required
          />
          {duration > 0 && (
            <p className="text-sm text-gray-500 mt-1">Duration: {duration} sec</p>
          )}
        </div>

        {/* Cover Image */}
        <div className="md:col-span-2">
          {renderLabel("Upload Cover Image", true)}
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
            required
          />
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="mt-2 w-32 h-32 object-cover rounded"
            />
          )}
        </div>

        {/* Tags */}
        <div className="md:col-span-2">
          {renderLabel("Tags (comma separated)")}
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Mood */}
        <div>
          {renderLabel("Mood")}
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {["none", "happy", "sad", "chill", "energetic", "romantic", "angry"].map((mood) => (
              <option key={mood} className="dark:text-white dark:bg-black" value={mood}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          {renderLabel("Description")}
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          />
        </div>

        {/* Lyrics */}
        <div className="md:col-span-2">
          {renderLabel("Lyrics")}
          <textarea
            name="lyrics"
            value={formData.lyrics}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={5}
          />
        </div>

        {/* Public Toggle */}
        <div className="flex items-center gap-2">
          <input
            type="checkbox"
            name="isPublic"
            checked={formData.isPublic}
            onChange={handleChange}
          />
          <label>Make Public</label>
        </div>

        {/* Submit */}
        <div className="md:col-span-2">
          <button
            type="submit"
            className="bg-gradient-to-br from-[#f43f5e] to-[#0062ff] opacity-80 hover:opacity-100 text-white font-bold py-2 px-4 rounded w-full"
          >
            Upload Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSongForm;
