import { getAllAlbumsApi } from "@/api/AlbumApi";

const albums = [
  {
    id: 1,
    title: 'Summer Vibes',
    artist: 'DJ Sunset',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 2,
    title: 'Chill Beats',
    artist: 'Lo-Fi Boy',
    coverUrl: './assets/image.jpg',
  },
  {
    id: 3,
    title: 'Night Drive',
    artist: 'Synthwave',
    coverUrl: './assets/image.jpg',
  },
];

const AlbumsList = () => {
    const handleShowAllAlbums = async () => {
        try {
          const res = await getAllAlbumsApi()
    
          if (res && 'albums' in res && Array.isArray(res.albums)) {
            console.log(albums)
          } else {
            console.error("API error:", res);
           
          }
         
        } catch (error) {
          console.error("Album fetch error:", error);
        }
      };
    
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
      {albums.map((album) => (
        <div
          key={album.id}
          className=" rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] hover:scale-105 transition-transform"
        >
          <img
            src={album.coverUrl}
            alt={album.title}
            className="w-full h-60 object-cover "
          />
          <div className="p-4 text-white">
            <h2 className="text-lg font-semibold">{album.title}</h2>
            <p className="text-sm opacity-90">{album.artist}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AlbumsList;
