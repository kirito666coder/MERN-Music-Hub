import PlayButton from "@/components/Buttons/PlayButton";
import type { SongData } from "@/types/song";

type Props = {
  song: SongData
  setshowpopup:React.Dispatch<React.SetStateAction<boolean>>;
}

const PopularSongsCarForPopularSongsSection = ({song,setshowpopup }: Props) => {
  return (
    <div
    onClick={()=>{
      setshowpopup(true)
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
