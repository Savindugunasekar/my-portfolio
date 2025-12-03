import { motion } from "framer-motion";
import Image from "next/image";

// card animation
const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 140, damping: 18 },
  },
};

export default function ProjectCard({ data, index }) {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="show"
      transition={{ delay: index * 0.08 }}
      whileHover={{
        y: -12,
        scale: 1.04,
        transition: {
          type: "spring",
          stiffness: 220,
          damping: 16,
        },
      }}
      className="
        relative rounded-3xl overflow-hidden group
        bg-white/5 backdrop-blur-md border border-white/10
        min-h-[300px] md:min-h-[300px] xl:min-h-[250px]
        shadow-xl transition-all duration-300
      "
    >
      {/* FULL COVER PREVIEW IMAGE */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.preview}
          alt={data.title}
          fill
          priority
          className="
            object-cover
            transition-all duration-700
            opacity-90 group-hover:opacity-100
            group-hover:scale-110
          "
        />
      </div>

      {/* DARK GRADIENT OVERLAY */}
      <div
        className="
          absolute inset-0
          bg-gradient-to-t from-black/60 via-black/30 to-transparent
          transition-all duration-500
          group-hover:from-black/70 group-hover:via-black/40
        "
      />

      {/* Animated glow */}
      <motion.div
        className="absolute inset-0 opacity-20 blur-2xl pointer-events-none"
        animate={{ opacity: [0.15, 0.25, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.4), transparent 70%)",
        }}
      />

      {/* TITLE INSIDE IMAGE  */}
      <div
        className="
          absolute bottom-0 left-0 right-0
          p-5 md:p-6
          z-20
        "
      >
        <h3
          className="
            text-white font-semibold
            text-lg md:text-xl
            drop-shadow-xl
          "
        >
          {data.title}
        </h3>

        <p className="text-white/70 text-xs md:text-sm mt-1">
          {data.subtitle}
        </p>
      </div>

      {/* BORDER SHINE ON HOVER */}
      <div
        className="
          absolute inset-0 rounded-3xl pointer-events-none
          opacity-0 group-hover:opacity-40
          transition duration-500
          border border-white/40
        "
      />
    </motion.div>
  );
}
