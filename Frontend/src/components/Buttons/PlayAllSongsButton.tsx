import { Button } from "@/components/ui/button";
import { setCurrentIndex, setPlayingFrom, setQueue } from "@/features/song/songSlice";
import type { MinimalSong, SongData } from "@/types/song";
import { playSongByIndex } from "@/utils/PlaySongByIndex";
import { Play } from "lucide-react";
import { useDispatch } from "react-redux";



interface PlayAllSongsButtonProps {
  songs: SongData[];
}

const PlayAllSongsButton = ({ songs }: PlayAllSongsButtonProps) => {
  const dispatch = useDispatch();

  const handlePlayAll = async () => {
    if (!songs || songs.length === 0) return;

    // Build the queue directly from songs
    const queue: MinimalSong[] = songs.map((song) => ({
      _id: song._id,
      title: song.title,
      artist: song.artist?.name ?? "Unknown Artist",
      coverUrl: song.coverUrl ?? undefined,
    }));

    // Always start with the first song
    dispatch(setQueue(queue));
    dispatch(setCurrentIndex(0));
    dispatch(setPlayingFrom({ type: "single" }));
    
    await playSongByIndex(queue, 0, dispatch);
  };

  return (
    <Button onClick={handlePlayAll} size="lg" className="mt-2 w-fit self-center sm:self-start">
      <Play className="mr-2 h-5 w-5" /> Play All
    </Button>
  );
};

export default PlayAllSongsButton;
