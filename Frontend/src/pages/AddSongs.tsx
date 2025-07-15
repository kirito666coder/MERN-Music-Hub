import type { RootState } from "@/app/store"
import AddSongForm from "@/components/Page/AddSongsPage/AddSongForm"
import { useSelector } from "react-redux"

const AddSongs = () => {
  const {user} = useSelector((state:RootState) =>state.user)
  return (
    <div>
      {
        user?.isArtist ?(
          <AddSongForm/>
        ):(
          <div>hello</div>
        )
      }
    </div>
  )
}

export default AddSongs
