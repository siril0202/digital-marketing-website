import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Calendar, Clock, X, CheckCircle2, ShieldCheck, Sparkles, AlertCircle } from 'lucide-react';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingStep, setBookingStep] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [isBookingSubmitting, setIsBookingSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);

  // Intersection Observer for scroll high-lighting
  useEffect(() => {
    const sections = ['home', 'services', 'case-studies', 'why-us', 'testimonials', 'pricing', 'blog', 'contact'];
    const observers = sections.map((secId) => {
      const el = document.getElementById(secId);
      if (!el) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(secId);
          }
        },
        { rootMargin: '-40% 0px -40% 0px' } // triggers when section dominates viewport center
      );
      observer.observe(el);
      return { observer, el };
    });

    return () => {
      observers.forEach((obs) => {
        if (obs) {
          obs.observer.unobserve(obs.el);
        }
      });
    };
  }, []);

  const openBookingModal = () => {
    setBookingStep(1);
    setSelectedService('');
    setSelectedDate('');
    setSelectedTime('');
    setClientPhone('');
    setClientEmail('');
    setBookingConfirmed(false);
    setIsBookingOpen(true);
  };

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientEmail || !clientPhone) {
      alert('Please fill out your contact email and phone number to secure the slot.');
      return;
    }
    setIsBookingSubmitting(true);
    setTimeout(() => {
      setIsBookingSubmitting(false);
      setBookingConfirmed(true);
    }, 1200);
  };

  // Generate localized date targets for the datepicker (Next 4 working days)
  const getBookingDates = () => {
    const dates: string[] = [];
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let currentDate = new Date();
    // Start offering from tomorrow
    for (let i = 1; dates.length < 4; i++) {
      const target = new Date();
      target.setDate(currentDate.getDate() + i);
      // Skip Sundays (Sundays are index 0)
      if (target.getDay() !== 0) {
        const dateStr = `${days[target.getDay()]}, ${target.getDate()} ${months[target.getMonth()]}`;
        dates.push(dateStr);
      }
    }
    return dates;
  };

  const timeSlots = ['10:00 AM - 10:30 AM', '11:30 AM - 12:00 PM', '03:00 PM - 03:30 PM', '04:30 PM - 05:00 PM'];

  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-blue-600 selection:text-white relative">
      
      {/* Sticky glass Header */}
      <Navbar onOpenBooking={openBookingModal} activeSection={activeSection} />

      {/* Main Single Page Sections Layout */}
      <main>
        <Hero onOpenBooking={openBookingModal} />
        <Services />
        <CaseStudies />
        <WhyChooseUs />
        <Testimonials />
        <Pricing />
        <Blog />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* STRATEGY BOOKING MODAL */}
      {isBookingOpen && (
        <div
          id="booking-modal-overlay"
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 animate-fadeIn"
          onClick={() => setIsBookingOpen(false)}
        >
          <div
            id="booking-modal-body"
            className="w-full max-w-lg bg-neutral-950 border border-white/10 rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden relative p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              id="close-booking-modal"
              onClick={() => setIsBookingOpen(false)}
              className="absolute top-4 right-4 p-1.5 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Steps */}
            {!bookingConfirmed ? (
              <div>
                {/* Header */}
                <div className="mb-6">
                  <div className="flex items-center space-x-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
                    <Sparkles className="w-4 h-4 text-blue-400" />
                    <span>Live Strategy Calibration</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white tracking-wide">Reserve Consultation Slot</h3>
                  <p className="text-gray-400 text-xs sm:text-sm mt-1">
                    Secure an audit slot with our creative directors & chief growth specialists.
                  </p>
                </div>

                {/* Step 1: Select Service Category */}
                {bookingStep === 1 && (
                  <div className="space-y-4 animate-fadeIn">
                    <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      01. Select Primary Growth Capability
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {['SEO Optimization', 'Performance Marketing', 'Custom Web Development', 'Brand Strategy refresh', 'Email Marketing Automation'].map((srv) => (
                        <button
                          id={`booking-service-${srv.toLowerCase().slice(0, 4)}`}
                          key={srv}
                          onClick={() => setSelectedService(srv)}
                          className={`text-left p-3 rounded-xl border text-xs font-medium transition-all focus:outline-none ${
                            selectedService === srv
                              ? 'bg-blue-600/10 border-blue-500 text-blue-300 shadow-[0_0_15px_rgba(59,130,246,0.1)]'
                              : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.03]'
                          }`}
                        >
                          {srv}
                        </button>
                      ))}
                    </div>

                    <div className="flex justify-end pt-6 border-t border-white/5 mt-6">
                      <button
                        id="booking-step1-next"
                        disabled={!selectedService}
                        onClick={() => setBookingStep(2)}
                        className="px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Select Date & Time
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 2: Date & Time Picker */}
                {bookingStep === 2 && (
                  <div className="space-y-4 animate-fadeIn">
                    {/* Date select */}
                    <div>
                      <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        02. Pick Target Date
                      </span>
                      <div className="grid grid-cols-2 gap-2">
                        {getBookingDates().map((dt) => (
                          <button
                            id={`booking-date-${dt.toLowerCase().replace(/[^a-z]/g, '').slice(0, 6)}`}
                            key={dt}
                            onClick={() => setSelectedDate(dt)}
                            className={`p-2.5 rounded-xl border text-xs font-semibold transition-all focus:outline-none text-center ${
                              selectedDate === dt
                                ? 'bg-blue-600/10 border-blue-500 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.1)]'
                                : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.02]'
                            }`}
                          >
                            {dt}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time select */}
                    <div className="pt-2">
                      <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                        03. Choose Confirmed Hours
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            id={`booking-time-${slot.slice(0, 2)}`}
                            key={slot}
                            onClick={() => setSelectedTime(slot)}
                            className={`p-2.5 rounded-xl border text-xs transition-all focus:outline-none text-center ${
                              selectedTime === slot
                                ? 'bg-blue-600/10 border-blue-500 text-blue-300 shadow-[0_0_10px_rgba(59,130,246,0.1)]'
                                : 'bg-white/[0.01] border-white/5 text-gray-400 hover:bg-white/[0.02]'
                            }`}
                          >
                            <span className="flex items-center justify-center">
                              <Clock className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                              {slot}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="flex justify-between pt-6 border-t border-white/5 mt-6">
                      <button
                        id="booking-step2-back"
                        onClick={() => setBookingStep(1)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all"
                      >
                        Back
                      </button>
                      <button
                        id="booking-step2-next"
                        disabled={!selectedDate || !selectedTime}
                        onClick={() => setBookingStep(3)}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                      >
                        Configure Contacts
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Contact details submission */}
                {bookingStep === 3 && (
                  <form onSubmit={handleBookingSubmit} className="space-y-4 animate-fadeIn">
                    <span className="block text-xs font-mono text-gray-500 uppercase tracking-wider mb-2">
                      04. Final Contact Details
                    </span>

                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider">Secure Email</label>
                        <input
                          id="booking-client-email"
                          type="email"
                          placeholder="e.g. founder@company.com"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 focus:border-blue-500/50 rounded-xl text-white text-sm focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs text-gray-400 mb-1 font-mono uppercase tracking-wider">Phone / WhatsApp</label>
                        <input
                          id="booking-client-phone"
                          type="tel"
                          placeholder="e.g. +91 98765 43210"
                          required
                          value={clientPhone}
                          onChange={(e) => setClientPhone(e.target.value)}
                          className="w-full px-4 py-2.5 bg-white/[0.02] border border-white/10 focus:border-blue-500/50 rounded-xl text-white text-sm focus:outline-none"
                        />
                      </div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 text-[11px] text-gray-400 flex items-start space-x-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                      <span>
                        Your connection is encrypted. Slot hold parameters are locked. No real billing or persistent cookies will be initiated.
                      </span>
                    </div>

                    <div className="flex justify-between pt-6 border-t border-white/5 mt-6">
                      <button
                        id="booking-step3-back"
                        type="button"
                        onClick={() => setBookingStep(2)}
                        className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 text-white text-xs font-semibold transition-all"
                      >
                        Back
                      </button>
                      <button
                        id="booking-step3-submit"
                        type="submit"
                        disabled={isBookingSubmitting}
                        className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm tracking-wide disabled:opacity-50 transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                      >
                        {isBookingSubmitting ? 'Confirming...' : 'Confirm Calibration Slot'}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            ) : (
              /* CONFIRMED SCREEN */
              <div className="text-center py-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mx-auto mb-6 shadow-md">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">Calibration Slot Confirmed!</h3>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-4">
                  Booking ID: PC-SLOT-{Math.floor(Math.random() * 8000 + 1000)}
                </span>

                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-4 text-left text-xs sm:text-sm text-gray-300 space-y-2 max-w-sm mx-auto mb-6">
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">Target Scope:</span>
                    <span className="text-white font-semibold">{selectedService}</span>
                  </div>
                  <div className="flex gap-4">
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 block">Confirmed Date:</span>
                      <span className="text-white font-semibold text-xs sm:text-sm">{selectedDate}</span>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-gray-500 block">Time (IST):</span>
                      <span className="text-white font-semibold text-xs sm:text-sm">{selectedTime.split(' ')[0]} {selectedTime.split(' ')[1]}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-gray-500 block">Assigned Lead:</span>
                    <span className="text-blue-400 font-semibold">Arjun Ramakrishnan</span>
                  </div>
                </div>

                <p className="text-gray-400 text-xs leading-relaxed max-w-sm mx-auto mb-8">
                  We have dispatched a calendar invitation and preparatory questionnaire to <strong>{clientEmail}</strong>. Please ensure your web analytics credentials are handy for the audit.
                </p>

                <button
                  id="close-booking-success-btn"
                  onClick={() => setIsBookingOpen(false)}
                  className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-semibold text-sm transition-all shadow-md"
                >
                  Done, Let’s Scale
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
