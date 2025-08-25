import { motion } from "framer-motion";
import { Music, Disc3, Library, PlusCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import type { Album } from "@/types/album";
import { useNavigate } from "react-router-dom";
import { getAllAlbumsApi } from "@/api/AlbumApi";
import slugify from "slugify";

// Dummy Songs
const dummySongs = [
    {
      _id: "1",
      title: "Lost in Time",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1608889175123-b5d62f2c8951?w=400&h=400&fit=crop",
    },
    {
      _id: "2",
      title: "Night Drive",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1619983081601-5fc16f0a9198?w=400&h=400&fit=crop",
    },
    {
      _id: "3",
      title: "Eclipse",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?w=400&h=400&fit=crop",
    },
    {
      _id: "4",
      title: "Ocean Breeze",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=400&fit=crop",
    },
    {
      _id: "5",
      title: "City Lights",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=400&h=400&fit=crop",
    },
    {
      _id: "6",
      title: "Golden Hour",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1473186578172-c141e6798cf4?w=400&h=400&fit=crop",
    },
    {
      _id: "7",
      title: "Afterglow",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop",
    },
    {
      _id: "8",
      title: "Dreamcatcher",
      artist: "Cyno",
      coverUrl: "https://images.unsplash.com/photo-1487180144351-b8472da7d491?w=400&h=400&fit=crop",
    },
  ];
  

const ProfileComponent = () => {
  const songs = dummySongs; 
  const [albums, setAlbums] = useState<Album[]>([]);
  const navigate = useNavigate();

  const handleShowAlbums = async () => {
    try {
      const res = await getAllAlbumsApi();
      if (res && "albums" in res && Array.isArray(res.albums)) {
        setAlbums(res.albums);
      } else {
        console.error("API error:", res);
      }
    } catch (error) {
      console.error("Album fetch error:", error);
    }
  };

  useEffect(() => {
    handleShowAlbums();
  }, []);

  const handleClick = ({
    albumName,
    albumId,
  }: {
    albumName: string;
    albumId: string;
  }) => {
    const slug = slugify(albumName, { lower: true });
    navigate(`/library/album/${slug}-${albumId}`);
  };

  return (
    <div className="p-6 space-y-16">
    {/* Songs Section */}
    <section>
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Music className="w-6 h-6 text-purple-500" /> Songs
      </h2>
  
      {songs.length > 0 ? (
        <div className="flex gap-4 overflow-x-auto pb-2">
          {songs.map((song, index) => (
            <motion.div
              key={song._id}
              onClick={() => console.log(song)}
              className="flex-shrink-0 w-64 relative cursor-pointer group rounded-xl overflow-hidden 
                         bg-white/5 backdrop-blur-md border border-white/10 shadow-md hover:shadow-xl transition-shadow"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Cover */}
              <div className="relative h-40">
                <img
                  src={song.coverUrl}
                  alt={song.title}
                  className="w-full h-full object-cover"
                />
                <button className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
  
              {/* Info */}
              <div className="p-4 text-center">
                <h3 className="font-semibold truncate">{song.title}</h3>
                <p className="text-sm text-muted-foreground truncate">{song.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center p-12 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Library className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-lg font-medium mb-1">No songs yet</p>
          <p className="text-sm mb-6">Start creating and share your vibe 🎶</p>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Upload Song
          </Button>
        </motion.div>
      )}
    </section>
  
    {/* Albums Section (keep the same grid) */}
    <section>
      <h2 className="text-2xl font-bold flex items-center gap-2 mb-6">
        <Disc3 className="w-6 h-6 text-pink-500" /> Albums
      </h2>
  
      {albums.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {albums.map((album, index) => (
            <motion.div
              key={album._id}
              onClick={() => handleClick({albumId:album._id,albumName:album.title})}
              className="relative cursor-pointer group rounded-2xl overflow-hidden 
                         bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Cover */}
              <div className="relative overflow-hidden h-60">
                <motion.img
                  src={album.coverUrl}
                  alt={album.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.15 }}
                  transition={{ duration: 0.6 }}
                />
                {/* Play button overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="bg-gradient-to-br from-[#f43f5e] to-[#3b82f6] rounded-full p-4 shadow-2xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 200 }}
                  >
                    <Play className="w-6 h-6 text-white fill-white" />
                  </motion.div>
                </motion.div>
              </div>
  
              {/* Info */}
              <div className="p-4 text-center">
                <h2 className="text-lg font-bold truncate">{album.title}</h2>
                <p className="text-sm">{album?.artistId?.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <motion.div
          className="flex flex-col items-center justify-center p-12 text-center text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <Disc3 className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-lg font-medium mb-1">No albums yet</p>
          <p className="text-sm mb-6">Create an album and showcase your music 📀</p>
          <Button>
            <PlusCircle className="mr-2 h-4 w-4" /> Create Album
          </Button>
        </motion.div>
      )}
    </section>
  </div>
  
  );
};

export default ProfileComponent;
