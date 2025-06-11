import { Outlet } from "react-router-dom"
import HeaderForBigScreens from "./Headers/HeaderForBigScreens"
import HeaderForSmallScreens from "./Headers/HeaderForSmallScreens"

const MainLayout = () => {
  return (
    <>
      <header>
        <HeaderForBigScreens/>
        <HeaderForSmallScreens/>
      </header>
      <nav>

      </nav>
      <Outlet/>
    </>
  )
}

export default MainLayout
