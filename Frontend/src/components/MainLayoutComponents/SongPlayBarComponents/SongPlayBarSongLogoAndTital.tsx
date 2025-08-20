import type { RootState } from "@/app/store"
import { useSelector } from "react-redux"

const SongPlayBarSongLogoAndTital = () => {

    const {title,artist,coverImage} = useSelector((stats:RootState)=>stats.song)

    return (
        <div className="flex ml-2 ">
            <div className=" h-15 mt-2 md:h-15 min-w-15 rounded-2xl overflow-hidden">
                <img src={`${coverImage}`} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="w-full sm:block hidden overflow-hidden ml-3 ">
                <h3 className=" w-full text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </h3>
                <h3 className=" w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">{artist}</h3>
            </div>
          

        </div>
    )
}

export default SongPlayBarSongLogoAndTital
