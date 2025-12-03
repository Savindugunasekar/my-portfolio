"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import ProjectCard from "../../components/ProjectCard";
import ProjectDetails from "../../components/ProjectDetails";
import projectsData from "../../public/projects/projects.json";

const projects = projectsData.projects;

export default function Work() {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="w-full xl:mt-8 h-full flex justify-center items-center">
      <div className="w-[80vw] h-[80vh] relative">

        {/* PROJECT GRID */}
        <div
          className="
            grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3
            gap-6 h-full overflow-y-auto no-scrollbar
          "
        >
          {projects.map((p, i) => (
            <ProjectCard
              key={p.id}
              data={p}
              index={i}
              onClick={() => setSelectedId(p.id)}
            />
          ))}
        </div>

        {/* EXPANDED VIEW */}
        <AnimatePresence mode="wait">
          {selectedId && (
            <motion.div
              key="details-overlay"
              className="
                fixed inset-0 z-50 flex justify-center items-center
                bg-black/40 backdrop-blur-xl p-10
              "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                layoutId={`card-${selectedId}`}
                className="
                  w-[80vw] h-[80vh]
                  bg-white/10 backdrop-blur-xl border border-white/10
                  rounded-3xl shadow-2xl overflow-hidden relative
                "
              >
                {/* Pass ONLY the ID */}
                <ProjectDetails id={selectedId} onClose={() => setSelectedId(null)} />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
