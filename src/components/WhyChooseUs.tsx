import React, { useState } from 'react';
import { Database, Target, Users, BarChart3, LineChart, Sparkles, HelpCircle, CheckCircle } from 'lucide-react';

export default function WhyChooseUs() {
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isHoveringAfter, setIsHoveringAfter] = useState<boolean>(true); // Before/After split state

  const whyUsPoints = [
    {
      title: 'Data-Driven Strategy',
      description: 'We ignore personal biases. Our media buyers configure rigid custom analytics dashboards to ensure every ad placement is backed by cold, hard consumer behavior data.',
      icon: Database,
    },
    {
      title: 'ROI-Focused Campaigns',
      description: 'Vanity clicks do not pay bills. We align our campaigns with your cashflow, tracking client-acquisition costs and customer lifetime value from day one.',
      icon: Target,
    },
    {
      title: 'Dedicated Elite Team',
      description: 'You will never be handed off to a junior intern. You get direct access to seasoned lead media buyers, full-stack engineers, and our creative directors.',
      icon: Users,
    },
    {
      title: 'Absolute Transparent Reporting',
      description: 'No hidden reports. We build a live, shared Google Looker dashboard for your business, updating in real-time so you can trace every rupee spent to conversions.',
      icon: BarChart3,
    },
    {
      title: 'Proven Local & Global Results',
      description: 'From scaling local icons in Madurai like Chitra Silk to ranking enterprise SaaS brands globally, our frameworks are industry-agnostic and battle-tested.',
      icon: LineChart,
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Audit',
      subtitle: 'Mapping your constraints',
      description: 'We start by tearing down your existing funnels. We audit your ad accounts, map out competitor keyword profiles, inspect tracking configurations, and define immediate revenue leaks.',
      deliverable: 'Funnel & Audit Benchmark Spreadsheet'
    },
    {
      step: '02',
      title: 'Strategic Blueprint',
      subtitle: 'Structuring the attack',
      description: 'We construct a customized 90-day scaling roadmap. This defines exact audience mapping, creative test configurations, content calendars, and keyword targets tailored to your unit economics.',
      deliverable: '90-Day Digital Execution Matrix'
    },
    {
      step: '03',
      title: 'High-Fidelity Execution',
      subtitle: 'Launching custom assets',
      description: 'Our team goes live. We deploy lightning-fast landing pages, write premium high-conversion copy, configure automated email flows, and kickstart creative ad testing arrays.',
      deliverable: 'Active Ad Portals & Clean Landing Pages'
    },
    {
      step: '04',
      title: 'Algorithmic Optimization',
      subtitle: 'Killing losers, scaling winners',
      description: 'We monitor daily attribution data. We prune low-performing assets, optimize Google Smart bidding, implement Lookalike audience expansions, and scale budgets with cost-caps.',
      deliverable: 'Weekly Live Attribution Review'
    },
    {
      step: '05',
      title: 'Compounded Growth',
      subtitle: 'Securing market share',
      description: 'With core funnels stable, we expand. We launch brand retargeting arrays, introduce organic content clusters for long-term SEO equity, and capture surrounding regional cities.',
      deliverable: 'Sustained Premium Market Authority'
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-black border-b border-white/5 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute top-1/3 left-0 w-[300px] h-[300px] rounded-full bg-blue-600/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-0 w-[350px] h-[350px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* why choose us headline */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
              WHY PARTNER WITH US
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            OUR CORE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>COMPETITIVE EDGE</span>
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed">
            We replace marketing fluff with scientific performance engineering. See why brands choose PixelCraft over standard creative agencies.
          </p>
        </div>

        {/* Why Choose Us Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-28 items-center">
          {/* Points List */}
          <div className="space-y-6">
            {whyUsPoints.map((pt, idx) => {
              const Icon = pt.icon;
              return (
                <div
                  id={`why-point-${idx}`}
                  key={idx}
                  className="group flex gap-4 p-5 rounded-none bg-white/[0.01] hover:bg-white/[0.03] border border-white/5 hover:border-blue-500/20 transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-none bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shrink-0 shadow-[0_0_10px_rgba(59,130,246,0.1)] group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white mb-1.5 tracking-wider uppercase group-hover:text-blue-400 transition-colors">
                      {pt.title}
                    </h3>
                    <p className="text-white/50 text-xs font-light leading-relaxed">
                      {pt.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Interactive Before/After Split comparison dashboard */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500/5 rounded-none blur-3xl pointer-events-none" />
            <div className="relative rounded-none border border-white/10 bg-neutral-950 p-6 shadow-[0_15px_40px_rgba(0,0,0,0.6)] overflow-hidden">
              <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-6">
                <div>
                  <h4 className="text-sm font-bold text-white tracking-widest uppercase">Performance Benchmark</h4>
                  <span className="text-[10px] text-gray-500 font-mono uppercase">Typical Agency vs PixelCraft System</span>
                </div>
                {/* State switch buttons */}
                <div className="flex bg-neutral-900 p-1 rounded-none border border-white/5">
                  <button
                    id="switch-before-btn"
                    onClick={() => setIsHoveringAfter(false)}
                    className={`px-3 py-1 rounded-none text-[10px] font-bold font-mono uppercase tracking-wide transition-all ${
                      !isHoveringAfter ? 'bg-red-500/10 text-red-400 border border-red-500/25' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    Standard
                  </button>
                  <button
                    id="switch-after-btn"
                    onClick={() => setIsHoveringAfter(true)}
                    className={`px-3 py-1 rounded-none text-[10px] font-bold font-mono uppercase tracking-wide transition-all ${
                      isHoveringAfter ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/25' : 'text-gray-500 hover:text-white'
                    }`}
                  >
                    PixelCraft
                  </button>
                </div>
              </div>

              {/* Dynamic comparison cards display */}
              {!isHoveringAfter ? (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-none bg-red-950/10 border border-red-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase font-mono">Inefficient Ad Spend</span>
                      <span className="text-xs text-red-400 font-mono">40% - 60% Waste</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Budget dispersed across loose broad audiences without negative filters, leading to high cost per acquisition and zero attribution.
                    </p>
                  </div>
                  <div className="p-4 rounded-none bg-red-950/10 border border-red-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase font-mono">Vanity Metrics Only</span>
                      <span className="text-xs text-red-400 font-mono">0.8% CTR Avg</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Reports focused strictly on page likes, impressions, and video views instead of sales-qualified conversions or direct customer inbound.
                    </p>
                  </div>
                  <div className="p-4 rounded-none bg-red-950/10 border border-red-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-red-400 uppercase font-mono">Stagnant Static Landing Pages</span>
                      <span className="text-xs text-red-400 font-mono">3.8s Load Delay</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Slow templates or site builder page frames loaded with script clutter that turn off potential buyers before they even read the title.
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4 animate-fadeIn">
                  <div className="p-4 rounded-none bg-emerald-950/10 border border-emerald-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase font-mono flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> Precision Media Buying
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">98% Efficient Allocation</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Laser target groupings, dynamic creative frameworks, and custom exclusion lists to guarantee ad spend targets buyers.
                    </p>
                  </div>
                  <div className="p-4 rounded-none bg-emerald-950/10 border border-emerald-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase font-mono flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> ROI & Conversion-First
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">4.8x Historical ROAS</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Reports track pipeline addition, actual web cart conversions, and customer acquisition payback times linked directly to stripe/ERP.
                    </p>
                  </div>
                  <div className="p-4 rounded-none bg-emerald-950/10 border border-emerald-900/20">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-emerald-400 uppercase font-mono flex items-center">
                        <Sparkles className="w-3 h-3 mr-1" /> Custom React Platform
                      </span>
                      <span className="text-xs text-emerald-400 font-mono">0.4s Mobile Load</span>
                    </div>
                    <p className="text-gray-400 text-xs">
                      Custom coded, lightweight frameworks compiled with zero overhead, boosting conversion ratios up to 185% over standard configurations.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* PROCESS TIMELINE SECTION */}
        <div className="pt-24 border-t border-white/10 relative">
          <div className="absolute top-0 right-1/4 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
              <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
                THE COMPREHENSIVE ROADMAP
              </span>
            </div>
            <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-white uppercase">
              OUR FIVE-STAGE <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>GROWTH FUNNEL</span>
            </h3>
            <p className="text-white/50 text-base font-light leading-relaxed mt-2">
              We guide your campaign through a rigid sequential optimization phase to ensure maximum security, transparency, and scalable profitability.
            </p>
          </div>

          {/* Stepper Buttons for Desktop & Mobile */}
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Steps Rail */}
            <div className="w-full lg:w-2/5 flex flex-col gap-3">
              {processSteps.map((step, idx) => (
                <button
                  id={`process-btn-${idx}`}
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`w-full text-left p-4 rounded-none border transition-all duration-300 flex items-center justify-between focus:outline-none ${
                    activeStep === idx
                      ? 'bg-blue-600/10 border-blue-500/40 shadow-[0_0_20px_rgba(59,130,246,0.15)] text-white'
                      : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.02] hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3.5">
                    <span className={`text-[10px] font-mono font-bold px-2 py-1 rounded-none ${
                      activeStep === idx ? 'bg-blue-600 text-white' : 'bg-white/5 text-gray-500'
                    }`}>
                      {step.step}
                    </span>
                    <span className="text-sm font-bold tracking-widest uppercase">{step.title}</span>
                  </div>
                  <span className={`text-[10px] font-mono tracking-wider transition-opacity ${
                    activeStep === idx ? 'opacity-100 text-blue-300' : 'opacity-0'
                  }`}>
                    ACTIVE PHASE
                  </span>
                </button>
              ))}
            </div>

            {/* Right Details Panel */}
            <div className="w-full lg:w-3/5 min-h-[280px] rounded-none border border-white/10 bg-neutral-900/40 p-6 sm:p-8 flex flex-col justify-between shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
                    Phase {processSteps[activeStep].step} · {processSteps[activeStep].subtitle}
                  </span>
                  <div className="flex items-center text-xs text-gray-400 bg-white/5 px-2.5 py-1 rounded-none border border-white/5">
                    <CheckCircle className="w-3.5 h-3.5 text-blue-500 mr-1.5" />
                    <span>Rigid Deliverable Stage</span>
                  </div>
                </div>

                <h4 className="text-xl font-bold tracking-widest uppercase text-white mb-3">
                  {processSteps[activeStep].title}
                </h4>
                
                <p className="text-white/70 text-sm leading-relaxed font-light">
                  {processSteps[activeStep].description}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5 mt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[10px] font-mono uppercase text-gray-500 block">Phase Output Deliverable</span>
                  <span className="text-sm font-bold text-blue-300 mt-0.5">
                    {processSteps[activeStep].deliverable}
                  </span>
                </div>
                <span className="text-[10px] font-mono text-gray-500 self-end">
                  PIXELCRAFT QUALITY ASSURED
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
