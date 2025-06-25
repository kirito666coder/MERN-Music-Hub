import { useState } from "react";

const AddSongForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    artist: "",
    album: "",
    genre: "",
    language: "",
    releaseDate: "",
    lyrics: "",
    description: "",
    tags: "",
    isPublic: true,
    mood: "none",
  });

  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");
  const [duration, setDuration] = useState(0); // in seconds

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file);
      const audio = new Audio(URL.createObjectURL(file));
      audio.onloadedmetadata = () => {
        setDuration(Math.floor(audio.duration)); // store in seconds
      };
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const songData = {
      ...formData,
      genre: formData.genre.split(",").map((g) => g.trim()),
      tags: formData.tags.split(",").map((t) => t.trim()),
      duration,
      audioFile,
      imageFile,
    };

    console.log("Submitting:", songData);
    // You would send this to the backend via FormData
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Song</h1>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Basic Inputs */}
        {[
          ["title", "Title"],
          ["artist", "Artist"],
          ["album", "Album"],
          ["genre", "Genre (comma separated)"],
          ["language", "Language"],
          ["releaseDate", "Release Date", "date"]
        ].map(([name, label, type = "text"]) => (
          <div key={name}>
            <label className="block font-semibold mb-1">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2"
              required={["title", "artist"].includes(name)}
            />
          </div>
        ))}

        {/* Audio Upload */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Upload Song (Audio)</label>
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

        {/* Image Upload */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Upload Cover Image</label>
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
          <label className="block font-semibold mb-1">Tags (comma separated)</label>
          <input
            type="text"
            name="tags"
            value={formData.tags}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Mood Selector */}
        <div>
          <label className="block font-semibold mb-1">Mood</label>
          <select
            name="mood"
            value={formData.mood}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          >
            {["none", "happy", "sad", "chill", "energetic", "romantic", "angry"].map((mood) => (
              <option key={mood} className=" dark:text-white dark:bg-black" value={mood}>
                {mood.charAt(0).toUpperCase() + mood.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Description</label>
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
          <label className="block font-semibold mb-1">Lyrics</label>
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
