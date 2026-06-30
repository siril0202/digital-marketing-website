import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';
import { SERVICES } from '../data';
import { Service } from '../types';

// Helper to get Lucide Icon dynamically
const ServiceIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) return <LucideIcons.HelpCircle className={className} />;
  return <IconComponent className={className} />;
};

export default function Services() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [calculatorBudget, setCalculatorBudget] = useState<number>(30000); // Default ₹30k budget

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(val);
  };

  // Dynamic calculations for the ROI Calculator inside service details
  const getCalculatorOutputs = (serviceId: string, budget: number) => {
    switch (serviceId) {
      case 'seo':
        return {
          metric1: { label: 'Organic Monthly Visits', value: Math.floor(budget * 0.45).toLocaleString() },
          metric2: { label: 'Inbound Leads Generated', value: Math.floor(budget * 0.012).toString() },
          roi: formatCurrency(budget * 4.2),
        };
      case 'smm':
        return {
          metric1: { label: 'Estimated Social Reach', value: (budget * 8).toLocaleString() },
          metric2: { label: 'New Active Followers', value: Math.floor(budget * 0.35).toLocaleString() },
          roi: formatCurrency(budget * 3.15),
        };
      case 'performance':
        return {
          metric1: { label: 'Targeted Link Clicks', value: Math.floor(budget / 12).toLocaleString() },
          metric2: { label: 'Direct Acquisitions', value: Math.floor(budget / 380).toString() },
          roi: formatCurrency(budget * 4.8),
        };
      case 'dev':
        return {
          metric1: { label: 'Page Speed Index', value: '98/100 Mobile' },
          metric2: { label: 'Bounce Rate Reduction', value: '-35% Average' },
          roi: formatCurrency(budget * 2.85),
        };
      case 'branding':
        return {
          metric1: { label: 'Perceived Quality Lift', value: '3x Premium' },
          metric2: { label: 'Brand Memory Recall', value: '+80% Gain' },
          roi: formatCurrency(budget * 3.0),
        };
      case 'google-ads':
        return {
          metric1: { label: 'High Intent Impressions', value: (budget * 5).toLocaleString() },
          metric2: { label: 'Phone Calls / Sales', value: Math.floor(budget / 280).toString() },
          roi: formatCurrency(budget * 3.4),
        };
      case 'content':
        return {
          metric1: { label: 'Keywords Ranked Top 10', value: Math.floor(budget * 0.002).toString() },
          metric2: { label: 'Subscribers/Signups', value: Math.floor(budget * 0.08).toString() },
          roi: formatCurrency(budget * 2.5),
        };
      case 'email':
        return {
          metric1: { label: 'Automated Flow Opens', value: (budget * 2).toLocaleString() },
          metric2: { label: 'Recovered Abandoned Carts', value: Math.floor(budget * 0.15).toString() },
          roi: formatCurrency(budget * 5.2),
        };
      default:
        return {
          metric1: { label: 'Est. Impressions', value: (budget * 4).toLocaleString() },
          metric2: { label: 'Acquisitions', value: Math.floor(budget / 300).toString() },
          roi: formatCurrency(budget * 3),
        };
    }
  };

  return (
    <section id="services" className="relative py-24 bg-black border-y border-white/5 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 mb-4 animate-pulse">
            <span className="text-[10px] font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
              OUR SERVICE ECOSYSTEM
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter text-white uppercase mb-4">
            REVENUE-FIRST <span className="text-transparent" style={{ WebkitTextStroke: '1px white' }}>CAPABILITIES</span>
          </h2>
          <p className="text-white/50 text-lg font-light leading-relaxed">
            We don’t settle for vanity metrics like clicks and impressions. Every strategy we deploy is designed to systematically acquire customers and scale revenue.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => (
            <div
              id={`service-card-${service.id}`}
              key={service.id}
              onClick={() => {
                setSelectedService(service);
                setCalculatorBudget(service.id === 'performance' || service.id === 'google-ads' ? 50000 : 25000);
              }}
              className="group relative rounded-none bg-white/5 hover:bg-blue-600/10 border border-white/10 hover:border-blue-500/30 p-6 cursor-pointer transition-all duration-300 flex flex-col justify-between"
            >
              {/* Card Glow Border */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/0 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-none bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 transition-transform duration-300 group-hover:scale-110 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                    <ServiceIcon name={service.iconName} className="w-5 h-5" />
                  </div>
                  <div className="text-blue-500 text-3xl font-black font-mono tracking-tighter group-hover:scale-110 transition-transform">
                    0{idx + 1}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 tracking-widest uppercase group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-white/50 text-xs leading-relaxed mb-6 font-light">
                  {service.description}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/5">
                <span className="text-[10px] font-bold font-mono text-blue-400 uppercase tracking-widest">
                  Avg ROI: {service.avgRoi}
                </span>
                <span className="text-[10px] uppercase tracking-wider text-white/40 flex items-center group-hover:text-white transition-colors">
                  Details <LucideIcons.ArrowRight className="w-3 h-3 ml-1 transform group-hover:translate-x-0.5 transition-transform" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Side Drawer Modal for Selected Service */}
      {selectedService && (
        <div
          id="service-modal-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-end p-0 sm:p-4"
          onClick={() => setSelectedService(null)}
        >
          <div
            id="service-drawer"
            className="w-full max-w-2xl h-full sm:h-[90vh] bg-neutral-950 border-l sm:border border-white/10 sm:rounded-none shadow-[0_10px_50px_rgba(0,0,0,0.8)] overflow-y-auto relative p-6 sm:p-8 text-left transition-transform duration-300 flex flex-col justify-between"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-none bg-blue-600/10 border border-blue-500/20 flex items-center justify-center text-blue-400 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
                    <ServiceIcon name={selectedService.iconName} className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">{selectedService.title}</h3>
                    <span className="text-xs text-blue-400 font-mono tracking-widest uppercase">Methodology & Forecasting</span>
                  </div>
                </div>
                <button
                  id="close-service-drawer"
                  onClick={() => setSelectedService(null)}
                  className="p-1.5 rounded-none text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
                >
                  <LucideIcons.X className="w-5 h-5" />
                </button>
              </div>

              {/* Description & Approach */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest mb-2">Our Core Philosophy</h4>
                  <p className="text-gray-300 text-base leading-relaxed">{selectedService.details}</p>
                </div>

                {/* Deliverables List */}
                <div>
                  <h4 className="text-xs font-bold text-gray-500 font-mono uppercase tracking-widest mb-3">Key Deliverables & Assets</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedService.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-400">
                        <LucideIcons.CheckCircle2 className="w-4 h-4 text-blue-500 mr-2.5 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Interactive ROI Calculator */}
                <div className="p-5 rounded-none bg-white/[0.02] border border-white/5 mt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-semibold text-white tracking-wide flex items-center">
                      <LucideIcons.Calculator className="w-4 h-4 text-blue-400 mr-2" />
                      Live ROI & Growth Forecaster
                    </h4>
                    <span className="text-xs font-mono bg-blue-500/10 text-blue-400 px-2 py-0.5 rounded-none border border-blue-500/20">
                      Based on historical metrics
                    </span>
                  </div>
                  
                  <div className="mb-5">
                    <div className="flex justify-between text-xs font-mono text-gray-400 mb-2">
                      <span>Monthly Budget Goal</span>
                      <span className="text-blue-400 font-bold text-sm">{formatCurrency(calculatorBudget)}</span>
                    </div>
                    <input
                      id="budget-range-slider"
                      type="range"
                      min="10000"
                      max="1000000"
                      step="5000"
                      value={calculatorBudget}
                      onChange={(e) => setCalculatorBudget(Number(e.target.value))}
                      className="w-full h-1 bg-neutral-800 rounded-none appearance-none cursor-pointer accent-blue-500"
                    />
                    <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-1">
                      <span>₹10,000</span>
                      <span>₹5,00,000</span>
                      <span>₹10,000,000</span>
                    </div>
                  </div>

                  {/* Calculations Grid */}
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/5">
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-1">
                        {getCalculatorOutputs(selectedService.id, calculatorBudget).metric1.label}
                      </span>
                      <span className="text-lg font-bold text-white tracking-tight">
                        {getCalculatorOutputs(selectedService.id, calculatorBudget).metric1.value}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono uppercase text-gray-500 tracking-wider mb-1">
                        {getCalculatorOutputs(selectedService.id, calculatorBudget).metric2.label}
                      </span>
                      <span className="text-lg font-bold text-white tracking-tight">
                        {getCalculatorOutputs(selectedService.id, calculatorBudget).metric2.value}
                      </span>
                    </div>
                    <div className="col-span-2 pt-2 border-t border-white/5 flex items-center justify-between">
                      <span className="text-xs font-mono uppercase text-gray-400">
                        Projected Revenue Output:
                      </span>
                      <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                        {getCalculatorOutputs(selectedService.id, calculatorBudget).roi}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer with Book Call */}
            <div className="pt-6 border-t border-white/10 mt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <span className="text-xs text-gray-500 block">Average Service ROAS</span>
                <span className="text-lg font-bold text-white font-mono">{selectedService.avgRoi} Return</span>
              </div>
              <button
                id="drawer-cta-book"
                onClick={() => {
                  setSelectedService(null);
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
                <span>Request Custom Blueprint</span>
                <LucideIcons.ArrowRight className="w-4 h-4 ml-1.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
