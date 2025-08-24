import { GetArtistAndArtistDataApi } from "@/api/ArtistApi"
import ArtistHeader from "./components/ArtistHeader"
import { useParams } from "react-router-dom"
import type { SongData } from "@/types/song"
import type { Album } from "@/types/album"
import type { Artist } from "@/types/artist"
import { useEffect, useState } from "react"
import LoadingPageforArtistpage from "@/components/loading/LoadingPageforArtistpage"
import SongsSection from "./components/SongsSection"
import AlbumsSection from "./components/AlbumsSection"


const ArtistPagComponents = () => {
    const [artist, setArtist] = useState<Artist | null>(null)
    const [albums, setAlbums] = useState<Album[]>([])
    const [songs, setSongs] = useState<SongData[]>([])

    const { slugAndId } = useParams()
  
  
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
  
  return (
    <div className="p-6 space-y-12">
      <ArtistHeader artist={artist} songs={songs} album={albums}/>
      <SongsSection songs={songs}/>
      <AlbumsSection albums={albums}/>
    </div>
  )
}

export default ArtistPagComponents
