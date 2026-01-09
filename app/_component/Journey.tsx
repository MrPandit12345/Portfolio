"use client";

import { FaGraduationCap, FaBuildingUser } from "react-icons/fa6";
import { FaArrowRight, FaChalkboardTeacher } from "react-icons/fa";

const Journey = () => {
  const handlescrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <>
      <div className="relative z-10 grow flex flex-col items-center py-6 px-4 md:px-8 overflow-x-hidden">
        <div className="pointer-events-none absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_65%)]" />
        </div>

        <div className="relative z-10 max-w-4xl w-full text-center mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-4">
            <span className="animate-pulse w-2 h-2 rounded-full bg-primary" />
            SYSTEM STATUS: ONLINE
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
            <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
              DEVELOPER JOURNEY
            </span>
          </h1>

          <p className="text-gray-400 max-w-xl mx-auto text-lg">
            Navigating the MERN Stack Universe. Tracking professional milestones
            through hyperspace.
          </p>
        </div>

        <div className="relative z-10 max-w-5xl w-full">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 md:-translate-x-1/2 w-[3px] hidden md:block">
            <div className="h-full w-full bg-linear-to-b from-transparent via-primary/80 to-transparent rounded-full shadow-[0_0_30px_rgba(99,102,241,0.6)]">
              <div className="absolute inset-0 bg-primary/30 blur-xl animate-pulse" />
            </div>
          </div>

          <div className="absolute left-6 top-0 bottom-0 w-[3px] md:hidden">
            <div className="h-full w-full bg-linear-to-b from-transparent via-primary/70 to-transparent rounded-full shadow-[0_0_25px_rgba(99,102,241,0.6)]" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
            <div className="hidden md:block" />

            <div className="relative pl-12 md:col-start-2">
              <div className="absolute left-5 md:left-1.75 top-6 w-4 h-4 rounded-full bg-primary shadow-[0_0_18px_rgba(99,102,241,0.9)] ring-2 ring-primary/50 transition-transform group-hover:scale-125" />
              <div className="absolute right-14 md:right-full md:mr-12 top-6 whitespace-nowrap">
                <span className="text-primary font-mono text-sm bg-primary/10 px-2 py-1 rounded border border-primary/20">
                  May 2025 – NOV 2025
                </span>
              </div>

              <div className="glass-panel rounded-xl p-8 hover:-translate-y-1 transition-all relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full -mr-10 -mt-10" />

                <h3 className="text-2xl font-bold text-white mb-1">
                  Software Developer Intern
                </h3>
                <p className="text-primary text-sm mb-4">
                  @ Engineer’s Cradle · EC-OneX
                </p>
                <div className="absolute right-5 top-8">
                  <FaBuildingUser className="text-primary text-5xl" />
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  Worked on a production-grade B2B platform (EC-OneX), building
                  pixel-perfect, scalable interfaces using Next.js. Implemented
                  complex UI systems including dynamic tabs, filters, carousels,
                  query-based navigation, and SSR-friendly components while
                  following type-safe and modular architecture.
                </p>

                <div className="flex flex-wrap gap-2">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "React Query",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-background-dark border border-white/10 text-gray-300 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
            <div className="relative pl-12 md:pl-0 md:pr-12 md:text-right">
              <div className="absolute right-4 top-6 w-4 h-4 rounded-full bg-background-dark border-2 border-primary shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-colors group-hover:bg-primary" />

              <div className="absolute left-14 md:left-full md:ml-12 top-6 whitespace-nowrap">
                <span className="text-gray-400 font-mono text-sm bg-white/5 px-2 py-1 rounded border border-white/10">
                  Aug 2024 – Feb 2025
                </span>
              </div>

              <div className="glass-panel relative rounded-xl p-8 hover:-translate-y-1 transition-all">
                <div className="absolute left-8">
                  <FaChalkboardTeacher className="text-primary text-5xl" />
                </div>
                <div className="flex flex-col md:items-end mb-4">
                  <h3 className="text-2xl md:text-[26px] font-bold text-white ">
                    MERN Stack Training
                    <br />
                    (Certified)
                  </h3>
                  <p className="text-primary text-sm">
                    @ ITPreneur (Software Training Institute)
                  </p>
                </div>

                <p className="text-gray-400 text-sm mb-6 md:text-right">
                  Completed a 6-month intensive MERN stack training program with
                  a strong focus on practical development. Built real-world
                  projects involving responsive frontend design, RESTful APIs,
                  authentication, CRUD operations, and frontend–backend
                  integration using modern best practices.
                </p>

                <div className="flex flex-wrap gap-2 md:justify-end">
                  {[
                    "MongoDB",
                    "Express.js",
                    "React",
                    "Node.js",
                    "REST APIs",
                    "JWT",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs rounded-full bg-background-dark border border-white/10 text-gray-300 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24 group">
            <div className="hidden md:block" />

            <div className="relative pl-12 md:col-start-2">
              <div className="absolute left-5 md:left-1.75 top-6 w-4 h-4 rounded-full bg-background-dark border-2 border-primary shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-colors group-hover:bg-primary" />

              <div className="absolute right-14 md:right-full md:mr-12 top-6 whitespace-nowrap">
                <span className="text-gray-400 font-mono text-sm bg-white/5 px-2 py-1 rounded border border-white/10">
                  2020 – 2024
                </span>
              </div>

              <div className="glass-panel rounded-xl p-8 hover:-translate-y-1 transition-all">
                <div className="flex flex-row mx-auto">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-1">
                      BE Computer Engineering
                    </h3>
                    <p className="text-primary text-sm mb-4">
                      Undergraduate Degree
                    </p>
                  </div>
                  <div className="flex justify-end text-5xl md:justify-start">
                    <FaGraduationCap className="text-primary" />
                  </div>
                </div>

                <p className="text-gray-400 text-sm mb-6">
                  Built a strong foundation in programming, data structures,
                  databases, and software engineering concepts while exploring
                  web development fundamentals and modern frontend technologies.
                </p>

                <div className="flex flex-wrap gap-2">
                  {["C", "C++", "JavaScript", "DBMS", "HTML", "CSS"].map(
                    (tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-xs rounded-full bg-background-dark border border-white/10 text-gray-500"
                      >
                        {tech}
                      </span>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl w-full my-20">
          <div className="glass-panel rounded-2xl p-12 text-center border border-primary/30 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_65%)]" />

            <h2 className="text-4xl font-bold text-white mb-4">
              Ready for the Next Chapter
            </h2>

            <p className="text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              I’m a React & Next.js developer passionate about building
              scalable, type-safe applications with real-world impact. I’m open
              to frontend or full-stack opportunities where thoughtful design
              meets strong engineering
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Journey;
