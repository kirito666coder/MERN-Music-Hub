import { getAlbumApi } from "@/api/AlbumApi";
import type { Album } from "@/types/album";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const AlbumPage = () => {

  const [album, setalbum] = useState<Album|null>(null)
  const {slugAndId} = useParams();
  if (!slugAndId) {
    return <div>Invalid album URL</div>;
  }
  const albumId = slugAndId.split('-').splice(-1)[0];

  const GetAlbumData = async () =>{
    try {
      const data = await getAlbumApi({albumId})

      if ('error' in data) {
        console.error(data.message);
        setalbum(null);
      } else {
        setalbum(data);
        console.log(data)
      }
    } catch (error) {
      setalbum(null)
    }
  }

  useEffect(() => {
    GetAlbumData()
  }, [])
  
   if (!album) {
    return <div className="text-center mt-8">Loading album...</div>;
  }

  return (
    <div className="p-4 max-w-5xl mx-auto">
      {/* Top section */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <img
          src={album?.coverUrl}
          alt={album?.title}
          className="w-90 h-100 md:w-90 md:h-100 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">{album?.title}</h1>
          <div className="flex items-center gap-2 mb-2">
            <img
              src={album?.artistId?.photoUrl}
              alt={album?.artistId?.name}
              className="w-8 h-8 md:w-10 md:h-10 rounded-full object-cover"
            />
            <span className="font-medium">{album?.artistId?.name || "Unknown Artist"}</span>
          </div>
          <div className="text-gray-500 text-sm mb-2">
            Release date: {new Date(album?.releaseDate).toLocaleDateString()}
          </div>
          <div className="flex flex-wrap gap-2">
            {album?.genres && album?.genres.length > 0 && album?.genres.map((genre, idx) => (
              <span
                key={idx}
                className="bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded-full"
              >
                {genre}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      {album?.description && (
        <div className="mt-6 text-gray-700">{album?.description}</div>
      )}

      {/* Songs list */}
      {album?.songs && album?.songs.length > 0 ? (
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Songs</h2>

          <ul className="space-y-2">
  {album?.songs.map((song, idx) => (
    <li
      key={idx}
      className="flex items-center gap-4 p-2 rounded  transition"
    >
      {/* Cover thumbnail */}
      <img
        src={song.coverUrl}
        alt={song.title}
        className="w-12 h-12 rounded object-cover shadow"
      />

      {/* Song info */}
      <div className="flex-1">
        <div className="font-medium truncate">{song.title}</div>
        <div className="flex gap-2 text-xs text-gray-500">
          <span>❤️ {song.likes}</span>
          <span>▶️ {song.plays}</span>
        </div>
      </div>

      {/* Optional: play button */}
      <button className="p-2 rounded-full hover:bg-gray-200 transition">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 16 16"
          className="w-5 h-5"
        >
          <path d="M6.271 5.055A.5.5 0 0 0 5.5 5.5v5a.5.5 0 0 0 .771.424l4-2.5a.5.5 0 0 0 0-.848l-4-2.5z"/>
        </svg>
      </button>
    </li>
  ))}
</ul>

        </div>
      ) : (
        <div className="mt-8 text-gray-500 italic">No songs in this album yet.</div>
      )}
    </div>
  );
};

export default AlbumPage;
