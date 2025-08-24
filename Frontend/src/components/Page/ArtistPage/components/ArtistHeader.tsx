import { Button } from "@/components/ui/button"
import type { ArtistAndArtistData } from "@/types/artist"
import { Play } from "lucide-react"

const ArtistHeader = ({artist,songs,album}:ArtistAndArtistData) => {
  return (
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
        <span>{album.length} Albums</span>
      </div>
      <Button size="lg" className="mt-2 w-fit self-center sm:self-start">
        <Play className="mr-2 h-5 w-5" /> Play All
      </Button>
    </div>
  </div>
  )
}

export default ArtistHeader
