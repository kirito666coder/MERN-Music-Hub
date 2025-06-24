import type { RootState } from "@/app/store"
import { useSelector } from "react-redux"

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
      <p className=" h-10 w-[90%] rounded-2xl border-2 mx-auto mt-5 flex items-center px-3 py-1">Bio</p>
      <button className="h-10 w-[90%] rounded-2xl border-3 mx-auto mt-5 flex items-center justify-center py-5 dark:hover:bg-gray-700 dark:bg-gray-800 cursor-pointer bg-gray-300 hover:bg-gray-200">Edit Profile</button>
            </div>
    </div>
  )
}

export default ProfilePageHeader
