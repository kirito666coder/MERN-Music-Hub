import { Link, useLocation } from "react-router-dom"

interface ProfileNavbarProps  {
    to: string,
    label: string,
    icon: (isActive: boolean) => React.ReactNode
}

const ProfilePageNavBarLinks = ({to,label,icon}:ProfileNavbarProps) => {
    const location = useLocation()

    const isActive = location.pathname == to
  return (
    <li>
        <Link to={to} className={` ${isActive ? "text-rose-200" : ""} 
    font-medium md:ml-2`}>
        <span>{icon}</span>
        <span>{label}</span>
        </Link>
    </li>
  )
}

export default ProfilePageNavBarLinks
