// GenresList.tsx
import GenresCards from "./GenresCards"
import MoodCard from "./MoodCard"
import pop from './assets/genrres/pop.png'
import rock from './assets/genrres/rock.png'
import hiphop from './assets/genrres/hip-hop.png'
import jazz from './assets/genrres/jazz.png'
import classical from './assets/genrres/classical.png'
import edm from './assets/genrres/edmimg.png'
import rap from './assets/genrres/rap.png'

import happy from './assets/moods/happy.png'
import sad from './assets/moods/sad.png'
import chill from './assets/moods/chill.png'
import energetic from './assets/moods/energetic.png'
import romantic from './assets/moods/romantic.png'
import Search from "@/components/MainLayoutComponents/Search"

const genresData = [
  { name: "Pop", image:pop},
  { name: "Rock", image:rock},
  { name: "Hip Hop", image:hiphop},
  { name: "Jazz", image:jazz},
  { name: "Classical", image:classical},
  { name: "Edm",image: edm},
  { name: "Rap",image: rap},
]

const moodsData = [
  { name: "Happy", image:happy},
  { name: "Sad", image:sad},
  { name: "Chill", image:chill},
  { name: "Energetic", image:energetic},
  { name: "Romantic", image:romantic},
]

const GenresList = () => {
  return (
    <div className="px-6 py-10">
      <div className="md:hidden block mb-10">
      <Search/>
      </div>
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
