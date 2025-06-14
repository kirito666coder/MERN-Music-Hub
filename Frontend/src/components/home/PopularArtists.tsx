import PopularArtistsCard from "./Components/PopularArtistsCard"

const PopularArtists = () => {
  return (
    <div>

    <div className="mt-10 h-90 m-2.5 flex gap-5 md:gap-0 justify-around overflow-x-scroll overflow-y-hidden md:w-[99%] w-[96%] md:overflow-hidden scroll-smooth  [scrollbar-width:0] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
      <PopularArtistsCard/>
      <PopularArtistsCard/>
      <PopularArtistsCard/>
    </div>
    </div>
  )
}

export default PopularArtists
