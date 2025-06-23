import ProfileNavBar from "@/components/Page/ProfilePage/ProfileNavBar"
import ProfilePageHeader from "@/components/Page/ProfilePage/ProfilePageHeader"
import { Outlet } from "react-router-dom"

const Profile = () => {
    return (
        <div className=" md:flex">
            <div className=" flex md:hidden">
            <ProfileNavBar/>
            </div>
            <div className="md:w-[25%]">
                <ProfilePageHeader />
            </div>
            <div className="md:w-[75%">
                <Outlet/>
            </div>
        </div>
    )
}

export default Profile
