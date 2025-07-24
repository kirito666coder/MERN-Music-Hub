import { getAlbumApi } from "@/api/AlbumApi";
import type { Album } from "@/types/album";
import { useState } from "react";
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
      }
    } catch (error) {
      setalbum(null)
    }
  }

  return (
    <div>
      hello
    </div>
  )
}

export default AlbumPage;
