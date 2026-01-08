import Image from "next/image";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiTypescript,
  SiEducative,
} from "react-icons/si";
import { FaDatabase, FaCloud, FaLinux } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const About = () => {
  const techIcons = [
    { id: "html", Icon: SiHtml5 },
    { id: "css", Icon: SiCss3 },
    { id: "javascript", Icon: SiJavascript },
    { id: "typescript", Icon: SiTypescript },
    { id: "react", Icon: SiReact },
    { id: "nextjs", Icon: SiNextdotjs },
    { id: "database", Icon: FaDatabase },
    { id: "api", Icon: TbApi },
    { id: "cloud", Icon: FaCloud },
    { id: "nodejs", Icon: SiNodedotjs },
    { id: "express", Icon: SiExpress },
    { id: "mongodb", Icon: SiMongodb },
    { id: "linux", Icon: FaLinux },
  ];
  return (
    <div className="flex flex-col items-center justify-center px-3 py-4 lg:py-12">
      <div className="w-full max-w-6xl flex flex-col gap-6">
        <div className="flex flex-col items-center text-center space-y-4 relative">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold tracking-[0.2em] uppercase mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            System Online
          </div>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-white to-white/50">
              MERN STACK
            </span>
            <span className="text-primary text-glow"> DEVELOPER</span>
          </h1>

          <p className="text-white/60 text-lg md:text-xl leading-relaxed max-w-2xl font-body">
            Building fast, intuitive, and visually refined web applications.
            <br className="hidden md:block" />
            Focused on Next.js, TypeScript, and component-driven design systems.
          </p>
        </div>

        <div className="glass-panel glass-panel-hover rounded-2xl p-8 relative overflow-hidden group mt-8">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-primary/10 transition-all duration-500" />

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="w-full md:w-2/5">
              <div className="aspect-square w-full rounded-xl overflow-hidden border border-white/10 relative shadow-lg">
                <div className="absolute inset-0 bg-linear-to-t from-black/80 to-transparent z-10" />

                <Image
                  src="/photo.jpg"
                  height={400}
                  width={400}
                  alt="profile picture"
                  className="w-full h-full object-cover contrast-125 hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute bottom-3 left-3 z-20 flex items-center gap-2 animate-pulse">
                  <span className="w-2 h-2 bg-green-500 rounded-full shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                  <span className="text-xs font-mono text-white/90">
                    OPEN TO WORK
                  </span>
                </div>
              </div>
            </div>
            <div className="flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-white tracking-wide">
                    About Me
                  </h3>
                  <span className=" text-primary/50">
                    <SiEducative size={32} />
                  </span>
                </div>

                <p className="text-white/70 text-base leading-relaxed mb-6 font-body line-clamp-5 md:line-clamp-none">
                  I am a full-stack web developer focused on building scalable,
                  type-safe, and maintainable web applications. My core
                  expertise lies in the MERN stack, complemented by Next.js and
                  TypeScript for modern, production-grade development. I
                  specialize in crafting clean, pixel-perfect user interfaces
                  and designing reusable component systems that scale with
                  product requirements. On the backend, I build structured REST
                  APIs, handle authentication, data validation, and ensure
                  seamless frontend–backend integration. With hands-on
                  experience in server-side rendering, state management, API
                  integration, and performance optimization, I approach
                  development with a strong emphasis on code quality,
                  readability, and long-term maintainability.
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                {["React", "Next.js", "JavaScript", "TypeScript", "Tailwind", "Node.js"].map(
                  (tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded border border-white/10 bg-white/5 text-xs text-white/80 font-mono"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="w-full mt-6 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-linear-to-r from-background-dark to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-linear-to-l from-background-dark to-transparent pointer-events-none" />

          <div className="flex justify-center items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
            <div className="flex gap-8 items-center">
              {techIcons.map(({ id, Icon }) => (
                <Icon
                  key={id}
                  className="text-5xl text-white/70 hover:text-primary transition-colors"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
