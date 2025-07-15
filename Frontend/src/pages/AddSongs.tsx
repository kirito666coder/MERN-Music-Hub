import type { RootState } from "@/app/store"
import AddSongForm from "@/components/Page/AddSongsPage/AddSongForm"
import CreateArtis from "@/components/Page/AddSongsPage/CreateArtis"
import { useSelector } from "react-redux"


const AddSongs = () => {
  const {user} = useSelector((state:RootState) =>state.user)
  return (
    <div>
      {
        user?.isArtist ?(
          <AddSongForm/>
        ):(
           <CreateArtis/>
        )
      }
    </div>
  )
}

export default AddSongs
