import React, { useState } from 'react';
import { CASE_STUDIES } from '../data';
import { CaseStudy } from '../types';
import { ArrowUpRight, Check, Calendar, FolderOpen, Layers, X, Sparkles } from 'lucide-react';

export default function CaseStudies() {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [selectedCase, setSelectedCase] = useState<CaseStudy | null>(null);

  // Filter Categories
  const filters = [
    { label: 'All Projects', id: 'all' },
    { label: 'Local Champions', id: 'local' },
    { label: 'E-Commerce / Retail', id: 'ecommerce' },
    { label: 'Enterprise / B2B', id: 'b2b' },
  ];

  const filteredStudies = CASE_STUDIES.filter((study) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'local') return study.id === 'templecity-foods' || study.id === 'vidhya-academy';
    if (activeFilter === 'ecommerce') return study.id === 'chitra-silks';
    if (activeFilter === 'b2b') return study.id === 'kovai-tech';
    return true;
  });

  // Custom SVG line/area charts representing the growth curve of each case study
  const renderGrowthChart = (caseId: string) => {
    // Generate different SVG path coordinates for distinct visual structures
    let points = 'M 10 90 Q 50 85 90 70 T 170 40 T 250 15'; // default upward curve
    let gradientId = `grad-${caseId}`;

    if (caseId === 'chitra-silks') {
      points = 'M 10 90 Q 60 85 110 65 T 210 35 T 310 10';
    } else if (caseId === 'templecity-foods') {
      points = 'M 10 90 Q 50 80 100 55 T 200 45 T 310 20';
    } else if (caseId === 'vidhya-academy') {
      points = 'M 10 90 Q 70 75 130 50 T 220 40 T 310 25';
    } else if (caseId === 'kovai-tech') {
      points = 'M 10 90 Q 40 80 90 60 T 190 30 T 310 12';
    }

    return (
      <div className="relative w-full h-32 bg-neutral-900/40 rounded-none border border-white/5 overflow-hidden p-3 mt-4">
        <div className="absolute top-2 left-3 flex flex-col">
          <span className="text-[10px] font-mono text-gray-500 uppercase">Growth Matrix</span>
          <span className="text-xs font-mono font-bold text-emerald-400">Steady Acquisition Lift</span>
        </div>
        
        {/* SVG Drawing */}
        <svg className="w-full h-full" viewBox="0 0 320 100" preserveAspectRatio="none">
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
          </defs>
          
          {/* Grid lines */}
          <line x1="0" y1="25" x2="320" y2="25" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="50" x2="320" y2="50" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />
          <line x1="0" y1="75" x2="320" y2="75" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="3,3" />

          {/* Area fill */}
          <path
            d={`${points} L 310 100 L 10 100 Z`}
            fill={`url(#${gradientId})`}
          />
          
          {/* Highlight line */}
          <path
            d={points}
            fill="none"
            stroke="#2563eb"
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-pulse"
          />

          {/* Dots highlighting milestones */}
          <circle cx="10" cy="90" r="4" fill="#1e40af" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="160" cy="45" r="4" fill="#1e40af" stroke="#3b82f6" strokeWidth="2" />
          <circle cx="310" cy="15" r="5" fill="#10b981" stroke="#34d399" strokeWidth="2" />
        </svg>

        {/* Labels */}
        <div className="absolute bottom-2 left-3 right-3 flex justify-between text-[8px] font-mono text-gray-500">
          <span>Campaign Start</span>
          <span>Mid Optimization</span>
          <span className="text-emerald-400 font-bold">Peak Scale</span>
        </div>
      </div>
    );
  };

  return (
    <section id="case-studies" className="relative py-24 bg-neutral-950 border-b border-white/5">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-12 right-10 w-[400px] h-[400px] rounded-full bg-indigo-600/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
              <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
                MATRICES & OUTCOMES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
              PROVEN CAMPAIGN <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>MASTERY</span>
            </h2>
            <p className="text-white/50 text-base font-light leading-relaxed">
              We focus on the metrics that matter most: pipeline expansion, verified acquisitions, and bottom-line profit margins. Explore our scaling case studies.
            </p>
          </div>

          {/* Dynamic Category Selector */}
          <div className="flex flex-wrap gap-2 bg-neutral-900/60 p-1.5 rounded-none border border-white/5 self-start">
            {filters.map((tab) => (
              <button
                id={`filter-tab-${tab.id}`}
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-4 py-2 rounded-none text-xs font-bold tracking-widest uppercase transition-all ${
                  activeFilter === tab.id
                    ? 'bg-blue-600 text-white shadow-[0_4px_12px_rgba(37,99,235,0.3)]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredStudies.map((study) => (
            <div
              id={`case-card-${study.id}`}
              key={study.id}
              onClick={() => setSelectedCase(study)}
              className="group relative rounded-none bg-white/[0.01] hover:bg-white/[0.03] border border-white/10 hover:border-blue-500/30 p-6 sm:p-8 cursor-pointer transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              {/* Decorative radial glare */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

              <div>
                {/* Meta details */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest">
                    {study.industry}
                  </span>
                  <div className="flex items-center space-x-1.5 bg-emerald-500/10 px-2.5 py-1 rounded-none border border-emerald-500/20 text-emerald-400">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="relative inline-flex rounded-none h-1.5 w-1.5 bg-emerald-500"></span>
                    </span>
                    <span className="text-[10px] font-bold font-mono uppercase tracking-wide">
                      {study.growthMetric}: {study.growthValue}
                    </span>
                  </div>
                </div>

                {/* Project Header */}
                <h3 className="text-xl font-bold tracking-widest uppercase text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {study.clientName}
                </h3>
                <p className="text-white/50 text-xs leading-relaxed font-light mb-6">
                  {study.title}
                </p>

                {/* Render Custom Vector Graph */}
                {renderGrowthChart(study.id)}
              </div>

              {/* Bottom footer */}
              <div className="flex items-center justify-between pt-6 border-t border-white/5 mt-6">
                <div className="flex flex-wrap gap-1.5">
                  {study.servicesProvided.slice(0, 2).map((srv, idx) => (
                    <span key={idx} className="text-[9px] font-mono bg-white/5 text-gray-300 px-2 py-0.5 rounded-none border border-white/5">
                      {srv}
                    </span>
                  ))}
                  {study.servicesProvided.length > 2 && (
                    <span className="text-[9px] font-mono bg-white/5 text-gray-400 px-1.5 py-0.5 rounded-none">
                      +{study.servicesProvided.length - 2} More
                    </span>
                  )}
                </div>
                
                <span className="text-xs font-bold uppercase tracking-wider text-blue-400 flex items-center group-hover:text-blue-300 transition-colors">
                  Analyze Blueprint <ArrowUpRight className="w-4 h-4 ml-1 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Detail Modal */}
      {selectedCase && (
        <div
          id="case-modal-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setSelectedCase(null)}
        >
          <div
            id="case-modal-body"
            className="w-full max-w-2xl bg-neutral-950 border border-white/10 rounded-none shadow-[0_15px_50px_rgba(0,0,0,0.9)] overflow-y-auto max-h-[90vh] relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              id="close-case-modal"
              onClick={() => setSelectedCase(null)}
              className="absolute top-4 right-4 p-1.5 rounded-none text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">
                {selectedCase.industry} · Case Blueprint
              </span>
              <h3 className="text-2xl font-black uppercase tracking-widest text-white">
                {selectedCase.clientName}
              </h3>
              <p className="text-white/50 mt-2 text-sm font-light leading-relaxed">
                {selectedCase.title}
              </p>
            </div>

            {/* Meta Cards Row */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-none bg-white/[0.02] border border-white/5 mb-6">
              <div className="text-center sm:text-left">
                <span className="text-[9px] font-mono uppercase text-gray-500 block">Duration</span>
                <span className="text-xs font-bold text-white flex items-center justify-center sm:justify-start mt-0.5 uppercase tracking-wider">
                  <Calendar className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  {selectedCase.duration}
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[9px] font-mono uppercase text-gray-500 block">Scope</span>
                <span className="text-xs font-bold text-white flex items-center justify-center sm:justify-start mt-0.5 uppercase tracking-wider">
                  <Layers className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                  {selectedCase.servicesProvided.length} Services
                </span>
              </div>
              <div className="text-center sm:text-left">
                <span className="text-[9px] font-mono uppercase text-gray-500 block">Performance Gain</span>
                <span className="text-xs font-bold text-emerald-400 flex items-center justify-center sm:justify-start mt-0.5 font-mono uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  {selectedCase.growthValue}
                </span>
              </div>
            </div>

            {/* Main Content */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest mb-2 flex items-center">
                  <FolderOpen className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                  The Growth Objective & Strategy
                </h4>
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {selectedCase.description}
                </p>
              </div>

              {/* Scope lists */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest mb-2">
                  Deconstructed Services Provided
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedCase.servicesProvided.map((srv, idx) => (
                    <span key={idx} className="text-xs font-mono bg-blue-500/10 text-blue-300 border border-blue-500/20 px-3 py-1 rounded-none">
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hard Metrics Results list */}
              <div>
                <h4 className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest mb-3">
                  Verified Bottom-Line Deliverables
                </h4>
                <ul className="space-y-2.5">
                  {selectedCase.results.map((result, idx) => (
                    <li key={idx} className="flex items-start text-sm text-gray-400">
                      <div className="w-5 h-5 rounded-none bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mr-3 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <span className="leading-normal text-xs font-light">{result}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer with Replicate results button */}
            <div className="pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-[10px] text-gray-500 uppercase tracking-wider leading-normal max-w-sm text-center sm:text-left">
                Want to replicate similar exponential scaling trajectories for your enterprise? Let’s design a custom roadmap.
              </span>
              <button
                id="replicate-results-cta"
                onClick={() => {
                  setSelectedCase(null);
                  const contactSec = document.querySelector('#contact');
                  if (contactSec) {
                    const offset = 80;
                    window.scrollTo({
                      top: contactSec.getBoundingClientRect().top + window.pageYOffset - offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-200"
              >
                Book Calibration Call
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
