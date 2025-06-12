import { Link } from "react-router-dom"

interface NavItemProps{
    to:string,
    label:string,
    icon:React.ReactNode
}

const NavItem = ({to,label,icon}:NavItemProps) => {
  return (
    <Link to={to} className="block">
    <li className="px-4 py-2 hover:bg-red-500 rounded-md">
    {icon}
    {label}</li>
    </Link>
  )
}

export default NavItem
