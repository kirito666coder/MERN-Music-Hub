import type { RootState } from "@/app/store"
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentTime, setDuration, setIsPlaying } from "./songSlice";

const GlobalAudioPlayer = () => {
    const {audioFile, isPlaying,volume} = useSelector((state:RootState)=> state.song)
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
        const handleEnded = () => {
          console.log("Audio ended");
          dispatch(setIsPlaying(false))
        }
      
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

    return <audio ref={audioRef} />;
}

export default GlobalAudioPlayer
