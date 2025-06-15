import { useSelector } from "react-redux"
import type { RootState } from "../../app/store"

const Profile = () => {
    const {user} = useSelector((state:RootState)=>state.user)
  return (
    <div className=" cursor-pointer">
      <img 
      src={`${user?.image}`} 
      alt="Profile"
      referrerPolicy="no-referrer"  className="h-12 w-12 rounded-full"/>
    </div>
  )
}

export default Profile
