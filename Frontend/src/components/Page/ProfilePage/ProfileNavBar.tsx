import ProfilePageNavBarLinks from "./ProfilePageNavBarLinks"

const ProfileNavBar = () => {
  return (
    <div className="w-full md:w-[60%] ">
      <ul className="flex gap-4 justify-around items-center text-lg font-semibold">
        <ProfilePageNavBarLinks to={'/profile'} label={"profile"}/>
        <ProfilePageNavBarLinks to={'/profile/addSongs'} label={"Add Songs"}/>
      </ul>
    </div>
  )
}

export default ProfileNavBar
