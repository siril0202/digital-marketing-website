import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Award } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
  activeSection: string;
}

export default function Navbar({ onOpenBooking, activeSection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Insights', href: '#blog' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = 80; // height of fixed navbar
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/75 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            id="nav-logo"
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center space-x-3 group focus:outline-none"
          >
            <div className="w-8 h-8 bg-blue-600 rounded-none rotate-45 flex items-center justify-center transition-transform duration-300 group-hover:rotate-[135deg] shadow-[0_0_15px_rgba(37,99,235,0.4)] shrink-0">
              <div className="w-4 h-4 bg-white rounded-none -rotate-45"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-white font-sans font-black text-xl tracking-tighter uppercase transition-colors">
                PIXELCRAFT<span className="text-blue-500 italic">MEDIA</span>
              </span>
              <span className="text-[9px] text-gray-500 tracking-[0.25em] font-mono uppercase -mt-0.5">
                MADURAI · INDIA
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 text-xs font-medium uppercase tracking-[0.18em]">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.slice(1);
              return (
                <a
                  id={`nav-item-${item.href.slice(1)}`}
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3 py-2 text-[11px] font-semibold transition-all duration-200 relative ${
                    isActive
                      ? 'text-white border-b-2 border-blue-500 pb-1'
                      : 'text-white/60 hover:text-white'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Book Call CTA (Desktop) */}
          <div className="hidden md:flex items-center">
            <button
              id="nav-cta-btn"
              onClick={onOpenBooking}
              className="px-6 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest hover:bg-blue-600 hover:text-white border border-transparent hover:border-blue-600 transition-all duration-300 focus:outline-none rounded-none"
            >
              Book Call
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-white/5 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        id="mobile-menu-drawer"
        className={`md:hidden fixed inset-0 top-20 z-40 bg-black/95 backdrop-blur-lg border-t border-white/10 transition-all duration-300 transform ${
          isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
        }`}
      >
        <div className="px-4 pt-4 pb-8 space-y-3">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                id={`mobile-nav-${item.href.slice(1)}`}
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`block px-4 py-3 rounded-xl text-base font-medium tracking-wide transition-all ${
                  isActive
                    ? 'text-blue-400 bg-blue-500/10 border-l-2 border-blue-500'
                    : 'text-gray-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {item.label}
              </a>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <button
              id="mobile-nav-cta-btn"
              onClick={() => {
                setIsOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center px-4 py-3.5 rounded-none bg-blue-600 text-white font-bold text-sm tracking-widest uppercase hover:bg-blue-500 transition-colors"
            >
              <span>Book Strategy Call</span>
              <ArrowUpRight className="w-4 h-4 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
