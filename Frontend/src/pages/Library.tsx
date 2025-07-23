import AddLibrarypage from "@/components/Page/LibraryPage/AddLibrarypage"
import AlbumsList from "@/components/Page/LibraryPage/AlbumsList"

const Library = () => {
  return (
    <div>
      <div className=" z-50">
     <AddLibrarypage/>
    </div>
    <div className=" z-10">
      <AlbumsList/>
    </div>
    </div>
  )
}

export default Library
