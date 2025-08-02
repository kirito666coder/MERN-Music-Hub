import PlayButton from "../../Buttons/PlayButton";
import LikeButton from "../../icons/LikeButton";

const likedSongs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    plays: "987M",
    likes: "23M",
    coverUrl: "/assets/image.jpg"
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    plays: "832M",
    likes: "18M",
    coverUrl: "/assets/image2.jpg"
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    plays: "765M",
    likes: "20M",
    coverUrl: "/assets/image3.jpg"
  },
  {
    title: "Watermelon Sugar",
    artist: "Harry Styles",
    plays: "923M",
    likes: "21M",
    coverUrl: "/assets/image2.jpg"
  },
  {
    title: "Save Your Tears",
    artist: "The Weeknd",
    plays: "889M",
    likes: "19M",
    coverUrl: "/assets/image1.jpg"
  }
];

const LikeSongsCard = () => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-4">
      {likedSongs.length > 0 ? (
        likedSongs.map((song, index) => (
          <div
            key={index}
            className="relative flex items-center bg-gradient-to-br from-[#ff788f] to-[#70a4f7] 
              dark:from-[#c4213c] dark:to-[#1770ff] rounded-xl p-3 shadow-lg 
              hover:scale-105 transition-transform overflow-hidden group"
          >
            <img
              src={song.coverUrl}
              alt={song.title}
              className="w-16 h-16 rounded-xl object-cover mr-3"
            />

            <div className="flex-1 overflow-hidden">
              <h3 className="text-lg font-bold truncate">{song.title}</h3>
              <div className="flex flex-wrap items-center gap-2 text-sm font-medium">
                <span>{song.artist}</span>
                <span>{song.plays} plays</span>
                <span className="flex items-center">
                  <LikeButton Liked={true} />
                  {song.likes}
                </span>
              </div>
            </div>

            {/* Play button appears on hover */}
            <div className="absolute right-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <PlayButton />
            </div>
          </div>
        ))
      ) : (
        <div className="col-span-full text-center text-gray-500 dark:text-gray-400 font-semibold py-8">
          No liked songs yet
        </div>

      )}
    </div>
  );
};

export default LikeSongsCard;
