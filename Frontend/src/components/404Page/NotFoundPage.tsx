import { motion, useMotionValue, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect} from "react";

const NotFoundPage = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const orb1X = useTransform(mouseX, [0, window.innerWidth], [-30, 30]);
  const orb1Y = useTransform(mouseY, [0, window.innerHeight], [-30, 30]);
  const orb2X = useTransform(mouseX, [0, window.innerWidth], [30, -30]);
  const orb2Y = useTransform(mouseY, [0, window.innerHeight], [30, -30]);

  useEffect(() => {
    const handleMouseMove = (e:MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white text-center px-4">
      
      {/* Floating particles (fixed) */}
      {Array.from({ length: 200 }).map((_, i) => {
        const startX = Math.random() * window.innerWidth;
        const startY = Math.random() * window.innerHeight;
        const duration = Math.random() * 10 + 8; // varied speeds
        const delay = Math.random() * 5; // stagger start
        const size = Math.random() * 4 + 2; // varied sizes

        return (
          <motion.div
            key={i}
            className="absolute bg-white rounded-full opacity-30"
            style={{
              width: size,
              height: size,
              left: startX,
              top: startY,
            }}
            animate={{
              y: [startY, -50], // move upward
              opacity: [0, 0.4, 0], // fade in/out
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* Gradient orbs with parallax */}
      <motion.div
        className="absolute top-1/4 left-1/3 h-72 w-72 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 blur-3xl opacity-30"
        style={{ x: orb1X, y: orb1Y }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, 10, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-green-500 blur-3xl opacity-30"
        style={{ x: orb2X, y: orb2Y }}
        animate={{ scale: [1, 1.05, 1], rotate: [0, -10, 10, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 404 Title */}
      <motion.h1
        className="text-8xl sm:text-9xl font-extrabold drop-shadow-lg bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent"
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{
          scale: 1,
          opacity: 1,
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{
          scale: { duration: 0.6, ease: "easeOut" },
          backgroundPosition: { duration: 6, repeat: Infinity, ease: "linear" },
        }}
        style={{ backgroundSize: "200% 200%" }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-lg sm:text-xl mt-4 mb-8 text-gray-300 max-w-md"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        Looks like you hit the wrong note — the page you’re looking for doesn’t exist.
      </motion.p>

      {/* Go Home Button */}
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.8 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6, type: "spring" }}
      >
        <Link
          to="/"
          className="relative inline-block px-8 py-3 text-lg font-semibold rounded-full overflow-hidden group"
        >
          <span className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:scale-110 transition-transform duration-300"></span>
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent translate-x-[-100%] group-hover:animate-[shimmer_1.5s_infinite]"></span>
          <span className="relative z-10">Go Back Home</span>
        </Link>
      </motion.div>

      {/* Shimmer keyframes */}
      <style>{`
        @keyframes shimmer {
          100% {
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default NotFoundPage;
