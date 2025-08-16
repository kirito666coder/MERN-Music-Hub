import { getAllAlbumsApi } from "@/api/AlbumApi";
import type { Album } from "@/types/album";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";
import { Play } from "lucide-react";
import { motion } from "framer-motion";

const AlbumsList = () => {
  const [albums, setAlbums] = useState<Album[]>([]);
  const navigate = useNavigate();

  const handleShowAllAlbums = async () => {
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
    handleShowAllAlbums();
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
    <motion.div
      className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {albums.length > 0 ? (
        albums.map((album, index) => (
          <motion.div
            key={album._id}
            onClick={() =>
              handleClick({ albumName: album.title, albumId: album._id })
            }
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
              {/* Play button on hover */}
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
            <div className="p-4">
              <h2 className="text-lg font-bold text-white truncate">
                {album.title}
              </h2>
              <p className="text-sm text-gray-300">{album.artistId.name}</p>
            </div>
          </motion.div>
        ))
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center col-span-full py-20 px-6 
             rounded-3xl bg-gradient-to-br from-[#0f0f12]/90 via-[#1a1a1f]/80 to-[#0f0f12]/90
             backdrop-blur-lg shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10"
        >
          {/* Floating Icon */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
            className="p-6 rounded-full bg-gradient-to-tr from-purple-600/30 to-pink-500/30 
               shadow-[0_0_30px_rgba(168,85,247,0.4)]"
          >
            <svg
              className="w-16 h-16 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.6)]"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 19V6l12-2v13"
              ></path>
              <circle cx="6" cy="18" r="2"></circle>
            </svg>
          </motion.div>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl font-bold text-white mt-8 tracking-wide drop-shadow-[0_0_6px_rgba(255,255,255,0.3)]"
          >
            No Albums Available
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-gray-400 text-base mt-3 max-w-sm text-center leading-relaxed"
          >
            Looks like there are no albums in your library yet.
            New music will appear here soon 🎶
          </motion.p>
        </motion.div>

      )}
    </motion.div>
  );
};

export default AlbumsList;
