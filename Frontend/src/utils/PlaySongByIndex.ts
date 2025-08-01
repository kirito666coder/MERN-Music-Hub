import { GetSong } from "@/api/SongApi";
import type { AppDispatch } from "@/app/store";
import { setIsPlaying, setSong, setSongDetails } from "@/features/song/songSlice";
import type { SongData } from "@/types/song";



export const playSongByIndex = async (
    queue:SongData[],
    index:number,
    dispatch:AppDispatch
)=>{
    const song = queue[index];
    if(!song)return;

    try {
        const audioUrl = await GetSong({songId:song._id})
        if(audioUrl?.songurl){
            // dispatch(setSong(audioUrl.songurl))
            dispatch(setSong(`${audioUrl.songurl}?t=${Date.now()}`));

            dispatch(setSongDetails({
                title: song.title ?? null,
                artist: song.artist?.name ?? null,
                coverImage: song.coverUrl ?? null 
            }))
            dispatch(setIsPlaying(true));
        }else{
            console.log('Song URL not found')
        }
    } catch (error) {
        console.log("Error fetching song:",error)
    }
}