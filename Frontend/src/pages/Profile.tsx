import ProfileNavBar from "@/components/Page/ProfilePage/ProfileNavBar"
import ProfilePageHeader from "@/components/Page/ProfilePage/ProfilePageHeader"

const Profile = () => {
    return (
        <div className=" flex-row md:flex-col">
            <ProfileNavBar/>
            <div className="md:w-[25%]">
                <ProfilePageHeader />
            </div>
        </div>
    )
}

export default Profile
