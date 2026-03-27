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
    <section id="team" className="py-24 md:py-32 px-6 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-0" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] -z-0" />

      <div className="max-w-[1500px] mx-auto relative z-10 px-8">
        <div className="text-center mb-24">
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
            className="text-6xl md:text-8xl font-black font-outfit text-slate-900 leading-tight mb-8"
          >
            Expert <span className="text-gradient">Core Team</span>
          </motion.h2>
          <p className="text-xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
             A specialized collective of full-stack engineers dedicated to scaling your digital legacy through cinematic engineering.
          </p>
        </div>

        {/* Wider Grid Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-10 lg:gap-14">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-[2.5rem] bg-white border border-slate-100 transition-all duration-500 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] group-hover:-translate-y-2">
                
                {/* Full Color Image - Optimized height */}
                <div className="relative aspect-[4/5] overflow-hidden">
                   <img 
                     src={member.image} 
                     alt={member.name} 
                     className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110" 
                   />
                </div>

                {/* Info Area - Now below photo within the card */}
                <div className="p-8 text-center bg-white">
                   <h4 className="text-xl font-black font-outfit text-slate-900 mb-1 group-hover:text-primary transition-colors">
                      {member.name}
                   </h4>
                   <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-6">
                      {member.role}
                   </p>

                   {/* Social Buttons */}
                   <div className="flex gap-3 justify-center">
                      {[
                        { icon: <Mail size={16} />, link: member.social.mail },
                        { icon: <FaLinkedin size={16} />, link: member.social.linkedin },
                        { icon: <FaGithub size={16} />, link: member.social.github }
                      ].map((s, idx) => (
                        <a key={idx} href={s.link} className="w-10 h-10 rounded-xl bg-slate-50 text-slate-400 flex items-center justify-center hover:bg-primary hover:text-white transition-all shadow-sm">
                           {s.icon}
                        </a>
                      ))}
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
