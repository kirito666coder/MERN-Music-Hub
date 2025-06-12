import { Link, useLocation } from "react-router-dom"

interface NavItemProps{
    to:string,
    label:string,
    icon:(isActive:boolean)=>React.ReactNode
}

const NavItem = ({to,label,icon}:NavItemProps) => {
      const location = useLocation()
  const isActive = location.pathname === to
  return (
    <Link to={to} className="block">
    <li className=" px-4 py-2 rounded-md hover:opacity-70 flex flex-col md:flex-row justify-center items-center">  
    <span>{icon(isActive)}</span>
    <span className={`${isActive?"text-blue-500":""} font-medium`}>{label}</span>
    </li>
    </Link>
  )
}

export default NavItem
