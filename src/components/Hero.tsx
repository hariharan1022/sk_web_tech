import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { ArrowUpRight, Zap, Shield, Sparkles, Terminal } from 'lucide-react';

// Particle config outside component to avoid re-creation
const PARTICLES = [
  { top: "8%",  left: "6%",  delay: 0,   dur: 8,  size: "w-2 h-2",   color: "#3b82f6" },
  { top: "20%", left: "92%", delay: 1.5, dur: 10, size: "w-1.5 h-1.5",color: "#8b5cf6" },
  { top: "55%", left: "4%",  delay: 2,   dur: 7,  size: "w-1 h-1",    color: "#06b6d4" },
  { top: "75%", left: "85%", delay: 0.8, dur: 12, size: "w-2 h-2",    color: "#ec4899" },
  { top: "45%", left: "48%", delay: 3,   dur: 9,  size: "w-1.5 h-1.5",color: "#6366f1" },
  { top: "12%", left: "65%", delay: 4,   dur: 11, size: "w-1 h-1",    color: "#0ea5e9" },
  { top: "88%", left: "35%", delay: 1,   dur: 8,  size: "w-1.5 h-1.5",color: "#a855f7" },
  { top: "35%", left: "22%", delay: 5,   dur: 7,  size: "w-1 h-1",    color: "#38bdf8" },
  { top: "62%", left: "72%", delay: 2.5, dur: 9,  size: "w-2 h-2",    color: "#fb7185" },
  { top: "90%", left: "15%", delay: 3.5, dur: 13, size: "w-1 h-1",    color: "#818cf8" },
  { top: "5%",  left: "40%", delay: 6,   dur: 10, size: "w-1.5 h-1.5",color: "#34d399" },
  { top: "70%", left: "52%", delay: 0.5, dur: 6,  size: "w-1 h-1",    color: "#f59e0b" },
];

const RINGS = [
  { size: 420, x: "-18%", y: "-15%", dur: 30, delay: 0,  opacity: 0.07, color: "#6366f1" },
  { size: 320, x: "78%",  y: "60%",  dur: 24, delay: 5,  opacity: 0.06, color: "#8b5cf6" },
  { size: 200, x: "60%",  y: "5%",   dur: 20, delay: 10, opacity: 0.08, color: "#0ea5e9" },
];

