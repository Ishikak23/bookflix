import React from "react";

import HeroSectionImg from "../assets/hero-section.webp";

const HeroSection: React.FC = () => {
  return (
    <div className="relative h-[60vh] w-full">
      <img
        src={HeroSectionImg}
        alt="her-section-img"
        className="inset-0 absolute w-full h-full object-cover"
      />
      <div className="inset-0 absolute bg-black/50" />
      <div className="relative z-10 flex flex-col justify-end h-full p-10 text-white max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Find your next
          <br /> favorite story
        </h1>

        <p className="mt-4 text-lg opacity-90">
          Curated reads. Timeless classics. Stories that stay with you.
        </p>

        <div className="mt-6 flex gap-4">
          <button className="px-6 py-3 bg-white text-amber-900 rounded-xl font-semibold shadow-lg hover:scale-105 transition">
            Start Reading
          </button>

          <button className="px-6 py-3 border border-white/70 rounded-xl hover:bg-white/10 transition">
            Explore Genres
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
