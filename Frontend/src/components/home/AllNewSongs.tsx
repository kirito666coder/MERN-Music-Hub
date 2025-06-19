import AllNewSongCard from "./Components/AllNewSongCard"

const AllNewSongs = () => {
  return (
    <>
    <h2 className="mx-6 my-2 text-2xl font-bold">All NewSongs</h2>
    <div className="mx-4 my-2 grid md:grid-cols-2 gap-2">
      <AllNewSongCard/>
      <AllNewSongCard/>
    </div>
    </>
  )
}

export default AllNewSongs
