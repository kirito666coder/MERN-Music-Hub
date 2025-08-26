import { useNavigate } from "react-router-dom"
import slugify from "slugify"

// MoodCard.tsx
type Mood = {
  name: string
  image: string
}

const MoodCard = ({ mood }: { mood: Mood }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    const slug = slugify(mood.name, { lower: true });
    navigate(`/search/${slug}`);
  };
  return (
    <div
    onClick={()=>handleClick()}
    className="relative cursor-pointer rounded-2xl h-60 overflow-hidden group shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105">
      {/* Background image */}
      <img 
        src={mood.image} 
        alt={mood.name} 
        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 text-white">
        <h3 className="text-2xl font-bold drop-shadow-lg">{mood.name}</h3>
      </div>
    </div>
  )
}

export default MoodCard
