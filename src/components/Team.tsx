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
        <div className="text-center mb-24 px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white border border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-8 shadow-sm"
          >
            Digital Architects
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-7xl md:text-9xl font-black font-outfit text-slate-900 leading-tight mb-8"
          >
            Expert <span className="text-gradient">Core Team</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-4xl mx-auto font-medium leading-relaxed">
             A specialized collective of full-stack engineers dedicated to scaling your digital legacy through cinematic engineering.
          </p>
        </div>

        {/* Marquee Wrapper */}
        <div className="relative w-full overflow-hidden py-12">
          <motion.div 
            className="flex gap-16 w-max px-8"
            animate={{
               // (550px width + 64px gap) * 5 members = 3070px
               x: [-3070, 0] 
            }}
            transition={{
              duration: 60,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {extendedTeam.map((member, i) => (
              <div
                key={`${member.name}-${i}`}
                className="w-[550px] group"
              >
                <div className="relative overflow-hidden rounded-[5rem] bg-white border border-slate-100 transition-all duration-1000 group-hover:shadow-[0_80px_150px_rgba(0,0,0,0.1)]">
                  
                  {/* Image Container - Taller aspect ratio */}
                  <div className="relative aspect-[3/4] overflow-hidden">
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                     />
                     
                     {/* Floating Badge - Larger */}
                     <div className="absolute top-10 right-10 px-6 py-3 bg-white/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                        <span className="text-[12px] font-black uppercase tracking-widest text-primary">Core Architecture</span>
                     </div>

                     {/* Stats Overlay on Hover - More padding */}
                     <div className="absolute inset-x-0 bottom-0 p-12 translate-y-full group-hover:translate-y-0 transition-all duration-1000 bg-gradient-to-t from-black/90 to-transparent">
                        <div className="flex flex-wrap gap-3 mt-4">
                           {member.skills.map((skill, si) => (
                             <span key={si} className="text-[11px] font-black uppercase tracking-widest bg-white/20 backdrop-blur-md text-white px-5 py-2.5 rounded-xl border border-white/10">
                               {skill}
                             </span>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* Info Area - More expansive */}
                  <div className="p-14 bg-white">
                     <h4 className="text-5xl font-black font-outfit text-slate-900 mb-3 group-hover:text-primary transition-colors tracking-tighter">
                        {member.name}
                     </h4>
                     <p className="text-[14px] font-black uppercase tracking-[0.3em] text-slate-400 mb-10">
                        {member.role}
                     </p>
                     
                     <p className="text-xl text-slate-500 font-medium mb-12 leading-relaxed italic opacity-80 border-l-4 border-slate-100 pl-8">
                        "{member.bio}"
                     </p>

                     {/* Social Buttons - Larger */}
                     <div className="flex gap-6">
                        {[
                          { icon: <Mail size={24} />, link: member.social.mail },
                          { icon: <FaLinkedin size={24} />, link: member.social.linkedin },
                          { icon: <FaGithub size={24} />, link: member.social.github }
                        ].map((s, idx) => (
                          <a key={idx} href={s.link} className="w-16 h-16 rounded-[2rem] bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white hover:scale-110 transition-all shadow-sm">
                             {s.icon}
                          </a>
                        ))}
                     </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
          
          {/* Gradient Edges - Wider for larger containers */}
          <div className="absolute inset-y-0 left-0 w-80 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-80 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Team;

