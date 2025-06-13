import Logo from "../MainLayoutComponents/Logo"
import NotificationLogo from "../MainLayoutComponents/NotificationLogo"
import Profile from "../MainLayoutComponents/Profile"
import SearchBar from "../MainLayoutComponents/SearchBar"
import SettingsLogo from "../MainLayoutComponents/SettingsLogo"
import { ModeToggle } from "../ui/mode-toggle"


const HeaderForBigScreens = () => {
  return (
    <div className="p-2 hidden md:flex justify-around items-center gap-2 max-w-screen">
      <Logo/>
      <SearchBar/>
      <div className="flex justify-center items-center gap-5 lg:gap-8">
        <NotificationLogo/>
        <ModeToggle/>
        <SettingsLogo/>
        <Profile/>
      </div>
    </div>
  )
}

export default HeaderForBigScreens
