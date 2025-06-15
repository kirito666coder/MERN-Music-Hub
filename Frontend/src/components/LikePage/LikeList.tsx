import LikeSongsCard from "./LikeSongsCard"

const LikeList = () => {
  return (
    <div className=" grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 mx-4">
      <LikeSongsCard/>
      <LikeSongsCard/>
      <LikeSongsCard/>
    </div>
  )
}

export default LikeList
