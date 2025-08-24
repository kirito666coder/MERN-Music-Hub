import { GetArtistAndArtistDataApi } from "@/api/ArtistApi"
import ArtistHeader from "./components/ArtistHeader"
import { useNavigate, useParams } from "react-router-dom"
import type { SongData } from "@/types/song"
import type { Album } from "@/types/album"
import type { Artist } from "@/types/artist"
import { useEffect, useState } from "react"
import LoadingPageforArtistpage from "@/components/loading/LoadingPageforArtistpage"
import slugify from "slugify"


const ArtistPagComponents = () => {
    const [artist, setArtist] = useState<Artist | null>(null)
    const [albums, setAlbums] = useState<Album[]>([])
    const [songs, setSongs] = useState<SongData[]>([])

    const { slugAndId } = useParams()
    const navigate = useNavigate();
  
    const artistId = slugAndId ? slugAndId.split("-").slice(-1)[0] : null
  
    const GetArtist = async () => {
      if (!artistId) return
  
      const data = await GetArtistAndArtistDataApi(artistId)
  
        setArtist(data?.artist || null)
        setAlbums(data?.album || [])
        setSongs(data?.songs || [])
  
      console.log("this is data", data)
    }
  
    useEffect(() => {
      GetArtist()
    }, [])
  
    if (!artist) return <LoadingPageforArtistpage/>
  
    const handleClick = ({
      albumName,
      albumId,
    }: {
      albumName: string;
      albumId: string;
    }) => {
      const slug = slugify(albumName, { lower: true });
      navigate(`/library/album/${slug}-${albumId}`);
    };
  
  return (
    <>
      <ArtistHeader artist={artist} songs={songs} album={albums}/>
    </>
  )
}

export default ArtistPagComponents
