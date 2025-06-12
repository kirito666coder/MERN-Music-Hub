import { Link } from "react-router-dom"

const NavBarForBigScreens = () => {
  return (
    <div className="bg-red-400 h-[100%]">
      
      <ul>
        <Link to={'/'}><li>home</li></Link>
        <Link to={'/'}><li>Genre</li></Link>
        <Link to={'/'}><li>my Libary</li></Link>
        <Link to={'/'}><li>lied songs</li></Link>
      </ul>

    </div>
  )
}

export default NavBarForBigScreens
