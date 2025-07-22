import { useState } from 'react';

function AddLibraryPage() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    genres: '',
  });
  const [coverFile, setCoverFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setCoverFile(file);
    if (file) {
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      alert('Title is required');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('genres', formData.genres);
    if (coverFile) data.append('cover', coverFile);

    try {
      const res = await fetch('/api/albums', {
        method: 'POST',
        body: data,
      });

      if (res.ok) {
        alert('Album created!');
        setShowModal(false);
        setFormData({ title: '', description: '', genres: '' });
        setCoverFile(null);
        setPreviewUrl(null);
      } else {
        alert('Failed to create album');
      }
    } catch (err) {
      console.error(err);
      alert('Error creating album');
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={() => setShowModal(true)}
        className="px-4 py-2 rounded bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:opacity-90 transition"
      >
        ➕ Add Album
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto">
          <div className="relative w-full lg:max-w-[80%] md:max-w-[75%] mx-4 my-8 p-6 rounded-xl shadow-lg max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Create New Album</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-2 gap-4">
              <div className="space-y-4">
                <div>
                  <label className="block mb-1">
                    Title
                    <span className="bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] bg-clip-text text-transparent ml-1">
                      *
                    </span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Album Title"
                    className="w-full px-3 py-2 rounded border border-gray-300 outline-none focus:ring"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-1">Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                    className="w-full px-3 py-2 rounded border border-gray-300 outline-none focus:ring"
                  />
                </div>

                <div>
                  <label className="block mb-1">Genres (comma separated)</label>
                  <input
                    type="text"
                    name="genres"
                    value={formData.genres}
                    onChange={handleChange}
                    placeholder="e.g., rock, pop"
                    className="w-full px-3 py-2 rounded border border-gray-300 outline-none focus:ring"
                  />
                </div>

                <div className="flex justify-end space-x-2">
                  <button
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="px-3 py-1 rounded border"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:opacity-90 transition"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-1">Cover Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full outline-none"
                />
                {previewUrl && (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="mt-2 rounded w-full max-h-64 object-cover"
                  />
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddLibraryPage;
