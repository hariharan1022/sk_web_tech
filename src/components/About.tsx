import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Mail, Award, Code2 } from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import founderImg from '../assets/img/team/founder.jpeg';

const skills = ['React.js', 'TypeScript', 'Node.js', 'UI/UX', 'Firebase', 'Tailwind CSS'];

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden bg-white relative">

      {/* Ambient glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/20 rounded-full blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Section badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] shadow-xl">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            The Founder
          </div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20 items-center">

          {/* ── PHOTO SIDE (Left) ── */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-primary/15 blur-[130px] rounded-full -z-10 animate-pulse" />

            <div className="relative group">
              {/* Offset frame */}
              <div className="absolute inset-0 border-2 border-primary/25 translate-x-5 translate-y-5 rounded-[4rem] -z-10 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform duration-700" />

              {/* Photo */}
              <div className="overflow-hidden rounded-[3rem] sm:rounded-[4rem] shadow-2xl shadow-slate-200 border-4 sm:border-8 border-white aspect-square sm:aspect-[4/3] lg:aspect-[4/5]">
                <img
                  src={founderImg}
                  alt="Hariharan S"
                  className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                />
              </div>

              {/* Status card overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="absolute -bottom-5 right-3 sm:-bottom-8 sm:-right-6 bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-5 shadow-2xl shadow-slate-300/60 border border-slate-100 max-w-[170px] sm:max-w-[220px] z-10"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Live Status</span>
                </div>
                <p className="font-black text-slate-900 text-xs sm:text-sm leading-snug">Building Next-Gen Digital Hubs</p>
              </motion.div>
            </div>
          </motion.div>

          {/* ── CONTENT SIDE (Right) ── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 pt-6 sm:pt-10 lg:pt-0"
          >
            {/* Role badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 font-black text-primary mb-6 p-3 px-4 bg-blue-50 border border-blue-100 w-max rounded-2xl shadow-sm"
            >
              <Award size={18} />
              <span className="text-xs sm:text-sm uppercase tracking-widest">Founder &amp; Lead Developer</span>
            </motion.div>

            {/* Name */}
            <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black font-outfit mb-6 md:mb-8 text-slate-900 leading-[1] tracking-tighter">
              Hariharan <span className="text-gradient">S</span>
            </h2>

            {/* Italic quote */}
            <p className="text-slate-500 text-base md:text-xl leading-relaxed mb-6 font-bold italic border-l-4 border-primary pl-5">
              "Bridging high-speed code with cinematic design — from the 2nd Year of B.Tech IT at Mount Zion College."
            </p>

            {/* Description */}
            <p className="text-slate-600 text-sm md:text-base lg:text-lg leading-relaxed mb-8 font-medium">
              I founded{' '}
              <span className="text-slate-900 font-black">SK Web Technologies</span>{' '}
              to deliver world-class digital solutions. My focus is on high-performance React architectures,
              premium UI/UX, and scalable backend ecosystems.
            </p>

            {/* Skills chips */}
            <div className="flex flex-wrap gap-2 mb-8">
              {skills.map((skill, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.07, y: -2 }}
                  className="text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-100 cursor-default transition-all duration-200"
                >
                  {skill}
                </motion.span>
              ))}
            </div>

            {/* Info cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={26} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-widest">Alma Mater</h4>
                  <p className="text-xs font-bold text-slate-400 mt-0.5 leading-snug">2nd Year, B.Tech IT<br/>Mount Zion College</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ y: -3, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-4 p-5 rounded-3xl bg-slate-50 border border-slate-100 hover:border-primary/20 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center flex-shrink-0">
                  <Code2 size={26} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xs sm:text-sm uppercase tracking-widest">Speciality</h4>
                  <p className="text-xs font-bold text-slate-400 mt-0.5 leading-snug">Full Stack Engineering<br/>React &amp; Node.js</p>
                </div>
              </motion.div>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {[
                { icon: <Mail size={18} />, link: 'mailto:hariharan@example.com', label: 'Email' },
                { icon: <FaLinkedin size={17} />, link: '#', label: 'LinkedIn' },
                { icon: <FaGithub size={17} />, link: '#', label: 'GitHub' },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  aria-label={social.label}
                  className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
              <div className="ml-3 h-px flex-1 bg-gradient-to-r from-slate-100 to-transparent" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">Est. 2024</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
