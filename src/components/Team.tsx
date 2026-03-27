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
    <section id="team" className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-2xl bg-white border border-slate-100 text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 mb-6 shadow-sm"
          >
            Our Core Team
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-outfit text-slate-900 leading-[1]"
          >
            Digital <span className="text-gradient">Architects</span>
          </motion.h2>
          <p className="mt-8 text-xl text-slate-500 max-w-2xl mx-auto font-medium">
             Meet the specialized engineers dedicated to scaling your digital legacy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-[3rem] bg-white border border-slate-100 shadow-xl shadow-slate-200/50 aspect-[4/5] mb-8 group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110" 
                />
                
                {/* Subtle Social Overlay */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 translate-y-20 group-hover:translate-y-0 transition-transform duration-500">
                   {[
                     { icon: <Mail size={16} />, link: member.social.mail },
                     { icon: <FaLinkedin size={16} />, link: member.social.linkedin },
                     { icon: <FaGithub size={16} />, link: member.social.github }
                   ].map((s, idx) => (
                     <a key={idx} href={s.link} className="w-10 h-10 rounded-xl bg-white/90 backdrop-blur-md text-slate-900 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-xl">
                        {s.icon}
                     </a>
                   ))}
                </div>
              </div>

              <div className="text-center px-2">
                <h4 className="text-xl font-black font-outfit text-slate-900 leading-tight mb-2 group-hover:text-primary transition-colors">
                  {member.name}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400">
                  {member.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
