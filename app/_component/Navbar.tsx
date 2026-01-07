"use client";

import Link from "next/link";
import { FaArrowCircleRight } from "react-icons/fa";
import { PiCubeFocusFill } from "react-icons/pi";
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
      {
        rootMargin: "-80px 0px -50% 0px", 
        threshold: 0,
      }
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
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 flex items-center justify-center text-primary text-xl">
              <PiCubeFocusFill size={32} />
            </div>

            <h1 className="text-white font-bold text-xl hidden sm:block">
              Vishal <span className="text-sm text-primary align-top">v1.0</span>
            </h1>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {sections.map((item) => (
              <Link
                key={item.name}
                href={item.path}
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

          <button className="bg-primary/10 hover:bg-primary/20 text-primary border border-primary/50 px-5 py-2 rounded-full text-sm font-bold flex items-center gap-2">
            Resume
            <FaArrowCircleRight />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
