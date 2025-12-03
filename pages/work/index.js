import ProjectCard from "../../components/ProjectCard";
import projectsData from '../../public/projects/projects.json'
const projects = projectsData.projects

const Work = () => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      {/* Main container that always fills 80% of screen */}
      <div className="w-[80vw] h-[80vh] flex flex-col">

        {/* SCROLLABLE WRAPPER */}
        <div
          className="
            flex-1
            mt-12
            overflow-y-auto
            no-scrollbar
            lg:overflow-visible
          "
        >
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3

              gap-6 sm:gap-7 md:gap-8 lg:gap-10

              max-h-full
              no-scrollbar
            "
            style={{ width: "100%" }}
          >
            {projects.map((p, i) => (
              <ProjectCard key={p.id} data={p} index={i} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Work;
