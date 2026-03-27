import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { cn } from '../lib/utils';
import vishalImg from '../assets/img/team/vishal.png';
import karthikImg from '../assets/img/team/karthik.png';
import maheshImg from '../assets/img/team/mahesh.png';
import ghandiImg from '../assets/img/team/gandhi.png';
import praveenImg from '../assets/img/team/praveen.png';

const team = [
  {
    name: 'R. Vishal',
    role: 'Full Stack Architect',
    image: vishalImg,
    social: { mail: 'mailto:vishal@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Karthikkesavan S',
    role: 'UI/UX Specialist',
    image: karthikImg,
    social: { mail: 'mailto:karthik@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Maheshwaran S',
    role: 'Backend Systems Lead',
    image: maheshImg,
    social: { mail: 'mailto:mahesh@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Gandhirajan',
    role: 'Cloud Engineering',
    image: ghandiImg,
    social: { mail: 'mailto:gandhi@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Praveen',
    role: 'Frontend Specialist',
    image: praveenImg,
    social: { mail: 'mailto:praveen@skweb.com', linkedin: '#', github: '#' }
  }
];

const Team = () => {
  return (
    <section id="team" className="py-40 px-6 bg-[#fcfdfe] relative overflow-hidden">
      {/* Editorial Background Elements */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none opacity-[0.03] select-none">
        <h2 className="text-[20rem] font-black font-outfit uppercase tracking-tighter leading-none">THE SQUAD</h2>
      </div>
      
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-0" />
      <div className="absolute -bottom-40 -left-40 w-[800px] h-[800px] bg-blue-500/5 rounded-full blur-[150px] -z-0" />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-end justify-between mb-32 gap-10">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-4 px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 shadow-sm"
            >
              <div className="w-2 h-2 rounded-full bg-primary animate-ping" />
              Digital Architects
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="text-6xl md:text-8xl font-black font-outfit text-slate-900 leading-[0.9] tracking-tighter"
            >
              The Collective <span className="text-gradient">Core</span>
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xl text-slate-500 max-w-md font-medium leading-relaxed border-l-2 border-slate-100 pl-8"
          >
             A precision-engineered unit of specialists dedicated to scaling digital legacies through cinematic engineering.
          </motion.p>
        </div>

        {/* Staggered Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 lg:gap-12">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.8 }}
              viewport={{ once: true }}
              className={cn(
                "group relative",
                // Staggered vertical offsets for an organic editorial look
                i % 2 === 0 ? "lg:mt-16" : "lg:-mt-8"
              )}
            >
              <div className="relative h-[550px] md:h-[600px] lg:h-[500px] xl:h-[450px] rounded-[4rem] overflow-hidden bg-white border border-slate-100 transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)] group-hover:border-primary/20">
                
                {/* Member Identity with Premium Blur Overlay */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-10 transition-opacity duration-700" />
                </div>

                {/* Info Card - Floating Style */}
                <div className="absolute inset-x-6 bottom-6 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                   <div className="glass-card p-8 rounded-[3rem] border-white/50 shadow-2xl shadow-slate-900/20 group-hover:border-primary/30">
                     <span className="text-primary text-[9px] font-black uppercase tracking-[0.2em] mb-3 block">
                        {member.role.split(' ')[0]} Lead
                     </span>
                     <h4 className="text-2xl font-black font-outfit text-slate-900 mb-2 whitespace-normal leading-tight">
                        {member.name}
                     </h4>
                     
                     {/* Hidden Socials revealed on hover */}
                     <div className="h-0 group-hover:h-12 overflow-hidden transition-all duration-500 flex gap-3 items-center">
                        {[
                          { icon: <Mail size={16} />, link: member.social.mail },
                          { icon: <FaLinkedin size={16} />, link: member.social.linkedin },
                          { icon: <FaGithub size={16} />, link: member.social.github }
                        ].map((s, idx) => (
                          <a key={idx} href={s.link} className="w-10 h-10 rounded-2xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
                             {s.icon}
                          </a>
                        ))}
                     </div>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
