import React from 'react';

interface TimelineItem {
  year: string;
  degree: string;
  institution: string;
  location?: string;
  type: 'higher' | 'school';
}

export default function Education() {
  const educationData: TimelineItem[] = [
    {
      year: "2023 - Present",
      degree: "BSc (Hons) Computer Science",
      institution: "Plymouth University",
      location: "UK",
      type: 'higher'
    },
    {
      year: "2022 - 2023",
      degree: "Diploma In Information Technology",
      institution: "ESOFT Metro Campus",
      location: "Wattala",
      type: 'higher'
    },
    {
      year: "2020 - 2022",
      degree: "Advance Level (Cambridge)",
      institution: "OKI International School",
      location: "Wattala",
      type: 'school'
    },
    {
      year: "2018 - 2020",
      degree: "Ordinary Level (Cambridge)",
      institution: "OKI International School",
      location: "Wattala",
      type: 'school'
    }
  ];

  return (
    <section className="relative w-full min-h-screen bg-[#F7F3EB] flex items-center justify-center overflow-hidden py-16 sm:py-24 md:py-32">
      
      <div className="absolute top-0 left-6 sm:left-12 lg:left-1/4 w-[1px] h-full bg-[#1a1a1a]/5 z-0"></div>
      <div className="absolute top-12 right-12 w-48 h-48 sm:w-96 sm:h-96 bg-white/40 rounded-full blur-2xl sm:blur-3xl pointer-events-none z-0"></div>
      <div className="absolute bottom-12 left-12 w-40 h-40 sm:w-80 sm:h-80 bg-white/30 rounded-full blur-xl sm:blur-2xl pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl w-full px-4 sm:px-8 lg:px-12 flex flex-col lg:flex-row gap-12 sm:gap-16 lg:gap-24">
        
        <div className="w-full lg:w-1/3 lg:sticky lg:top-32 lg:h-fit flex flex-col items-center text-center lg:items-start lg:text-left">
          <div className="flex items-center gap-4 mb-3 sm:mb-4">
            <span className="text-[#1a1a1a]/60 font-sans font-bold text-base sm:text-lg tracking-widest">
              02 -
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-5xl lg:text-6xl text-[#1a1a1a] font-medium uppercase tracking-tight font-sans leading-[1.15] mb-4 sm:mb-6">
            Education <br />

          </h2>
          
        </div>

        <div className="w-full lg:w-2/3 relative flex flex-col gap-8 sm:gap-12">
          
          <div className="absolute left-3 sm:left-4 lg:left-[19px] top-2 bottom-2 w-[1px] bg-gradient-to-b from-[#1a1a1a]/20 via-[#1a1a1a]/10 to-transparent"></div>

          {educationData.map((edu, index) => (
            <div 
              key={index} 
              className="relative pl-8 sm:pl-12 lg:pl-16 group transition-all duration-300 w-full"
            >
              <div className="absolute left-[10px] sm:left-[13px] lg:left-[14px] top-2.5 w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full bg-[#F7F3EB] border-2 border-[#1a1a1a] shadow-xs group-hover:bg-[#1a1a1a] transition-colors duration-300 z-10"></div>
              
              <div className="bg-white/40 backdrop-blur-xs border border-white/60 p-5 sm:p-8 rounded-sm shadow-[0_4px_20px_-6px_rgba(0,0,0,0.02)] group-hover:shadow-[0_12px_30px_-10px_rgba(0,0,0,0.06)] group-hover:bg-white/90 group-hover:-translate-y-0.5 sm:group-hover:-translate-y-1 transition-all duration-400 flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                
                <div className="flex flex-col gap-0.5 sm:gap-1 max-w-md w-full">
                  <span className="text-[9px] sm:text-[10px] font-sans font-bold tracking-[0.2em] text-[#1a1a1a]/40 uppercase mb-0.5">
                    {edu.type === 'higher' ? 'Higher Education' : 'Schooling'}
                  </span>
                  
                  <h3 className="text-lg sm:text-xl font-sans font-semibold text-[#1a1a1a] leading-snug group-hover:text-gray-800 transition-colors">
                    {edu.degree}
                  </h3>
                  
                  <p className="font-serif italic text-xs sm:text-sm text-gray-600 mt-0.5 sm:mt-1">
                    {edu.institution}{edu.location ? `, ${edu.location}` : ''}
                  </p>
                </div>

                <div className="inline-block sm:text-right flex-shrink-0 self-start sm:self-auto">
                  <span className="inline-flex sm:flex font-sans font-bold text-[10px] sm:text-xs tracking-wider text-[#1a1a1a] bg-[#1a1a1a]/5 sm:bg-transparent px-2 py-0.5 sm:p-0 rounded-xs uppercase">
                    {edu.year}
                  </span>
                </div>

              </div>
            </div>
          ))}

        </div>
        
      </div>
    </section>
  );
}