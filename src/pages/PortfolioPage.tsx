import { motion } from 'framer-motion';
import { Sparkles, ExternalLink, ArrowUpRight, Code2, Layout, Zap, Eye, Presentation, Rocket, Smartphone } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import project1 from '../assets/img/project/project1.png';
import project2 from '../assets/img/project/project2.png';
import project3 from '../assets/img/project/project3.png';

const projects = [
  {
    title: 'Master Chess Academy',
    category: 'Educational',
    image: project1,
    tech: ['React', 'Framer', 'Tailwind'],
    demo: 'https://hariharan1022.github.io/chess_mca/',
    github: '#',
    description: 'A premium, high-performance academy platform with cinematic animations.',
  },
  {
    title: 'Nursing College Portal',
    category: 'Educational',
    image: project2,
    tech: ['Vite', 'Modern Design', 'SEO'],
    demo: 'https://hariharan1022.github.io/nursing/',
    github: '#',
    description: 'An institutional portal designed for maximum clarity and high-speed delivery.',
  },
  {
    title: 'Tamilrockes Cinema',
    category: 'Entertainment',
    image: project3,
    tech: ['API Core', 'Motion UI'],
    demo: 'https://hariharan1022.github.io/tamilrockes/',
    github: '#',
    description: 'A cutting-edge streaming ecosystem with a focus on immersive UI.',
  },
  {
    title: 'Neo-Fitness App',
    category: 'Web Apps',
    image: project1,
    tech: ['Next.js', 'Firebase', 'Recoil'],
    demo: '#',
    github: '#',
    description: 'A modern fitness tracking application with real-time data visualization.',
  },
  {
    title: 'E-Commerce Fusion',
    category: 'Web Apps',
    image: project2, 
    tech: ['React', 'Stripe', 'Node.js'],
    demo: '#',
    github: '#',
    description: 'A high-conversion e-commerce platform with seamless transitions.',
  },
  {
    title: 'Premium Brand Identity',
    category: 'Designs',
    image: project3, 
    tech: ['Figma', 'Art Direction'],
    demo: '#',
    github: '#',
    description: 'Designing the visual identity for a luxury brand including and assets.',
  },
];

