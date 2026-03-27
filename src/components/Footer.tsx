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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-8 group">
               <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center shadow-xl shadow-blue-500/20 group-hover:rotate-12 transition-transform duration-500">
                  <Code2 className="text-white w-7 h-7" />
               </div>
               <div className="flex flex-col leading-tight">
                <span className="text-2xl font-black font-outfit tracking-tighter text-slate-900 uppercase">
                    SK <span className="text-primary">WEB</span>
                </span>
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-slate-400">TECHNOLOGIES</span>
              </div>
            </Link>
            <p className="text-slate-500 text-lg leading-relaxed max-w-sm mb-10 font-medium">
              Innovating the future, one line of code at a time. High-performance, cinematic web experiences for visionary brands.
            </p>
            <div className="flex gap-4">
               {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl glass flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 shadow-xl shadow-slate-100 group">
                     <social.icon size={20} className="text-slate-400 group-hover:text-white" />
                  </a>
               ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">Navigation</h4>
            <ul className="space-y-5">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Services', path: '/services' },
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} className="text-slate-500 hover:text-primary transition-colors font-bold text-base">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-black text-slate-900 mb-8 uppercase tracking-widest text-sm">Solutions</h4>
            <ul className="space-y-5">
              {['Web App Architecture', 'UI/UX Visual Design', 'Cloud Deployment', 'Bespoke Development', 'Cyber Security'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-slate-500 hover:text-primary transition-colors font-bold text-base">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-slate-400 font-bold text-sm flex items-center gap-2">
            © {new Date().getFullYear()} SK WEB TECHNOLOGIES. Crafted with <Heart size={16} className="text-red-500 animate-pulse fill-red-500" /> by <span className="text-slate-900">Hariharan S</span>.
          </p>
          
          <button 
             onClick={scrollToTop}
             className="group flex items-center gap-3 px-8 py-3 rounded-2xl glass hover:bg-slate-50 transition-all duration-300 shadow-xl shadow-slate-100"
          >
             <span className="text-sm font-black text-slate-600 group-hover:text-primary uppercase tracking-widest">Elevate</span>
             <ArrowUp size={18} className="text-primary group-hover:-translate-y-2 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
