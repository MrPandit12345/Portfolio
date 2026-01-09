import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Portfolio layout",
};

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div
        className={`${spaceGrotesk.className} font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-white overflow-hidden transition-colors duration-300 overflow-y-hidden`}
      >
        <div className="fixed inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-cosmic-gradient opacity-80" />
          <div className="absolute inset-0 grid-background" />

          <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
          <div
            className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-purple-500/20 rounded-full blur-[100px] animate-pulse-slow"
            style={{ animationDelay: "2s" }}
          />
        </div>
        <main>{children}</main>
         <footer className="w-full border-t border-white/5 py-8 bg-[#0B0F15] relative z-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="size-4 rounded-full bg-primary/20 flex items-center justify-center">
            <div className="size-2 rounded-full bg-primary animate-pulse" />
          </div>
          <span className="text-gray-500 text-sm font-mono">
            SYSTEM: STABLE
          </span>
        </div>

        <div className="flex gap-6">
          <a
            href="https://github.com/MrPandit12345"
            className="text-gray-500 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/vishal-pandit-588042221/"
            className="text-gray-500 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/VishalPan1603"
            className="text-gray-500 hover:text-white transition-colors text-sm"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
      </div>
    </>
  );
}
