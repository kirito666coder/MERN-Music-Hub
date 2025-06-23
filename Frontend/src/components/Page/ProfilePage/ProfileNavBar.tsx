
import ProfilePageNavBarLinks from "./ProfilePageNavBarLinks"
import ProfileSvgForProfileNavBar from "./ProfileNavBarSvgForLInks/ProfileSvgForProfileNavBar"

const ProfileNavBar = () => {
  return (
    <div className="w-full md:w-[60%] mb-5 border-b-2 md:border-b-0 md:mb-0">
      <ul className="flex gap-4 justify-around items-center text-lg font-semibold pb-2 ">
        <ProfilePageNavBarLinks to={'/profile'} label={"profile"} icon={ (isActive)=><ProfileSvgForProfileNavBar active={isActive} />}/>
        <ProfilePageNavBarLinks to={'/profile/addSongs'} label={"Add Songs"} icon={ (isActive)=><ProfileSvgForProfileNavBar active={isActive} />}/>
      </ul>
    </div>
  )
}

export default ProfileNavBar
