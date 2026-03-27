import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2 } from 'lucide-react';

const LoadingPreloader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
           initial={{ opacity: 1 }}
           exit={{ opacity: 0, scale: 0.9 }}
           transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[9999] bg-white flex items-center justify-center overflow-hidden"
        >
          <div className="relative flex flex-col items-center">
             <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-28 h-28 rounded-[2rem] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/20 mb-10 overflow-hidden relative"
             >
                <Code2 className="text-white w-14 h-14 relative z-10" />
                <motion.div 
                   animate={{ 
                      x: ['-200%', '200%'],
                      rotate: [0, 45]
                   }}
                   transition={{ 
                      repeat: Infinity, 
                      duration: 1.5,
                      ease: "linear" 
                   }}
                   className="absolute inset-0 bg-white/30 blur shadow-lg" 
                />
             </motion.div>

             <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="flex flex-col items-center"
             >
                <h3 className="text-3xl font-black font-outfit tracking-tighter text-slate-900 mb-3">
                   SK <span className="text-primary italic">WEB</span> TECHNOLOGIES
                </h3>
                <div className="w-56 h-1.5 bg-slate-100 rounded-full relative overflow-hidden">
                   <motion.div 
                      initial={{ left: '-100%' }}
                      animate={{ left: '100%' }}
                      transition={{ 
                         repeat: Infinity, 
                         duration: 1.5,
                         ease: "linear"
                      }}
                      className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-primary to-transparent" 
                   />
                </div>
                <p className="mt-6 text-[10px] font-black text-slate-400 tracking-[0.4em] uppercase">Innovating Digital Space</p>
             </motion.div>
          </div>

          {/* Animated Background Circles */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-slate-100 rounded-full animate-pulse pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-slate-200/50 rounded-full animate-pulse delay-700 pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingPreloader;
