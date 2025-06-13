import LikeIconSvg from "@/components/icons/LikeIconSvg"

const TrandingNewHits = () => {
    return (
        <div className="bg-gradient-to-br from-cyan-800/90  via-cyan-950 to-cyan-950 mx-2.5 mt-4 rounded-md h-40">
            <div className="px-8 text-white">
                <h2 className=" text-xs pt-3 opacity-70">Tranding New Hit</h2>
                <h1 className="text-4xl font-bold pt-3">Lovely</h1>
                <h3 className="font-semibold text-sm pt-2">Billie Eilish</h3>
                  
                  <div className="flex items-center gap-4">
                <button className="px-4 py-0.5 rounded-2xl border-2 border-white mt-2 text-md bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:brightness-110 transition-all duration-300 font-semibold ">
                    Listen Now
                </button>
                <LikeIconSvg/>
                  </div>
            </div>

        </div>

    )
}

export default TrandingNewHits
