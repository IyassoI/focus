import React from 'react';
import { SUCCESS_STORIES } from '../data';
import { Award, Landmark, MapPin, Settings2 } from 'lucide-react';

export default function SuccessStories() {
  const icons = [Landmark, Award, Settings2];

  return (
    <section id="success-stories" className="relative py-24 bg-brand-navy border-b border-gray-800 text-white overflow-hidden">
      {/* Background diagonal cut shapes */}
      <div 
        className="absolute top-0 right-0 w-[40%] h-[35%] bg-gradient-to-bl from-brand-steel-medium/10 to-transparent pointer-events-none"
        style={{ clipPath: 'polygon(100% 0, 0 0, 100% 100%)' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-24 h-48 bg-brand-steel-light/5 pointer-events-none"
        style={{ clipPath: 'polygon(0 0, 100% 100%, 0 100%)' }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">

        {/* Header Block */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 text-brand-steel-light font-mono text-xs uppercase tracking-[0.25em] mb-3">
            <span className="w-8 h-[1px] bg-brand-steel-light" />
            <span>CASE STUDIES</span>
            <span className="w-8 h-[1px] bg-brand-steel-light" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight text-white">
            Successful <span className="text-brand-steel-light">Stories</span>
          </h2>
          <p className="mt-4 text-xs font-mono text-gray-400 uppercase tracking-widest leading-relaxed">
            Proven engineering excellence, structural urban design, & specialized logistics
          </p>
        </div>

        {/* 3 Story Cards Display */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {SUCCESS_STORIES.map((story, ind) => {
            const StoryIcon = icons[ind];
            return (
              <div 
                key={story.id}
                className="bg-brand-navy-light/40 border border-gray-800 hover:border-brand-steel-light/70 hover:bg-brand-navy-light/80 transition-all duration-300 flex flex-col group overflow-hidden"
                style={{
                  clipPath: 'polygon(0 0, 100% 0, 100% 95%, 93% 100%, 0  100%)'
                }}
              >
                {/* Image Section */}
                <div className="relative h-56 w-full overflow-hidden border-b border-gray-800">
                  <div className="absolute inset-0 bg-brand-navy/30 group-hover:bg-transparent z-10 transition-colors duration-300" />
                  <img 
                    src={story.imageUrl} 
                    alt={story.title} 
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  {/* Decorative sharp-cut Chevron on corner of image */}
                  <div className="absolute bottom-0 right-0 bg-brand-navy px-4 py-2 text-[10px] font-mono uppercase tracking-wider text-brand-steel-light border-t border-l border-gray-800 z-20"
                    style={{ clipPath: 'polygon(10% 0, 100% 0, 100% 100%, 0 100%)' }}
                  >
                    Active Site
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Location Tag */}
                    <div className="flex items-center space-x-1.5 text-xs font-mono text-brand-steel-light mb-3 uppercase tracking-wider">
                      <MapPin className="w-3.5 h-3.5 text-brand-steel-light" />
                      <span>{story.location}</span>
                    </div>

                    {/* Header Title with Mini Icon */}
                    <div className="flex items-start gap-3">
                      <div className="w-7 h-7 bg-brand-steel-medium/20 flex items-center justify-center text-brand-steel-light mt-0.5 rounded-none flex-shrink-0">
                        <StoryIcon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-black text-base text-white uppercase tracking-wider leading-snug group-hover:text-brand-steel-light transition-colors">
                        {story.title}
                      </h3>
                    </div>

                    {/* Detailed Paragraph */}
                    <p className="mt-4 text-xs text-gray-300 leading-relaxed font-sans">
                      {story.description}
                    </p>
                  </div>

                  {/* Operational Pillar Statement */}
                  <div className="mt-8 pt-4 border-t border-gray-800/60 flex items-center justify-between text-[10px] font-mono text-gray-500">
                    <span>Engineering Deliverable</span>
                    <span>Approved Status</span>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
