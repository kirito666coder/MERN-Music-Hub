import AllNewSongs from "@/components/Page/home/AllNewSongs"
// import PopularAlbum from "@/components/Page/home/PopularAlbum"
import PopularSongs from "@/components/Page/home/PopularSongs"
import TrandingNewHits from "@/components/Page/home/TrandingNewHits"

const Home = () => {
  return (
    <>
      <TrandingNewHits/>
      {/* <PopularAlbum/> */}
      <PopularSongs/>
      <AllNewSongs/>
    </>
  )
}

export default Home
