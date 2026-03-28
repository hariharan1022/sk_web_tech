import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import vishalImg from '../assets/img/team/vishal.jpeg';
import karthikImg from '../assets/img/team/karthik.jpeg';
import maheshImg from '../assets/img/team/mahesh.jpeg';
import ghandiImg from '../assets/img/team/gandhi.png';
import praveenImg from '../assets/img/team/praveen.jpeg';
import faizalImg from '../assets/img/team/faizal.jpeg';

const team = [
  {
    name: 'R. Vishal',
    role: 'Full Stack Architect',
    image: vishalImg,
    skills: ['React Native', 'Node.js', 'MongoDB', 'AWS'],
    bio: 'Lead architect orchestrating high-performance, enterprise-grade cloud ecosystems.',
    social: { mail: 'mailto:vishal@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Karthikkesavan S',
    role: 'UI/UX Specialist',
    image: karthikImg,
    skills: ['Figma', 'Framer', 'Next.js', 'Animation'],
    bio: 'Visual storyteller crafting cinematic user experiences that blend art with utility.',
    social: { mail: 'mailto:karthik@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Faizal',
    role: 'Full Stack Developer',
    image: faizalImg,
    skills: ['React.js', 'Node.js', 'SQL', 'Firebase'],
    bio: 'Versatile developer building robust end-to-end solutions with a focus on speed and reliability.',
    social: { mail: 'mailto:faizal@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Maheshwaran S',
    role: 'Backend Systems Lead',
    image: maheshImg,
    skills: ['Go', 'Docker', 'PostgreSQL', 'Redix'],
    bio: 'Systems engineer specializing in high-throughput APIs and database scalability.',
    social: { mail: 'mailto:mahesh@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Gandhirajan',
    role: 'Cloud Engineering',
    image: ghandiImg,
    skills: ['Kubernetes', 'CI/CD', 'Azure', 'Linux'],
    bio: 'DevOps expert ensuring zero-downtime deployments and iron-clad infrastructure.',
    social: { mail: 'mailto:gandhi@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Praveen',
    role: 'Frontend Specialist',
    image: praveenImg,
    skills: ['TypeScript', 'Tailwind', 'GSAP', 'Vite'],
    bio: 'Frontend enthusiast obsessed with pixel perfection and high-speed delivery.',
    social: { mail: 'mailto:praveen@skweb.com', linkedin: '#', github: '#' }
  }
];

const Team = () => {
  // Triple the items for smooth infinite marquee
  const extendedTeam = [...team, ...team, ...team];

  return (
    <section id="team" className="py-24 md:py-48 bg-white relative overflow-hidden">
      {/* Cinematic Background Elements */}
      <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[140px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20" />

      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-40 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 md:gap-4 px-4 py-2 md:px-6 md:py-2.5 rounded-full bg-slate-900 text-white text-[8px] md:text-[10px] font-black uppercase tracking-[0.4em] mb-8 md:mb-10 shadow-2xl shadow-slate-200"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            The Masterminds
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-4xl md:text-[10rem] font-black font-outfit text-slate-900 leading-[0.9] mb-8 md:mb-12 tracking-[-0.04em]"
          >
            Expert <br className="md:hidden" />
            <span className="text-gradient">Core Team</span>
          </motion.h2>
          <p className="text-base md:text-3xl text-slate-400 max-w-5xl mx-auto font-medium leading-tight tracking-tight">
             Engineering the future through <br className="hidden md:block" /> 
             <span className="text-slate-900 font-black">cinematic precision & performance.</span>
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-10 md:py-20 flex items-center">
          <motion.div 
            className="flex gap-6 md:gap-12 w-max px-6 md:px-12"
            animate={{
               // Dynamic offset for 6 members: 
               // Mobile: (300px width + 24px gap) * 6 = 1944
               // Desktop: (450px width + 48px gap) * 6 = 2988
               x: [typeof window !== 'undefined' && window.innerWidth < 768 ? -1944 : -2988, 0] 
            }}
            transition={{
              duration: 45,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedTeam.map((member, i) => (
              <motion.div
                key={`${member.name}-${i}`}
                className="w-[300px] md:w-[450px] group"
                whileHover={{ y: -15, rotateY: 4, rotateX: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3.5rem] bg-white border border-slate-100 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 group-hover:shadow-[0_60px_100px_-20px_rgba(37,99,235,0.15)] group-hover:border-primary/20">
                  
                  {/* Top Header Label */}
                  <div className="absolute top-5 left-5 md:top-8 md:left-8 z-20">
                     <div className="flex items-center gap-2 md:gap-3 px-3 py-1.5 md:px-5 md:py-2.5 rounded-xl md:rounded-2xl bg-black/40 backdrop-blur-md border border-white/20 shadow-sm transition-all duration-500 group-hover:bg-primary text-white">
                        <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-[8px] md:text-[10px] font-black uppercase tracking-widest">Active Core</span>
                     </div>
                  </div>

                  {/* Image Container - Tall, Edge-to-Edge Portrait */}
                  <div className="relative aspect-[4/5] md:aspect-[3/4] w-full overflow-hidden bg-slate-100">
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-80 group-hover:opacity-60 transition-opacity duration-700" />
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover transition-transform duration-1000 scale-105 group-hover:scale-110" 
                     />
                     
                     {/* Role Sticker directly on the image bottom edge */}
                     <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                        <h4 className="text-3xl md:text-5xl font-black font-outfit text-white mb-1 md:mb-2 tracking-tighter drop-shadow-lg">
                           {member.name}
                        </h4>
                        <p className="text-[10px] md:text-[12px] font-black uppercase tracking-[0.3em] text-blue-300 drop-shadow-md">
                           {member.role}
                        </p>
                     </div>
                  </div>

                  {/* Info Area */}
                  <div className="px-6 py-8 md:px-10 md:py-10 bg-white flex flex-col justify-between h-[200px] md:h-[240px]">
                     <p className="text-sm md:text-xl text-slate-500 font-medium leading-relaxed italic border-l-4 border-primary/30 pl-4 md:pl-6 group-hover:text-slate-800 transition-colors">
                        "{member.bio}"
                     </p>

                     <div className="flex items-center justify-between mt-auto pt-6 border-t border-slate-50">
                        {/* Skills List */}
                        <div className="flex flex-wrap gap-1.5 md:gap-2 max-w-[65%]">
                           {member.skills.slice(0, 3).map((skill, si) => (
                             <span key={si} className="text-[8px] md:text-[10px] font-black uppercase tracking-widest bg-slate-50 text-slate-500 px-3 py-1.5 md:px-4 md:py-2 rounded-lg md:rounded-xl border border-slate-100 group-hover:bg-blue-50 group-hover:text-primary transition-all">
                               {skill}
                             </span>
                           ))}
                        </div>

                        {/* Social Buttons */}
                        <div className="flex gap-2 text-slate-400">
                           {[
                             { icon: <Mail size={typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20} />, link: member.social.mail },
                             { icon: <FaLinkedin size={typeof window !== 'undefined' && window.innerWidth < 768 ? 16 : 20} />, link: member.social.linkedin }
                           ].map((s, idx) => (
                             <a key={idx} href={s.link} className="w-10 h-10 md:w-12 md:h-12 rounded-xl border border-slate-100 flex items-center justify-center hover:bg-primary hover:-translate-y-1 hover:text-white transition-all shadow-sm hover:shadow-primary/30">
                                {s.icon}
                             </a>
                           ))}
                        </div>
                     </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          {/* Enhanced Gradient Edges */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-[400px] bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 md:w-[400px] bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Team;

