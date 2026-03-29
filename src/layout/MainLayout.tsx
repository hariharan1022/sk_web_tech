import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import LoadingPreloader from '../components/LoadingPreloader';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  React.useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      const bar = document.getElementById('scroll-progress-bar');
      if (bar) bar.style.width = scrolled + '%';
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-slate-50">
      <LoadingPreloader />
      <Navbar />
      <main className="pt-16 sm:pt-20">
        {children}
      </main>
      <Footer />
      
      {/* Global Scroll Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-[2px] z-[60] pointer-events-none">
         <div className="h-full bg-gradient-to-r from-blue-600 to-purple-600 w-0 transition-all duration-300" id="scroll-progress-bar" />
      </div>
    </div>
  );
};

export default MainLayout;
