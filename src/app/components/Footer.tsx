'use client';

import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const links = [
    { label: 'Email', href: 'mailto:pawanitharundi24@gmail.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/tharundi-pawani-8b7578328' },
    { label: 'GitHub', href: 'https://github.com/Pawani245' },
    { label: 'ResearchGate', href: 'https://www.researchgate.net/profile/Tharundi-Perera' }
  ];

  return (
    <footer className="relative w-full bg-[#F7F3EB] pt-16 sm:pt-24 pb-8 sm:pb-12 overflow-hidden border-t border-[#1a1a1a]/5">
      
      <div className="absolute top-0 left-1/4 w-[1px] h-full bg-[#1a1a1a]/5 hidden md:block z-0"></div>
      <div className="absolute top-0 left-10 w-24 h-24 bg-white rotate-45 -translate-y-1/2 opacity-40 z-0"></div>
      <div className="absolute bottom-10 right-20 w-32 h-32 bg-white rotate-45 opacity-30 z-0"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-start pb-12 sm:pb-16">
          
          <div className="flex flex-col md:col-span-2 text-left max-w-xl">
            <span className="text-[#1a1a1a]/40 font-bold text-[10px] sm:text-xs tracking-[0.3em] font-sans mb-3 block">
            </span>
            <h2 className="text-2xl sm:text-3xl text-[#1a1a1a] font-serif mb-4 leading-tight">
              Tharundi Perera
            </h2>
          </div>

          <div className="flex flex-col md:items-end text-left md:text-right w-full">
            <div className="w-full md:w-auto">
              <h3 className="text-[#1a1a1a]/40 font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-4 sm:mb-6 font-sans">
             CONNECT
              </h3>
              <ul className="grid grid-cols-2 md:flex md:flex-col gap-3 sm:gap-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <a 
                      href={link.href} 
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-[#555555] hover:text-[#1a1a1a] text-xs sm:text-sm font-medium font-sans uppercase tracking-widest transition-colors duration-300 group"
                    >
                      <span>{link.label}</span>
                      <span className="text-[10px] text-gray-400 group-hover:text-[#1a1a1a] transition-colors duration-300 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                        &#8599;
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center pt-6 sm:pt-8 border-t border-[#1a1a1a]/10 gap-4 text-center sm:text-left">
          <p className="text-[10px] sm:text-xs text-[#555555] font-sans tracking-widest uppercase order-2 sm:order-1">
            &copy; {currentYear} Tharundi Perera. All Rights Reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-[#1a1a1a]/50 font-sans tracking-[0.25em] uppercase order-1 sm:order-2 flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#1a1a1a]/30 animate-pulse"></span>
            Sri Lanka
          </p>
        </div>

      </div>
    </footer>
  );
}