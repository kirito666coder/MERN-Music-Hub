import Logo from "../MainLayoutComponents/Logo"
import NotificationLogo from "../MainLayoutComponents/NotificationLogo"
import Profile from "../MainLayoutComponents/Profile"

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
