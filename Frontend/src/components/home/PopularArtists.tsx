import PopularArtistsCard from "./Components/PopularArtistsCard"

const PopularArtists = () => {
  return (
    <div className="mt-15">
      <div className="flex justify-between items-center mx-5 my-2">
      <h3 className="text-2xl font-bold">Popular Artists</h3>
      <span className="font-semibold opacity-55">See All</span>
      </div>
    <div className="h-90 m-2.5 flex gap-5 md:gap-0 justify-around overflow-x-scroll overflow-y-hidden md:w-[99%] w-[96%] md:overflow-hidden scroll-smooth  [scrollbar-width:0] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden ">
      <PopularArtistsCard/>
      <PopularArtistsCard/>
      <PopularArtistsCard/>
    </div>
    </div>
  )
}

export default PopularArtists
