import GenresCards from "./GenresCards"

const GenresList = () => {
  return (
    <div className=" grid grid-cols-2 md:grid-cols-5 m-5 gap-4">
      <GenresCards/>
      <GenresCards/>
    </div>
  )
}

export default GenresList
