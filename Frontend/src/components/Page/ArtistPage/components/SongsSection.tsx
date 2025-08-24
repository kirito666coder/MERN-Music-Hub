import PlayButton from "@/components/Buttons/PlayButton"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { SongData } from "@/types/song"

const SongsSection = ({songs}:{songs:SongData[]}) => {
  return (
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
  )
}

export default SongsSection
