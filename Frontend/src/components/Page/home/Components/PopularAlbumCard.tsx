import PlayButtonForPopularAlbum from "./PlayButtonForPopularAlbum";

const PopularAlbumCard = () => {
  return (
    <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
      {/* Album cover */}
      <img 
        src="./assets/image.jpg" 
        alt="Album Cover" 
        className="h-60 md:h-72 w-full object-cover"
      />

      {/* Bottom overlay */}
      <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
        <div className="w-[90%] mb-2 p-2 md:p-3 bg-black/40 backdrop-blur rounded-xl flex justify-between items-center border border-white/20">
          
          {/* Album thumbnail & info */}
          <div className="flex items-center gap-3">
            <img 
              src="./assets/image.jpg" 
              alt="Album" 
              className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/30"
            />
            <div className="text-white">
              <h3 className="text-base md:text-lg font-semibold truncate">Billie Eilish</h3>
              <h5 className="text-xs md:text-sm font-medium opacity-80">
                <span className="font-semibold">2.5M</span> listeners
              </h5>
            </div>
          </div>

          {/* Play button */}
          <PlayButtonForPopularAlbum />
        </div>
      </div>
    </div>
  );
};

export default PopularAlbumCard;
