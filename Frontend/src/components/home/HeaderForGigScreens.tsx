import Logo from "./homeComponents/Logo"
import NotificationLogo from "./homeComponents/NotificationLogo"
import SearchBar from "./homeComponents/SearchBar"


const HeaderForGigScreens = () => {
  return (
    <div className="p-2 flex justify-around items-center gap-2">
      <Logo/>
      <SearchBar/>
      <div>
        <NotificationLogo/>
      </div>
    </div>
  )
}

export default HeaderForGigScreens
