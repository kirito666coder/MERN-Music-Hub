import LikeButton from "../icons/LikeButton"

const LikeSongsCard = () => {

  
  return (
    <div className="bg-gradient-to-br  from-[#ff788f] to-[#70a4f7] dark:from-[#c4213c] dark:to-[#1770ff] h-20 w-full rounded-md flex items-center">
      <div className=" flex justify-center items-center gap-2">
      <img src="./assets/image.jpg" alt="" className="h-15 w-15 rounded-full " />
      <div className="">
        <h3 className="text-xl font-bold ">Song name</h3>
        <div className="flex gap-2  font-semibold ">
          <span>artistname</span>
          <span>plays 9M</span>
          <span className="flex"><LikeButton Liked={false}/> 7M</span>
        </div>

      </div>

      </div>

    </div>
  )
}

export default LikeSongsCard
