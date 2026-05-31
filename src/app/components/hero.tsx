'use client';

import Image from 'next/image';
import React from 'react';

interface HeroProps {
  name?: string;
  subtitle?: string;
  imageSrc?: string;
}

export default function Hero({
  name = "Tharundi Pawani",
  subtitle = "Portfolio",
  imageSrc = "/tharundi-profile.png" 
}: HeroProps) {
  
  const techStack = [
    "Next.js", "React", "Python", "Business Analysis", "Project Management"
  ];

  const handleScrollToSection = (id: string) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#F7F3EB] via-[#f2ede4] to-[#eaddcb] flex flex-col justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      
      <div className="absolute inset-0 bg-[radial-gradient(#1a1a1a_1px,transparent_1px)] [background-size:24px_24px] sm:[background-size:32px_32px] opacity-[0.015] pointer-events-none"></div>

      <div className="absolute top-4 left-6 w-10 h-10 sm:w-16 sm:h-16 bg-white rotate-12 opacity-40 z-0"></div>
      <div className="absolute top-[18%] left-[4%] w-20 h-20 sm:w-32 sm:h-32 bg-white -rotate-12 opacity-50 z-0 hidden xs:block"></div>
      <div className="absolute top-1/4 left-4 w-28 h-28 sm:w-48 sm:h-48 bg-white rotate-45 opacity-[0.4] sm:opacity-70 z-0"></div>
      <div className="absolute top-[48%] left-[22%] w-20 h-20 bg-white/60 rotate-12 opacity-40 z-0 hidden lg:block"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-white rotate-45 opacity-50 z-0"></div>
      <div className="absolute bottom-6 left-[2%] w-24 h-24 sm:w-36 sm:h-36 bg-white -rotate-12 opacity-60 z-0"></div>
      <div className="absolute top-6 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-white rotate-45 opacity-60 z-0"></div>
      <div className="absolute top-[25%] right-[2%] w-16 h-16 sm:w-24 sm:h-24 bg-white/40 rotate-12 opacity-50 z-0"></div>
      <div className="absolute top-1/2 right-[18%] w-16 h-16 bg-white rotate-[30deg] opacity-40 z-0 hidden md:block"></div>
      <div className="absolute bottom-6 right-1/4 w-24 h-24 sm:w-40 sm:h-40 bg-white rotate-45 opacity-80 z-0"></div>
      <div className="absolute bottom-[35%] right-[4%] w-16 h-16 sm:w-28 sm:h-28 bg-white -rotate-45 opacity-40 z-0 hidden xs:block"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-8 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8 py-4 sm:py-8 lg:py-12">
        
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl w-full order-1">
          
          <div className="flex items-center gap-3 mb-3 sm:mb-6">
            <div className="h-[1px] w-6 sm:w-8 bg-[#1a1a1a]/40"></div>
            <p className="text-[9px] sm:text-xs md:text-sm tracking-[0.35em] text-[#5a5a5a] uppercase font-semibold">
              {subtitle}
            </p>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-serif font-medium tracking-tight leading-[1.2] lg:leading-[1.12] text-[#1a1a1a] mb-4 sm:mb-6">
            {name}
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-[#555555] font-sans leading-relaxed mb-6 max-w-md lg:max-w-none px-1 sm:px-0">
            Bridging the gap between technical complexity and business logic. Pursuing Computer Science with a targeted interest in Software Engineering workflows, system logic definition, and strategic project milestone planning.
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-1.5 sm:gap-2 mb-8 max-w-md">
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-2.5 py-1 bg-white/60 backdrop-blur-xs border border-[#1a1a1a]/5 text-[#1a1a1a] text-[9px] sm:text-[10px] font-sans font-bold tracking-wider uppercase rounded-xs"
              >
                {tech}
              </span>
            ))}
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto w-full max-w-xs sm:max-w-none">
            <a 
              href="/CV.pdf" 
              download="Tharundi_Perera_CV.pdf"
              className="relative group overflow-hidden w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-[#1a1a1a] text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase rounded-full border border-neutral-200/60 shadow-[0_10px_35px_rgba(0,0,0,0.04)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.09)] transition-all duration-500 block text-center z-10"
            >
              <span className="relative z-10 transition-colors duration-500 group-hover:text-white">
                DOWNLOAD RESUME
              </span>
              <div className="absolute inset-0 h-full w-0 bg-[#1a1a1a] transition-all duration-500 ease-in-out group-hover:w-full z-0"></div>
            </a>
          </div>

        </div>

        <div className="relative w-48 h-[280px] xs:w-56 xs:h-[330px] sm:w-64 sm:h-[380px] md:w-[280px] md:h-[420px] lg:w-[380px] lg:h-[520px] flex-shrink-0 group order-2">
          <div className="absolute inset-x-0 bottom-4 top-12 bg-gradient-to-t from-white/20 to-transparent blur-3xl rounded-full group-hover:bg-white/30 transition-all duration-700"></div>
          
          <div className="relative w-full h-full overflow-hidden rounded-md">
            <Image
              src={imageSrc}
              alt={`${name} Profile`}
              fill
              priority
              className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>
        </div>

      </div>

    </section>
  );
}