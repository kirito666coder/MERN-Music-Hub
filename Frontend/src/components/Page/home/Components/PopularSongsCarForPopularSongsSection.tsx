import { GetsimilarSongApi, GetSong } from "@/api/SongApi";
import PlayButton from "@/components/Buttons/PlayButton";
import { setCurrentIndex, setIsPlaying, setPlayingFrom, setQueue, setSong, setSongDetails } from "@/features/song/songSlice";
import type { MinimalSong, SongData } from "@/types/song";
import { useDispatch } from "react-redux";

type Props = {
  song: SongData
  setshowpopup:React.Dispatch<React.SetStateAction<boolean>>;
}

const PopularSongsCarForPopularSongsSection = ({song,setshowpopup }: Props) => {

  const dispatch = useDispatch();



  const HandelPlaysong = async()=>{
    try {
      const audioUrl = await GetSong({ songId: song._id });

     console.log(song)
      if (audioUrl?.songurl) {

        const similarSongs:MinimalSong[] = await GetsimilarSongApi({songId:song._id})

        
        const queue: MinimalSong[] =[ 
          {
            _id: song._id,
            title: song.title,
            artist: song.artist?.name ?? '',   
          coverUrl: song.coverUrl ?? undefined,
        },
        ...((similarSongs ?? []).map(similar => ({
          _id: similar._id,
          title: similar.title,
          artist: similar.artist,
          coverUrl: similar.coverUrl ?? undefined,
        })))
      ];
      console.log('similarsong',similarSongs)
      console.log('queue',queue)

        dispatch(setQueue(queue));
        dispatch(setCurrentIndex(0));
        dispatch(setPlayingFrom({ type: "single" }));
       
        dispatch(setSong(`${audioUrl.songurl}?t=${Date.now()}`));
        dispatch(setSongDetails({
          title: song.title ?? null,
          artist: song.artist?.name ?? null,
          coverImage: song.coverUrl ?? null
        }));
        dispatch(setIsPlaying(true));
      } else {
        console.error("Song URL not found!");
      }
    } catch (err) {
      console.error("Error fetching song:", err);
    }
  }


  return (
    <div
    onClick={()=>{
      setshowpopup(true)
      HandelPlaysong()
    }}
    className="min-w-[160px] max-w-[100%] rounded-xl overflow-hidden bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] shadow-lg hover:scale-105 transition-transform duration-300 group relative">
      <div className="relative">
        <img src={`${song.coverUrl}`} alt={song.title} className="w-full h-40 object-cover" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Play button on hover */}
        <div className="absolute bottom-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <PlayButton song={song}/>
        </div>
      </div>
      <div className="p-2 text-white">
        <h5 className="text-base font-semibold truncate">{song.title}</h5>
        <p className="text-xs opacity-80 truncate">{song.artist.name}</p>
      </div>
    </div>
  );
};

export default PopularSongsCarForPopularSongsSection;
