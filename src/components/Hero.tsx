import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Zap, Shield, Sparkles, Terminal } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden bg-white">
      {/* Dynamic Background Decor - Minimalist & Interactive */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0],
            opacity: [0.05, 0.08, 0.05]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, -5, 0],
            opacity: [0.03, 0.06, 0.03]
          }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-1/4 -right-20 w-[800px] h-[800px] bg-purple-500/20 rounded-full blur-[150px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col items-center text-center">
        
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
          className="text-5xl md:text-8xl lg:text-[9.5rem] font-black font-outfit leading-[0.9] mb-12 text-slate-900 tracking-tighter"
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
          className="max-w-3xl text-xl md:text-3xl text-slate-500 mb-16 leading-relaxed font-medium"
        >
          We architect elite digital products that <span className="text-slate-900 font-black italic">convert vision into reality</span> through cinematic design and world-class engineering.
        </motion.p>
        
        {/* High-Performance CTAs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center gap-8 mb-32"
        >
          <Link to="/get-started" className="btn-primary group text-xl px-14 py-7 rounded-[2rem] shadow-[0_30px_80px_rgba(0,0,0,0.1)] hover:shadow-primary/30">
            Get Started <ArrowUpRight size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
          <a href="/portfolio" className="btn-outline group text-xl px-14 py-7 rounded-[2rem]">
            Check Showcase
          </a>
        </motion.div>

        {/* Cinematic Stats Matrix */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-24 w-full max-w-6xl border-t border-slate-100 pt-20">
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-blue-50 flex items-center justify-center text-blue-600 mb-1 shadow-inner">
                 <Zap size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">50+</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Global Launches</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-1 shadow-inner">
                 <Shield size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">100%</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Secured Core</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-purple-50 flex items-center justify-center text-purple-600 mb-1 shadow-inner">
                 <Terminal size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">12+</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Countries</p>
           </div>
           <div className="flex flex-col items-center gap-3">
              <div className="w-14 h-14 rounded-3xl bg-orange-50 flex items-center justify-center text-orange-600 mb-1 shadow-inner">
                 <Sparkles size={24} />
              </div>
              <h4 className="text-3xl md:text-4xl font-black font-outfit text-slate-900">99%</h4>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Happy Clients</p>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
