import Logo from "./homeComponents/Logo"
import NotificationLogo from "./homeComponents/NotificationLogo"
import Profile from "./homeComponents/Profile"
import SearchBar from "./homeComponents/SearchBar"
import SettingsLogo from "./homeComponents/SettingsLogo"


const HeaderForGigScreens = () => {
  return (
    <div className="p-2 flex justify-around items-center gap-2">
      <Logo/>
      <SearchBar/>
      <div>
        <NotificationLogo/>
        <SettingsLogo/>
        <Profile/>
      </div>
    </div>
  )
}

export default HeaderForGigScreens
