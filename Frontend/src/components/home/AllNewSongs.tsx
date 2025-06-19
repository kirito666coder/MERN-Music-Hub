import AllNewSongCard from "./Components/AllNewSongCard"

const AllNewSongs = () => {
  return (
    <div className="mx-4 my-2 grid md:grid-cols-2 gap-2">
      <AllNewSongCard/>
      <AllNewSongCard/>
    </div>
  )
}

export default AllNewSongs
