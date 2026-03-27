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
    <section id="team" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Premium Light Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-0 opacity-60" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-0 opacity-40" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-8 shadow-sm"
          >
            Our Core Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-6xl md:text-9xl font-black font-outfit text-slate-900 leading-[0.9] tracking-tighter mb-10"
          >
            Digital <span className="text-gradient">Architects</span>
          </motion.h2>
          <p className="text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
             A high-performance collective of engineers redefining the boundaries of 
             <span className="text-slate-900 font-black px-2">digital excellence</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative h-[450px] rounded-[3rem] overflow-hidden bg-slate-50 border border-slate-100 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group-hover:-translate-y-2">
                
                {/* Member Image */}
                <div className="absolute inset-0 transition-all duration-1000 group-hover:scale-105">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000" 
                   />
                   <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent opacity-100 group-hover:opacity-40 transition-opacity duration-700" />
                </div>

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                   <div className="bg-white/90 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white shadow-xl shadow-slate-200/50 transform transition-transform duration-500 group-hover:translate-y-[-10px]">
                     <span className="text-primary text-[9px] font-black uppercase tracking-widest mb-2 block">
                        {member.role.split(' ')[0]} Specialist
                     </span>
                     <h4 className="text-xl font-black font-outfit text-slate-900 mb-1">
                        {member.name}
                     </h4>
                     <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-6">
                        {member.role}
                     </p>

                     {/* Social Buttons */}
                     <div className="flex gap-3">
                        {[
                          { icon: <Mail size={16} />, link: member.social.mail },
                          { icon: <FaLinkedin size={16} />, link: member.social.linkedin },
                          { icon: <FaGithub size={16} />, link: member.social.github }
                        ].map((s, idx) => (
                          <a key={idx} href={s.link} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all">
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
