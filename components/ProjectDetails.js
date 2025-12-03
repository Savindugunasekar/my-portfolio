import projectsData from "../public/projects/projects.json";
import Image from "next/image";
import { motion } from "framer-motion";

export default function ProjectDetails({ id, onClose }) {
  const project = projectsData.projects.find((p) => p.id === id);

  if (!project) return null;

  return (
    <div className="w-full h-full p-6 md:p-8 lg:p-10 flex flex-col overflow-y-auto no-scrollbar relative">
      {/* Top bar: title + close */}
      <div className="flex items-start justify-between gap-4 mb-6">
        <div>
          <motion.h1
            layoutId={`title-${project.id}`}
            className="text-white text-2xl md:text-3xl lg:text-4xl font-semibold mb-2"
          >
            {project.title}
          </motion.h1>
          {project.subtitle && (
            <p className="text-white/60 text-sm md:text-base max-w-2xl">
              {project.subtitle}
            </p>
          )}
        </div>

        <button
          onClick={onClose}
          className="
            flex items-center justify-center
            w-9 h-9 rounded-full
            bg-white/10 hover:bg-white/20 border border-white/20
            text-white text-sm
            transition
          "
          aria-label="Close project details"
        >
          ✕
        </button>
      </div>

      {/* Short summary badge */}
      {project.shortSummary && (
        <div
          className="
            mb-6 rounded-2xl border border-accent/30 bg-accent/10
            px-4 py-3 text-xs md:text-sm text-accent
            max-w-3xl
          "
        >
          {project.shortSummary}
        </div>
      )}

      {/* Main content layout */}
      <div className="grid gap-6 md:gap-8 lg:gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-start">
        {/* Preview image */}
        <motion.div
          layoutId={`image-${project.id}`}
          className="
            relative w-full h-56 sm:h-64 md:h-72 lg:h-80
            rounded-3xl overflow-hidden border border-white/15
            bg-white/5 shadow-lg
          "
        >
          <Image
            src={project.preview}
            alt={project.title}
            fill
            className="object-cover"
          />

          {/* soft gradient overlay bottom */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-black/40 via-black/10 to-transparent
            "
          />
        </motion.div>

        {/* Right column: description, what I did, tech stack */}
        <div className="space-y-6">
          {/* Long description */}
          {project.longDescription && (
            <section>
              <h2 className="text-white text-sm md:text-base font-semibold mb-2">
                Overview
              </h2>
              <p className="text-white/70 text-sm md:text-[15px] leading-relaxed">
                {project.longDescription}
              </p>
            </section>
          )}

          {/* What I did */}
          {project.whatIDid && project.whatIDid.length > 0 && (
            <section>
              <h2 className="text-white text-sm md:text-base font-semibold mb-2">
                What I did
              </h2>
              <ul className="space-y-1.5 md:space-y-2 text-white/70 text-sm md:text-[15px]">
                {project.whatIDid.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech stack chips */}
          {project.techStack && project.techStack.length > 0 && (
            <section>
              <h2 className="text-white text-sm md:text-base font-semibold mb-2">
                Tech stack
              </h2>
              <div className="flex flex-wrap gap-2 max-w-xl">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      text-[11px] md:text-xs px-3 py-1
                      rounded-full
                      bg-white/5 border border-white/15
                      text-white/80
                      backdrop-blur-sm
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}
