import { CreateAlbumApi } from '@/api/AlbumApi';
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AddLibraryPage() {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [formData, setFormData] = useState({ title: '', description: '', genres: '' });
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [Loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setCoverFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      setPreviewUrl(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      toast.error('Title is required');
      return;
    }

    const data = new FormData();
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('genres', formData.genres);
    if (coverFile) data.append('cover', coverFile);

    try {
      setLoading(true);
      setShowModal(false)
      const res = await CreateAlbumApi(data);
      if ('error' in res) {
        toast.error(res.message || 'Error creating album');
      } else {
        toast.success('Album created!');
        setShowModal(false);
        setFormData({ title: '', description: '', genres: '' });
        setCoverFile(null);
        setPreviewUrl(null);
      }
    } catch (err) {
      console.error(err);
      toast.error('Error creating album');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative p-4">
      {/* Circular Loader */}
      {Loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="w-16 h-16 border-4 border-t-pink-500 border-r-blue-500 border-b-pink-500 border-l-blue-500 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Toast Container */}
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Add Album Button */}
      <button
        onClick={() => setShowModal(true)}
        className="flex flex-col items-center justify-center w-full h-40 rounded-lg bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] text-white hover:opacity-90 transition z-40"
      >
        <div className="flex flex-col items-center justify-center w-[96%] md:w-[98%] h-34 border-2 border-dashed border-white rounded-lg">
          <span className="text-7xl">+</span>
          <span className="mt-2 text-sm">Add Album</span>
        </div>
      </button>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center overflow-y-auto z-50 bg-white/30 dark:bg-black/30">
          <div className="relative w-full lg:max-w-[80%] md:max-w-[75%] mx-4 my-8 p-6 rounded-xl shadow-lg dark:shadow-black max-h-[90vh] overflow-y-auto bg-white/70 dark:bg-black/70 backdrop-blur-2xl">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 hover:text-red-500"
            >
              ✕
            </button>
            <h2 className="text-xl font-semibold mb-4">Create New Album</h2>

            <form onSubmit={handleSubmit} className="grid grid-cols-2 md:grid-cols-2 gap-4 ">
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
                    className="px-3 py-1 rounded border hover:border-red-500 hover:text-red-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 rounded bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:opacity-90 transition text-white"
                  >
                    Add
                  </button>
                </div>
              </div>

              <div>
                <label className="block mb-1">
                  Cover Image{' '}
                  <span className="bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] bg-clip-text text-transparent ml-1">
                    *
                  </span>
                </label>
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
