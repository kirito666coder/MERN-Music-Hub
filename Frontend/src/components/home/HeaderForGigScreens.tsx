import Logo from "./homeComponents/Logo"
import NotificationLogo from "./homeComponents/NotificationLogo"
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
      </div>
    </div>
  )
}

export default HeaderForGigScreens
