
const PopularArtistsCard = () => {
  return (
    <div className=" relative">
      <img src="./assets/image.jpg" alt="" className=" h-90 min-w-115 rounded-2xl " />
      <div className=" flex justify-center items-center h-19 w-full absolute bottom-0 left-0">
        <div className=" w-[90%] h-[95%] rounded-full bg-accent/40 border-2 dark:border-white/30 border-black/30 flex justify-between items-center">
          <div className="flex  gap-2.5 items-center h-full border-2 border-blue-700">
        <img src="./assets/image.jpg" alt="" className=" w-15 h-15 rounded-full object-cover " />
            <h3 className="text-2xl font-semibold">Billie Eilish</h3>
            
          </div>
          <div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default PopularArtistsCard
