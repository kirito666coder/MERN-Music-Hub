import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useParams } from "react-router-dom"
import { GetArtistAndArtistDataApi } from "@/api/ArtistApi"
import { useEffect, useState } from "react"
import type { Artist } from "@/types/artist"
import type { Album } from "@/types/album"
import type { SongData } from "@/types/song"


const Artist = () => {
  const [artist, setArtist] = useState<Artist | null>(null)
  const [albums, setAlbums] = useState<Album[]>([])
  const [songs, setSongs] = useState<SongData[]>([])

  const { slugAndId } = useParams()
  const artistId = slugAndId ? slugAndId.split("-").slice(-1)[0] : null

  const GetArtist = async () => {
    if (!artistId) return

    const data = await GetArtistAndArtistDataApi(artistId)

    setTimeout(() => {
      
      setArtist(data?.artist || null)
      setAlbums(data?.album || [])
      setSongs(data?.songs || [])
    }, 10000);

    console.log("this is data", data)
  }

  useEffect(() => {
    GetArtist()
  }, [])

  if (!artist) return 

  return (
    <div className="p-6 space-y-12">
      {/* Artist Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
        <img
          src={artist.photoUrl}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-4xl font-bold">{artist.name}</h1>
          <p className="text-muted-foreground">{artist.bio}</p>
          <div className="flex gap-6 justify-center sm:justify-start text-sm text-muted-foreground">
            {/* Future: followers count */}
            <span>{songs.length} Songs</span>
            <span>{albums.length} Albums</span>
          </div>
          <Button size="lg" className="mt-2 w-fit self-center sm:self-start">
            <Play className="mr-2 h-5 w-5" /> Play All
          </Button>
        </div>
      </div>

      {/* Songs Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Songs</h2>
        <div className="space-y-4">
          {songs.map((song) => (
            <Card
              key={song._id}
              className="rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={`${song.coverUrl}`}
                    alt={song.title}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <span className="text-sm text-muted-foreground">
                      {Math.floor(song.duration / 60)}:
                      {String(song.duration % 60).padStart(2, "0")}
                    </span>
                  </div>
                </div>
                <Button size="icon" variant="ghost">
                  <Play className="w-5 h-5" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Albums Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {albums.map((album) => (
            <Card
              key={album._id}
              className="rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={album.coverUrl}
                alt={album.title}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-4">
                <p className="font-medium">{album.title}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Artist
