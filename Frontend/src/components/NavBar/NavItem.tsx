import { Link, useLocation } from "react-router-dom"

interface NavItemProps {
    to: string,
    label: string,
    icon: (isActive: boolean) => React.ReactNode
}

const NavItem = ({ to, label, icon }: NavItemProps) => {
    const location = useLocation()

    const isActive = location.pathname == to
    console.log(location.pathname ,to,isActive)

    return (
        <li className="flex-1">
            <Link to={to} className={` px-4 py-2 ${isActive?'md:bg-gradient-to-r bg-gradient-to-t from-rose-600/20 via-rose-600/5 to-pink-100/5':'opacity-80'} transition-colors hover:opacity-70 flex flex-col md:flex-row justify-center items-center md:h-15 md:w-28 md:rounded-s-md`}>
                <span>{icon(isActive)}</span>
                <span className={`${isActive ? "text-rose-500" : ""} font-medium text-nowrap md:text-wrap`}>{label}</span>
            </Link>
        </li>
    )
}

export default NavItem
