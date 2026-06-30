import React, { useState } from 'react';
import { Mail, Send, Award, Linkedin, Instagram, Twitter, Youtube, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState<string>('');
  const [subscribed, setSubscribed] = useState<boolean>(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) {
      return;
    }
    setSubscribed(true);
    setNewsletterEmail('');
    setTimeout(() => {
      setSubscribed(false);
    }, 4500);
  };

  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'About Agency', href: '#about' },
    { label: 'Verified Pricing', href: '#pricing' },
    { label: 'Insights', href: '#blog' },
    { label: 'Strategy Booking', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'SEO Optimization', href: '#services' },
    { label: 'Social Media Management', href: '#services' },
    { label: 'Performance Marketing', href: '#services' },
    { label: 'Website Development', href: '#services' },
    { label: 'Branding & Design', href: '#services' },
    { label: 'Google Search & Display', href: '#services' },
    { label: 'Content Writing', href: '#services' },
    { label: 'Email Automation', href: '#services' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const offset = 80;
      const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: position,
        behavior: 'smooth',
      });
    }
  };

  return (
    <footer className="relative bg-black border-t border-white/10 pt-20 pb-8 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          
          {/* Logo & Agency details */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-9 h-9 rounded-none bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-sans font-bold text-base tracking-wide">
                    PIXEL<span className="text-blue-500">CRAFT</span>
                  </span>
                  <span className="text-[9px] text-gray-500 tracking-wider font-mono uppercase">
                    Media · Madurai
                  </span>
                </div>
              </div>

              <p className="text-white/50 text-sm leading-relaxed max-w-sm font-light">
                A premium, metrics-focused digital marketing agency located in Madurai, Tamil Nadu, India. We engineer scalable user acquisition systems that convert traffic directly into client profit.
              </p>
            </div>

            {/* Social channels */}
            <div className="flex items-center space-x-3.5 pt-4 text-gray-400">
              <a href="#linkedin" className="p-2 rounded-none bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white transition-all shadow-md cursor-pointer" aria-label="LinkedIn profile">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#instagram" className="p-2 rounded-none bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white transition-all shadow-md cursor-pointer" aria-label="Instagram handle">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#twitter" className="p-2 rounded-none bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white transition-all shadow-md cursor-pointer" aria-label="Twitter profile">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#youtube" className="p-2 rounded-none bg-white/5 border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/10 hover:text-white transition-all shadow-md cursor-pointer" aria-label="Youtube channel">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Directory Links columns */}
          <div className="lg:col-span-2">
            <h4 className="text-[10px] font-bold text-blue-400 font-mono uppercase tracking-[0.2em] mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-quick-link-${link.label.toLowerCase().replace(/ /g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/50 hover:text-blue-400 text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-blue-400 font-mono uppercase tracking-[0.2em] mb-6">Capabilities</h4>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    id={`footer-service-link-${link.label.toLowerCase().replace(/ /g, '-')}`}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="text-white/50 hover:text-blue-400 text-sm font-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Interactive Newsletter */}
          <div className="lg:col-span-3">
            <h4 className="text-[10px] font-bold text-blue-400 font-mono uppercase tracking-[0.2em] mb-6">Algorithmic Marketing Intel</h4>
            <p className="text-white/50 text-xs sm:text-sm leading-relaxed mb-4 font-light">
              Get our weekly case audits, performance analysis, and Madurai local search guidelines directly in your inbox.
            </p>

            <form onSubmit={handleSubscribe} className="relative rounded-none overflow-hidden border border-white/20 bg-white/[0.01] flex p-1">
              <input
                id="footer-newsletter-email"
                type="email"
                placeholder="founder@company.com"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full bg-transparent px-3 py-2 text-white text-xs focus:outline-none placeholder:text-gray-600 font-light"
              />
              <button
                id="footer-subscribe-submit"
                type="submit"
                className="p-2.5 rounded-none bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center justify-center shrink-0 cursor-pointer"
                aria-label="Subscribe to newsletter"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>

            {subscribed && (
              <div id="footer-subscribe-success" className="text-[10px] text-emerald-400 font-mono mt-2 animate-pulse leading-normal uppercase tracking-wider">
                Subscribed successfully! Algorithmic marketing guidelines will be dispatched weekly.
              </div>
            )}
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <span className="text-[11px] text-gray-500 font-light">
              © {new Date().getFullYear()} PixelCraft Media. All rights reserved. Made in Madurai, Tamil Nadu.
            </span>
            <span className="text-[11px] text-gray-500 font-light">
              Designed & Developed by{' '}
              <a
                href="https://codewithsiril.site"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors cursor-pointer"
              >
                CodeWithSiril
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-6 text-[11px] text-gray-500 font-light">
            <a href="#privacy" className="hover:text-blue-400 transition-colors">Privacy Charter</a>
            <a href="#terms" className="hover:text-blue-400 transition-colors">Strategic Terms</a>
            <button
              id="scroll-to-top-btn"
              onClick={handleScrollTop}
              className="p-2 rounded-none bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
