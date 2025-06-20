import AllNewSongs from "@/components/Page/home/AllNewSongs"
import PopularArtists from "@/components/Page/home/PopularArtists"
import PopularSongs from "@/components/Page/home/PopularSongs"
import TrandingNewHits from "@/components/Page/home/TrandingNewHits"

const Home = () => {
  return (
    <>
      <TrandingNewHits/>
      <PopularArtists/>
      <PopularSongs/>
      <AllNewSongs/>
    </>
  )
}

export default Home
