import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import vishalImg from '../assets/img/team/vishal.jpeg';
import karthikImg from '../assets/img/team/karthik.jpeg';
import maheshImg from '../assets/img/team/mahesh.jpeg';
import ghandiImg from '../assets/img/team/gandhi.png';
import praveenImg from '../assets/img/team/praveen.jpeg';

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
    <section id="team" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0" />

      <div className="relative z-10">
        <div className="text-center mb-16 md:mb-24 px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-100 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 md:mb-8 shadow-sm"
          >
            Digital Architects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-9xl font-black font-outfit text-slate-900 leading-[1.1] mb-6 md:mb-8 tracking-tighter"
          >
            Expert <span className="text-gradient">Core Team</span>
          </motion.h2>
          <p className="text-lg md:text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed">
             A specialized collective of full-stack engineers dedicated to scaling your digital legacy through cinematic engineering.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-8 md:py-12">
          <motion.div 
            className="flex gap-10 md:gap-16 w-max px-6 md:px-8"
            animate={{
               // Dynamic offset: Approximate values for mobile/desktop loop
               x: [typeof window !== 'undefined' && window.innerWidth < 768 ? -(300 + 40) * 5 : -3070, 0] 
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedTeam.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="w-[300px] md:w-[550px] group"
              >
                <div className="relative overflow-hidden rounded-[3rem] md:rounded-[5rem] bg-white border border-slate-100 transition-all duration-1000 group-hover:shadow-[0_80px_150px_rgba(0,0,0,0.1)]">
                  
                  {/* Image Container */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                     />
                     
                     {/* Floating Badge */}
                     <div className="absolute top-6 right-6 md:top-10 md:right-10 px-4 py-2 md:px-6 md:py-3 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-2xl md:rounded-3xl shadow-2xl">
                        <span className="text-[10px] md:text-[12px] font-black uppercase tracking-widest text-primary">Core Team</span>
                     </div>

                     {/* Stats Overlay on Hover */}
                     <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 translate-y-full group-hover:translate-y-0 transition-all duration-1000 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="flex flex-wrap gap-2 md:gap-3 mt-4">
                           {member.skills.map((skill, si) => (
                             <span key={si} className="text-[9px] md:text-[11px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-3 py-1.5 md:px-5 md:py-2.5 rounded-lg md:rounded-xl border border-white/10">
                               {skill}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Info Area */}
                  <div className="p-8 md:p-14 bg-white">
                     <h4 className="text-3xl md:text-5xl font-black font-outfit text-slate-900 mb-2 md:mb-3 group-hover:text-primary transition-colors tracking-tighter">
                        {member.name}
                     </h4>
                     <p className="text-[11px] md:text-[14px] font-black uppercase tracking-[0.3em] text-slate-400 mb-6 md:mb-10">
                        {member.role}
                     </p>
                     
                     <p className="text-sm md:text-xl text-slate-500 font-medium mb-8 md:mb-12 leading-relaxed italic opacity-80 border-l-4 border-slate-100 pl-6 md:pl-8">
                        "{member.bio}"
                     </p>

                     {/* Social Buttons */}
                     <div className="flex gap-4 md:gap-6">
                        {[
                          { icon: <Mail size={typeof window !== 'undefined' && window.innerWidth < 768 ? 18 : 24} />, link: member.social.mail },
                          { icon: <FaLinkedin size={typeof window !== 'undefined' && window.innerWidth < 768 ? 18 : 24} />, link: member.social.linkedin },
                          { icon: <FaGithub size={typeof window !== 'undefined' && window.innerWidth < 768 ? 18 : 24} />, link: member.social.github }
                        ].map((s, idx) => (
                          <a key={idx} href={s.link} className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-[2rem] bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all shadow-sm">
                             {s.icon}
                          </a>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Edges */}
          <div className="absolute inset-y-0 left-0 w-20 md:w-80 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 md:w-80 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Team;

