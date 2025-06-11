import { Outlet } from "react-router-dom"
import HeaderForBigScreens from "./Headers/HeaderForBigScreens"
import HeaderForSmallScreens from "./Headers/HeaderForSmallScreens"

const MainLayout = () => {
  return (
    <div>
      <header>
        <HeaderForBigScreens/>
        <HeaderForSmallScreens/>
      </header>
      <nav>

      </nav>
      <Outlet/>
    </div>
  )
}

export default MainLayout
