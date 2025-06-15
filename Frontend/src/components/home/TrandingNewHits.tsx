import LikeButton from "../icons/LikeButton"

const TrandingNewHits = () => {
    return (
        <div className="bg-gradient-to-br from-cyan-800/90  via-cyan-950 to-cyan-950 mx-2.5 mt-4 rounded-md h-40 flex justify-between overflow-hidden relative">
            <div className="px-8 text-white w-full">
                <h2 className=" text-xs pt-3 opacity-70">Tranding New Hit</h2>
                <h1 className="text-4xl font-bold pt-3">Lovely</h1>
                <h3 className="font-semibold text-sm pt-2">Billie Eilish</h3>
                  
                  <div className="flex items-center gap-2">
                <button className=" cursor-pointer px-4 py-0.5 rounded-2xl border-2 border-white mt-2 text-md bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:brightness-110 transition-all duration-300 font-semibold ">
                    Listen Now
                </button>
                  <LikeButton/>
                  </div>
            </div>

                 <h4 className="text-lg font-semibold opacity-90 absolute bottom-5 left-[48%] text-white" >6Million Plays</h4>

            <div className=" w-full flex  justify-end gap-1 ">
                 <img src="./assets/image.jpg" alt="image" className="w-39 h-full object-cover grayscale hover:grayscale-0 transition-all duration-300" />
                 <img src="./assets/image1.jpg" alt="image" className="w-30 h-full object-cover hidden md:block grayscale hover:grayscale-0 transition-all duration-300" />
                 <img src="./assets/image2.jpg" alt="image" className="w-50 h-full object-cover hidden md:block grayscale hover:grayscale-0 transition-all duration-300" />
                 <img src="./assets/image3.jpg" alt="image" className="w-35 h-full object-cover hidden md:block grayscale hover:grayscale-0 transition-all duration-300" />

            </div>

        </div>

    )
}

export default TrandingNewHits