const Hero = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname === '';

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* White base */}
      <div className="absolute inset-0 bg-white z-0" />

      {/* ═══════════════════════════════════════════════
          PREMIUM HOME-ONLY BACKGROUND ANIMATION SYSTEM
          ═══════════════════════════════════════════════ */}
      {isHomePage && (
        <div className="absolute inset-0 pointer-events-none z-[1]">

          {/* ── LAYER 1: AURORA SWEEP BANDS ── */}
          {/* Sweeping warm-to-cool aurora across the top */}
          <motion.div
            animate={{
              x: ["-20%", "10%", "-20%"],
              opacity: [0.22, 0.38, 0.22],
              scaleX: [1, 1.15, 1],
            }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[30%] left-0 w-full h-[75%]"
            style={{
              background: "linear-gradient(135deg, rgba(99,102,241,0.18) 0%, rgba(139,92,246,0.22) 30%, rgba(236,72,153,0.12) 60%, transparent 100%)",
              filter: "blur(60px)",
              borderRadius: "0 0 60% 60%",
            }}
          />
          {/* Cyan-blue aurora from bottom-right */}
          <motion.div
            animate={{
              x: ["5%", "-8%", "5%"],
              opacity: [0.18, 0.32, 0.18],
              scaleX: [1, 1.1, 1],
            }}
            transition={{ duration: 26, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute bottom-0 right-0 w-[85%] h-[60%]"
            style={{
              background: "linear-gradient(315deg, rgba(6,182,212,0.20) 0%, rgba(59,130,246,0.18) 40%, rgba(99,102,241,0.10) 70%, transparent 100%)",
              filter: "blur(70px)",
              borderRadius: "60% 60% 0 0",
            }}
          />
          {/* Emerald accent strip */}
          <motion.div
            animate={{ x: ["-10%", "15%", "-10%"], opacity: [0.10, 0.18, 0.10] }}
            transition={{ duration: 34, repeat: Infinity, ease: "easeInOut", delay: 12 }}
            className="absolute top-[35%] -left-[10%] w-[70%] h-[30%]"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(52,211,153,0.15), rgba(16,185,129,0.10), transparent)",
              filter: "blur(50px)",
            }}
          />

          {/* ── LAYER 2: DEEP GLOW ORBS (enhanced) ── */}
          <motion.div
            animate={{ x: [0, 70, -35, 0], y: [0, -50, 60, 0], scale: [1, 1.3, 0.92, 1] }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-[18%] -left-[12%] w-[60vw] h-[60vw] max-w-[750px] max-h-[750px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(99,102,241,0.20) 0%, rgba(139,92,246,0.08) 60%, transparent 100%)", filter: "blur(80px)" }}
          />
          <motion.div
            animate={{ x: [0, -55, 35, 0], y: [0, 55, -45, 0], scale: [1, 1.18, 1.05, 1] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut", delay: 3 }}
            className="absolute -bottom-[18%] -right-[12%] w-[65vw] h-[65vw] max-w-[850px] max-h-[850px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(168,85,247,0.22) 0%, rgba(236,72,153,0.10) 55%, transparent 100%)", filter: "blur(90px)" }}
          />
          <motion.div
            animate={{ x: [0, 90, -25, 0], y: [0, -65, 35, 0], scale: [1, 1.35, 0.88, 1], opacity: [0.18, 0.38, 0.22, 0.18] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 6 }}
            className="absolute top-[28%] left-[32%] w-[45vw] h-[45vw] max-w-[550px] max-h-[550px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(14,165,233,0.18) 0%, rgba(6,182,212,0.08) 60%, transparent 100%)", filter: "blur(70px)" }}
          />
          <motion.div
            animate={{ x: [0, -80, 45, 0], y: [0, 65, -25, 0], scale: [1, 1.22, 1.02, 1] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut", delay: 9 }}
            className="absolute -top-[8%] right-[3%] w-[38vw] h-[38vw] max-w-[480px] max-h-[480px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(252,211,77,0.12) 0%, rgba(251,146,60,0.08) 55%, transparent 100%)", filter: "blur(80px)" }}
          />

          {/* ── LAYER 3: ANIMATED MESH / GRID ── */}
          {/* Dot grid that breathes */}
          <motion.div
            animate={{ opacity: [0.025, 0.065, 0.025], scale: [1, 1.03, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle, #475569 1px, transparent 1px)",
              backgroundSize: "44px 44px",
            }}
          />
          {/* Diagonal lines overlay (very subtle) */}
          <div
            className="absolute inset-0 opacity-[0.018]"
            style={{
              backgroundImage: "repeating-linear-gradient(60deg, #6366f1 0px, #6366f1 1px, transparent 1px, transparent 55px)",
            }}
          />

          {/* ── LAYER 4: GLOWING ORBITAL RINGS ── */}
          {RINGS.map((ring, i) => (
            <motion.div
              key={i}
              animate={{ rotate: [0, 360] }}
              transition={{ duration: ring.dur, repeat: Infinity, ease: "linear", delay: ring.delay }}
              className="absolute"
              style={{
                width: ring.size,
                height: ring.size,
                left: ring.x,
                top: ring.y,
                border: `1px solid ${ring.color}`,
                borderRadius: "50%",
                opacity: ring.opacity,
                boxShadow: `0 0 20px 0px ${ring.color}40`,
              }}
            >
              {/* Glowing dot on the ring */}
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full"
                style={{ background: ring.color, boxShadow: `0 0 10px 4px ${ring.color}80` }}
              />
            </motion.div>
          ))}

          {/* ── LAYER 5: LIGHT BEAM RAYS ── */}
          {[
            { left: "18%", rotate: "16deg", dur: 13, delay: 0,  color: "rgba(99,102,241,0.5)" },
            { left: "52%", rotate: "-13deg", dur: 18, delay: 4,  color: "rgba(139,92,246,0.45)" },
            { left: "78%", rotate: "9deg",  dur: 22, delay: 9,  color: "rgba(6,182,212,0.4)" },
            { left: "36%", rotate: "-6deg", dur: 16, delay: 7,  color: "rgba(236,72,153,0.35)" },
          ].map((ray, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0, 0.08, 0], x: [i % 2 === 0 ? -80 : 80, i % 2 === 0 ? 80 : -80, i % 2 === 0 ? -80 : 80] }}
              transition={{ duration: ray.dur, repeat: Infinity, ease: "easeInOut", delay: ray.delay }}
              className="absolute top-0 h-full w-px"
              style={{
                left: ray.left,
                background: `linear-gradient(to bottom, transparent, ${ray.color}, transparent)`,
                transform: `rotate(${ray.rotate})`,
                transformOrigin: "top center",
                filter: "blur(1.5px)",
              }}
            />
          ))}

          {/* ── LAYER 6: RICH PARTICLE SYSTEM ── */}
          {PARTICLES.map((p, i) => (
            <motion.div
              key={i}
              className={`absolute rounded-full ${p.size}`}
              style={{
                top: p.top,
                left: p.left,
                background: p.color,
                boxShadow: `0 0 8px 2px ${p.color}70`,
              }}
              animate={{
                y: [0, -28, 8, 0],
                x: [0, 8, -5, 0],
                opacity: [0.35, 1, 0.5, 0.35],
                scale: [1, 1.7, 1.2, 1],
              }}
              transition={{ duration: p.dur, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
            />
          ))}

          {/* ── LAYER 7: SOFT TOP & BOTTOM GRADIENT FADES ── */}
          <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-white to-transparent" />
          {/* Center radial fade to keep text readable */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_42%,transparent_30%,rgba(255,255,255,0.55)_100%)]" />
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

        {/* Startup Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.1, duration: 0.9 }}
          className="w-full max-w-5xl border-t border-slate-100 pt-10 md:pt-16"
        >
          <p className="text-center text-[9px] font-black uppercase tracking-[0.35em] text-slate-300 mb-8 md:mb-10">
            Early Stage · Big Vision
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-6">
            <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: "linear-gradient(135deg,#eff6ff,#dbeafe)", boxShadow: "0 8px 24px rgba(59,130,246,0.12)" }}>
                <Zap size={22} className="text-blue-600" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900 leading-none">3+</h4>
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center">Projects Live</p>
              <p className="text-[9px] font-semibold text-slate-400 text-center leading-tight">Real clients, real results</p>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: "linear-gradient(135deg,#f0fdf4,#dcfce7)", boxShadow: "0 8px 24px rgba(34,197,94,0.12)" }}>
                <Shield size={22} className="text-emerald-600" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900 leading-none">100%</h4>
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center">Client Happy</p>
              <p className="text-[9px] font-semibold text-slate-400 text-center leading-tight">Every delivery, on time</p>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: "linear-gradient(135deg,#faf5ff,#ede9fe)", boxShadow: "0 8px 24px rgba(139,92,246,0.12)" }}>
                <Terminal size={22} className="text-purple-600" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900 leading-none">5+</h4>
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center">Tech Stacks</p>
              <p className="text-[9px] font-semibold text-slate-400 text-center leading-tight">React · Node · Next & more</p>
            </motion.div>
            <motion.div whileHover={{ y: -4, scale: 1.03 }} transition={{ type: "spring", stiffness: 300 }} className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-1" style={{ background: "linear-gradient(135deg,#fff7ed,#ffedd5)", boxShadow: "0 8px 24px rgba(251,146,60,0.12)" }}>
                <Sparkles size={22} className="text-orange-500" />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900 leading-none">∞</h4>
              <p className="text-[10px] font-black text-slate-700 uppercase tracking-widest text-center">Ambition</p>
              <p className="text-[9px] font-semibold text-slate-400 text-center leading-tight">Growing every single day</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
