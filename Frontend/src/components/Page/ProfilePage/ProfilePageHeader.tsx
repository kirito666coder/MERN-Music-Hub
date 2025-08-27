import type { RootState } from "@/app/store"
import { User } from "lucide-react";
import { useSelector } from "react-redux"
import { NavLink } from "react-router-dom";

const ProfilePageHeader = () => {
  const { user } = useSelector((state: RootState) => state.user)
 
  const highResImage = user?.image?.replace('=s96-c', '=s400-c');

  return (
    <div className=" md:h-[90vh] md:flex justify-center items-center">
    <div className="border-b-2 md:border-b-0 md:border-r-2 pb-5 ]">
      <div className=" h-40 md:h-75 w-[90%] mx-auto flex items-center md:flex-col gap-3">
        <div className="h-35 w-35 md:h-60 md:w-60 rounded-full bg-white overflow-hidden">
          <img
            src={highResImage}
            alt="User"
            className="h-full w-full object-cover filter-none dark:invert-0"
            />
        </div>

        <div className="md:flex-col md:h-10 md:w-full">
          <h2 className="text-2xl font-bold">{user?.name}</h2>
          <h3 className="text-sm font-semibold">{user?.email}</h3>
        </div>
      </div>
      <NavLink to="/settings/editProfile" className="block">
      <button
        className=" cursor-pointer w-[90%] h-12 mx-auto mt-6 flex items-center justify-center gap-2
                   rounded-xl border border-gray-200 dark:border-gray-700
                   bg-white/30 dark:bg-black/30 backdrop-blur-md
                   text-gray-800 dark:text-gray-200 font-medium
                   shadow-md hover:shadow-lg
                   transition-all duration-300 ease-in-out transform hover:scale-[1.02]
                   hover:bg-white/40 dark:hover:bg-black/40"
      >
        <User className="w-5 h-5" />
        Edit Profile
      </button>
    </NavLink>
            </div>
    </div>
  )
}

export default ProfilePageHeader
