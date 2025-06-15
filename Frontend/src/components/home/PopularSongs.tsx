import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection"

const PopularSongs = () => {
  return (
    <div className="h-70  mt-5">
     <div className="flex justify-between items-center mx-5 my-2">
      <h3 className="text-2xl font-bold">Popular Songs</h3>
      <span className="font-semibold opacity-55 cursor-pointer">See All</span>
      </div>
      
      <div className="mx-2.5 h-50 w-full overflow-x-scroll flex flex-row gap-3">
        <PopularSongsCarForPopularSongsSection/>
      </div>
    </div>
  )
}

export default PopularSongs
