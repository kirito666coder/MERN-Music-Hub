import GenresCards from "./GenresCards"
import MoodCard from "./MoodCard"

const GenresList = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-5 m-5 gap-4">
      <GenresCards/>
      <GenresCards/>
      <MoodCard/>
    </div>
  )
}

export default GenresList
