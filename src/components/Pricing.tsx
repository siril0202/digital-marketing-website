import React, { useState } from 'react';
import { PRICING_PLANS } from '../data';
import { Check, Info, Calculator, Sparkles } from 'lucide-react';

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

  // Convert Indian currency to readable format
  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  const getPrice = (basePriceStr: string) => {
    // basePriceStr is e.g. "₹54,999"
    const numericalPrice = parseInt(basePriceStr.replace(/[^\d]/g, ''), 10);
    if (billingCycle === 'monthly') {
      return basePriceStr;
    } else {
      // Apply a 20% discount for yearly billing cycle
      const discountedPrice = Math.floor((numericalPrice * 0.8) / 100) * 100;
      return formatCurrency(discountedPrice);
    }
  };

  return (
    <section id="pricing" className="relative py-24 bg-black border-b border-white/5 overflow-hidden">
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-0 w-[350px] h-[350px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] rounded-full bg-indigo-500/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
               {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
              PRICING FRAMEWORKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            INVEST IN YOUR <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>MARKET DOMINATION</span>
          </h2>
          <p className="text-white/50 text-base font-light leading-relaxed">
            Choose a tailored investment package. Zero hidden onboarding fees. Direct correlation of spend to actual customer acquisitions.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center mt-8 space-x-4">
            <span className={`text-xs font-bold uppercase tracking-widest ${billingCycle === 'monthly' ? 'text-white' : 'text-gray-500'}`}>
              Monthly
            </span>
            <button
              id="billing-cycle-toggle"
              onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
              className="relative w-12 h-6 bg-neutral-900 border border-white/25 rounded-none p-0.5 transition-colors focus:outline-none cursor-pointer"
              aria-label="Toggle pricing billing interval"
            >
              <div
                className={`w-5 h-5 bg-blue-500 transform transition-transform duration-300 ${
                  billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-bold uppercase tracking-widest flex items-center ${billingCycle === 'yearly' ? 'text-blue-400' : 'text-gray-500'}`}>
              Yearly Investment
              <span className="ml-2 bg-blue-500/15 text-blue-400 text-[9px] font-bold font-mono px-2 py-0.5 rounded-none border border-blue-500/20">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-20">
          {PRICING_PLANS.map((plan, idx) => (
            <div
              id={`pricing-card-${idx}`}
              key={plan.name}
              className={`group relative rounded-none p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-[0_4px_30px_rgba(0,0,0,0.6)] ${
                plan.highlighted
                  ? 'bg-neutral-900 border border-blue-500 scale-100 lg:scale-[1.03] z-10'
                  : 'bg-white/[0.01] hover:bg-white/[0.02] border border-white/10 hover:border-blue-500/30'
              }`}
            >
              {/* Highlight ribbon */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white font-mono text-[9px] font-bold uppercase px-3 py-1 rounded-none border border-blue-400 tracking-[0.2em] flex items-center shadow-lg">
                  <Sparkles className="w-3.5 h-3.5 mr-1" />
                  Most Popular
                </div>
              )}

              <div>
                {/* Header */}
                <div className="mb-6">
                  <span className="text-xs font-mono text-gray-500 uppercase tracking-widest block mb-1">
                    Ideal For: {plan.idealFor}
                  </span>
                  <h3 className="text-lg font-bold tracking-widest uppercase text-white">{plan.name}</h3>
                  <p className="text-white/50 text-xs sm:text-sm mt-2 font-light leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                {/* Pricing Display */}
                <div className="mb-6 flex items-baseline">
                  <span className="text-3xl font-bold text-white tracking-tight">
                    {getPrice(plan.price)}
                  </span>
                  <span className="text-gray-400 text-xs font-mono ml-2 uppercase">
                    /{billingCycle === 'monthly' ? 'mo' : 'mo (billed annually)'}
                  </span>
                </div>

                {/* Features List */}
                <div className="border-t border-white/5 pt-6 mb-8">
                  <span className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest block mb-4">
                    PLAN INCLUSIONS
                  </span>
                  <ul className="space-y-3.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-gray-400">
                        <Check className="w-4 h-4 text-blue-500 mr-2.5 mt-0.5 shrink-0" />
                        <span className="font-light">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Button */}
              <button
                id={`pricing-btn-${idx}`}
                onClick={() => {
                  const contactSec = document.querySelector('#contact');
                  if (contactSec) {
                    const offset = 80;
                    window.scrollTo({
                      top: contactSec.getBoundingClientRect().top + window.pageYOffset - offset,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`w-full py-4 rounded-none font-bold text-xs uppercase tracking-widest transition-all duration-300 cursor-pointer ${
                  plan.highlighted
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-none'
                    : 'bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-blue-500/30'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          ))}
        </div>

        {/* Informative micro card on custom contracts */}
        <div className="rounded-none border border-white/10 bg-neutral-900/20 p-5 max-w-3xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center space-x-3 text-white/50 text-xs font-light">
            <Info className="w-5 h-5 text-blue-500 shrink-0" />
            <span>
              Looking for custom multi-market campaigns, retail expansions, or custom CRM software integrations? Let’s map a personalized retainer contract.
            </span>
          </div>
          <button
            id="pricing-custom-cta"
            onClick={() => {
              const contactSec = document.querySelector('#contact');
              if (contactSec) {
                const offset = 80;
                window.scrollTo({
                  top: contactSec.getBoundingClientRect().top + window.pageYOffset - offset,
                  behavior: 'smooth'
                });
              }
            }}
            className="text-xs font-bold text-blue-400 hover:text-blue-300 shrink-0 uppercase tracking-widest font-mono cursor-pointer"
          >
            Request custom quote
          </button>
        </div>

      </div>
    </section>
  );
}
