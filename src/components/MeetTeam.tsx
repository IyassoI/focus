import React, { useState } from 'react';
import { TEAM_MEMBERS } from '../data';
import { Linkedin, Mail, BadgeCheck, PhoneCall, Copy, Check } from 'lucide-react';

export default function MeetTeam() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <section id="team" className="relative py-24 bg-white text-gray-900 overflow-hidden">
      {/* Background soft geometric details */}
      <div className="absolute top-0 left-0 w-[40%] h-full bg-slate-50 z-0" style={{ clipPath: 'polygon(0 0, 85% 0, 100% 100%, 0% 100%)' }} />
      <div className="absolute bottom-0 right-0 w-24 h-24 bg-brand-steel-light/10" style={{ clipPath: 'polygon(100% 0, 100% 100%, 0 100%)' }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-steel-medium font-mono text-xs uppercase tracking-widest mb-3 justify-center">
            <span className="w-8 h-[1px] bg-brand-steel-medium" />
            <span>LEADERSHIP EXCELLENCE</span>
            <span className="w-8 h-[1px] bg-brand-steel-medium" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black text-brand-navy uppercase tracking-tight">
            Meet Our Team
          </h2>
          <p className="mt-4 text-xs font-mono text-gray-500 uppercase tracking-widest">
            Cross-continental industrial operators averaging 15+ years experience
          </p>
        </div>

        {/* Grid Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200/80 p-6 sm:p-8 hover:border-brand-steel-light hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group shadow-sm hover:shadow-lg"
              style={{
                clipPath: 'polygon(0 0, 100% 0, 100% 93%, 92% 100%, 0 100%)'
              }}
            >
              {/* Top Accent line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-navy group-hover:bg-brand-steel-light transition-colors" />

              <div>
                {/* Upper Meta */}
                <div className="flex justify-between items-start mb-6">
                  {/* Dynamic Team Member Avatar (Geometric frame supporting images or initials fallback) */}
                    <div className="w-18 h-18 bg-brand-navy flex items-center justify-center text-white text-lg font-display font-black tracking-wider overflow-hidden"
                      style={{ clipPath: 'polygon(15% 0, 100% 0, 85% 100%, 0 100%)' }}
                    >
                      {member.imageUrl ? (
                        <img 
                          src={member.imageUrl} 
                          alt={member.name} 
                         className="w-full h-full object-top object-cover group-hover:scale-110 transition-transform duration-350"
                          referrerPolicy="no-referrer"
                        />
                      ) : (
                        member.name.split(' ').map(n => n[0]).join('')
                      )}
                    </div>
                  <div className="flex items-center space-x-1 bg-slate-100 px-2.5 py-1 text-[10px] font-mono font-bold text-brand-navy uppercase">
                    <BadgeCheck className="w-3 h-3 text-brand-steel-medium" />
                    <span>Verified Expert</span>
                  </div>
                </div>

                {/* Name & Role */}
                <h3 className="font-display font-black text-base text-brand-navy tracking-wide uppercase">
                  {member.name}
                </h3>
                <p className="font-mono text-[11px] text-brand-steel-medium uppercase tracking-wider mt-1.5 font-bold">
                  {member.role}
                </p>

                {/* Experience text with elegant checklist representation */}
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                  <span className="w-2 h-2 bg-brand-steel-light rotate-45 transform" />
                  <span className="text-xs text-gray-650 font-sans font-medium">
                    {member.experience}
                  </span>
                </div>
              </div>

              {/* Bottom Communication Section */}
              <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[10px] uppercase font-mono text-gray-400">Direct Contact</span>
                {member.type === 'linkedin' ? (
                  <a
                    href={`https://${member.contactUrl}`}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center space-x-1 text-xs font-mono text-brand-steel-medium hover:text-brand-navy font-bold transition-colors"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    <span className="underline">Profile Link</span>
                  </a>
                ) : (
                  <div className="flex items-center space-x-2">
                    <a
                      href={`mailto:${member.contactUrl}`}
                      className="inline-flex items-center space-x-1 text-xs font-mono text-brand-steel-medium hover:text-brand-navy transition-colors font-bold"
                      title={`Email ${member.name}`}
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span className="underline truncate max-w-[120px]">{member.contactUrl.split('@')[0]}</span>
                    </a>
                    <button
                      onClick={() => handleCopy(member.contactUrl, member.id)}
                      className="p-1 text-gray-400 hover:text-brand-steel-medium transition-colors"
                      title="Copy email to clipboard"
                    >
                      {copiedId === member.id ? (
                        <Check className="w-3 h-3 text-emerald-500" />
                      ) : (
                        <Copy className="w-3 h-3" />
                      )}
                    </button>
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
