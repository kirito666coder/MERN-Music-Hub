import { Link } from "react-router-dom"
import Logo from "../MainLayoutComponents/Logo"
import NotificationLogo from "../MainLayoutComponents/NotificationLogo"
import ProFileDropDownMenuForSmallScreens from "./ProFileDropDownMenuForSmallScreens"

const HeaderForSmallScreens = () => {
  return (
    <div className="p-2.5 md:hidden flex justify-between px-5 items-center gap-2 max-w-screen">
      <Link to={'/notification'}>
        <NotificationLogo/>
        </Link>

      <Logo/>
      <ProFileDropDownMenuForSmallScreens/>
    </div>
  )
}

export default HeaderForSmallScreens
