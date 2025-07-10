import type { RootState } from "@/app/store"
import { useSelector } from "react-redux"

const SongPlayBarSongLogoAndTital = () => {

    const {title,artist,coverImage} = useSelector((stats:RootState)=>stats.song)

    return (
        <div className="flex ml-2 ">
            <div className=" h-19 md:h-15 min-w-15 rounded-2xl overflow-hidden">
                <img src="./assets/image.jpg" alt="" className="h-full w-full object-cover" />
            </div>
            <div className="w-full overflow-hidden md:block ml-3 hidden">
                <h3 className=" w-full text-lg font-semibold overflow-hidden text-ellipsis whitespace-nowrap">
                    {title}
                </h3>
                <h3 className=" w-full font-medium overflow-hidden text-ellipsis whitespace-nowrap">{artist}</h3>
            </div>
          

        </div>
    )
}

export default SongPlayBarSongLogoAndTital
