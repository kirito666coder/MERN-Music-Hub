import LibraryiconSvg from "../../icons/LibraryiconSvg"
import LikeIconSvg from "../../icons/LikeIconSvg"
import SongIconSvg from "../../icons/SongIconSvg"
import SpeakericonSvg from "../../icons/SpeakericonSvg"
import NavItem from "./NavItem"

const NavBarForBigScreens = () => {
  return (
    <div className="h-[100%] md:flex md:justify-center md:items-center">
      
      <ul className="flex flex-row md:flex-col justify-around items-center md:h-[50%] md:rounded-md md:w-[80%] bg-gray-100 h-16 overflow-hidden">
        <NavItem to="/" label="Home" icon={ (isActive)=><SongIconSvg active={isActive} />}/>
        <NavItem to="/genre" label="Genre" icon={ (isActive)=><SpeakericonSvg active={isActive} />}/>
        <NavItem to="/library" label="My Library" icon={ (isActive)=><LibraryiconSvg active={isActive} />}/>
        <NavItem to="/liked" label="Liked" icon={ (isActive)=><LikeIconSvg active={isActive} />}/>
      </ul>

    </div>
  )
}

export default NavBarForBigScreens
