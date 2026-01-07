import Image from "next/image";
import { MdOutlineToken,MdSensors } from "react-icons/md";
import { IoIosCode } from "react-icons/io";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative z-10 min-h-screen pt-24 pb-12 flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="flex flex-col gap-12 items-center">
            <div className="flex flex-col gap-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 w-fit mx-auto lg:mx-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                </span>
                <span className="text-xs font-mono text-primary uppercase tracking-widest">
                  System Online
                </span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[1.1] text-transparent bg-clip-text bg-linear-to-r from-white to-gray-400">
                Vishal
                <span className="text-primary text-glow"> Pandit</span>
              </h1>

              <h2 className="text-base sm:text-xl text-gray-400 font-mono border-l-2 border-primary/50 pl-4 max-w-2xl mx-auto lg:mx-0">
                MERN Stack Developer
                <span className="text-primary mx-2">|</span>
                Building apps with React.js, Next.js & TypeScript
              </h2>
              <div className="flex flex-wrap gap-4 pt-4 justify-center lg:justify-start">
                <Link href="/portfolio">
                <button className="relative overflow-hidden group bg-primary hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 shadow-[0_0_20px_rgba(37,157,244,0.3)] hover:shadow-[0_0_30px_rgba(37,157,244,0.5)]">
                  <span className="relative z-10 flex items-center gap-2">
                    Enter My World
                    <span className="material-symbols-outlined text-lg group-hover:rotate-90 transition-transform">
                      <MdSensors  className="size-6"/>
                    </span>
                  </span>
                </button>
                </Link>

                <button className="glass-panel hover:bg-white/5 text-white font-bold py-3.5 px-8 rounded-lg transition-all duration-300 flex items-center gap-2 group">
                  Explore Projects
                  <span className="material-symbols-outlined text-lg group-hover:translate-x-1 transition-transform">
                    <IoIosCode className="size-6" />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="relative order-1 lg:order-2 h-100 lg:h-150 w-full flex items-center justify-center perspective-1000">
          <div className="relative w-full h-full max-w-125 max-h-125 animate-float">
            <div className="absolute inset-0 bg-linear-to-b from-primary/10 to-transparent rounded-full blur-3xl" />
            <div className="relative z-10 w-full h-full rounded-2xl overflow-hidden border border-primary/30 shadow-[0_0_50px_rgba(37,157,244,0.2)] bg-black/40 backdrop-blur-sm group">
              <div className="absolute inset-0 bg-linear-to-tr from-primary/20 via-transparent to-purple-500/20 opacity-50 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="absolute inset-0 bg-[linear-gradient(rgba(37,157,244,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(37,157,244,0.1)_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_at_center,black,transparent)]" />

              <Image
                src="/landingpage.png"
                alt="Metaverse image"
                width={500}
                height={500}
                className="w-full h-full object-cover opacity-80 mix-blend-screen hover:scale-105 transition-transform duration-700 ease-out"
              />

              <div className="absolute top-10 right-10 glass-panel p-3 rounded-lg animate-bounce duration-3000">
                <span className="material-symbols-outlined text-primary text-3xl">
                  <MdOutlineToken />
                </span>
              </div>

              <div className="absolute bottom-20 left-10 glass-panel px-4 py-2 rounded-lg flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse duration-100" />
                <span className="text-xs font-mono text-white">
                  Compiling...
                </span>
              </div>
            </div>

            <div className="absolute -inset-4 border border-primary/20 rounded-full animate-[spin_10s_linear_infinite] pointer-events-none" />
            <div className="absolute -inset-12 border border-purple-500/10 rounded-full animate-[spin_15s_linear_infinite_reverse] pointer-events-none border-dashed" />
          </div>
        </div>
      </div>
    </>
  );
}
