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
    <li className="">
        <Link to={to} className={` ${isActive ? "border-b-4 dark:border-b-blue-300 border-b-blue-600 px-1 py-1.5" : ""} 
    font-medium md:ml-2 flex justify-center items-center`}>
        <span>{icon(isActive)}</span>
        <span>{label}</span>
        </Link>
    </li>
  )
}

export default ProfilePageNavBarLinks
