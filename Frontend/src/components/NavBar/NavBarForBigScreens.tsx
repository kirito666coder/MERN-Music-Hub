import LibraryiconSvg from "../../icons/LibraryiconSvg"
import LikeIconSvg from "../../icons/LikeIconSvg"
import SongIconSvg from "../../icons/SongIconSvg"
import SpeakericonSvg from "../../icons/SpeakericonSvg"
import NavItem from "./NavItem"

const NavBarForBigScreens = () => {
  return (
    <div className="bg-red-400 h-[100%]">
      
      <ul className="flex flex-row md:flex-col">
        <NavItem to="/" label="Home" icon={<SongIconSvg/>}/>
        <NavItem to="/" label="Genre" icon={<SpeakericonSvg/>}/>
        <NavItem to="/" label="My Library" icon={<LibraryiconSvg/>}/>
        <NavItem to="/" label="Liked Songs" icon={<LikeIconSvg/>}/>
      </ul>

    </div>
  )
}

export default NavBarForBigScreens
