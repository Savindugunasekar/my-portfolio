"use client";
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

export default function ProjectCard({ data, index, onClick }) {
  return (
    <motion.div
      layoutId={`card-${data.id}`}
      onClick={onClick}
      variants={cardVariants}
      initial="hidden"
      animate="show"
      transition={{ delay: index * 0.08 }}
      className="
        relative rounded-3xl overflow-hidden group cursor-pointer
        bg-white/5 backdrop-blur-md border border-white/10
        min-h-[300px] md:min-h-[300px] xl:min-h-[250px]
        shadow-xl transition-all duration-300
      "
    >
      {/* FULL COVER IMAGE */}
      <motion.div
        layoutId={`image-${data.id}`}
        className="absolute inset-0 w-full h-full"
      >
        <Image
          src={data.preview}
          alt={data.title}
          fill
          priority
          className="
            object-cover
            transition-all duration-700
            opacity-90 group-hover:opacity-100
            group-hover:scale-100
          "
        />
      </motion.div>

      {/* GITHUB LINK BADGE — EXPANDING CONTAINER */}
      <motion.a
        href={data.github}
        target="_blank"
        rel="noopener noreferrer"
        className="
          absolute top-3 right-3 z-30
          flex items-center gap-2
          text-white/80 hover:text-white
          bg-black/40 backdrop-blur-md
          py-2 rounded-xl
          border border-white/20
          shadow-lg
          overflow-hidden
          transition-all duration-500
        "
        initial={{ width: 40 }}
        whileHover={{ width: 135 }}
        transition={{ type: "spring", stiffness: 180, damping: 18 }}
      >
        {/* GitHub icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-5 h-5 flex-shrink-0 ml-2"
        >
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.486 2 12.017c0 4.425 2.865 8.18 
            6.839 9.504.5.092.682-.217.682-.483 
            0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343
            -.455-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 
            1.004.071 1.532 1.032 1.532 1.032.892 1.53 
            2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339
            -2.22-.253-4.555-1.115-4.555-4.962 
            0-1.096.39-1.992 1.029-2.694-.103-.253-.446-1.272.098-2.65 
            0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 
            12 6.844c.85.004 1.705.115 2.504.337 
            1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65
            .64.702 1.028 1.598 1.028 2.694 
            0 3.857-2.339 4.705-4.566 4.953
            .359.31.678.921.678 1.856 
            0 1.339-.012 2.419-.012 2.749 
            0 .268.18.58.688.48A10.019 10.019 0 0 0 22 12.017 
            C22 6.486 17.522 2 12 2Z"
            clipRule="evenodd"
          />
        </svg>

        {/* Slide-in text */}
        <motion.span
          initial={{ opacity: 0, x: -10 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.25 }}
          className="text-xs font-medium whitespace-nowrap pr-3"
        >
          View GitHub
        </motion.span>
      </motion.a>

      {/* DARK GRADIENT OVERLAY (SMOOTH ANIMATION) */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t"
        initial={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.5), transparent)",
        }}
        whileHover={{
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92), rgba(0,0,0,0.65), transparent)",
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      />

      {/* SUBTLE FLOATING GLOW */}
      <motion.div
        className="absolute inset-0 opacity-20 blur-2xl pointer-events-none"
        animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.05, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          background:
            "radial-gradient(circle at 40% 30%, rgba(255,255,255,0.4), transparent 70%)",
        }}
      />

      {/* TITLE + SUBTITLE */}
      <motion.div
        layoutId={`title-${data.id}`}
        className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-20"
      >
        <h3 className="text-white font-semibold text-lg md:text-xl drop-shadow-xl">
          {data.title}
        </h3>
        <p className="text-white/70 text-xs md:text-sm mt-1">
          {data.subtitle}
        </p>
      </motion.div>

      {/* BORDER SHINE */}
      <div
        className="
          absolute inset-0 rounded-3xl pointer-events-none
          opacity-0 group-hover:opacity-40
          transition duration-500 border border-white/40
        "
      />
    </motion.div>
  );
}
