'use client';

import React from 'react';

interface ActivityItem {
  id: string;
  role: string;
  timeline: string;
  organization: string;
  location?: string;
  category: 'leadership' | 'membership';
}

export default function Extracurriculars() {
  const activities: ActivityItem[] = [
    {
      id: "act-01",
      role: "Assistant Secretary",
      timeline: "2024 - 2025",
      organization: "IEEE NSBM Green University Student Branch",
      location: "Homagama",
      category: "leadership"
    },
    {
      id: "act-02",
      role: "Member",
      timeline: "2023 - 2025",
      organization: "IEEE NSBM Green University Student Branch",
      location: "Homagama",
      category: "membership"
    },
    {
      id: "act-03",
      role: "Member",
      timeline: "2023 - 2024",
      organization: "NFORCE, NSBM Green University",
      location: "Homagama",
      category: "membership"
    },
    {
      id: "act-04",
      role: "Member",
      timeline: "2023 - 2024",
      organization: "Buddhist Association, NSBM Green University",
      location: "Homagama",
      category: "membership"
    },
    {
      id: "act-05",
      role: "Member",
      timeline: "2015 - 2020",
      organization: "Chess Club, OKI International School",
      location: "Wattala",
      category: "membership"
    },
    {
      id: "act-06",
      role: "Member",
      timeline: "2015 - 2020",
      organization: "Girl Guiding Association, OKI International School",
      location: "Wattala",
      category: "membership"
    }
  ];

  const leadershipRoles = activities.filter(act => act.category === 'leadership');
  const membershipRoles = activities.filter(act => act.category === 'membership');

  return (
    <section className="relative w-full min-h-screen bg-[#F7F3EB] flex flex-col justify-center overflow-hidden py-16 sm:py-24">
      
      <div className="absolute top-10 left-10 w-32 h-32 bg-white rotate-45 opacity-40 pointer-events-none z-0"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rotate-[15deg] opacity-50 pointer-events-none z-0"></div>

      <div className="relative z-10 max-w-6xl w-full mx-auto px-4 sm:px-6 md:px-8">
        
        <div className="mb-12 sm:mb-20 text-center sm:text-left">
          <span className="text-[#1a1a1a]/60 font-bold text-base sm:text-lg mb-1 sm:mb-2 block tracking-widest font-sans">
            06 -
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] font-medium uppercase tracking-wide font-sans">
            VOLUNTEERING &<br className="hidden sm:block" /> ENGAGEMENT
          </h2>
        </div>

        <div className="flex flex-col gap-12 sm:gap-16">
          
          {leadershipRoles.length > 0 && (
            <div>
              <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] italic mb-6 border-b border-[#1a1a1a]/10 pb-2 text-left">
                Leadership Roles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {leadershipRoles.map((act) => (
                  <div 
                    key={act.id}
                    className="bg-[#FAF8F5] border border-[#1a1a1a]/5 p-6 sm:p-8 flex flex-col justify-between text-left shadow-[0_4px_20px_-10px_rgba(0,0,0,0.02)] transition-all duration-300 hover:-translate-y-1 hover:shadow-md rounded-xs"
                  >
                    <div>
                      <div className="flex justify-between items-start gap-4 mb-3">
                        <h4 className="font-sans font-bold text-lg sm:text-xl text-[#1a1a1a] tracking-tight">
                          {act.role}
                        </h4>
                        <span className="font-sans font-bold text-xs tracking-wider text-[#1a1a1a] bg-[#1a1a1a]/5 px-2.5 py-1 rounded-xs flex-shrink-0">
                          {act.timeline}
                        </span>
                      </div>
                      <p className="font-serif text-sm text-gray-600 leading-relaxed">
                        {act.organization}
                      </p>
                    </div>
                    {act.location && (
                      <span className="text-[10px] font-sans tracking-widest text-gray-400 uppercase font-semibold mt-4 block">
                        {act.location}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div>
            <h3 className="font-serif text-xl sm:text-2xl text-[#1a1a1a] italic mb-6 border-b border-[#1a1a1a]/10 pb-2 text-left">
              Memberships & Activities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {membershipRoles.map((act) => (
                <div 
                  key={act.id}
                  className="bg-white/60 backdrop-blur-xs border border-[#1a1a1a]/5 p-6 flex flex-col justify-between text-left transition-all duration-300 hover:bg-white hover:-translate-y-1 hover:shadow-md rounded-xs"
                >
                  <div>
                    <div className="flex justify-between items-start gap-4 mb-2">
                      <h4 className="font-sans font-semibold text-base sm:text-lg text-[#1a1a1a] tracking-tight">
                        {act.organization.split(',')[0]}
                      </h4>
                      <span className="font-sans font-semibold text-[10px] tracking-wider text-gray-500 whitespace-nowrap mt-1">
                        {act.timeline}
                      </span>
                    </div>
                    <p className="font-serif text-xs text-gray-500 italic">
                      {act.organization.includes(',') ? act.organization.substring(act.organization.indexOf(',') + 1).trim() : act.role}
                    </p>
                  </div>
                  {act.location && (
                    <span className="text-[9px] font-sans tracking-wider text-gray-400 uppercase font-medium mt-4 block">
                      {act.location}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}2