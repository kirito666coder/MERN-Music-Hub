import type { Album } from "@/types/album";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import slugify from "slugify";

const AlbumsSection = ({albums}:{albums:Album[]}) => {

    const navigate = useNavigate();

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
    <section>
        <h2 className="text-2xl font-semibold mb-6">Albums</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {albums.map((album, index) => (
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
              <h2 className="text-lg font-bold truncate">
                {album.title}
              </h2>
              <p className="text-sm ">{album.artistId.name}</p>
            </div>
          </motion.div>
        ))}
  
        </div>
      </section>
  )
}

export default AlbumsSection
