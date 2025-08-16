import { getAlbumApi } from "@/api/AlbumApi";
import type { Album } from "@/types/album";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import AlbumSongPlayCard from "./AlbumSongPlayCard";
const AlbumCompo = () => {
  
    const [album, setalbum] = useState<Album|null>(null)
    const {slugAndId} = useParams();
    const albumId = slugAndId? slugAndId.split('-').splice(-1)[0]:null;
    
    const GetAlbumData = async () =>{
      if(!albumId) return;
      try {
        const data = await getAlbumApi({albumId})
        
        if ('error' in data) {
          console.error(data.message);
          setalbum(null);
        } else {
          setalbum(data);
          console.log(data)
        }
      } catch (errr) {
        setalbum(null)
      }
    }
    
    useEffect(() => {
      GetAlbumData()
    }, [])
    
    if (!slugAndId) {
      return <div>Invalid album URL</div>;
    }
     if (!album) {
      return <div className="text-center mt-8">Loading album...</div>;
    }

    console.log(album)
  
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
  
  
  
            <ul className="space-y-2 ">
            <AlbumSongPlayCard album={album}/>
  </ul>
  
          </div>
        ) : (
          <div className="mt-8 text-gray-500 italic">No songs in this album yet.</div>
        )}
      </div>
    );
}

export default AlbumCompo
