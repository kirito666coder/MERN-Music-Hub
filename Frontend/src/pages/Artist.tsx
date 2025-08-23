import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { useParams } from "react-router-dom"

const Artist = () => {
  // Dummy data
  const artist = {
    name: "John Doe",
    image:
      "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=400&q=80",
    bio: "Singer • Songwriter • Performer",
    followers: "1.2M",
    songs: 56,
    albums: 4,
  }

  const {slugAndId} = useParams()

  const artistId = slugAndId? slugAndId.slice()

  const songs = [
    {
      id: 1,
      title: "Dreams in Motion",
      duration: "3:42",
      cover:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=200&q=80",
    },
    {
      id: 2,
      title: "City Lights",
      duration: "4:10",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=200&q=80",
    },
    {
      id: 3,
      title: "Silent Echo",
      duration: "3:05",
      cover:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=200&q=80",
    },
  ]

  const albums = [
    {
      id: 1,
      title: "Midnight Stories",
      cover:
        "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&q=80",
    },
    {
      id: 2,
      title: "Golden Days",
      cover:
        "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&q=80",
    },
    {
      id: 3,
      title: "Lost & Found",
      cover:
        "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=300&q=80",
    },
  ]

  return (
    <div className="p-6 space-y-12">
      {/* Artist Header */}
      <div className="flex flex-col sm:flex-row items-center sm:items-end gap-6">
        <img
          src={artist.image}
          alt={artist.name}
          className="w-40 h-40 rounded-full object-cover shadow-lg"
        />
        <div className="flex flex-col gap-3 text-center sm:text-left">
          <h1 className="text-4xl font-bold">{artist.name}</h1>
          <p className="text-muted-foreground">{artist.bio}</p>
          <div className="flex gap-6 justify-center sm:justify-start text-sm text-muted-foreground">
            <span>{artist.followers} Followers</span>
            <span>{artist.songs} Songs</span>
            <span>{artist.albums} Albums</span>
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
              key={song.id}
              className="rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <CardContent className="flex items-center justify-between p-4">
                <div className="flex items-center gap-4">
                  <img
                    src={song.cover}
                    alt={song.title}
                    className="w-14 h-14 rounded-md object-cover"
                  />
                  <div>
                    <p className="font-medium">{song.title}</p>
                    <span className="text-sm text-muted-foreground">
                      {song.duration}
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
              key={album.id}
              className="rounded-2xl overflow-hidden hover:shadow-md transition"
            >
              <img
                src={album.cover}
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
