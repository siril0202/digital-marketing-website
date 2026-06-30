import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Check, ArrowRight, ArrowLeft, RefreshCw, Sparkles, Map as MapIcon, Globe, Award } from 'lucide-react';

export default function Contact() {
  const [formStep, setFormStep] = useState<number>(1);
  const [companyName, setCompanyName] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [targetGoals, setTargetGoals] = useState<string[]>([]);
  const [budgetTier, setBudgetTier] = useState<string>('Performance Growth (₹54,999/mo)');
  const [isGenerating, setIsGenerating] = useState<boolean>(false);
  const [generationStep, setGenerationStep] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [mapType, setMapType] = useState<'cyber' | 'iframe'>('cyber');

  const goalOptions = [
    'Scale Organic Traffic (SEO)',
    'Optimize Google/Meta Ad Spend',
    'Rebuild Custom High-Speed Website',
    'Refresh Premium Brand Identity',
    'Automate Email & Lead Nurturing',
    'Dominate Regional Social Media (Tamil)'
  ];

  const budgetOptions = [
    'Starter Scale (₹24,999/mo)',
    'Performance Growth (₹54,999/mo)',
    'Enterprise Dominance (₹1,19,999/mo)',
    'Bespoke Enterprise Retainer (₹2L+/mo)'
  ];

  const handleGoalToggle = (goal: string) => {
    if (targetGoals.includes(goal)) {
      setTargetGoals(targetGoals.filter((g) => g !== goal));
    } else {
      setTargetGoals([...targetGoals, goal]);
    }
  };

  const handleStartGeneration = (e: React.FormEvent) => {
    e.preventDefault();
    if (!companyName || !contactEmail) {
      return;
    }
    setIsGenerating(true);
    setGenerationStep(1);

    // Simulate real-time strategic analysis animation
    setTimeout(() => {
      setGenerationStep(2);
      setTimeout(() => {
        setGenerationStep(3);
        setTimeout(() => {
          setIsGenerating(false);
          setShowResult(true);
        }, 1200);
      }, 1200);
    }, 1200);
  };

  const resetForm = () => {
    setFormStep(1);
    setCompanyName('');
    setContactEmail('');
    setTargetGoals([]);
    setBudgetTier('Performance Growth (₹54,999/mo)');
    setShowResult(false);
    setIsGenerating(false);
  };

  return (
    <section id="contact" className="relative py-24 bg-black border-t border-white/5 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
              SECURE YOUR ROADMAP
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            CALIBRATE YOUR <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>SCALING CAMPAIGN</span>
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed">
            Let’s bypass typical generic sales pitches. Use our interactive strategy calibrator below to immediately forecast your organic SEO, brand reach, and paid conversion models.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch mb-20">
          
          {/* LEFT: Contact & Agency Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="space-y-8">
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">PixelCraft HQ</span>
                <h3 className="text-2xl font-bold tracking-tight text-white uppercase">Madurai, Tamil Nadu, India</h3>
                <p className="text-white/50 text-sm leading-relaxed mt-2 font-light">
                  Our premier physical studio is located on the bustling main hub of KK Nagar. Drop in for filter coffee and an in-person audit of your business performance models.
                </p>
              </div>

              {/* Direct Info List */}
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-none bg-white/5 text-blue-400 border border-white/5 shadow-md">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Office Address</h4>
                    <p className="text-white text-sm font-semibold mt-0.5 leading-normal">
                      45, KK Nagar Main Road,<br />
                      Madurai, Tamil Nadu 625020
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-none bg-white/5 text-blue-400 border border-white/5 shadow-md">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Inbound Strategy Line</h4>
                    <p className="text-white text-sm font-semibold mt-0.5">
                      +91 98765 43210 <span className="text-[10px] text-gray-400 font-mono uppercase font-normal">(Demo Only)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-none bg-white/5 text-blue-400 border border-white/5 shadow-md">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Digital Inbox</h4>
                    <p className="text-white text-sm font-semibold mt-0.5">
                      hello@pixelcraft-demo.com <span className="text-[10px] text-gray-400 font-mono uppercase font-normal">(Demo Only)</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 rounded-none bg-white/5 text-blue-400 border border-white/5 shadow-md">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono uppercase text-gray-500 tracking-wider">Working Consultation Hours</h4>
                    <p className="text-white text-sm font-semibold mt-0.5 leading-relaxed">
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      <span className="text-xs font-normal text-emerald-400 font-mono">Sunday: Active Monitoring Only</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro disclaimer */}
            <div className="pt-6 border-t border-white/5 mt-8 text-xs text-gray-500 leading-normal">
              <strong>Notice:</strong> PixelCraft Media operates with strict client privacy non-disclosure contracts. All data forecasted or collected within this local sandbox is non-persistent and processed client-side only.
            </div>
          </div>

          {/* RIGHT: Multi-step Interactive Calibrator Form */}
          <div className="lg:col-span-7">
            <div className="relative rounded-none border border-white/10 bg-neutral-900/30 p-6 sm:p-10 shadow-[0_15px_40px_rgba(0,0,0,0.6)] backdrop-blur-md overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Progress Bar indicator */}
              {!showResult && !isGenerating && (
                <div className="w-full bg-neutral-800 h-1 rounded-none mb-6 relative overflow-hidden">
                  <div
                    className="bg-blue-500 h-full transition-all duration-300"
                    style={{ width: `${(formStep / 3) * 100}%` }}
                  />
                </div>
              )}

              {/* STAGE 1: Contacts */}
              {formStep === 1 && !isGenerating && !showResult && (
                <div className="animate-fadeIn">
                  <div className="mb-6">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">Step 01 / 03</span>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white">Establish Your Identity</h4>
                    <p className="text-white/50 text-xs sm:text-sm mt-1 font-light">
                      We require basic parameters to cross-examine target keywords.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Company Name</label>
                      <input
                        id="form-company-name"
                        type="text"
                        placeholder="e.g. TempleCity Foods, Kovai Software"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/20 focus:border-blue-500/50 rounded-none text-white text-sm focus:outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-gray-400 uppercase tracking-wider mb-2">Corporate Email Address</label>
                      <input
                        id="form-email"
                        type="email"
                        placeholder="e.g. founder@company.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-4 py-3 bg-white/[0.02] hover:bg-white/[0.04] focus:bg-white/[0.06] border border-white/20 focus:border-blue-500/50 rounded-none text-white text-sm focus:outline-none transition-all placeholder:text-gray-600"
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-8">
                    <button
                      id="step1-next"
                      type="button"
                      disabled={!companyName || !contactEmail}
                      onClick={() => {
                        if (companyName && contactEmail) {
                          setFormStep(2);
                        }
                      }}
                      className="px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center group focus:outline-none cursor-pointer"
                    >
                      <span>Next: Goals</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 2: Goals selector */}
              {formStep === 2 && !isGenerating && !showResult && (
                <div className="animate-fadeIn">
                  <div className="mb-6">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">Step 02 / 03</span>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white">Define Target Objectives</h4>
                    <p className="text-white/50 text-xs sm:text-sm mt-1 font-light">
                      Choose which strategic milestones you want to target over the next 90 days.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {goalOptions.map((goal) => {
                      const isSelected = targetGoals.includes(goal);
                      return (
                        <div
                          id={`goal-option-${goal.slice(0, 5)}`}
                          key={goal}
                          onClick={() => handleGoalToggle(goal)}
                          className={`p-3 rounded-none border cursor-pointer text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-500/10 border-blue-500/50 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.1)]'
                              : 'bg-white/[0.01] border-white/10 text-gray-400 hover:bg-white/[0.02]'
                          }`}
                        >
                          <span className="font-light">{goal}</span>
                          {isSelected && <Check className="w-4 h-4 text-blue-400 shrink-0 ml-2" />}
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-8">
                    <button
                      id="step2-prev"
                      type="button"
                      onClick={() => setFormStep(1)}
                      className="px-5 py-3 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>
                    <button
                      id="step2-next"
                      type="button"
                      disabled={targetGoals.length === 0}
                      onClick={() => {
                        if (targetGoals.length > 0) {
                          setFormStep(3);
                        }
                      }}
                      className="px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-700 disabled:opacity-40 disabled:cursor-not-allowed text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center group cursor-pointer"
                    >
                      <span>Next: Budget</span>
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* STAGE 3: Budget Tier selection */}
              {formStep === 3 && !isGenerating && !showResult && (
                <div className="animate-fadeIn">
                  <div className="mb-6">
                    <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">Step 03 / 03</span>
                    <h4 className="text-lg font-bold uppercase tracking-wide text-white">Target Monthly Budget</h4>
                    <p className="text-white/50 text-xs sm:text-sm mt-1 font-light">
                      Our frameworks scale dynamically matching your target acquisition goals.
                    </p>
                  </div>

                  <div className="space-y-2.5">
                    {budgetOptions.map((opt) => {
                      const isSelected = budgetTier === opt;
                      return (
                        <div
                          id={`budget-option-${opt.slice(0, 5)}`}
                          key={opt}
                          onClick={() => setBudgetTier(opt)}
                          className={`p-3 rounded-none border cursor-pointer text-xs sm:text-sm transition-all flex items-center justify-between ${
                            isSelected
                              ? 'bg-blue-500/10 border-blue-500/50 text-blue-300'
                              : 'bg-white/[0.01] border-white/10 text-gray-400 hover:bg-white/[0.02]'
                          }`}
                        >
                          <span className="font-semibold">{opt}</span>
                          <div className={`w-4 h-4 rounded-none border flex items-center justify-center ${
                            isSelected ? 'border-blue-500 bg-blue-500 text-white' : 'border-gray-600'
                          }`}>
                            {isSelected && <Check className="w-2.5 h-2.5" />}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="flex justify-between pt-8">
                    <button
                      id="step3-prev"
                      type="button"
                      onClick={() => setFormStep(2)}
                      className="px-5 py-3 rounded-none bg-white/5 border border-white/10 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all duration-200 flex items-center cursor-pointer"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Back
                    </button>
                    <button
                      id="step3-generate"
                      type="button"
                      onClick={handleStartGeneration}
                      className="px-6 py-3 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs uppercase tracking-widest transition-all duration-200 flex items-center group shadow-none cursor-pointer"
                    >
                      <Sparkles className="w-4 h-4 mr-2 text-blue-200 animate-pulse" />
                      <span>Calibrate Roadmap</span>
                    </button>
                  </div>
                </div>
              )}

              {/* LOADING STRATEGY STAGE: Animated */}
              {isGenerating && (
                <div className="flex flex-col items-center justify-center py-12 animate-pulse text-center">
                  <RefreshCw className="w-12 h-12 text-blue-500 animate-spin mb-6" />
                  
                  {generationStep === 1 && (
                    <div>
                      <h4 className="text-base font-bold uppercase tracking-wider text-white">Analyzing Competitor Share of Voice</h4>
                      <p className="text-gray-400 text-xs font-mono mt-1 uppercase tracking-wider">
                        mapping search patterns for {companyName}...
                      </p>
                    </div>
                  )}
                  {generationStep === 2 && (
                    <div>
                      <h4 className="text-base font-bold uppercase tracking-wider text-white">Evaluating Spend Optimization Curve</h4>
                      <p className="text-gray-400 text-xs font-mono mt-1 uppercase tracking-wider">
                        modeling attribution loops...
                      </p>
                    </div>
                  )}
                  {generationStep === 3 && (
                    <div>
                      <h4 className="text-base font-bold uppercase tracking-wider text-white">Compiling Custom 90-Day Blueprint</h4>
                      <p className="text-gray-400 text-xs font-mono mt-1 uppercase tracking-wider">
                        securing structural growth coefficients...
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* SUCCESS RESULTS CERTIFICATE DISPLAY: Onboarding success */}
              {showResult && (
                <div className="animate-fadeIn">
                  <div className="border border-blue-500/20 rounded-none bg-blue-500/5 p-4 sm:p-6 mb-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-2 rounded-none bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-mono tracking-widest uppercase">ROADMAP GENERATED SUCCESSFULLY</h4>
                        <span className="text-[10px] text-emerald-400 font-mono block mt-0.5">Calibrated For: {companyName}</span>
                      </div>
                    </div>

                    <div className="space-y-3.5 border-t border-white/5 pt-4 text-xs">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Projected Organic Traffic Growth:</span>
                        <span className="text-white font-bold font-mono text-emerald-400">+180% Avg</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Target Return on Ad Spend (ROAS):</span>
                        <span className="text-white font-bold font-mono text-emerald-400">4.5x Benchmark</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Estimated Lead Expansion Rate:</span>
                        <span className="text-white font-bold font-mono text-emerald-400">2.4x Speed</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Allocated Investment Tier:</span>
                        <span className="text-blue-400 font-bold font-mono text-[10px]">{budgetTier}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-white/50 text-xs leading-relaxed mb-6 font-light text-center sm:text-left">
                    Your customized strategy blueprint is ready. Our lead media buyer will call you at <strong>{contactEmail}</strong> to review these metrics in depth and schedule your physical demo review at KK Nagar.
                  </p>

                  <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/5">
                    <span className="text-[10px] font-mono text-gray-500">
                      TOKEN ID: PC-{Math.floor(Math.random() * 9000 + 1000)}
                    </span>
                    <button
                      id="form-reset-btn"
                      onClick={resetForm}
                      className="px-4 py-2 rounded-none bg-white/5 hover:bg-white/10 text-white text-xs font-bold uppercase tracking-widest transition-all cursor-pointer"
                    >
                      Calibrate New Campaign
                    </button>
                  </div>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* GEOLOCATION/MAP CONTAINER SECTION */}
        <div className="pt-24 border-t border-white/10 relative">
          <div className="absolute top-0 right-10 w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

          {/* Section Heading & Toggle buttons */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
              <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block mb-1">LOCAL PRESENCE</span>
              <h3 className="text-2xl sm:text-4xl font-black tracking-tighter text-white uppercase">
                OUR MADURAI <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>STUDIO HUB</span>
              </h3>
              <p className="text-white/50 text-base font-light leading-relaxed mt-2 max-w-xl">
                Centrally located on KK Nagar Main Road, Madurai. Our cyber geographic map monitors regional user data density to drive local SEO dominance.
              </p>
            </div>

            {/* Toggle maps view */}
            <div className="flex bg-neutral-900 p-1 rounded-none border border-white/10 self-start shrink-0">
              <button
                id="view-cyber-map"
                onClick={() => setMapType('cyber')}
                className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  mapType === 'cyber' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                Cyber Map
              </button>
              <button
                id="view-iframe-map"
                onClick={() => setMapType('iframe')}
                className={`px-4 py-2 rounded-none text-xs font-bold uppercase tracking-widest transition-all cursor-pointer ${
                  mapType === 'iframe' ? 'bg-blue-600 text-white' : 'text-gray-500 hover:text-white'
                }`}
              >
                Standard Map
              </button>
            </div>
          </div>

          {/* Maps Window Grid Container */}
          <div className="relative rounded-none border border-white/10 overflow-hidden shadow-[0_15px_35px_rgba(0,0,0,0.6)] h-96 bg-neutral-950">
            {mapType === 'cyber' ? (
              <div className="w-full h-full relative flex items-center justify-center p-4">
                {/* Custom glowing cyber map of Madurai built with interactive SVGs */}
                <div className="absolute inset-0 bg-radial-gradient from-blue-900/10 to-transparent opacity-60 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-none border border-white/10 text-[10px] font-mono text-gray-400">
                  <span>CENTROIDS LAT: 9.9252° N, LON: 78.1198° E</span>
                </div>

                {/* Simulated cyber radar grid lines */}
                <svg className="w-full h-full max-w-4xl" viewBox="0 0 500 300">
                  <circle cx="250" cy="150" r="120" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" strokeDasharray="5,5" />
                  <circle cx="250" cy="150" r="80" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="1" />
                  <circle cx="250" cy="150" r="40" fill="none" stroke="rgba(59, 130, 246, 0.1)" strokeWidth="1" />

                  {/* Horizontal and vertical radar crosshairs */}
                  <line x1="100" y1="150" x2="400" y2="150" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />
                  <line x1="250" y1="50" x2="250" y2="250" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="1" />

                  {/* Connecting network nodes - Madurai roads simulation */}
                  <path d="M 120 80 Q 220 120 250 150 T 380 220" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="2" />
                  <path d="M 80 180 Q 180 150 250 150 T 420 120" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />
                  <path d="M 180 260 Q 220 180 250 150 T 320 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1.5" />

                  {/* Glowing Hotspots */}
                  {/* Hotspot 1: KK Nagar (HQ) */}
                  <g className="group/pin cursor-pointer">
                    <circle cx="280" cy="130" r="16" fill="rgba(37, 99, 235, 0.15)" />
                    <circle cx="280" cy="130" r="8" fill="rgba(37, 99, 235, 0.3)" className="animate-ping" />
                    <circle cx="280" cy="130" r="4" fill="#2563eb" />
                    <text x="295" y="134" fill="#fff" fontSize="10" fontWeight="bold" fontFamily="monospace">KK Nagar (HQ)</text>
                    <text x="295" y="145" fill="#60a5fa" fontSize="7" fontFamily="monospace">Office & Creative Lab</text>
                  </g>

                  {/* Hotspot 2: Mattuthavani */}
                  <g className="cursor-pointer">
                    <circle cx="340" cy="90" r="3" fill="#60a5fa" />
                    <text x="350" y="93" fill="#9ca3af" fontSize="8" fontFamily="monospace">Mattuthavani</text>
                  </g>

                  {/* Hotspot 3: Anna Nagar */}
                  <g className="cursor-pointer">
                    <circle cx="270" cy="180" r="3" fill="#60a5fa" />
                    <text x="280" y="183" fill="#9ca3af" fontSize="8" fontFamily="monospace">Anna Nagar</text>
                  </g>

                  {/* Hotspot 4: Simmakkal */}
                  <g className="cursor-pointer">
                    <circle cx="190" cy="160" r="3" fill="#60a5fa" />
                    <text x="135" y="163" fill="#9ca3af" fontSize="8" fontFamily="monospace">Simmakkal</text>
                  </g>
                </svg>

                {/* Floating cyber card details */}
                <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-none border border-white/10 max-w-xs shadow-lg flex items-start space-x-3">
                  <Globe className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="font-bold text-white block mb-0.5">PixelCraft Media HQ</span>
                    <span className="text-gray-400 block leading-normal">
                      45, KK Nagar Main Road, Madurai (near KK Nagar Arch).
                    </span>
                  </div>
                </div>
              </div>
            ) : (
              /* High quality embedded standard google map centered on Madurai, Tamil Nadu */
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m13!1m4!1s0x3b00c5c643640b37!2sKK+Nagar%2C+Madurai%2C+Tamil+Nadu!3m2!1d9.9252!2d78.1198!4f35!5e0!3m2!1sen!2sin!4v1703668000000!5m2!1sen!2sin"
                className="w-full h-full border-0 grayscale invert opacity-70 hover:opacity-90 transition-opacity"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Maps centered on Madurai, Tamil Nadu"
              />
            )}
          </div>
        </div>

      </div>
    </section>
  );
}
