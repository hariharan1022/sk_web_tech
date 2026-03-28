import { Link } from 'react-router-dom';
import { Code2, Heart, ArrowUp } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/hariharan-s-92b566381' },
    { icon: FaInstagram, href: 'https://www.instagram.com/hari_mahesh_sk' },
    { icon: FaGithub, href: 'https://github.com' },
  ];

  return (
    <footer className="pt-32 pb-16 px-6 relative overflow-hidden bg-white">
      {/* Top Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        {/* FIRST SECTION: Brand Identity */}
        <div className="flex flex-col items-center text-center w-full mb-16 border-b border-slate-100 pb-16">
          <Link to="/" className="flex flex-col items-center gap-4 mb-6 group">
             <div className="w-14 h-14 rounded-[1.5rem] bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 group-hover:rotate-12 transition-transform duration-500">
                <Code2 className="text-white w-8 h-8" />
             </div>
             <div className="flex flex-col leading-none">
              <span className="text-2xl font-black font-outfit tracking-tighter text-slate-900 uppercase">
                  SK <span className="text-primary">WEB</span>
              </span>
              <span className="text-[9px] font-black tracking-[0.4em] uppercase text-slate-400 mt-2">TECHNOLOGIES</span>
            </div>
          </Link>
          <p className="text-slate-500 text-sm leading-relaxed max-w-lg mb-8 font-medium">
            Innovating the future, one line of code at a time. High-performance, cinematic web experiences for visionary brands.
          </p>
          <div className="flex gap-4">
             {socialLinks.map((social, i) => (
                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl glass flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-slate-100 group">
                   <social.icon size={16} className="text-slate-400 group-hover:text-white" />
                </a>
             ))}
          </div>
        </div>

        {/* SECOND SECTION: Links */}
        <div className="flex flex-row justify-between w-full mb-12 gap-4 md:gap-12">
          {/* Navigation: Left Side */}
          <div className="text-left w-1/2">
            <h4 className="font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Navigation</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-primary transition-colors font-bold text-[10px] md:text-xs">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions: Right Side */}
          <div className="text-right w-1/2">
            <h4 className="font-black text-slate-900 mb-4 md:mb-6 uppercase tracking-widest text-[10px] md:text-xs">Solutions</h4>
            <ul className="space-y-3 md:space-y-4">
              {['Web App Architecture', 'UI/UX Visual Design', 'Cloud Deployment', 'Bespoke Development', 'Cyber Security'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-500 hover:text-primary transition-colors font-bold text-[10px] md:text-xs">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* THIRD SECTION: Copyright & Button */}
        <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-400 font-bold text-[10px] md:text-xs flex items-center gap-2">
            © 2026 SK WEB TECHNOLOGIES. Crafted with <Heart size={14} className="text-red-500 animate-pulse fill-red-500" /> by <span className="text-slate-900">Hariharan S</span>.
          </p>
          
          <button 
             onClick={scrollToTop}
             className="group flex items-center gap-2 px-6 py-2.5 rounded-xl glass hover:bg-slate-50 transition-all duration-300 shadow-xl shadow-slate-100"
          >
             <span className="text-[10px] md:text-xs font-black text-slate-600 group-hover:text-primary uppercase tracking-widest">Elevate</span>
             <ArrowUp size={14} className="text-primary group-hover:-translate-y-1.5 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
