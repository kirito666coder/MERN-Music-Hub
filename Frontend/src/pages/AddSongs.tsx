import { useState } from "react";

const AddSongPage = () => {
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
  });

  const [audioFile, setAudioFile] = useState(null);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleAudioChange = (e) => {
    const file = e.target.files[0];
    setAudioFile(file);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", { ...formData, audioFile, imageFile });
    // TODO: Add actual API logic
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Add New Song</h1>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Title */}
        <div>
          <label className="block font-semibold mb-1">Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Artist */}
        <div>
          <label className="block font-semibold mb-1">Artist</label>
          <input
            type="text"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            required
          />
        </div>

        {/* Album */}
        <div>
          <label className="block font-semibold mb-1">Album</label>
          <input
            type="text"
            name="album"
            value={formData.album}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block font-semibold mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Language */}
        <div>
          <label className="block font-semibold mb-1">Language</label>
          <input
            type="text"
            name="language"
            value={formData.language}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Release Date */}
        <div>
          <label className="block font-semibold mb-1">Release Date</label>
          <input
            type="date"
            name="releaseDate"
            value={formData.releaseDate}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
          />
        </div>

        {/* Audio Upload */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Upload Song (Audio)</label>
          <input
            type="file"
            accept="audio/*"
            onChange={handleAudioChange}
            className="w-full"
          />
        </div>

        {/* Cover Image Upload */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Upload Cover Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="w-full"
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

        {/* Description */}
        <div className="md:col-span-2">
          <label className="block font-semibold mb-1">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2"
            rows={3}
          ></textarea>
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
          ></textarea>
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Upload Song
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddSongPage;