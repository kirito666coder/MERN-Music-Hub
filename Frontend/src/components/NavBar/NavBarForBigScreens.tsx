import LibraryiconSvg from "../../icons/LibraryiconSvg"
import LikeIconSvg from "../../icons/LikeIconSvg"
import SongIconSvg from "../../icons/SongIconSvg"
import SpeakericonSvg from "../../icons/SpeakericonSvg"
import NavItem from "./NavItem"

const NavBarForBigScreens = () => {
  return (
    <div className="h-[100%] md:flex md:justify-center md:items-center">
      
      <ul className="flex flex-row md:flex-col justify-around items-center md:h-[50%] rounded-full md:w-[80%] bg-gray-100 h-16">
        <NavItem to="/" label="Home" icon={<SongIconSvg/>}/>
        <NavItem to="/" label="Genre" icon={<SpeakericonSvg/>}/>
        <NavItem to="/" label="My Library" icon={<LibraryiconSvg/>}/>
        <NavItem to="/" label="Liked" icon={<LikeIconSvg/>}/>
      </ul>

    </div>
  )
}

export default NavBarForBigScreens
