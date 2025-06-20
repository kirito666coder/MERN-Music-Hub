

const ProfilePageHeader = () => {
  return (
    <div className="border-b-2 md:border-b-0 md:border-r-2 pb-5">
    <div className=" h-40 w-[90%] mx-auto flex items-center gap-3">
      <div className=" h-35 w-35 rounded-full bg-white "></div>
       <div className=" ">
       <h2 className="text-2xl font-bold">User name</h2>
        <h3 className="text-sm font-semibold">Email Address</h3>
       </div>
    </div>
    <p className=" h-10 w-[90%] rounded-2xl border-2 mx-auto mt-5 flex items-center px-3 py-1">Bio</p>
     <button className="h-10 w-[90%] rounded-2xl border-3 mx-auto mt-5 flex items-center justify-center py-5 dark:hover:bg-gray-700 dark:bg-gray-800 cursor-pointer bg-gray-300 hover:bg-gray-200">Edit Profile</button>
    </div>
  )
}

export default ProfilePageHeader
