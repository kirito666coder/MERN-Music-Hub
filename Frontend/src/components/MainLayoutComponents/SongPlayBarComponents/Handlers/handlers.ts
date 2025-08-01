import type { RootState } from "@/app/store"
import { nextSong, prevSong } from "@/features/song/songSlice"
import { playSongByIndex } from "@/utils/PlaySongByIndex"
import { useDispatch, useSelector } from "react-redux"


const usePlayerControls = ()=>{
     const dispatch =useDispatch()
     const {queue,currentIndex} = useSelector((state:RootState)=>state.song)

     const handleNext = async ()=>{
        if(currentIndex<queue.length-1){
            const newIndex = currentIndex+1;
            dispatch(nextSong());
            await playSongByIndex(queue,newIndex,dispatch)
        }else{
            console.log('Already at last song')
        }
     }

     const handlePrev = async () => {
        if (currentIndex > 0) {
          const newIndex = currentIndex - 1;
          dispatch(prevSong());
          await playSongByIndex(queue, newIndex, dispatch);
        } else {
          console.log("Already at first song");
        }
      };

      return {handleNext,handlePrev};

}

export default usePlayerControls;