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
    </div>
  )
}

export default MainLayout
