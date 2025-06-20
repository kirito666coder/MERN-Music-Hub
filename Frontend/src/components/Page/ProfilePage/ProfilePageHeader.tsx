

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

    </div>
  )
}

export default ProfilePageHeader
