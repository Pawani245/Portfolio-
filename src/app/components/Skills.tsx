import React from 'react';

interface SkillCategory {
  title: string;
  skills: string[];
}

export default function Skills() {
  const skillCategories: SkillCategory[] = [
    {
      title: "Full-Stack Development",
      skills: ["React", "Next.js", "Node.js", "Python", "TypeScript"]
    },
    {
      title: "Artificial Intelligence",
      skills: ["Agentic RAG", "Neural Networks", "Systems Modeling", "Model Fine-Tuning"]
    },
    {
      title: "Cyber Security & Systems",
      skills: ["Network Analysis", "Reverse Engineering", "Linux (Arch)", "Hardware Modification"]
    },
    {
      title: "Core Tools & Architecture",
      skills: ["Git", "Firebase", "REST APIs", "Autonomous Requirement Engineering"]
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen bg-gradient-to-br from-[#F7F3EB] via-[#f0ebe1] to-[#e8e2d5] flex items-center justify-center overflow-hidden py-24">
      
      {/* Animated Background Elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 bg-white/30 backdrop-blur-xl rounded-full mix-blend-overlay filter blur-3xl animate-[pulse_8s_ease-in-out_infinite] z-0"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-white/20 backdrop-blur-xl rounded-full mix-blend-overlay filter blur-3xl animate-[pulse_10s_ease-in-out_infinite_reverse] z-0"></div>

      <div className="relative z-10 max-w-7xl w-full px-6 flex flex-col gap-16">
        
        {/* Section Header */}
        <div>
          <span className="text-[#1a1a1a]/60 font-bold text-lg mb-4 tracking-widest font-sans flex items-center gap-4">
            06
            <div className="h-[1px] w-12 bg-[#1a1a1a]/20"></div>
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium uppercase tracking-wide font-sans text-transparent bg-clip-text bg-gradient-to-r from-[#1a1a1a] via-[#4a4a4a] to-[#1a1a1a] bg-[length:200%_auto] animate-[gradient_8s_ease_infinite]">
            Technical Arsenal
          </h2>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div 
              key={idx}
              className="bg-white/40 backdrop-blur-lg border border-white/60 p-10 rounded-sm shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:bg-white/60 hover:shadow-[0_8px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 group"
            >
              <h3 className="text-xl font-serif font-bold text-[#1a1a1a] mb-6 italic">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, sIdx) => (
                  <span 
                    key={sIdx}
                    className="px-4 py-2 bg-white/50 border border-white/80 text-[#1a1a1a] text-xs font-bold uppercase tracking-widest hover:bg-[#1a1a1a] hover:text-white transition-colors duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}