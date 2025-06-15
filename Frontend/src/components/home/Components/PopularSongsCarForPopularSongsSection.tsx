import PlayButton from "@/components/Buttons/PlayButton"

const PopularSongsCarForPopularSongsSection = () => {
  return ( 
    <div className=" relative  h-40 w-50 overflow-hidden group hover:rounded-2xl transition-all duration-300">
      <img src="./assets/image.jpg" alt="" className=" object-cover rounded-sm  h-40 w-50" />
     
      <button className=" absolute group-hover:bottom-2.5 right-2 bottom-[-100px] transition-all duration-300">
        <PlayButton/>
      </button>

    </div>
  )
}

export default PopularSongsCarForPopularSongsSection
