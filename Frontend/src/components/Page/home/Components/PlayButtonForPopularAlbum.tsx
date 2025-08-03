const PlayButtonForPopularAlbum = () => {
    return (
      <button className="cursor-pointer w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full 
        bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] border-2 border-white 
        hover:scale-105 transition-transform duration-300 shadow-md">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 fill-white"
          viewBox="0 0 24 24"
        >
          <polygon points="5,3 19,12 5,21" />
        </svg>
      </button>
    );
  };
  
  export default PlayButtonForPopularAlbum;
  