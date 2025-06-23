import SongIconSvg from "@/components/icons/SongIconSvg"
import ProfilePageNavBarLinks from "./ProfilePageNavBarLinks"

const ProfileNavBar = () => {
  return (
    <div className="w-full md:w-[60%] mb-5 border-b-2 md:border-b-0 md:mb-0">
      <ul className="flex gap-4 justify-around items-center text-lg font-semibold pb-2 ">
        <ProfilePageNavBarLinks to={'/profile'} label={"profile"} icon={ (isActive)=><SongIconSvg active={isActive} />}/>
        <ProfilePageNavBarLinks to={'/profile/addSongs'} label={"Add Songs"} icon={ (isActive)=><SongIconSvg active={isActive} />}/>
      </ul>
    </div>
  )
}

export default ProfileNavBar
