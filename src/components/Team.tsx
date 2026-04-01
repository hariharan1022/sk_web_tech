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
    skills: ['React Native', 'Node.js', 'AWS'],
    bio: 'Lead architect orchestrating high-performance, enterprise-grade cloud ecosystems. Vishal bridges complex backend logic with seamless frontend experience.',
    accent: 'from-blue-600 to-indigo-600',
    glowColor: 'rgba(99,102,241,0.18)',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-100',
    social: { mail: 'mailto:vishal@skweb.com', linkedin: '#', github: '#' },
    tag: 'Full Stack',
  },
  {
    name: 'Karthikkesavan S',
    role: 'UI/UX Specialist',
    image: karthikImg,
    skills: ['Figma', 'Framer', 'Next.js'],
    bio: 'Visual storyteller crafting cinematic user experiences that blend art with utility. Karthik turns wireframes into living, breathing interfaces.',
    accent: 'from-purple-600 to-pink-600',
    glowColor: 'rgba(168,85,247,0.18)',
    badgeBg: 'bg-purple-50 text-purple-700 border-purple-100',
    social: { mail: 'mailto:karthik@skweb.com', linkedin: '#', github: '#' },
    tag: 'Design Lead',
  },
  {
    name: 'Faizal',
    role: 'Full Stack Developer',
    image: faizalImg,
    skills: ['React.js', 'Node.js', 'Firebase'],
    bio: 'Versatile developer building robust end-to-end solutions with speed and reliability. Faizal is the engine behind every seamless feature delivery.',
    accent: 'from-cyan-600 to-blue-600',
    glowColor: 'rgba(6,182,212,0.18)',
    badgeBg: 'bg-cyan-50 text-cyan-700 border-cyan-100',
    social: { mail: 'mailto:faizal@skweb.com', linkedin: '#', github: '#' },
    tag: 'Developer',
  },
  {
    name: 'Maheshwaran S',
    role: 'Backend Systems Lead',
    image: maheshImg,
    skills: ['Go', 'Docker', 'PostgreSQL'],
    bio: 'Systems engineer specializing in high-throughput APIs and database scalability. Mahesh ensures every service runs at peak performance under load.',
    accent: 'from-emerald-600 to-teal-600',
    glowColor: 'rgba(16,185,129,0.18)',
    badgeBg: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    social: { mail: 'mailto:mahesh@skweb.com', linkedin: '#', github: '#' },
    tag: 'Backend',
  },
  {
    name: 'Gandhirajan',
    role: 'Cloud Engineering',
    image: ghandiImg,
    skills: ['Kubernetes', 'Azure', 'CI/CD'],
    bio: 'DevOps expert ensuring zero-downtime deployments and iron-clad infrastructure. Gandhi keeps the team\'s entire cloud ecosystem fast, safe, and reliable.',
    accent: 'from-orange-500 to-red-600',
    glowColor: 'rgba(251,146,60,0.18)',
    badgeBg: 'bg-orange-50 text-orange-700 border-orange-100',
    social: { mail: 'mailto:gandhi@skweb.com', linkedin: '#', github: '#' },
    tag: 'DevOps',
  },
  {
    name: 'Praveen',
    role: 'Frontend Specialist',
    image: praveenImg,
    skills: ['TypeScript', 'Tailwind', 'GSAP'],
    bio: 'Frontend enthusiast obsessed with pixel perfection and high-speed delivery. Praveen crafts every micro-interaction with care and precision.',
    accent: 'from-violet-600 to-purple-600',
    glowColor: 'rgba(139,92,246,0.18)',
    badgeBg: 'bg-violet-50 text-violet-700 border-violet-100',
    social: { mail: 'mailto:praveen@skweb.com', linkedin: '#', github: '#' },
    tag: 'Frontend',
  },
];

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-28 bg-white relative overflow-hidden">

      {/* Subtle background */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-100/30 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.4em] mb-6 shadow-xl"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
            The Masterminds
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-black font-outfit text-slate-900 leading-[1] mb-4 md:mb-6 tracking-tighter"
          >
            Expert <span className="text-gradient">Core Team</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            viewport={{ once: true }}
            className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium px-2"
          >
            Engineering the future through{' '}
            <span className="text-slate-900 font-black">cinematic precision &amp; performance.</span>
          </motion.p>
        </div>

        {/* Team Members — Founder-style editorial layout */}
        <div className="flex flex-col gap-20 md:gap-28 lg:gap-32">
          {team.map((member, i) => {
            const isEven = i % 2 === 0;
            return (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
              >
                {/* ── PHOTO SIDE ── always on top on mobile via order-first */}
                <div className={`w-full lg:w-1/2 relative order-first ${!isEven ? 'lg:order-last' : 'lg:order-first'}`}>
                  {/* Ambient glow */}
                  <div
                    className="absolute inset-0 rounded-[4rem] blur-[120px] -z-10 animate-pulse"
                    style={{ background: member.glowColor }}
                  />

                  <div className="relative group">
                    {/* Offset border frame (same as founder) */}
                    <div
                      className={`absolute inset-0 border-2 border-current translate-x-5 translate-y-5 rounded-[3.5rem] -z-10 group-hover:translate-x-2.5 group-hover:translate-y-2.5 transition-transform duration-700 opacity-20`}
                      style={{ borderColor: member.glowColor.replace('0.18', '0.6') }}
                    />

                    <div className="overflow-hidden rounded-[3rem] sm:rounded-[3.5rem] shadow-2xl shadow-slate-200 border-4 sm:border-8 border-white aspect-square sm:aspect-[4/3] lg:aspect-[4/5]">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-105"
                      />
                    </div>

                    {/* Role badge overlay */}
                    <div className="absolute -bottom-5 left-6 sm:-bottom-6 sm:left-8">
                      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-[10px] font-black uppercase tracking-widest shadow-lg bg-white ${member.badgeBg}`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {member.tag}
                      </div>
                    </div>
                  </div>
                </div>

                {/* ── CONTENT SIDE ── */}
                <div className={`w-full lg:w-1/2 pt-4 lg:pt-0 order-last ${!isEven ? 'lg:order-first' : 'lg:order-last'}`}>

                  {/* Role pill */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="flex items-center gap-3 font-black mb-5 p-3 px-4 bg-slate-50 border border-slate-100 w-max rounded-2xl shadow-sm"
                  >
                    <span className={`text-xs bg-gradient-to-r ${member.accent} bg-clip-text text-transparent uppercase tracking-widest`}>
                      {member.role}
                    </span>
                  </motion.div>

                  {/* Name */}
                  <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-outfit mb-5 text-slate-900 leading-[1] tracking-tighter">
                    {member.name.split(' ')[0]}{' '}
                    <span className={`bg-gradient-to-r ${member.accent} bg-clip-text text-transparent`}>
                      {member.name.split(' ').slice(1).join(' ')}
                    </span>
                  </h3>

                  {/* Quote-style bio */}
                  <p className="text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed mb-7 font-bold italic border-l-4 pl-5"
                    style={{ borderColor: member.glowColor.replace('0.18', '0.5') }}>
                    "{member.bio}"
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {member.skills.map((skill, si) => (
                      <motion.span
                        key={si}
                        whileHover={{ scale: 1.07, y: -2 }}
                        className={`text-[10px] font-black uppercase tracking-wider px-4 py-2 rounded-xl border transition-all duration-200 cursor-default ${member.badgeBg}`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>

                  {/* Social links */}
                  <div className="flex items-center gap-3">
                    {[
                      { icon: <Mail size={18} />, href: member.social.mail, label: 'Email' },
                      { icon: <FaLinkedin size={17} />, href: member.social.linkedin, label: 'LinkedIn' },
                      { icon: <FaGithub size={17} />, href: member.social.github, label: 'GitHub' },
                    ].map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        aria-label={s.label}
                        className="w-11 h-11 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-1 transition-all duration-300 shadow-sm"
                      >
                        {s.icon}
                      </a>
                    ))}

                    <div className="ml-3 h-px flex-1 bg-gradient-to-r from-slate-100 to-transparent" />
                    <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-300">
                      Core Member
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Team;
