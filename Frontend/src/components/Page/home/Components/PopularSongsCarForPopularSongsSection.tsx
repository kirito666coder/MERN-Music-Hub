import { GetsimilarSongApi, GetSong } from "@/api/SongApi";
import {
  setCurrentIndex,
  setIsPlaying,
  setPlayingFrom,
  setQueue,
  setSong,
  setSongDetails,
} from "@/features/song/songSlice";
import type { MinimalSong, SongData } from "@/types/song";
import { useDispatch } from "react-redux";
import { Play } from "lucide-react";

type Props = {
  song: SongData;
  setshowpopup: React.Dispatch<React.SetStateAction<boolean>>;
};

const PopularSongsCarForPopularSongsSection = ({ song, setshowpopup }: Props) => {
  const dispatch = useDispatch();

  const HandelPlaysong = async () => {
    try {
      const audioUrl = await GetSong({ songId: song._id });

      if (audioUrl?.songurl) {
        const similarSongs: MinimalSong[] = await GetsimilarSongApi({ songId: song._id });

        const queue: MinimalSong[] = [
          {
            _id: song._id,
            title: song.title,
            artist: song.artist?.name ?? "",
            coverUrl: song.coverUrl ?? undefined,
          },
          ...((similarSongs ?? []).map((similar) => ({
            _id: similar._id,
            title: similar.title,
            artist: similar.artist,
            coverUrl: similar.coverUrl ?? undefined,
          }))),
        ];

        dispatch(setQueue(queue));
        dispatch(setCurrentIndex(0));
        dispatch(setPlayingFrom({ type: "single" }));
        dispatch(setSong(`${audioUrl.songurl}?t=${Date.now()}`));
        dispatch(
          setSongDetails({
            title: song.title ?? null,
            artist: song.artist?.name ?? null,
            coverImage: song.coverUrl ?? null,
          })
        );
        dispatch(setIsPlaying(true));
      } else {
        console.error("Song URL not found!");
      }
    } catch (err) {
      console.error("Error fetching song:", err);
    }
  };

  return (
    <div
    onClick={() => {
      setshowpopup(true);
      HandelPlaysong();
    }}
    className="group relative rounded-2xl overflow-hidden bg-neutral-900/60 backdrop-blur-md shadow-md hover:shadow-xl transition-all duration-500 cursor-pointer"
  >
    {/* Cover with overlay */}
    <div className="relative">
      <img
        src={`${song.coverUrl}`}
        alt={song.title}
        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
      />
  
      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-end p-3">
        {/* Play icon */}
        <button className="bg-gradient-to-br from-pink-500 via-rose-500 to-fuchsia-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
          <Play className="text-white" size={20} />
        </button>
      </div>
    </div>
  
    {/* Song info */}
    <div className="p-3 text-white">
      <h5 className="text-sm font-semibold truncate group-hover:text-rose-400 transition-colors duration-300">
        {song.title}
      </h5>
      <p className="text-xs opacity-70 truncate">{song.artist.name}</p>
    </div>
  </div>
  
  );
};

export default PopularSongsCarForPopularSongsSection;
