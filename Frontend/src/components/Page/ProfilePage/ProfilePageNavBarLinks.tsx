import { Link } from "react-router-dom"

const ProfilePageNavBarLinks = ({to,label,icon}) => {
  return (
    <li>
        <Link to={to}>
        <span>{icon}</span>
        <span>{label}</span>
        </Link>
    </li>
  )
}

export default ProfilePageNavBarLinks
