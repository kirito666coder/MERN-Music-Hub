import type { Album, SongFormFields } from "@/types/song";
import { useEffect, useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { renderLabel } from "./HandlerForAddSongForm";
import { AddSongApi } from "@/api/SongApi";
import { SearchArtistApi } from "@/api/ArtistApi";
import type { artistSearch } from "@/types/artist";
import { getAllAlbumsApi } from "@/api/AlbumApi";

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
    tags: [],
    isPublic: true,
    mood: "none",
  });

  const [audioUrl, setaudioUrl] = useState<File | null>(null);
  const [coverUrl, setcoverUrl] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>("");
  const [duration, setDuration] = useState<number>(0);

  const [artistSuggestions, setArtistSuggestions] = useState<artistSearch[]>([]);
  const [artistName, setartistName] = useState('')

  const [albumSuggestions, setAlbumSuggestions] = useState<Album[]>([]);
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

  const handleArtistChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFormData((prev) => ({ ...prev, artist: value }));
    setartistName(value)
    if (value.length >= 2) {
      try {
        const res = await SearchArtistApi(value)
        setArtistSuggestions(res ?? []);
        console.log(res)
      } catch (error) {
        console.error("Artist search error:", error);
        setArtistSuggestions([]);
      }
    } else {
      setArtistSuggestions([]);
    }
  };

  useEffect(() => {
    console.log(artistSuggestions, 'this is data')
  }, [artistSuggestions])

  const handleShowAllAlbums = async () => {
    try {
      const res = await getAllAlbumsApi()

      if (Array.isArray(res)) {
        setAlbumSuggestions(res);
        console.log(res)     
      } else {
        console.error("API error:", res);   
        setAlbumSuggestions([]);           
      }
      setShowAlbumOptions(true);
    } catch (error) {
      console.error("Album fetch error:", error);
      setAlbumSuggestions([]);
      setShowAlbumOptions(true);
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

    console.log("song", song)

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
                    value={artistName}
                    onChange={handleArtistChange}
                    className="w-full border border-gray-300 rounded px-3 py-2"
                    required={isRequired}
                  />

                  {/* Artist suggestions */}
                  {artistSuggestions.length > 0 && (
                    <ul className="absolute z-10 w-full dark:text-white dark:bg-black bg-white text-black  border rounded-xl shadow-lg mt-1 max-h-60 overflow-auto">
                      {artistSuggestions.map((artist) => (
                        <li
                          key={artist._id}
                          onClick={() => {
                            setFormData((prev) => ({ ...prev, artist: artist._id }));
                            setartistName(artist.name)
                            setArtistSuggestions([]);
                          }}
                          className="flex items-center gap-3 px-3 py-2 cursor-pointer hover:bg-zinc-900 transition-colors"
                        >
                          <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                            <img
                              src={artist.photoUrl}
                              alt={artist.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="truncate font-medium ">{artist.name}</span>
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
                  readOnly                          
                  onFocus={handleShowAllAlbums}    
                  className="w-full border border-gray-300 rounded px-3 py-2 cursor-pointer"
                  placeholder="Select an album"
                />
              
                {showAlbumOptions && (
                  <div className="absolute z-10 w-full border border-gray-300 dark:text-white dark:bg-black bg-white text-black rounded shadow mt-1">
              
                    {/* Album list area */}
                    <ul className="max-h-60 overflow-y-auto custom-scroll">
                      {albumSuggestions.length > 0 ? (
                        albumSuggestions.map((album) => (
                          <li
                            key={album._id}
                            onClick={() => {
                              setFormData((prev) => ({ ...prev, album: album.title }));
                              setShowAlbumOptions(false);
                            }}
                            className="cursor-pointer px-3 py-2 hover:bg-gray-200"
                          >
                            {album.title}
                          </li>
                        ))
                      ) : (
                        <li className="px-3 py-2">
                          You don’t have any albums yet.
                        </li>
                      )}
                    </ul>
              
                    {/* Always show create & cancel buttons */}
                    <div className="border-t flex flex-row justify-between">
                      <button
                        type="button"
                        onClick={() => {
                          console.log("Create new album clicked");
                          setShowAlbumOptions(false);
                          // open modal here!
                        }}
                        className="w-fit text-left px-3 py-2 text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        <span className="text-xl">+ </span>
                         Create New Album
                      </button>
                      <button
                        type="button"
                        onClick={() => setShowAlbumOptions(false)}
                        className="w-fit text-left px-3 py-2 text-red-600 dark:text-red-400 hover:underline"
                      >
                        Cancel ✕ 
                      </button>
                    </div>
                  </div>
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
