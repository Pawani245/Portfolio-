import React from 'react';

export default function Experience() {
  const experiences = [
    {
      id: 1,
      role: "Software Engineering Intern",
      company: "Current Company", // Replace with your actual internship company
      date: "2025 - Present",
      description: "Contributing to software development projects, engaging in hands-on technical problem solving, and gaining industry experience.",
      type: "Professional"
    },
    {
      id: 2,
      role: "BSc (Hons) in Information Technology",
      company: "University of Colombo / SLIIT",
      date: "Graduating Soon",
      description: "Specialized in Business Analysis & Software Engineering. Maintained a 3.8/4.0 GPA with a focus on NLP, Neural Networks, and Systems Modeling.",
      type: "Academic"
    }
  ];

  return (
    <section id="experience" className="relative w-full min-h-screen bg-gradient-to-br from-[#F7F3EB] via-[#f0ebe1] to-[#e8e2d5] flex items-center justify-center overflow-hidden py-24">
      
      {/* Animated Background Elements */}
      <div className="absolute top-40 right-20 w-48 h-48 bg-white/40 backdrop-blur-md border border-white/60 shadow-lg rotate-45 animate-[spin_40s_linear_infinite] z-0"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-white/20 backdrop-blur-xl border border-white/50 rounded-full mix-blend-overlay filter blur-xl animate-[pulse_8s_ease-in-out_infinite] z-0"></div>

      <div className="relative z-10 max-w-5xl w-full px-6">
        
        {/* Section Header */}
        <div className="mb-20 text-center md:text-left">
          <span className="text-[#1a1a1a]/60 font-bold text-lg mb-4 tracking-widest font-sans flex items-center justify-center md:justify-start gap-4">
            07
            <div className="h-[1px] w-12 bg-[#1a1a1a]/20"></div>
          </span>
          <h2 className="text-4xl md:text-5xl font-medium uppercase tracking-wide font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
            Experience & Journey
          </h2>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#1a1a1a]/10 ml-4 md:ml-6 flex flex-col gap-12">
          
          {experiences.map((exp) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              
              {/* Timeline Node (Dot) */}
              <div className="absolute -left-[9px] top-2 w-4 h-4 bg-[#1a1a1a] rounded-full border-4 border-[#F7F3EB] group-hover:scale-125 group-hover:bg-[#4a4a4a] transition-all duration-300"></div>

              {/* Content Card (Glassmorphic) */}
              <div className="bg-white/50 backdrop-blur-xl border border-white/70 p-8 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                  <h3 className="text-xl md:text-2xl font-sans font-bold text-[#1a1a1a]">
                    {exp.role}
                  </h3>
                  <span className="inline-block px-3 py-1 bg-white/60 border border-white/80 text-[#1a1a1a] text-xs font-bold uppercase tracking-widest rounded-full">
                    {exp.date}
                  </span>
                </div>
                
                <h4 className="text-md font-serif italic text-[#4a4a4a] mb-6">
                  {exp.company} — <span className="text-sm not-italic opacity-70">{exp.type}</span>
                </h4>
                
                <p className="text-[#4a4a4a] font-sans leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}