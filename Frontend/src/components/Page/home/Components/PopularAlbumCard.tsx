import PlayButtonForPopularAlbum from "./PlayButtonForPopularAlbum";

interface Album {
    title: string;
    artist: string;
    listeners: string;
    coverUrl: string;
  }
  
  const PopularAlbumCard = ({ album }: { album: Album }) => {
    return (
      <div className="relative rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group">
        {/* Cover */}
        <img 
          src={album.coverUrl} 
          alt={album.title} 
          className="h-64 md:h-72 w-full object-cover"
        />
  
        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 w-full flex justify-center items-end">
          <div className="w-[90%] mb-2 p-2 md:p-3 
            bg-black/40 backdrop-blur-md rounded-xl flex justify-between items-center 
            border border-white/20">
            
            {/* Album thumbnail + info */}
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="relative flex-shrink-0">
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] blur-[6px] opacity-60" />
                <img 
                  src={album.coverUrl} 
                  alt={album.title} 
                  className="relative w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border-2 border-white/20"
                />
              </div>
              <div className="text-white overflow-hidden">
                <h3 className="text-sm md:text-base font-semibold truncate">{album.title}</h3>
                <h5 className="text-xs md:text-sm opacity-80 truncate">
                  {album.artist} • <span className="font-semibold">{album.listeners}</span> listeners
                </h5>
              </div>
            </div>
  
            {/* Play button: always visible on desktop, fade in on hover on mobile */}
            <div className="opacity-100 md:opacity-100 group-hover:opacity-100 transition-opacity duration-300">
              <PlayButtonForPopularAlbum />
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default PopularAlbumCard;