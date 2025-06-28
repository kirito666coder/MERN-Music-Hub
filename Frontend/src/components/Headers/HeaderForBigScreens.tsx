import { Link, useLocation } from "react-router-dom"
import Logo from "../MainLayoutComponents/Logo"
import NotificationLogo from "../MainLayoutComponents/NotificationLogo"
import Profile from "../MainLayoutComponents/Profile"
import SearchBar from "../MainLayoutComponents/SearchBar"
import SettingsLogo from "../MainLayoutComponents/SettingsLogo"
import { ModeToggle } from "../ui/mode-toggle"
import ProfileNavBar from "../Page/ProfilePage/ProfileNavBar"


const HeaderForBigScreens = () => {
  const location = useLocation();
  const shouldHide = location.pathname.startsWith('/profile')

  return (
    <div className="p-2 hidden md:flex justify-around items-center gap-2 max-w-screen">
      <Logo/>
      {
        shouldHide ?(
          <ProfileNavBar/>
        ):(
          <SearchBar/>
        )
      }
      <div className="flex justify-center items-center gap-5 lg:gap-8">
        <NotificationLogo/>
        <ModeToggle/>
        <Link to={'/settings'}>
        <SettingsLogo/>
        </Link>
        
        <Link to={"/profile"}>
        <Profile/>
        </Link>
        
      </div>
    </div>
  )
}

export default HeaderForBigScreens
