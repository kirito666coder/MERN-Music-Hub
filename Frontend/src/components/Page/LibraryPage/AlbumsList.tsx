import { getAllAlbumsApi } from "@/api/AlbumApi";
import type { Album } from "@/types/album";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slugify from 'slugify';

const AlbumsList = () => {

    const [albums, setalbums] = useState<Album[]>([])

    const navigate = useNavigate();

    const handleShowAllAlbums = async () => {
        try {
          const res = await getAllAlbumsApi()
    
          if (res && 'albums' in res && Array.isArray(res.albums)) {
            console.log(albums)
            setalbums(res.albums)
          } else {
            console.error("API error:", res);
           
          }
         
        } catch (error) {
          console.error("Album fetch error:", error);
        }
      };

      useEffect(() => {
     handleShowAllAlbums()
      }, [])

      const handleClick = ({albumName,albumId}:{albumName:string,albumId:string}) =>{
        const slug = slugify(albumName, { lower: true });
        navigate(`/library/album/${slug}-${albumId}`);
      }
      
    
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      {albums.map((album) => (
        <div
          onClick={()=>handleClick({albumName:album.title,albumId:album._id})}
          key={album._id}
          className=" rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:scale-105 transition-transform"
        >
          <img
            src={album.coverUrl}
            alt={album.title}
            className="w-full h-60 object-cover "
          />
          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold">{album.title}</h2>
            <p className="text-sm opacity-90">{album.artistId.name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
