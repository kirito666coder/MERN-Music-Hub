import PopularArtists from "@/components/home/PopularArtists"
import PopularSongs from "@/components/home/PopularSongs"
import TrandingNewHits from "@/components/home/TrandingNewHits"

const Home = () => {
  return (
    <>
      <TrandingNewHits/>
      <PopularArtists/>
      <PopularSongs/>
    </>
  )
}

export default Home
