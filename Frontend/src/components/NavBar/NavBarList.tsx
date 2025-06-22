import { useLocation } from "react-router-dom"
import LibraryiconSvg from "../icons/LibraryiconSvg"
import LikeIconSvg from "../icons/LikeIconSvg"
import SongIconSvg from "../icons/SongIconSvg"
import SpeakericonSvg from "../icons/SpeakericonSvg"
import NavItem from "./NavItem"

const NavBarList= () => {
  const location = useLocation()
  const hideLabel = location.pathname.startsWith('/profile')
  return (
    <div className={`transition-all duration-300 ${hideLabel?"md:w-15":"md:w-35"} w-full h-[100%] md:flex md:justify-center md:items-center`}>
      
      <ul className={`flex flex-row md:flex-col justify-around items-center md:h-[50%] md:w-[80%] ${hideLabel?"h-10":"16"} overflow-hidden md:overflow-visible border-t-1 md:border-r-1 md:border-t-0`}>
        <NavItem to="/" label="Home" icon={ (isActive)=><SongIconSvg active={isActive} />}/>
        <NavItem to="/genre" label="Genre" icon={ (isActive)=><SpeakericonSvg active={isActive} />}/>
        <NavItem to="/library" label="My Library" icon={ (isActive)=><LibraryiconSvg active={isActive} />}/>
        <NavItem to="/liked" label="Liked" icon={ (isActive)=><LikeIconSvg active={isActive} />}/>
      </ul>

    </div>
  )
}

export default NavBarList
