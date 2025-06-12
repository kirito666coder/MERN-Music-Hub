import { Link } from "react-router-dom"

interface NavItemProps{
    to:string,
    label:string,
    icon:React.ReactNode
}

const NavItem = ({to,label,icon}:NavItemProps) => {
  return (
    <Link to={to} className="block">
    <li className=" px-4 py-2 rounded-md hover:opacity-70 flex flex-col md:flex-row justify-center items-center">  
    <span>{icon}</span>
    <span className=" font-medium">{label}</span>
    </li>
    </Link>
  )
}

export default NavItem
