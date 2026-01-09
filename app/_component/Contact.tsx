import {
  FaUser,
  FaMailBulk,
  FaRegNewspaper,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const Contact = () => {
  return (
    <>
      <div className=" w-full text-center mb-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-mono mb-4">
          <span className="animate-pulse w-2 h-2 rounded-full bg-primary" />
          SYSTEM STATUS: ONLINE
        </div>

        <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-4">
          <span className="bg-clip-text text-transparent bg-linear-to-r from-white via-white to-gray-500">
            GET IN TOUCH
          </span>
        </h1>

        <p className="text-gray-400 max-w-3xl mx-auto text-lg">
          Feel free to reach out for collaborations, opportunities, or
          questions. I’m actively open to frontend and full-stack roles where I
          can grow, learn, and deliver high-quality.
        </p>
      </div>
      <main className="relative z-10 grow flex items-center justify-center p-4 py-12 lg:p-12">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-20 h-px bg-linear-to-r from-primary to-transparent" />
              <div className="absolute bottom-0 right-0 w-20 h-px bg-linear-to-l from-primary to-transparent" />

              <div className="mb-8 border-b border-white/10 pb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="inline-flex h-2 w-2 animate-ping transition-duration-200 rounded-full bg-primary opacity-75" />
                  <span className="text-xs font-mono text-primary tracking-[0.2em]">
                    SECURE_CHANNEL_OPEN
                  </span>
                </div>

                <h1 className="text-white text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-3">
                  ESTABLISH{" "}
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-blue-300">
                    CONNECTION
                  </span>
                </h1>

                <p className="text-gray-400 text-base lg:text-lg leading-relaxed max-w-xl">
                  Initialize communication protocol. Whether you have a
                  question, a project proposal, or just want to say hello, my
                  inbox is open for signal reception.
                </p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex flex-col gap-2 group/input">
                    <span className="text-gray-400 text-xs font-mono uppercase tracking-wider group-focus-within/input:text-primary transition-colors">
                      Identity // Name
                    </span>
                    <div className="relative">
                      <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-primary transition-colors" />
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="neon-input w-full bg-background-dark/50 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </label>

                  <label className="flex flex-col gap-2 group/input">
                    <span className="text-gray-400 text-xs font-mono uppercase tracking-wider group-focus-within/input:text-primary transition-colors">
                      Frequency // Email
                    </span>
                    <div className="relative">
                      <FaMailBulk className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within/input:text-primary transition-colors" />
                      <input
                        type="email"
                        placeholder="name@example.com"
                        className="neon-input w-full bg-background-dark/50 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300"
                      />
                    </div>
                  </label>
                </div>

                <label className="flex flex-col gap-2 group/input">
                  <span className="text-gray-400 text-xs font-mono uppercase tracking-wider group-focus-within/input:text-primary transition-colors">
                    Transmission Data // Message
                  </span>
                  <div className="relative">
                    <FaRegNewspaper className="absolute left-4 top-5 text-gray-500 group-focus-within/input:text-primary transition-colors" />
                    <textarea
                      rows={4}
                      placeholder="Type your message here..."
                      className="neon-input w-full bg-background-dark/50 border border-gray-700 rounded-lg py-4 pl-12 pr-4 text-white placeholder-gray-600 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none transition-all duration-300 resize-none"
                    />
                  </div>
                </label>

                <div className="pt-2 flex items-center justify-between">
                  <p className="text-xs text-gray-600 font-mono hidden sm:block">
                    SYSTEM: READY
                    <br />
                    ENCRYPTION: ENABLED
                  </p>

                  <button
                    type="button"
                    className="group relative inline-flex items-center justify-center px-8 py-4 font-bold text-white transition-all duration-200 bg-primary/10 border border-primary/50 font-display hover:bg-primary hover:border-primary hover:shadow-[0_0_20px_rgba(37,157,244,0.4)] rounded-lg overflow-hidden"
                  >
                    <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10" />
                    <span className="relative flex items-center gap-2">
                      SEND TRANSMISSION
                      <IoMdSend className="text-sm transition-transform group-hover:translate-x-1" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="lg:col-span-5 relative h-full min-h-125 flex flex-col items-center justify-center">
            <div className="absolute inset-0 bg-neon-glow opacity-30 pointer-events-none" />

            <a
              href="https://github.com/MrPandit12345"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-64 h-64 flex items-center justify-center mb-8 lg:mb-0 lg:absolute lg:top-10 lg:right-10 transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_10s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-dashed border-primary/30 animate-[spin_15s_linear_infinite_reverse]" />

              <div className="hologram-node w-40 h-40 rounded-full backdrop-blur-sm flex flex-col items-center justify-center relative z-10 group-hover:border-primary/60 transition-colors">
                <FaGithub className="text-6xl text-white" />
                <span className="mt-2 text-xs font-bold tracking-widest text-primary">
                  GITHUB
                </span>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-pandit-588042221/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-64 h-64 flex items-center justify-center lg:absolute lg:bottom-10 lg:left-10 transition-transform duration-500 hover:scale-105"
            >
              <div className="absolute inset-0 rounded-full border border-white/20 animate-[spin_12s_linear_infinite_reverse]" />
              <div className="absolute inset-8 rounded-full border border-dotted border-primary/30 animate-[spin_20s_linear_infinite]" />

              <div className="hologram-node w-40 h-40 rounded-full backdrop-blur-sm flex flex-col items-center justify-center relative z-10 group-hover:border-primary/60 transition-colors">
                <FaLinkedin className="text-6xl text-white" />
                <span className="mt-2 text-xs font-bold tracking-widest text-primary">
                  LINKEDIN
                </span>
              </div>
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
