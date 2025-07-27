import GenresCards from "./GenresCards"
import MoodCard from "./MoodCard"


const genresData = [
  {
    name: "Pop",
    image: "/assets/genres/pop.jpg",
  },
  {
    name: "Rock",
    image: "/assets/genres/rock.jpg",
  },
  {
    name: "Hip Hop",
    image: "/assets/genres/hiphop.jpg",
  },
  {
    name: "Jazz",
    image: "/assets/genres/jazz.jpg",
  },
  {
    name: "Classical",
    image: "/assets/genres/classical.jpg",
  },
];

const moodsData = [
  { name: "Happy", image: "/assets/moods/happy.jpg" },
  { name: "Sad", image: "/assets/moods/sad.jpg" },
  { name: "Chill", image: "/assets/moods/chill.jpg" },
  { name: "Energetic", image: "/assets/moods/energetic.jpg" },
  { name: "Romantic", image: "/assets/moods/romantic.jpg" },
];


const GenresList = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
    {genresData.map((genre) => (
      <GenresCards key={genre.name} genre={genre} />
    ))}

    {/* Add mood cards below or in a separate section */}
    {moodsData.map((mood) => (
      <MoodCard key={mood.name} mood={mood} />
    ))}
  </div>
  )
}

export default GenresList
