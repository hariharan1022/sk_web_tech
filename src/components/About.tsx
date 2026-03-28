import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Mail, Award } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import founderImg from '../assets/img/team/founder.jpeg'; // I'll save it here

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-center">
        {/* Left Side: Content */}
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="lg:w-1/2"
        >
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 font-black text-primary mb-8 p-4 glass w-max rounded-2xl border-white/60 shadow-xl shadow-blue-500/5"
          >
            <Award size={20} />
            <span className="text-sm uppercase tracking-widest">Founder & Lead Developer</span>
          </motion.div>

          <h2 className="text-5xl md:text-8xl font-black font-outfit mb-10 text-slate-900 leading-[1] tracking-tighter">
            Hariharan <span className="text-gradient">S</span>
          </h2>

          <p className="text-slate-500 text-xl md:text-2xl leading-relaxed mb-10 font-bold italic border-l-4 border-primary pl-6">
            "Currently in his 2nd Year of B.Tech IT at Mount Zion College of Engineering and Technology, bridging high-speed code with cinematic design."
          </p>

          <p className="text-slate-600 text-lg leading-relaxed mb-12 font-medium">
            Currently in his 2nd Year of B.Tech IT at Mount Zion College of Engineering and Technology, I founded 
            <span className="text-slate-900 font-black px-2 uppercase">SK Web Technologies</span> to 
            deliver world-class digital solutions. My focus is on high-performance React architectures, 
            premium UI/UX, and scalable backend ecosystems.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
            <div className="flex items-center gap-6 p-8 glass-card border-slate-100 hover:border-primary/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-blue-500/10 text-blue-600 flex items-center justify-center shadow-inner">
                <GraduationCap size={32} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">Alma Mater</h4>
                <p className="text-xs font-bold text-slate-400">2nd Year, B.Tech IT</p>
              </div>
            </div>
            <div className="flex items-center gap-6 p-8 glass-card border-slate-100 hover:border-primary/20 transition-all duration-300">
              <div className="w-16 h-16 rounded-2xl bg-purple-500/10 text-purple-600 flex items-center justify-center shadow-inner">
                <Briefcase size={32} />
              </div>
              <div>
                <h4 className="font-black text-slate-900 text-sm uppercase tracking-widest">Experience</h4>
                <p className="text-xs font-bold text-slate-400">Full Stack Engineering</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
             {[
               { icon: <Mail size={20} />, link: "mailto:hariharan@example.com" },
               { icon: <FaLinkedin size={20} />, link: "#" },
               { icon: <FaGithub size={20} />, link: "#" }
             ].map((social, i) => (
               <a key={i} href={social.link} className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:text-primary hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300">
                 {social.icon}
               </a>
             ))}
          </div>
        </motion.div>

        {/* Right Side: Image with effects */}
        <motion.div
           initial={{ opacity: 0, scale: 0.8 }}
           whileInView={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1 }}
           viewport={{ once: true }}
           className="lg:w-1/2 relative"
        >
          <div className="absolute inset-0 bg-primary/20 blur-[150px] rounded-full -z-10 animate-pulse" />
          <div className="relative group">
            <div className="absolute inset-0 border-2 border-primary/20 translate-x-6 translate-y-6 rounded-[4rem] -z-10 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform duration-700" />
            <div className="overflow-hidden rounded-[4rem] shadow-2xl shadow-slate-200 border-8 border-white aspect-[4/5] md:aspect-auto">
               <img 
                 src={founderImg} 
                 alt="Hariharan S" 
                 className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
               />
            </div>
            
            {/* Status Card Overlay */}
            <div className="absolute -bottom-10 -left-10 glass-card p-6 border-white shadow-2xl shadow-slate-300 max-w-[200px] hidden md:block">
               <div className="flex items-center gap-3 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Current Status</span>
               </div>
               <p className="font-black text-slate-900 text-sm">Building Next-Gen Digital Hubs</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
