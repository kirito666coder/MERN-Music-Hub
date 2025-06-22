import PlayButton from "@/components/Buttons/PlayButton"

const PopularSongsCarForPopularSongsSection = () => {
  return ( 
    <div className="  min-h-40 min-w-50 overflow-hidden group ">
        <div className="relative overflow-hidden">
      <img src="./assets/image.jpg" alt="" className=" object-cover rounded-sm  h-40 w-50" />
     
      <div className=" absolute group-hover:bottom-2.5 right-2 bottom-[-100px] transition-all duration-300 ">
        <PlayButton/>
      </div>
        </div>
       <div className="bg-accent/70 h-15 rounded-b-lg">
       <h5 className="text-lg font-semibold p-2">Song name</h5>
       </div>
    </div>
  )
}

export default PopularSongsCarForPopularSongsSection
