import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
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
    <section id="team" className="py-32 px-6 bg-[#0a0f1d] relative overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[180px] -z-0 opacity-40 translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[180px] -z-0 opacity-30 -translate-x-1/2 translate-y-1/2" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] font-black uppercase tracking-[0.4em] text-primary mb-8 backdrop-blur-md shadow-2xl"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Specialized Unit
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black font-outfit text-white leading-[0.9] tracking-tighter mb-10"
          >
            Digital <span className="text-gradient">Architects</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl mx-auto font-medium leading-relaxed">
             A high-performance collective of engineers redefining the boundaries of 
             <span className="text-white px-2">digital excellence</span> and cinematic engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative h-[480px] md:h-[550px] lg:h-[450px] xl:h-[400px] rounded-[3.5rem] overflow-hidden border-2 border-white/5 bg-slate-900/40 backdrop-blur-3xl group-hover:border-primary/40 transition-all duration-700 group-hover:shadow-[0_40px_100px_rgba(0,0,0,0.5)]">
                
                {/* Member Image with Gradient Overlay */}
                <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-110">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-90 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-10 flex flex-col justify-end">
                   <motion.div 
                     initial={{ opacity: 0, x: -10 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     className="mb-4"
                   >
                     <span className="inline-block px-3 py-1 rounded-lg bg-primary/10 border border-primary/20 text-[9px] font-black uppercase tracking-widest text-primary mb-3">
                        {member.role.split(' ')[0]} Specialist
                     </span>
                     <h4 className="text-2xl font-black font-outfit text-white mb-1 group-hover:text-primary transition-colors duration-500">
                        {member.name}
                     </h4>
                     <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-slate-300">
                        {member.role}
                     </p>
                   </motion.div>

                   {/* Social Buttons */}
                   <div className="flex gap-4 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                      {[
                        { icon: <Mail size={18} />, link: member.social.mail },
                        { icon: <FaLinkedin size={18} />, link: member.social.linkedin },
                        { icon: <FaGithub size={18} />, link: member.social.github }
                      ].map((s, idx) => (
                        <a key={idx} href={s.link} className="w-12 h-12 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 text-white flex items-center justify-center hover:bg-primary hover:border-primary transition-all shadow-2xl">
                           {s.icon}
                        </a>
                      ))}
                   </div>
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-primary/30 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
