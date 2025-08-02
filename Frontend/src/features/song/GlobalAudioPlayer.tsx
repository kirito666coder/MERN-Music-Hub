import { store, type RootState } from "@/app/store"
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { nextSong, setCurrentTime, setDuration, setIsPlaying } from "./songSlice";
import { playSongByIndex } from "@/utils/PlaySongByIndex";

const GlobalAudioPlayer = () => {
    const {audioFile, isPlaying,volume,currentTime} = useSelector((state:RootState)=> state.song)
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement| null>(null);
   

    useEffect(() => {
        console.log("audioFile in Redux:", audioFile)
        const audio = audioRef.current;
        if(audio && audioFile){
          console.log("Loading new audio src:", audioFile);
          audio.src = audioFile;
          audio.load();
          if(isPlaying){
            console.log("Auto playing after load");
            audio.play().catch(err => console.error("Play failed:", err));
          }
        }
      }, [audioFile])
      
      useEffect(() => {
        console.log("isPlaying changed:", isPlaying)
        const audio = audioRef.current;
        if(audio){
          if(isPlaying){
            console.log("Playing audio");
            audio.play().catch(err => console.error("Play failed:", err));
          } else {
            console.log("Pausing audio");
            audio.pause();
          }
        }
      }, [isPlaying])
      
      useEffect(() => {
        const audio = audioRef.current;
        if(!audio) return;
      
        const handleLoadedMetadata = () => {
          console.log("Loaded metadata, duration:", audio.duration)
          dispatch(setDuration(audio.duration))
        }
        const handleTimeUpdate = () => {
          dispatch(setCurrentTime(audio.currentTime))
        }
        const handleEnded = async () => {
          console.log("Audio ended");
          const state = store.getState(); 
          const { queue, currentIndex } = state.song;
        
          if (currentIndex < queue.length - 1) {
            const newIndex = currentIndex + 1;
            dispatch(nextSong());
            await playSongByIndex(queue, newIndex, dispatch);
            console.log("Played next song");
          } else {
            console.log("Already at last song");
            dispatch(setIsPlaying(false)); 
          }
        };
        
      
        audio.addEventListener("loadedmetadata", handleLoadedMetadata);
        audio.addEventListener("timeupdate", handleTimeUpdate);
        audio.addEventListener("ended", handleEnded);
      
        return () => {
          audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
          audio.removeEventListener("timeupdate", handleTimeUpdate);
          audio.removeEventListener("ended", handleEnded);
        };
      }, [dispatch])
      
      useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          audio.volume = volume / 100;
          console.log("Volume set to:", volume);
        }
      }, [volume]);

      useEffect(() => {
        const audio = audioRef.current;
        if (audio) {
          if (Math.abs(audio.currentTime - currentTime) > 0.3) {
            console.log("Seeking audio to:", currentTime);
            audio.currentTime = currentTime;
          }
        }
      }, [currentTime]);
      

    return <audio ref={audioRef} />;
}

export default GlobalAudioPlayer
