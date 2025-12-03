import Image from "next/image";
import { motion } from "framer-motion";

const techStack = [
  { name: "React.js", src: "/stack/react.png", accent: "#61DAFB" },
  { name: "Next.js", src: "/stack/nextjs.webp", accent: "#FFFFFF" },
  { name: "React Native", src: "/stack/react.png", accent: "#61DAFB" },
  { name: "TypeScript", src: "/stack/typescript.webp", accent: "#3178C6" },
  { name: "Node.js", src: "/stack/node.svg", accent: "#68A063" },
  { name: "FastAPI", src: "/stack/fastapi.webp", accent: "#05998B" },
  { name: "Spring Boot", src: "/stack/springboot.webp", accent: "#6DB33F" },
  { name: "GraphQL", src: "/stack/graphql.png", accent: "#E10098" },
  { name: "Python", src: "/stack/python.png", accent: "#3776AB" },
  { name: "Java", src: "/stack/java.png", accent: "#F89820" },
  { name: "C++", src: "/stack/cpp.png", accent: "#00599C" },
  { name: "Tailwind CSS", src: "/stack/tailwind.png", accent: "#38BDF8" },
  { name: "Prisma", src: "/stack/prisma.png", accent: "#2D3748" },
  { name: "PostgreSQL", src: "/stack/postgres.webp", accent: "#336791" },
  { name: "MySQL", src: "/stack/mysql.png", accent: "#4479A1" },
  { name: "MongoDB", src: "/stack/mongodb.png", accent: "#47A248" },
  { name: "AWS", src: "/stack/aws.png", accent: "#FF9900" },
  { name: "Azure", src: "/stack/azure.png", accent: "#0078D4" },
  { name: "Docker", src: "/stack/docker.png", accent: "#0db7ed" },
  { name: "Kubernetes", src: "/stack/kubernetes.png", accent: "#326CE5" },
];

function TechHex({ name, src, accent, index }) {
  return (
    <motion.div
      // entry + idle float
      initial={{ opacity: 0, scale: 0.7, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -4, 0, 3, 0], // gentle float loop
      }}
      transition={{
        opacity: { duration: 0.4, delay: index * 0.05 },
        scale: {
          type: "spring",
          stiffness: 220,
          damping: 18,
          delay: index * 0.05,
        },
        y: {
          duration: 5,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
          delay: index * 0.15,
        },
      }}
      whileHover={{
        y: -14,
        scale: 1.1,
        transition: { type: "spring", stiffness: 260, damping: 16 },
      }}
      whileTap={{ scale: 0.96 }}
      style={{
        marginTop: index % 2 === 1 ? "1.2rem" : "0rem",
      }}
      className="transition-transform"
    >
      <div
        className="relative group w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28"
        style={{
          clipPath:
            "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
        }}
      >
        {/* soft colored glow */}
        <div
          className="absolute inset-0 blur-xl opacity-60 group-hover:opacity-100 transition-opacity duration-300"
          style={{ backgroundColor: accent + "33" }}
        />

        {/* hexagon inner shell */}
        <div
          className="absolute inset-[2px] bg-white/5 border border-white/20 backdrop-blur-sm
                     flex items-center justify-center shadow-lg
                     group-hover:border-accent group-hover:shadow-2xl transition-all duration-300"
          style={{
            clipPath:
              "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0% 50%)",
            backgroundImage: `linear-gradient(135deg, ${accent}22, rgba(15,23,42,0.9))`,
          }}
        >
          <div className="relative w-[70%] h-[70%] flex items-center justify-center">
            <Image
              src={src}
              alt={name}
              fill
              className="object-contain max-w-full max-h-full group-hover:scale-110 transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      {/* label */}
      <p className="mt-3 text-center text-[11px] sm:text-xs text-white/70">
        {name}
      </p>
    </motion.div>
  );
}

const Services = () => {
  return (
    <div className="h-full xl:mt-8 flex justify-center items-center">
      <div className="w-full px-4 md:px-8 lg:px-12">
        <div className="max-w-6xl mx-auto">
          

          {/* floating hex field */}
          <div className="relative">
            {/* subtle background glow behind the whole cluster */}
            <motion.div
              className="pointer-events-none absolute inset-0 flex justify-center"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              }}
            >
              <div className="w-72 sm:w-96 md:w-[28rem] h-72 sm:h-96 md:h-[28rem] rounded-full bg-accent/10 blur-3xl" />
            </motion.div>

            <div className="relative flex justify-center">
              <motion.div
                className="
                  grid
                  grid-cols-3
                  sm:grid-cols-4
                  md:grid-cols-5
                  lg:grid-cols-6

                  gap-x-4 gap-y-6
                  sm:gap-x-6 sm:gap-y-8
                  md:gap-x-8 md:gap-y-10

                  justify-items-center

                  max-h-[60vh]
                  overflow-y-auto
                  no-scrollbar

                  lg:max-h-none
                  lg:overflow-visible

                  xl:grid-cols-none
                  xl:grid-flow-col
                  xl:grid-rows-3
                  xl:auto-cols-[7rem]
                  xl:gap-x-8 xl:gap-y-8
                "
              >
                {techStack.map((tech, idx) => (
                  <TechHex
                    key={tech.name}
                    name={tech.name}
                    src={tech.src}
                    accent={tech.accent}
                    index={idx}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
