'use client';

import Image from 'next/image';
import React from 'react';

interface ProjectData {
  id: string;
  title: string;
  description: string;
  tech?: string;
  imageSrc?: string;
  href: string;
}

export default function Projects() {
  const featuredProjects: ProjectData[] = [
    {
      id: "biwize",
      title: "BIWIZE",
      description: "AI platform specialized in Requirement Engineering for IT Business Analytics utilizing a Multi-RAG Agentic architecture.",
      tech: "Agentic RAG / Neural Networks",
      href: "https://github.com/BEWIZE-TECH/BA", 
    },
    {
      id: "language-project",
      title: "Language",
      description: "Core linguistic interpretation or structural language processing system module developed for specific environmental datasets.",
      tech: "React",
      href: "https://github.com/Pawani245/learn", 
    },
    {
      id: "opulentia",
      title: "Opulentia Furniture",
      description: "A modern Next.js storefront demo featuring Firebase authentication, functional product cart, and 3D product visualization.",
      tech: "Next.js / Firebase / 3D Vision",
      href: "https://github.com/Pawani245", 
    },
    {
      id: "imperial-cinema",
      title: "Imperial Cinema",
      description: "A comprehensive, full-stack platform purpose-built for seamless online movie ticket booking and management.",
      tech: "Full-Stack Development",
      href: "https://github.com/Pawani245",
    },
    {
      id: "visum",
      title: "VISUM",
      description: "A smart physical Kiosk System providing automated beauty care assistance. Built the administrative control panel and the custom Beauty Score system UI.",
      tech: "React / Python",
      href: "https://github.com/Pawani245",
    }
  ];

  const secondaryProjects: ProjectData[] = [
    {
      id: "uni-app",
      title: "Advance University App",
      description: "Group Project. Developed a full-stack mobile and web environment; architected the administrative web workspace and the mobile University Direction Module (UniMap).",
      tech: "React / Python / Mobile App",
      href: "https://github.com/Pawani245",
    },
    {
      id: "air-quality",
      title: "Air Quality Monitoring",
      description: "Personal Project. Engineered a full-stack end-to-end Air Quality Monitoring system feeding a clean dashboard interface.",
      tech: "React / C#",
      href: "https://github.com/Pawani245",
    },
    {
      id: "clarafi",
      title: "CLARAFI-BALLERINA",
      description: "Competition Project. Programmed a system that compiles data streams to programmatically generate comprehensive, verified financial reports.",
      tech: "Ballerina Lang",
      href: "https://learn-ruddy.vercel.app", 
    },
    {
      id: "maison-neuf",
      title: "MAISON-NEUF",
      description: "Group Project. Developed a full-stack online clothing retail storefront, taking ownership of database modeling and server-side logic.",
      tech: "PHP / MySQL",
      href: "https://github.com/Pawani245",
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F7F3EB] flex flex-col items-center justify-center overflow-hidden py-16 sm:py-24">
      
      <div className="absolute top-6 right-6 w-20 h-20 sm:w-32 sm:h-32 bg-white rotate-45 opacity-40 sm:opacity-60 z-0"></div>
      <div className="absolute top-1/4 left-4 w-24 h-24 sm:w-48 sm:h-48 bg-white rotate-45 opacity-[0.35] sm:opacity-70 z-0"></div>
      <div className="absolute bottom-1/4 left-1/3 w-16 h-16 sm:w-24 sm:h-24 bg-white rotate-45 opacity-40 sm:opacity-50 z-0"></div>
      <div className="absolute bottom-6 right-12 w-28 h-28 sm:w-40 sm:h-40 bg-white rotate-45 opacity-60 sm:opacity-80 z-0"></div>

      <div className="relative z-10 max-w-7xl w-full px-4 sm:px-6 md:px-8 flex flex-col gap-16 sm:gap-24">
        
        <div>
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-[#1a1a1a]/60 font-bold text-base sm:text-lg mb-1 sm:mb-2 block tracking-widest font-sans">
              03 -
            </span>

            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#1a1a1a] font-medium uppercase tracking-wide font-sans">
              SELECTED PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredProjects.map((project) => (
              <a 
                key={project.id} 
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer w-full"
              >
                <div className="w-full aspect-square bg-white shadow-xs transition-all duration-300 group-hover:-translate-y-1.5 group-hover:shadow-md relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-left border border-black/5">
                  {project.imageSrc ? (
                    <Image 
                      src={project.imageSrc} 
                      alt={project.title} 
                      fill 
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <div className="flex flex-col gap-1.5 sm:gap-3">
                        <h3 className="font-sans font-semibold text-lg sm:text-xl text-[#1a1a1a] group-hover:text-gray-700 transition-colors line-clamp-2">
                          {project.title}
                        </h3>
                        <p className="font-serif text-[11px] sm:text-xs text-gray-500 leading-relaxed line-clamp-5 sm:line-clamp-4 lg:line-clamp-5">
                          {project.description}
                        </p>
                      </div>
                      
                      {project.tech && (
                        <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-gray-400 uppercase font-semibold mt-3 block">
                          {project.tech}
                        </span>
                      )}
                    </>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>

        <div>
          <div className="mb-8 sm:mb-12 text-center sm:text-left">
            <span className="text-[#1a1a1a]/60 font-bold text-base sm:text-lg mb-1 sm:mb-2 block tracking-widest font-sans">
              04 - 
            </span>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#1a1a1a] font-medium uppercase tracking-wide font-sans">
              OTHER<br className="hidden sm:block" /> PROJECTS
            </h2>
          </div>
          
          <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {secondaryProjects.map((project) => (
              <a 
                key={project.id} 
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col group cursor-pointer w-full"
              >
                <div className="w-full aspect-square bg-white/60 backdrop-blur-xs shadow-xs transition-all duration-300 group-hover:-translate-y-1.5 group-hover:bg-white group-hover:shadow-md relative overflow-hidden flex flex-col justify-between p-6 sm:p-8 text-left border border-black/5">
                  <div className="flex flex-col gap-1.5 sm:gap-2">
                    <h3 className="font-sans font-semibold text-base sm:text-lg text-[#1a1a1a] group-hover:text-gray-700 transition-colors line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="font-serif text-[11px] sm:text-xs text-gray-500 leading-relaxed line-clamp-5 sm:line-clamp-4 lg:line-clamp-5">
                      {project.description}
                    </p>
                  </div>
                  
                  {project.tech && (
                    <span className="text-[9px] sm:text-[10px] font-sans tracking-widest text-gray-400 uppercase font-semibold mt-3 block">
                      {project.tech}
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}