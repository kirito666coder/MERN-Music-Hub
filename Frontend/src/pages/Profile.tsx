import ProfileNavBar from "@/components/Page/ProfilePage/ProfileNavBar"
import ProfilePageHeader from "@/components/Page/ProfilePage/ProfilePageHeader"
import { Outlet } from "react-router-dom"

const Profile = () => {
    return (
        <div className=" md:flex relative">
            <div className=" flex md:hidden">
            <ProfileNavBar/>
            </div>
            <div className="md:w-[25%] md:h-[90vh] md:sticky top-0 left-0">
                <ProfilePageHeader />
            </div>
            <div className="md:w-[75%]">
                <Outlet/>
            </div>
        </div>
    )
}

export default Profile
