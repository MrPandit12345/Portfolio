"use client";

import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { MdOutlineTerminal } from "react-icons/md";
import { useEffect, useState } from "react";

const sections = [
  { name: "About", path: "#about" },
  { name: "Skill", path: "#skills" },
  { name: "Project", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.path.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <div className="glass-panel rounded-full px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-linear-to-br from-primary to-purple-600 flex items-center justify-center text-white font-bold text-xl shadow-[0_0_15px_rgba(37,157,244,0.5)]">
              <MdOutlineTerminal />
            </div>

            <h1 className="text-white font-bold tracking-tight text-lg hidden sm:block">
              Vishal <span className="text-sm text-primary align-top">v 1.0</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {sections.map((item) => (
              <Link
                key={item.name}
                href={item.path}
                scroll={false}
                className={`text-sm font-medium transition-colors ${
                  active === item.path.replace("#", "")
                    ? "text-white border-b-2 border-primary"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <button className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 hover:border-primary px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 group">
            <span>Resume</span>
            <FaArrowCircleRight className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
