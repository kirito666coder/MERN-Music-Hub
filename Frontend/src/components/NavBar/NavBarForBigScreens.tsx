import NavItem from "./NavItem"

const NavBarForBigScreens = () => {
  return (
    <div className="bg-red-400 h-[100%]">
      
      <ul>
        <NavItem to="/" label="Home"/>
        <NavItem to="/" label="Genre"/>
        <NavItem to="/" label="My Library"/>
        <NavItem to="/" label="Liked Songs"/>
      </ul>

    </div>
  )
}

export default NavBarForBigScreens
