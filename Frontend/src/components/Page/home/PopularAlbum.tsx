import PopularAlbumCard from "./Components/PopularAlbumCard"

const albums = [
    {
      title: "Happier Than Ever",
      artist: "Billie Eilish",
      listeners: "2.5M",
      coverUrl: "./assets/image.jpg"
    },
    {
      title: "Future Nostalgia",
      artist: "Dua Lipa",
      listeners: "3.1M",
      coverUrl: "./assets/image2.jpg"
    },
    {
      title: "After Hours",
      artist: "The Weeknd",
      listeners: "4.2M",
      coverUrl: "./assets/image3.jpg"
    },
    {
      title: "Fine Line",
      artist: "Harry Styles",
      listeners: "2.8M",
      coverUrl: "./assets/image4.jpg"
    }
  ];
  
  const PopularAlbum = () => {
    return (
        <>
        <div className="flex justify-between items-center mx-5 mb-3 mt-3">
        <h3 className="text-2xl font-bold">Popular Songs</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-4">
        {albums.map((album, idx) => (
            <PopularAlbumCard key={idx} album={album} />
        ))}
      </div>
        </>
    );
  };
  
  export default PopularAlbum;
