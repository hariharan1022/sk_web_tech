import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal } from 'lucide-react';
import { cn } from '../lib/utils';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-8 py-8',
        isScrolled ? 'py-5 px-6' : 'bg-transparent'
      )}
    >
      <div className={cn(
        "max-w-7xl mx-auto flex items-center justify-between transition-all duration-500 rounded-[2.5rem] px-10 py-4",
        isScrolled ? "glass shadow-[0_20px_60px_rgba(0,0,0,0.05)] border-slate-100/50" : "bg-transparent border-transparent"
      )}>
        <Link to="/" className="group flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-slate-900 group-hover:bg-primary flex items-center justify-center shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110">
              <Terminal className="text-white w-6 h-6" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black font-outfit tracking-tighter text-slate-900 uppercase">
                SK <span className="text-primary italic">WEB</span>
              </span>
              <span className="text-[9px] font-black tracking-[0.3em] uppercase text-slate-400">TECHNOLOGIES</span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "nav-link transition-all duration-500",
                  location.pathname === link.href ? "active scale-110" : "opacity-60 hover:opacity-100"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
          
          <div className="w-[1px] h-8 bg-slate-100 mx-2" />
          
          <Link to="/get-started" className="btn-primary py-4 px-10 text-xs shadow-none hover:shadow-xl">
            Let's Collaborate
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="w-12 h-12 rounded-2xl bg-slate-50 text-slate-900 flex items-center justify-center hover:bg-slate-100 transition-all shadow-sm"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.4, ease: "circOut" }}
            className="md:hidden absolute top-full left-8 right-8 glass p-10 rounded-[3rem] mt-6 border-slate-100 shadow-[0_40px_100px_rgba(0,0,0,0.1)]"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "text-2xl font-black font-outfit transition-all duration-300",
                    location.pathname === link.href ? "text-slate-900 translate-x-4" : "text-slate-300 hover:text-slate-400"
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-[1px] bg-slate-100 w-full my-2" />
              <Link 
                to="/get-started" 
                onClick={() => setIsMenuOpen(false)}
                className="btn-primary w-full text-center py-6 text-xl"
              >
                Discuss Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
