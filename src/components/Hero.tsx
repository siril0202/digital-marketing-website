import React, { useEffect, useRef } from 'react';
import { ArrowRight, ChevronDown, Award, TrendingUp, Users } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export default function Hero({ onOpenBooking }: HeroProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      alpha: number;
    }> = [];

    const particleCount = Math.min(65, Math.floor(width / 20));

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.2,
      });
    }

    let mouse = { x: -1000, y: -1000 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('resize', handleResize);

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      // Connect particles
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        p1.x += p1.vx;
        p1.y += p1.vy;

        if (p1.x < 0 || p1.x > width) p1.vx *= -1;
        if (p1.y < 0 || p1.y > height) p1.vy *= -1;

        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59, 130, 246, ${p1.alpha})`;
        ctx.fill();

        // Mouse connection
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        if (distMouse < 180) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(37, 99, 235, ${0.15 * (1 - distMouse / 180)})`;
          ctx.lineWidth = 1;
          ctx.stroke();
        }

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 120) {
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.strokeStyle = `rgba(59, 130, 246, ${0.08 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const target = document.querySelector(id);
    if (target) {
      const offset = 80;
      const position = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-black overflow-hidden pt-20"
    >
      {/* Interactive Network Background */}
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none opacity-60" />

      {/* Floating Ambient Light Orbs */}
      <div className="absolute top-1/4 left-1/4 w-[30vw] h-[30vw] rounded-full bg-blue-600/10 blur-[120px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[35vw] h-[35vw] rounded-full bg-indigo-600/10 blur-[150px] pointer-events-none mix-blend-screen" />

      {/* Grid Overlay for technical luxury feeling */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        {/* Shimmer Badge */}
        <div className="inline-flex items-center space-x-3 px-4 py-2 rounded-none bg-blue-500/5 border border-blue-500/30 shadow-[0_0_25px_rgba(59,130,246,0.1)] backdrop-blur-md mb-8 animate-pulse">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-none bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-none h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-bold text-blue-400 font-mono tracking-[0.2em] uppercase">
            Premium Agency • Madurai, India
          </span>
        </div>

        {/* Huge Hero Headline */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[105px] leading-[0.85] font-black tracking-tighter uppercase text-white mb-8 font-sans">
          We Turn <br />
          Traffic Into <br />
          <span className="text-transparent border-b-4 border-blue-500 inline-block px-1" style={{ WebkitTextStroke: '1.5px white' }}>Revenue</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-white/50 text-lg sm:text-xl leading-relaxed font-light mb-12">
          Helping startups and enterprises scale through high-performance marketing, luxury brand strategy, and conversion-focused web engineering.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <button
            id="hero-cta-booking"
            onClick={onOpenBooking}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs tracking-widest uppercase transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_35px_rgba(37,99,235,0.6)] group focus:outline-none"
          >
            <span>START YOUR PROJECT</span>
            <ArrowRight className="w-4 h-4 ml-3 transform transition-transform duration-300 group-hover:translate-x-1" />
          </button>
          <button
            id="hero-cta-cases"
            onClick={() => scrollToSection('#case-studies')}
            className="w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-none bg-transparent hover:bg-white text-white hover:text-black border border-white/20 hover:border-white font-bold text-xs tracking-widest uppercase transition-all duration-300 focus:outline-none"
          >
            VIEW WORK
          </button>
        </div>

        {/* Live Premium KPI Counters */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto pt-10 border-t border-white/10 backdrop-blur-[2px]">
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none mb-3 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <TrendingUp className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">320%</span>
            <span className="text-[10px] text-white/40 font-mono uppercase mt-1.5 tracking-widest">Average Campaign ROI</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none mb-3 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <Award className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">₹45Cr+</span>
            <span className="text-[10px] text-white/40 font-mono uppercase mt-1.5 tracking-widest">Client Revenue Driven</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none mb-3 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <Users className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">50+</span>
            <span className="text-[10px] text-white/40 font-mono uppercase mt-1.5 tracking-widest">Active Global Brands</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-3 bg-white/5 border border-white/10 rounded-none mb-3 shadow-[0_0_15px_rgba(59,130,246,0.05)]">
              <Award className="w-5 h-5 text-blue-500" />
            </div>
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tighter">4.9★</span>
            <span className="text-[10px] text-white/40 font-mono uppercase mt-1.5 tracking-widest">Client Satisfaction</span>
          </div>
        </div>
      </div>

      {/* Floating Down Indicator */}
      <button
        id="scroll-indicator"
        onClick={() => scrollToSection('#services')}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-gray-400 hover:text-white transition-colors animate-bounce focus:outline-none"
        aria-label="Scroll down to Services"
      >
        <span className="text-[10px] font-mono tracking-widest uppercase mb-2">Explore Craft</span>
        <ChevronDown className="w-5 h-5 text-blue-500" />
      </button>
    </section>
  );
}
