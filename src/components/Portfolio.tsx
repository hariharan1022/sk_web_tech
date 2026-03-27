import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Sparkles } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import project1 from '../assets/img/project/project1.png';
import project2 from '../assets/img/project/project2.png';
import project3 from '../assets/img/project/project3.png';

const projects = [
  {
    title: 'Master Chess Academy',
    category: 'Elite Academy Platform',
    image: project1,
    tech: ['React', 'Framer', 'Tailwind'],
    demo: 'https://hariharan1022.github.io/chess_mca/',
    github: '#',
  },
  {
    title: 'Nursing College Portal',
    category: 'Institutional Portal',
    image: project2,
    tech: ['Vite', 'Modern Design', 'SEO'],
    demo: 'https://hariharan1022.github.io/nursing/',
    github: '#',
  },
  {
    title: 'Tamilrockes Cinema',
    category: 'Streaming Ecosystem',
    image: project3,
    tech: ['API Core', 'Motion UI'],
    demo: 'https://hariharan1022.github.io/tamilrockes/',
    github: '#',
  },
];

const allProjects = [...projects, ...projects, ...projects];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      {/* Dynamic Background Blur */}
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 border border-slate-100"
        >
          <Sparkles size={14} className="text-primary" />
          <span>Showcase Portfolio</span>
        </motion.div>
        <h2 className="text-5xl md:text-7xl font-black font-outfit text-slate-900 mb-6 leading-tight">
          Our Latest <span className="text-gradient">Innovations</span>
        </h2>
        <p className="text-xl text-slate-500 max-w-2xl font-medium">
          A collection of digital products meticulously crafted to define the next generation of performance and aesthetics.
        </p>
      </div>

      {/* Project Marquee */}
      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-12 py-12"
          animate={{ x: [0, -1800] }} 
          transition={{
            x: {
              repeat: Infinity,
              duration: 35,
              ease: "linear",
            },
          }}
        >
          {allProjects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -15 }}
              className="inline-block w-[450px] md:w-[600px] shrink-0 glass-card p-0 rounded-[4rem] overflow-hidden border-slate-100 bg-white group/card relative shadow-2xl shadow-slate-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                />
                
                {/* Actions Overlay */}
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 flex items-center justify-center backdrop-blur-md">
                   <div className="flex gap-6">
                      <a href={project.demo} target="_blank" rel="noopener noreferrer" className="w-16 h-16 rounded-3xl bg-white text-primary flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all transform hover:scale-110 shadow-2xl">
                         <ExternalLink size={28} />
                      </a>
                      <a href={project.github} className="w-16 h-16 rounded-3xl border-2 border-white/40 text-white flex items-center justify-center hover:bg-white hover:text-primary transition-all transform hover:scale-110 backdrop-blur-md">
                         <FaGithub size={28} />
                      </a>
                   </div>
                </div>
              </div>

              <div className="p-10 justify-between flex items-end">
                <div>
                   <span className="text-primary text-[10px] font-black tracking-widest uppercase mb-3 block">{project.category}</span>
                   <h3 className="text-3xl font-black font-outfit text-slate-900 whitespace-normal line-clamp-1">{project.title}</h3>
                </div>
                <div className="flex gap-2 mb-1">
                   {project.tech.map((t) => (
                      <div key={t} className="w-2 h-2 rounded-full bg-slate-200" />
                   ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-60 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-60 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Portfolio;
