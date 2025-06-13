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
        <Link to={to} className="block">
            <li className={` px-4 py-2 rounded-md ${isActive?'md:bg-gradient-to-r bg-gradient-to-t from-rose-600/20 via-rose-600/5 to-pink-100/5':'opacity-80'} transition-colors hover:opacity-70 flex flex-col md:flex-row justify-center items-center `}>
                <span>{icon(isActive)}</span>
                <span className={`${isActive ? "text-rose-600" : ""} font-medium`}>{label}</span>
            </li>
        </Link>
    )
}

export default NavItem
