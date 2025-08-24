import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useNavigate, useParams } from "react-router-dom"
import { GetArtistAndArtistDataApi } from "@/api/ArtistApi"
import { useEffect, useState } from "react"
import type { Artist } from "@/types/artist"
import type { Album } from "@/types/album"
import type { SongData } from "@/types/song"
import LoadingPageforArtistpage from "@/components/loading/LoadingPageforArtistpage"
import PlayButton from "@/components/Buttons/PlayButton"
import { motion } from "framer-motion";
import slugify from "slugify"

const Artist = () => {
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
              <CardContent className="flex items-center justify-between ">
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
                <Button size="default" variant="link">
                  <PlayButton song={song}/>
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
        {albums.map((album, index) => (
          <motion.div
            key={album._id}
            onClick={() =>
              handleClick({ albumName: album.title, albumId: album._id })
            }
            className="relative cursor-pointer group rounded-2xl overflow-hidden 
bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.05, y: -5 }}
          >
            {/* Cover */}
            <div className="relative overflow-hidden h-60">
              <motion.img
                src={album.coverUrl}
                alt={album.title}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.6 }}
              />
              {/* Play button on hover */}
              <motion.div
                className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <motion.div
                  className="bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] rounded-full p-4 shadow-2xl"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  <Play className="w-6 h-6 text-white fill-white" />
                </motion.div>
              </motion.div>
            </div>

            {/* Info */}
            <div className="p-4">
              <h2 className="text-lg font-bold truncate">
                {album.title}
              </h2>
              <p className="text-sm ">{album.artistId.name}</p>
            </div>
          </motion.div>
        ))}
  
        </div>
      </section>
    </div>
  )
}

export default Artist
