import React from 'react';

interface AboutProps {
  sectionNumber?: string;
  heading?: string;
  description?: string;
  signature?: string;
}

export default function About({
  sectionNumber = "01 - ",
  heading = "A LITTLE\nABOUT ME",
  description = "I am a Computer Science student passionate about the intersection of engineering and strategy. While my background includes Full-Stack development and AI implementation—such as my published research benchmarking lightweight RAG systems and engineering multi-agent architectures—I am increasingly drawn toward Business Analysis and Project Management. I thrive on translating complex technical requirements into strategic roadmaps, managing software deliverables, and optimizing the development lifecycle.",
  signature = "| Tharundi Perera"
}: AboutProps) {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-[#F7F3EB] via-[#f0ebe1] to-[#e8e2d5] flex items-center justify-center overflow-hidden py-12 sm:py-16 md:py-20">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] sm:w-[80%] h-[80%] sm:h-[70%] bg-white/20 backdrop-blur-sm border border-white/40 rotate-[-2deg] z-0 transition-transform duration-1000 hover:rotate-0"></div>
      
      <div className="absolute top-10 left-6 w-24 h-24 sm:w-48 sm:h-48 bg-white/40 backdrop-blur-md border border-white/60 shadow-lg rotate-45 animate-[spin_40s_linear_infinite] z-0"></div>
      
      <div className="absolute bottom-20 left-1/4 w-20 h-20 sm:w-32 sm:h-32 bg-white/30 backdrop-blur-sm border border-white/50 shadow-md rotate-45 animate-pulse z-0" style={{ animationDuration: '5s' }}></div>
      
      <div className="absolute top-20 right-10 w-24 h-24 sm:w-40 sm:h-40 bg-white/50 backdrop-blur-lg border border-white/70 shadow-xl rotate-[60deg] hover:rotate-90 transition-transform duration-700 z-0"></div>
      
      <div className="absolute bottom-10 right-6 w-32 h-32 sm:w-56 sm:h-56 bg-white/20 backdrop-blur-md border border-white/40 shadow-sm rotate-45 animate-[spin_50s_linear_infinite_reverse] z-0"></div>

      <div className="relative z-10 bg-white/70 backdrop-blur-2xl border border-white/80 max-w-3xl w-full mx-4 sm:mx-6 p-6 sm:p-12 md:p-20 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 hover:shadow-[0_30px_80px_-15px_rgba(0,0,0,0.15)] hover:-translate-y-1 group rounded-sm">
        
        <div className="flex flex-col max-w-lg relative w-full">
          
          <div className="absolute -left-6 sm: -left-12 md:-left-20 top-0 w-1 h-0 bg-[#1a1a1a] transition-all duration-700 ease-out group-hover:h-full opacity-20"></div>

          <span className="text-[#1a1a1a]/60 font-bold text-sm sm:text-lg mb-4 sm:mb-6 tracking-widest font-sans flex items-center gap-3 sm:gap-4">
            {sectionNumber}
          </span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl mb-6 sm:mb-8 font-medium leading-tight whitespace-pre-line font-sans uppercase tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
            {heading}
          </h2>
          
          <p className="text-[#4a4a4a] text-sm sm:text-base md:text-lg leading-relaxed mb-8 sm:mb-12 font-sans relative z-10">
            {description}
          </p>
          
          <span className="text-[#1a1a1a] text-xs sm:text-sm tracking-[0.2em] uppercase font-bold font-sans opacity-80">
            {signature}
          </span>
        </div>

      </div>
    </section>
  );
}