import NavBarForBigScreens from "./NavBarForBigScreens"
import NavBarForSmallScreens from "./NavBarForSmallScreens"

const NavBar = () => {
  return (
    <nav>
      <NavBarForBigScreens/>
      <NavBarForSmallScreens/>
    </nav>
  )
}

export default NavBar
