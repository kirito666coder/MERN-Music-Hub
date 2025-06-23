import ProfilePageNavBarLinks from "./ProfilePageNavBarLinks"

const ProfileNavBar = () => {
  return (
    <div className="w-full md:w-[60%] mb-5 border-b-2 md:border-b-0 md:mb-0">
      <ul className="flex gap-4 justify-around items-center text-lg font-semibold pb-2 ">
        <ProfilePageNavBarLinks to={'/profile'} label={"profile"}/>
        <ProfilePageNavBarLinks to={'/profile/addSongs'} label={"Add Songs"}/>
      </ul>
    </div>
  )
}

export default ProfileNavBar
