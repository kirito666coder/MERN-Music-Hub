// GenresList.tsx
import GenresCards from "./GenresCards"
import MoodCard from "./MoodCard"

const genresData = [
  { name: "Pop", image: "/assets/genres/pop.jpg" },
  { name: "Rock", image: "/assets/genres/rock.jpg" },
  { name: "Hip Hop", image: "/assets/genres/hiphop.jpg" },
  { name: "Jazz", image: "/assets/genres/jazz.jpg" },
  { name: "Classical", image: "/assets/genres/classical.jpg" },
]

const moodsData = [
  { name: "Happy", image: "/assets/moods/happy.jpg" },
  { name: "Sad", image: "/assets/moods/sad.jpg" },
  { name: "Chill", image: "/assets/moods/chill.jpg" },
  { name: "Energetic", image: "/assets/moods/energetic.jpg" },
  { name: "Romantic", image: "/assets/moods/romantic.jpg" },
]

const GenresList = () => {
  return (
    <div className="px-6 py-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent">
          Discover by Vibe
        </h1>
        <p className="text-lg opacity-80 mt-2">
          Browse your favorite <span className="text-pink-500 font-semibold">genres</span> 
          & match your <span className="text-blue-400 font-semibold">mood</span>
        </p>
      </div>

      {/* Genres */}
      <h2 className="text-2xl font-bold mb-5">Genres</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
        {genresData.map((genre) => (
          <GenresCards key={genre.name} genre={genre} />
        ))}
      </div>

      {/* Moods */}
      <h2 className="text-2xl font-bold mb-5">Moods</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {moodsData.map((mood) => (
          <MoodCard key={mood.name} mood={mood} />
        ))}
      </div>
    </div>
  )
}

export default GenresList
