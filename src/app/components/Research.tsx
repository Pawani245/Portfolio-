'use client';

import React from 'react';

interface Publication {
  id: string;
  title: string;
  conference: string;
  year: string;
  award?: string;
  link?: string;
}

export default function Research() {
  const publications: Publication[] = [
    {
      id: "pub-01",
      title: "Personalizing University Support: Benchmarking Lightweight RAG Systems Against Commercial LLMs in Higher Education Administration",
      conference: "2026 6th International Conference on Advanced Research in Computing (ICARC)",
      year: "2026",
      award: "The Best Paper Of the Generative AI in Education",
      link: "https://researchgate.net/profile/Tharundi-Perera"
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F7F3EB] flex flex-col justify-center overflow-hidden py-16 sm:py-24">
      
      <div className="absolute top-10 right-0 w-36 h-36 sm:w-64 sm:h-64 bg-white rotate-45 translate-x-1/2 opacity-40 sm:opacity-60 z-0"></div>
      <div className="absolute bottom-6 left-4 w-24 h-24 sm:w-40 sm:h-40 bg-white rotate-[30deg] opacity-50 sm:opacity-70 z-0"></div>
      <div className="absolute bottom-1/3 right-12 w-16 h-16 sm:w-24 sm:h-24 bg-white rotate-45 opacity-30 sm:opacity-50 z-0"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="mb-12 sm:mb-16 md:mb-24 text-center sm:text-left">
          <span className="text-[#1a1a1a]/60 font-bold text-base sm:text-lg mb-1 sm:mb-2 block tracking-widest font-sans">
            05 -
          </span>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#1a1a1a] font-medium uppercase tracking-wide font-sans">
            RESEARCH &<br className="hidden sm:block" /> PUBLICATIONS
          </h2>
        </div>

        <div className="flex flex-col gap-6 sm:gap-10">
          {publications.map((pub) => (
            <div 
              key={pub.id} 
              className="group relative bg-[#FAF8F5] p-6 sm:p-8 md:p-12 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 border-l-4 border-[#1a1a1a]"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
                
                <div className="max-w-3xl w-full flex flex-col text-left">
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-3 sm:mb-4">
                    <span className="bg-[#1a1a1a] text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider py-1 px-2.5 sm:px-3">
                      Indexed Conference Paper
                    </span>
                    <span className="text-gray-500 font-sans font-semibold text-xs tracking-wider">
                      {pub.year}
                    </span>
                  </div>
                  
                  <h3 className="text-xl sm:text-2xl md:text-3xl text-[#1a1a1a] font-medium mb-3 sm:mb-4 font-sans leading-snug">
                    {pub.title}
                  </h3>
                  
                  <p className="text-[#4a4a4a] font-sans text-xs sm:text-sm tracking-wide uppercase mb-3 sm:mb-4">
                    <span className="font-semibold text-[#1a1a1a]">Venue:</span> {pub.conference}
                  </p>

                  {pub.award && (
                    <div className="inline-flex items-center self-start gap-2 bg-amber-50 border border-amber-200 text-amber-800 text-[10px] sm:text-xs font-medium px-2.5 py-1.5 sm:px-3 rounded-xs mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-amber-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                      <span className="tracking-wide uppercase font-sans font-bold">{pub.award}</span>
                    </div>
                  )}
                </div>

                {pub.link && (
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full md:w-auto px-6 sm:px-8 py-3 bg-white text-[#1a1a1a] font-semibold text-xs sm:text-sm tracking-widest uppercase border border-gray-200 hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 flex-shrink-0 text-center"
                  >
                    View Paper
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}