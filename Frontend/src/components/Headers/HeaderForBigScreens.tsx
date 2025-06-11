import Logo from "../home/homeComponents/Logo"
import NotificationLogo from "../home/homeComponents/NotificationLogo"
import Profile from "../home/homeComponents/Profile"
import SearchBar from "../home/homeComponents/SearchBar"
import SettingsLogo from "../home/homeComponents/SettingsLogo"


const HeaderForBigScreens = () => {
  return (
    <div className="p-2 hidden md:flex justify-around items-center gap-2 max-w-screen">
      <Logo/>
      <SearchBar/>
      <div className="flex justify-center items-center gap-5 lg:gap-8">
        <NotificationLogo/>
        <SettingsLogo/>
        <Profile/>
      </div>
    </div>
  )
}

export default HeaderForBigScreens
