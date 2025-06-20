import LikeList from "@/components/Page/LikePage/LikeList"

const LikedSong = () => {
  return (
    <div>
      <div className="flex justify-center items-center text-2xl font-bold">
      <h2>Liked songs</h2>
      </div>
      <div className="">
       <LikeList/>
      </div>
    </div>
  )
}

export default LikedSong
