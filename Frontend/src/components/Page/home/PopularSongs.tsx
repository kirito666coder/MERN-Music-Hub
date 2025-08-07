import PopularSongsCarForPopularSongsSection from "./Components/PopularSongsCarForPopularSongsSection"

const popularSongsData = [
  {
    title: "Circles",
    artist: "Post Malone",
    coverUrl: "/assets/image1.jpg"
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    coverUrl: "/assets/image2.jpg"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    coverUrl: "/assets/image3.jpg"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    coverUrl: "/assets/image4.jpg"
  },
  {
    title: "Circles",
    artist: "Post Malone",
    coverUrl: "/assets/image1.jpg"
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    coverUrl: "/assets/image2.jpg"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    coverUrl: "/assets/image3.jpg"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    coverUrl: "/assets/image4.jpg"
  },
  {
    title: "Circles",
    artist: "Post Malone",
    coverUrl: "/assets/image1.jpg"
  },
  {
    title: "Good 4 U",
    artist: "Olivia Rodrigo",
    coverUrl: "/assets/image2.jpg"
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    coverUrl: "/assets/image3.jpg"
  },
  {
    title: "Stay",
    artist: "The Kid LAROI & Justin Bieber",
    coverUrl: "/assets/image4.jpg"
  },
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    coverUrl: "/assets/image.jpg"
  }
];


const PopularSongs = () => {
  return (
    <div className="mt-5">
      <div className="flex justify-between items-center mx-5 mb-3">
        <h3 className="text-2xl font-bold">Popular Songs</h3>
      </div>
      
      <div className="mx-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 overflow-scroll scroll-smooth [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
        {popularSongsData.map((song, index) => (
          <PopularSongsCarForPopularSongsSection 
            key={index}
            title={song.title}
            artist={song.artist}
            coverUrl={song.coverUrl}
          />
        ))}
      </div>
    </div>
  )
}

export default PopularSongs
