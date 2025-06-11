import Logo from "../home/homeComponents/Logo"
import NotificationLogo from "../home/homeComponents/NotificationLogo"
import Profile from "../home/homeComponents/Profile"

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
