import React, { useState, useEffect } from 'react';
import { TESTIMONIALS } from '../data';
import { Star, ChevronLeft, ChevronRight, Quote, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-rotate testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const team = [
    {
      name: 'Arjun Ramakrishnan',
      role: 'Founder & Head of Growth',
      bio: 'Ex-Performance Strategist for top tech startups. Spent over ₹15Cr+ in optimized media buying with absolute performance attribution.',
      initials: 'AR',
      bgGlow: 'from-blue-600/20 to-indigo-600/20',
    },
    {
      name: 'Meera Krishnan',
      role: 'Creative Director & Brand Architect',
      bio: 'Award-winning visual storyteller. Defines corporate identity systems, typography guidelines, and digital asset frameworks for retail leaders.',
      initials: 'MK',
      bgGlow: 'from-purple-600/20 to-pink-600/20',
    },
    {
      name: 'Siddharth Chidambaram',
      role: 'Lead Full-Stack Web Architect',
      bio: 'React and Vite development native. Focuses on blazing-fast load speeds, Core Web Vitals optimization, and customized high-conversion layouts.',
      initials: 'SC',
      bgGlow: 'from-emerald-600/20 to-teal-600/20',
    },
    {
      name: 'Priya Ananth',
      role: 'Head of Local Search & SEO Strategy',
      bio: 'Expert in bilingual search patterns, regional GMB mapping, and semantic schemas designed to secure rank equity across South India.',
      initials: 'PA',
      bgGlow: 'from-amber-600/20 to-orange-600/20',
    }
  ];

  // Infinite sliding brand logos definitions (SVG placeholders)
  const clientLogos = [
    { name: 'TEMPLE_CITY', label: 'TempleCity Group' },
    { name: 'CHITRA_SILKS', label: 'Chitra Textiles' },
    { name: 'VIDHYA_EDU', label: 'Vidhya Academy' },
    { name: 'KOVAI_SaaS', label: 'Kovai Tech' },
    { name: 'PANDIAN_HOTELS', label: 'Pandian Enterprises' },
    { name: 'MADURAI_FOODS', label: 'Madurai Spices' }
  ];

  return (
    <section id="testimonials" className="relative py-24 bg-neutral-950 border-b border-white/5 overflow-hidden">
      {/* Background visual helpers */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      {/* INFINITE SCROLLING CLIENT LOGOS TICKER */}
      <div className="border-b border-white/10 pb-16 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
          <p className="text-xs font-mono text-gray-500 uppercase tracking-widest">
            Trusted by Leaders, Growing Brands & Local Champions
          </p>
        </div>
        
        {/* Infinite marquee ticker */}
        <div className="relative w-full overflow-hidden whitespace-nowrap [mask-image:linear-gradient(to_right,transparent_0%,_black_15%,_black_85%,_transparent_100%)]">
          <div className="inline-block animate-marquee py-4">
            {/* First Set of Logos */}
            {clientLogos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="inline-flex items-center mx-12 text-white/40 hover:text-blue-400 transition-colors cursor-pointer group">
                <span className="text-sm font-sans font-extrabold tracking-widest uppercase">
                  {logo.name}
                </span>
                <span className="ml-1 text-[8px] bg-white/5 text-gray-500 px-1 rounded-none">
                  {logo.label}
                </span>
              </div>
            ))}
            {/* Duplicate set for seamless looping */}
            {clientLogos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="inline-flex items-center mx-12 text-white/40 hover:text-blue-400 transition-colors cursor-pointer group">
                <span className="text-sm font-sans font-extrabold tracking-widest uppercase">
                  {logo.name}
                </span>
                <span className="ml-1 text-[8px] bg-white/5 text-gray-500 px-1 rounded-none">
                  {logo.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Testimonials Carousel Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-5">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
              <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
                VERIFIED PARTNER FEEDBACK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tighter text-white uppercase mb-4">
              OUR SUCCESS IS MEASURED BY <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>THEIR CASHFLOW GROWTH</span>
            </h2>
            <p className="text-white/50 text-base font-light leading-relaxed mb-6">
              Nothing speaks louder than direct business performance. Over 50 active partners rely on our performance media and SEO structures to fuel their growth.
            </p>
            {/* Carousel Buttons */}
            <div className="flex items-center space-x-3">
              <button
                id="testimonial-prev-btn"
                onClick={handlePrev}
                className="p-3 rounded-none border border-white/10 hover:border-blue-500/40 bg-white/[0.01] hover:bg-blue-500/5 text-gray-400 hover:text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                id="testimonial-next-btn"
                onClick={handleNext}
                className="p-3 rounded-none border border-white/10 hover:border-blue-500/40 bg-white/[0.01] hover:bg-blue-500/5 text-gray-400 hover:text-white transition-all focus:outline-none cursor-pointer"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Testimonial Display Area */}
          <div className="lg:col-span-7">
            <div className="relative rounded-none border border-white/10 bg-neutral-900/40 p-8 sm:p-10 shadow-[0_15px_35px_rgba(0,0,0,0.6)] backdrop-blur-md">
              <Quote className="absolute top-6 right-6 w-12 h-12 text-white/5 pointer-events-none" />
              
              {/* Stars */}
              <div className="flex items-center space-x-1 mb-6 text-yellow-500">
                {[...Array(TESTIMONIALS[activeIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Quote Block */}
              <blockquote className="text-lg sm:text-xl text-gray-200 leading-relaxed mb-8 font-sans">
                "{TESTIMONIALS[activeIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center space-x-4 border-t border-white/5 pt-6">
                <div className={`w-12 h-12 rounded-none bg-gradient-to-tr ${TESTIMONIALS[activeIndex].avatarColor} flex items-center justify-center font-bold text-white shadow-lg`}>
                  {TESTIMONIALS[activeIndex].avatarLetter}
                </div>
                <div>
                  <h4 className="text-base font-bold text-white tracking-wide">
                    {TESTIMONIALS[activeIndex].author}
                  </h4>
                  <span className="text-xs text-blue-400 font-mono">
                    {TESTIMONIALS[activeIndex].designation}, {TESTIMONIALS[activeIndex].company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div id="about" className="pt-24 border-t border-white/10 relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
              <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
                THE STRATEGIC GENIUSES
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-white uppercase">
              MEET OUR PREMIUM <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>EXECUTION CORE</span>
            </h3>
            <p className="text-white/50 text-base font-light leading-relaxed mt-2">
              Our team consists of veteran media buyers, fast-code React architects, and local SEO specialists combining forces to scale your brand.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, idx) => (
              <div
                id={`team-member-${idx}`}
                key={idx}
                className="group relative rounded-none border border-white/10 hover:border-blue-500/30 bg-white/[0.01] hover:bg-white/[0.03] p-6 transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.5)] flex flex-col justify-between overflow-hidden"
              >
                {/* Background glowing gradients */}
                <div className={`absolute -top-12 -right-12 w-28 h-28 bg-gradient-to-br ${member.bgGlow} rounded-full blur-2xl group-hover:scale-125 transition-transform duration-300 pointer-events-none`} />

                <div>
                  {/* Floating Initials as visual avatar placeholder */}
                  <div className="w-14 h-14 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 font-mono font-bold text-lg mb-6 shadow-md transition-transform duration-300 group-hover:scale-105">
                    {member.initials}
                  </div>

                  <h4 className="text-base font-bold text-white mb-1 group-hover:text-blue-400 transition-colors tracking-wider uppercase">
                    {member.name}
                  </h4>
                  <span className="text-xs text-blue-400 font-mono block mb-4">
                    {member.role}
                  </span>
                  <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-6 font-light">
                    {member.bio}
                  </p>
                </div>

                {/* Social icons */}
                <div className="flex items-center space-x-3 pt-4 border-t border-white/5 text-gray-500">
                  <a href="#linkedin" className="hover:text-blue-400 transition-colors" aria-label={`${member.name} LinkedIn`}>
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href="#email" className="hover:text-blue-400 transition-colors" aria-label={`${member.name} Email`}>
                    <Mail className="w-4 h-4" />
                  </a>
                  <a href="#twitter" className="hover:text-blue-400 transition-colors" aria-label={`${member.name} Twitter`}>
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
