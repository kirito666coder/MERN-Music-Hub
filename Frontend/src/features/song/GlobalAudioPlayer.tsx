import type { RootState } from "@/app/store"
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentTime, setDuration, setIsPlaying } from "./songSlice";

const GlobalAudioPlayer = () => {
    const {audioFile, isPlaying,currentTime} = useSelector((state:RootState)=> state.song)
    const dispatch = useDispatch();
    const audioRef = useRef<HTMLAudioElement| null>(null);
     

    useEffect(() => {
    const audio = audioRef.current;
    if(audio&&audioFile){
        audio.src = audioFile;
        audio.load();
        if(isPlaying){
            audio.play().catch(console.error)
        }
    }
    }, [audioFile])


    useEffect(() => {
    const audio = audioRef.current;
    if(!audio) return;

    if(isPlaying){
        audio.play().catch(console.error)
    }else{
        audio.pause();
    }
    }, [isPlaying])
    

    useEffect(() => {
    const audio = audioRef.current;
    if(!audio) return;

    const handleLoadedMetadata = () =>{
        dispatch(setDuration(audio.duration))
    }
    const handleTimeUpdate = () =>{
        dispatch(setCurrentTime(audio.currentTime))
    }
    const handleEnded = () =>{
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
    
    

    return <audio ref={audioRef} />;
}

export default GlobalAudioPlayer
