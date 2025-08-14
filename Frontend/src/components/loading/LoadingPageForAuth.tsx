import { motion } from "framer-motion";

const LoadingPageForAuth = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] overflow-hidden">
      
      {/* Background floating blobs */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-purple-500/20 blur-3xl"
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 0.9, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-blue-500/20 blur-3xl"
        animate={{
          x: [0, -50, 50, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Center 3D spinner */}
      <motion.div
        className="relative w-24 h-24"
        animate={{ rotate: 360 }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-t-4 border-purple-500 border-solid"
          animate={{ rotate: -360 }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border-t-4 border-blue-500 border-solid"
          animate={{ rotate: 360 }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      {/* Glow pulse */}
      <motion.div
        className="absolute bottom-12 w-32 h-2 bg-purple-500/50 blur-lg rounded-full"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
};

export default LoadingPageForAuth;
