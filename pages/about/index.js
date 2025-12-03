import Image from "next/image";

const About = () => {
  return (
    <div className="h-[40%] flex justify-center items-center">
      <div className="">
        <div className="w-full flex justify-center">
          {/* Scrollable glass card */}
          <div
            className="
              bg-white/10 backdrop-blur-sm border border-white/10 rounded-3xl
              
              p-4 sm:p-5  md:p-8 lg:p-9 shadow-lg
              flex flex-col lg:flex-row items-center
              gap-6 sm:gap-8 lg:gap-10
              xm:max-w-xl
              md:max-w-4xl
              xl:max-w-6xl w-full 
               sm:h-[60vh] md:h-[70vh]   /* <= fixed height so content can overflow */
              overflow-y-auto no-scrollbar       /* <= scroll only inside card, no visible bar */
            "
          >
            {/* Text */}
            <div className="flex-1 w-full">
              <p className="text-accent uppercase tracking-[0.25em] text-[10px] sm:text-xs md:text-sm mb-2">
                About
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 leading-tight">
                Hi, I’m{" "}
                <span className="text-accent">Savindu&nbsp;Gunasekara</span>
              </h1>

              <p className="text-white/60 mb-4 text-sm sm:text-base">
                I’m a full-stack web &amp; mobile developer with a strong focus
                on microservices, cloud-native architectures, and practical AI
                integrations. I love building end-to-end systems that are clean,
                scalable, and genuinely useful.
              </p>

              {/* Uni + school + experience in two columns on md+ */}
              <div className="mb-4 md:grid md:grid-cols-2 md:gap-6 space-y-4 md:space-y-0">
                <div className="space-y-4">
                  <div>
                    <h2 className="text-sm font-semibold text-white/80 mb-1">
                      University
                    </h2>
                    <p className="text-sm text-white/60">
                      BSc (Hons) in Computer Science &amp; Engineering <br />
                      <span className="text-white/80">
                        University of Moratuwa
                      </span>{" "}
                      — Class of 2026
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-white/10" />

                  <div>
                    <h2 className="text-sm font-semibold text-white/80 mb-1">
                      School
                    </h2>
                    <p className="text-sm text-white/60">
                      {/* replace with your actual school */}
                      Your School Name Here
                    </p>
                  </div>
                </div>

                <div className="space-y-2 mt-2 md:mt-0">
                  <h2 className="text-sm font-semibold text-white/80 mb-1">
                    Experience
                  </h2>
                  <p className="text-sm text-white/60">
                    <span className="text-white/90 font-semibold">
                      GTN Technologies
                    </span>{" "}
                    — Software Engineering Intern
                  </p>
                  <p className="text-xs text-white/50">6-month internship</p>
                  <p className="text-sm text-white/60">
                    Contributed to backend services, APIs, and integrations on
                    production systems, collaborating closely with senior
                    engineers on real client projects.
                  </p>
                </div>
              </div>

              {/* Chips */}
              <div className="flex flex-wrap gap-2 pb-2">
                <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/40">
                  Full-Stack Web
                </span>
                <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/40">
                  Mobile Apps
                </span>
                <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/40">
                  Microservices
                </span>
                <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/40">
                  Cloud &amp; DevOps
                </span>
                <span className="text-[11px] sm:text-xs px-3 py-1 rounded-full bg-accent/10 text-accent border border-accent/40">
                  AI-Powered Features
                </span>
              </div>
            </div>

            {/* Avatar nicely blended on the right / top on mobile */}
            <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 flex-shrink-0 relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-3xl" />
              <div className="relative w-full h-full rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                <div className="relative w-[85%] h-[85%] rounded-full overflow-hidden border-2 border-accent">
                  <Image
                    src="/me.jpeg"
                    alt="Portrait of Savindu Gunasekara"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
          {/* end card */}
        </div>
      </div>
    </div>
  );
};

export default About;
