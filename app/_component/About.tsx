import Navbar from "@/app/_component/Navbar";
import React from "react";

const page = () => {
  return (
    <>
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute inset-0 bg-cosmic-gradient opacity-80" />
      <div className="absolute inset-0 grid-background" />

      <div className="absolute top-[-10%] left-[-10%] w-[40vw] h-[40vw] bg-primary/20 rounded-full blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-[-10%] right-[-10%] w-[35vw] h-[35vw] bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
    </div>

      <Navbar />
      <div className="flex justify-center">

      </div>
    </>
  );
};

export default page;
