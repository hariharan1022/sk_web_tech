import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Zap, Shield, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* White base so non-animated background stays white */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* Premium Home-Only Background Animation */}
      {isHomePage && (
        <div className="absolute inset-0 pointer-events-none z-[1]">

          {/* === LAYER 1: Floating Gradient Orbs === */}
          {/* Top-left blue orb */}
          <motion.div
            animate={{ x: [0, 60, -30, 0], y: [0, -40, 50, 0], scale: [1, 1.25, 0.95, 1] }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] max-w-[700px] max-h-[700px] bg-blue-200/25 rounded-full blur-[130px]"
          />
          {/* Bottom-right purple orb */}
          <motion.div
            animate={{ x: [0, -50, 30, 0], y: [0, 50, -40, 0], scale: [1, 1.15, 1.05, 1] }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[15%] -right-[10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-purple-200/30 rounded-full blur-[150px]"
          />
          {/* Center indigo accent orb */}
          <motion.div
            animate={{ x: [0, 80, -20, 0], y: [0, -60, 30, 0], scale: [1, 1.3, 0.9, 1], opacity: [0.15, 0.35, 0.2, 0.15] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 5 }}
            className="absolute top-[30%] left-[35%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-300/20 rounded-full blur-[120px]"
          />
          {/* Top-right cyan orb */}
          <motion.div
            animate={{ x: [0, -70, 40, 0], y: [0, 60, -20, 0], scale: [1, 1.2, 1, 1] }}
            transition={{ duration: 32, repeat: Infinity, ease: "easeInOut", delay: 8 }}
            className="absolute -top-[5%] right-[5%] w-[35vw] h-[35vw] max-w-[450px] max-h-[450px] bg-cyan-200/20 rounded-full blur-[100px]"
          />
          {/* Bottom-left pink orb */}
          <motion.div
            animate={{ x: [0, 40, -60, 0], y: [0, -30, 40, 0], scale: [1, 1.1, 1.2, 1], opacity: [0.1, 0.25, 0.15, 0.1] }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 12 }}
            className="absolute bottom-[5%] left-[10%] w-[30vw] h-[30vw] max-w-[400px] max-h-[400px] bg-pink-200/20 rounded-full blur-[100px]"
          />

          {/* === LAYER 2: Breathing Dot Grid === */}
          <motion.div
            animate={{ opacity: [0.03, 0.07, 0.03] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #334155 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
          />

          {/* === LAYER 3: Diagonal Light Rays === */}
          <motion.div
            animate={{ opacity: [0, 0.06, 0], x: [-100, 100, -100] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-[20%] w-[1px] h-full bg-gradient-to-b from-transparent via-blue-400/40 to-transparent blur-[2px]"
            style={{ transform: "rotate(15deg)", transformOrigin: "top center" }}
          />
          <motion.div
            animate={{ opacity: [0, 0.05, 0], x: [80, -80, 80] }}
            transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 4 }}
            className="absolute top-0 left-[55%] w-[1px] h-full bg-gradient-to-b from-transparent via-purple-400/40 to-transparent blur-[2px]"
            style={{ transform: "rotate(-12deg)", transformOrigin: "top center" }}
          />
          <motion.div
            animate={{ opacity: [0, 0.04, 0], x: [-60, 60, -60] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 9 }}
            className="absolute top-0 left-[80%] w-[1px] h-full bg-gradient-to-b from-transparent via-cyan-400/30 to-transparent blur-[2px]"
            style={{ transform: "rotate(8deg)", transformOrigin: "top center" }}
          />

          {/* === LAYER 4: Floating Particle Dots === */}
          {[
            { top: "15%", left: "12%", delay: 0,  dur: 7,  color: "bg-blue-400/50" },
            { top: "70%", left: "8%",  delay: 1.5,dur: 9,  color: "bg-purple-400/50" },
            { top: "30%", left: "88%", delay: 3,  dur: 8,  color: "bg-cyan-400/50" },
            { top: "80%", left: "80%", delay: 0.8,dur: 11, color: "bg-pink-400/40" },
            { top: "50%", left: "50%", delay: 2,  dur: 6,  color: "bg-indigo-400/40" },
            { top: "10%", left: "60%", delay: 4,  dur: 10, color: "bg-blue-300/40" },
            { top: "90%", left: "40%", delay: 1,  dur: 8,  color: "bg-purple-300/40" },
            { top: "40%", left: "25%", delay: 5,  dur: 7,  color: "bg-sky-400/40" },
          ].map((p, i) => (
            <motion.div
              key={i}
              className={`absolute w-1.5 h-1.5 rounded-full ${p.color}`}
              style={{ top: p.top, left: p.left }}
              animate={{ y: [0, -20, 0], opacity: [0.4, 1, 0.4], scale: [1, 1.5, 1] }}
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}

          {/* === LAYER 5: Radial Glow Vignette === */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,transparent_40%,rgba(255,255,255,0.6)_100%)]" />
        </div>
      )}

      {/* Static Subtle Decor for non-home routes */}
      {!isHomePage && (
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <motion.div
            animate={{ scale: [1, 1.1, 1], opacity: [0.05, 0.08, 0.05] }}
            transition={{ duration: 10, repeat: Infinity }}
            className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]"
          />
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.03, 0.06, 0.03] }}
            transition={{ duration: 15, repeat: Infinity }}
            className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px]"
          />
        </div>
      )}

      <div className="max-w-7xl mx-auto w-full relative z-[10] flex flex-col items-center text-center">
        
        {/* Elite Badge */}
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
           className="mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full glass bg-slate-50 border-slate-100 text-[10px] font-black text-slate-800 shadow-2xl shadow-slate-200/40 uppercase tracking-[0.4em]">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>The Premium Web Lab</span>
          </div>
        </motion.div>
        
        {/* Iconic Heading */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-6xl md:text-8xl lg:text-[9.5rem] font-black font-outfit leading-[0.9] mb-8 md:mb-12 text-slate-900 tracking-tighter"
        >
          SK <span className="text-gradient">WEB</span> <br />
          <span className="relative inline-block text-[0.8em] md:text-[0.85em] lg:text-[0.9em]">
             TECHNOLOGIES
             <motion.div 
               initial={{ width: 0 }}
               animate={{ width: '100%' }}
               transition={{ delay: 1.2, duration: 2 }}
               className="absolute -bottom-4 left-0 h-4 bg-primary/10 blur-xl rounded-full" 
             />
          </span>
        </motion.h1>
        
        {/* Value Prop */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="max-w-3xl text-base sm:text-xl md:text-3xl text-slate-500 mb-10 md:mb-16 leading-relaxed font-medium px-2"
        >
          We architect elite digital products that <span className="text-slate-900 font-black italic">convert vision into reality</span> through cinematic design and world-class engineering.
        </motion.p>
        
        {/* High-Performance CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-16 md:mb-32"
        >
          <Link to="/get-started" className="btn-primary group text-sm sm:text-xl px-8 sm:px-14 py-4 sm:py-7 rounded-[1.5rem] sm:rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.1)] hover:shadow-primary/30">
            Get Started <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <a href="/portfolio" className="btn-outline group text-sm sm:text-xl px-8 sm:px-14 py-4 sm:py-7 rounded-[1.5rem] sm:rounded-[2rem]">
            Check Showcase
          </a>
        </motion.div>

        {/* Cinematic Stats Matrix - Startup Focused */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 md:gap-24 w-full max-w-6xl border-t border-slate-100 pt-10 md:pt-20">
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-1 shadow-inner">
                 <Zap size={24} />
              </div>
              <h4 className="text-2xl md:text-4xl font-black font-outfit text-slate-900">10+</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Projects Launched</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1 shadow-inner">
                 <Shield size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">100%</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Quality Code</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mb-1 shadow-inner">
                 <Terminal size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">15+</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Tech Stacks</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-600 mb-1 shadow-inner">
                 <Sparkles size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">2x</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest text-center">Faster Delivery</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
