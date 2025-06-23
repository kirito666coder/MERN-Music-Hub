import ProfileNavBar from "@/components/Page/ProfilePage/ProfileNavBar"
import ProfilePageHeader from "@/components/Page/ProfilePage/ProfilePageHeader"

const Profile = () => {
    return (
        <div className=" flex-row md:flex-col">
            <div className=" flex md:hidden">
            <ProfileNavBar/>
            </div>
            <div className="md:w-[25%]">
                <ProfilePageHeader />
            </div>
        </div>
    )
}

export default Profile
