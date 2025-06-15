import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection"

const PopularSongs = () => {
  return (
    <div className="h-70  mt-5">
     <div className="flex justify-between items-center mx-5 my-2">
      <h3 className="text-2xl font-bold">Popular Songs</h3>
      <span className="font-semibold opacity-55 cursor-pointer">See All</span>
      </div>
      
      <div className="mx-4 h-40 w-[95%] md:w-[98%] overflow-x-scroll overflow-y-hidden flex flex-row gap-3 scroll-smooth  [scrollbar-width:0] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
        <PopularSongsCarForPopularSongsSection/>
      </div>
    </div>
  )
}

export default PopularSongs