const allProjects = [...projects, ...projects];
const reversedProjects = [...projects].reverse();
const allProjectsReversed = [...reversedProjects, ...reversedProjects];

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white"
    >
      {/* ══ HERO SECTION ══ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute -top-40 -left-40 w-[800px] h-[800px] bg-blue-50/40 rounded-full blur-[140px]" />
          <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-purple-50/40 rounded-full blur-[120px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:48px_48px] opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-8 shadow-2xl"
          >
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span>Digital Showcase</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-outfit text-slate-900 leading-[0.95] tracking-tighter mb-8"
          >
            Innovations in <br />
            <span className="text-gradient">Design & Tech</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-500 font-medium max-w-3xl mx-auto"
          >
            Explore our curated gallery of premium digital products. We engineer <span className="text-slate-900 font-black italic">high-performance digital experiences.</span>
          </motion.p>
        </div>
      </section>

      {/* ══ SCROLLING SHOWCASE (Right to Left) ══ */}
      <section className="pb-12 bg-white relative overflow-hidden">
        {/* Row 1: Right to Left */}
        <div className="relative flex overflow-hidden group mb-8 md:mb-12">
          <motion.div 
            className="flex whitespace-nowrap gap-8 md:gap-12 py-10"
            animate={{ x: [0, -1920] }} 
            transition={{
              x: {
                repeat: Infinity,
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {allProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
          {/* Depth Fades */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>

        {/* Row 2: Left to Right */}
        <div className="relative flex overflow-hidden group">
          <motion.div 
            className="flex whitespace-nowrap gap-8 md:gap-12 py-10"
            animate={{ x: [-1920, 0] }} 
            transition={{
              x: {
                repeat: Infinity,
                duration: 45,
                ease: "linear",
              },
            }}
          >
            {allProjectsReversed.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </motion.div>
          {/* Depth Fades */}
          <div className="absolute inset-y-0 left-0 w-24 md:w-60 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-24 md:w-60 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        </div>
      </section>

      {/* ══ INNOVATION STATS ══ */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
         <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
               {[
                  { label: 'Lines of Code', val: '250K+', icon: <Code2 size={24} /> },
                  { label: 'Visual Prototypes', val: '120+', icon: <Layout size={24} /> },
                  { label: 'Deployments', val: '50+', icon: <Rocket size={24} /> },
                  { label: 'Happy Clients', val: '100%', icon: <Zap size={24} /> },
               ].map((s, i) => (
                  <motion.div 
                     key={i}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-col items-center text-center gap-4"
                  >
                     <div className="w-12 h-12 rounded-2xl bg-white shadow-sm flex items-center justify-center text-primary">
                        {s.icon}
                     </div>
                     <div>
                        <h4 className="text-3xl font-black font-outfit text-slate-900">{s.val}</h4>
                        <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mt-1">{s.label}</p>
                     </div>
                  </motion.div>
               ))}
            </div>
         </div>
      </section>

      {/* ══ CTA SECTION ══ */}
      <section className="py-24 px-4 sm:px-6 bg-slate-950 relative overflow-hidden">
         <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
         <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="text-4xl sm:text-6xl md:text-7xl font-black font-outfit text-white leading-tight mb-8 tracking-tighter"
            >
               Have an <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Invention</span> 
               <br /> Ready to Ship?
            </motion.h2>
            <p className="text-slate-400 text-lg md:text-xl font-medium mb-12 max-w-2xl mx-auto">
               Let's collaborate to build something that elevates your brand and sets the industry standard.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
               <Link 
                  to="/get-started" 
                  className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-black text-sm sm:text-base hover:bg-primary hover:text-white transition-all transform hover:scale-[1.03] shadow-2xl"
                >
                  Start Your Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
               </Link>
               <Link 
                  to="/services" 
                  className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 text-white font-black text-sm sm:text-base hover:bg-white/10 transition-all font-outfit"
                >
                  Explore Services
               </Link>
            </div>
         </div>
      </section>
    </motion.div>
  );
};

/* ─── REUSABLE PROJECT CARD ───────────────────────────── */
const ProjectCard = ({ project }: { project: any }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="inline-block w-[300px] sm:w-[450px] md:w-[600px] shrink-0 glass-card p-0 rounded-[2rem] sm:rounded-[4rem] overflow-hidden border-slate-100 bg-white group/card relative shadow-2xl shadow-slate-200 transition-all duration-500"
  >
    <div className="relative aspect-[16/9] overflow-hidden">
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
      />
      
      {/* Actions Overlay */}
      <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-md">
         <div className="flex gap-4 sm:gap-6">
            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl bg-white text-primary flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all transform hover:scale-110 shadow-2xl">
               <ExternalLink size={20} className="sm:w-7 sm:h-7" />
            </a>
            <a href={project.github} className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl sm:rounded-3xl border-2 border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110 backdrop-blur-md">
               <FaGithub size={20} className="sm:w-7 sm:h-7" />
            </a>
         </div>
      </div>
    </div>

    <div className="p-6 sm:p-10 justify-between flex items-end">
      <div className="whitespace-normal">
         <span className="text-primary text-[8px] sm:text-[10px] font-black tracking-widest uppercase mb-2 sm:mb-3 block">{project.category}</span>
         <h3 className="text-xl sm:text-3xl font-black font-outfit text-slate-900 line-clamp-1">{project.title}</h3>
      </div>
      <div className="flex gap-1.5 sm:gap-2 mb-1">
         {project.tech.map((t: string) => (
            <div key={t} className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-slate-200" title={t} />
         ))}
      </div>
    </div>
  </motion.div>
);

export default PortfolioPage;
