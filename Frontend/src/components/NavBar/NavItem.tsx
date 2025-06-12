import { Link } from "react-router-dom"

interface NavItemProps{
    to:string,
    label:string
}

const NavItem = ({to,label}:NavItemProps) => {
  return (
    <Link to={to} className="block">
    <li className="px-4 py-2 hover:bg-red-500 rounded-md">{label}</li>
    </Link>
  )
}

export default NavItem
