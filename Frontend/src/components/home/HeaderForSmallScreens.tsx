import Logo from "./homeComponents/Logo"
import NotificationLogo from "./homeComponents/NotificationLogo"
import Profile from "./homeComponents/Profile"

const HeaderForSmallScreens = () => {
  return (
    <div className="p-2 md:hidden flex justify-between px-5 items-center gap-2 max-w-screen">
      <NotificationLogo/>
      <Logo/>
      <Profile/>
    </div>
  )
}

export default HeaderForSmallScreens
