import { CreateArtisApi } from '@/api/ArtistApi'
import { useState } from 'react'
import { renderLabel } from './HandlerForAddSongForm'
import type { ArtistFormFields } from '@/types/artist'
import { useDispatch } from 'react-redux'
import { updateIsArtist } from '@/features/user/userSlice'


const CreateArtist = () => {

  const dispatch = useDispatch();

  const [formData, setFormData] = useState<ArtistFormFields>({
    name: '',
    bio: '',
    genres: '',
    location: '',
  })

  const [photoFile, setPhotoFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setPhotoFile(file)
      setPhotoPreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
  
    const genresArray = formData.genres.split(',').map(g => g.trim()).filter(Boolean)
  
    try {
      const res = await CreateArtisApi({
        name: formData.name,
        bio: formData.bio,
        genres: genresArray,
        location: formData.location,
        photo: photoFile ?? undefined,
      })
  
      if (res) {
        console.log('Artist created successfully')
        dispatch( updateIsArtist(true))
      } else {
        console.error('Failed to create artist')
      }
    } catch (err) {
      console.error('Error:', err)
    }
  }
  
  return (
    <div className="max-w-2xl mx-auto p-6 rounded-xl border shadow space-y-6">
      <div className="text-center space-y-1">
  <h2 className="text-3xl font-extrabold bg-gradient-to-br from-[#f43f5e] to-[#0062ff] text-transparent bg-clip-text">
    Create Your Artist Profile
  </h2>
  <p className="text-gray-500 dark:text-gray-400 text-sm">
    Share your style, tell your story & start uploading your own tracks 🎵
  </p>
</div>

      
      <form onSubmit={handleSubmit} className="space-y-5">
        {([
          ['name', 'Artist Name', true],
          ['bio', 'Bio'],
          ['genres', 'Genres (comma separated)'],
          ['location', 'Location'],
        ] as [keyof ArtistFormFields, string, boolean?][]).map(
          ([name, label, isRequired = false]) => (
            <div key={name} className="w-full">
              {renderLabel(label, isRequired)}
              {name === 'bio' ? (
                <textarea
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={isRequired}
                  placeholder={label}
                  className="
                    w-full border border-gray-300 dark:border-gray-600
                    bg-transparent rounded-xl px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    transition
                  "
                />
              ) : (
                <input
                  type="text"
                  name={name}
                  value={formData[name]}
                  onChange={handleChange}
                  required={isRequired}
                  placeholder={label}
                  className="
                    w-full border border-gray-300 dark:border-gray-600
                    bg-transparent rounded-xl px-4 py-3
                    focus:outline-none focus:ring-2 focus:ring-primary/50
                    placeholder:text-gray-400 dark:placeholder:text-gray-500
                    transition
                  "
                />
              )}
            </div>
          )
        )}

        <div className="w-full">
          {renderLabel('Photo')}
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="
              w-full border border-gray-300 dark:border-gray-600
              bg-transparent rounded-xl px-4 py-3
              focus:outline-none focus:ring-2 focus:ring-primary/50
              transition
            "
          />
          {photoPreview && (
            <img
              src={photoPreview}
              alt="Preview"
              className="mt-3 w-full max-w-xs mx-auto h-48 object-cover rounded-xl shadow"
            />
          )}
        </div>

        <button
          type="submit"
          className="
            w-full py-3 rounded-xl 
            bg-gradient-to-br from-[#f43f5e] to-[#0062ff] text-white font-bold
            hover:opacity-80 transition
          "
        >
          Create Artist
        </button>
      </form>
    </div>
  )
}

export default CreateArtist
