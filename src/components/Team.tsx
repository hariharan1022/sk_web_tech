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
    bio: 'Lead architect orchestrating high-performance, enterprise-grade cloud ecosystems.',
    accent: 'from-blue-600 to-indigo-600',
    social: { mail: 'mailto:vishal@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Karthikkesavan S',
    role: 'UI/UX Specialist',
    image: karthikImg,
    skills: ['Figma', 'Framer', 'Next.js'],
    bio: 'Visual storyteller crafting cinematic user experiences that blend art with utility.',
    accent: 'from-purple-600 to-pink-600',
    social: { mail: 'mailto:karthik@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Faizal',
    role: 'Full Stack Developer',
    image: faizalImg,
    skills: ['React.js', 'Node.js', 'Firebase'],
    bio: 'Versatile developer building robust end-to-end solutions with speed and reliability.',
    accent: 'from-cyan-600 to-blue-600',
    social: { mail: 'mailto:faizal@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Maheshwaran S',
    role: 'Backend Systems Lead',
    image: maheshImg,
    skills: ['Go', 'Docker', 'PostgreSQL'],
    bio: 'Systems engineer specializing in high-throughput APIs and database scalability.',
    accent: 'from-emerald-600 to-teal-600',
    social: { mail: 'mailto:mahesh@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Gandhirajan',
    role: 'Cloud Engineering',
    image: ghandiImg,
    skills: ['Kubernetes', 'Azure', 'CI/CD'],
    bio: 'DevOps expert ensuring zero-downtime deployments and iron-clad infrastructure.',
    accent: 'from-orange-500 to-red-600',
    social: { mail: 'mailto:gandhi@skweb.com', linkedin: '#', github: '#' }
  },
  {
    name: 'Praveen',
    role: 'Frontend Specialist',
    image: praveenImg,
    skills: ['TypeScript', 'Tailwind', 'GSAP'],
    bio: 'Frontend enthusiast obsessed with pixel perfection and high-speed delivery.',
    accent: 'from-violet-600 to-purple-600',
    social: { mail: 'mailto:praveen@skweb.com', linkedin: '#', github: '#' }
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.7, ease: [0.16, 1, 0.3, 1] }
  })
};

const Team = () => {
  return (
    <section id="team" className="py-16 md:py-28 bg-slate-50 relative overflow-hidden">

      {/* Background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:32px_32px] opacity-60 pointer-events-none" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-100/40 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center mb-12 md:mb-20">
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
            className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium"
          >
            Engineering the future through{' '}
            <span className="text-slate-900 font-black">cinematic precision & performance.</span>
          </motion.p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={cardVariants}
              whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300, damping: 20 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-[0_4px_24px_rgba(0,0,0,0.06)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-slate-100 hover:border-slate-200 transition-all duration-500"
            >
              {/* Photo Block */}
              <div className="relative h-52 sm:h-56 md:h-60 overflow-hidden bg-slate-100">
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${member.accent} opacity-0 group-hover:opacity-30 transition-opacity duration-700 z-10`} />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent z-10" />

                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />

                {/* Active badge */}
                <div className="absolute top-4 left-4 z-20">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-[9px] font-black uppercase tracking-widest">Active</span>
                  </div>
                </div>

                {/* Name on image */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <h3 className="text-xl md:text-2xl font-black font-outfit text-white tracking-tight leading-tight drop-shadow-lg">
                    {member.name}
                  </h3>
                  <p className={`text-[10px] font-black uppercase tracking-[0.25em] bg-gradient-to-r ${member.accent} bg-clip-text text-transparent mt-0.5`}>
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 md:p-6">
                {/* Bio */}
                <p className="text-slate-500 text-sm leading-relaxed font-medium mb-5 border-l-2 border-slate-200 group-hover:border-primary pl-3 transition-colors duration-500">
                  {member.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {member.skills.map((skill, si) => (
                    <span
                      key={si}
                      className="text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-blue-50 group-hover:text-primary group-hover:border-blue-100 transition-all duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-slate-100 mb-4" />

                {/* Social */}
                <div className="flex items-center gap-2">
                  {[
                    { icon: <Mail size={15} />, href: member.social.mail, label: 'Email' },
                    { icon: <FaLinkedin size={14} />, href: member.social.linkedin, label: 'LinkedIn' },
                    { icon: <FaGithub size={14} />, href: member.social.github, label: 'GitHub' },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      aria-label={s.label}
                      className="w-9 h-9 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-900 hover:text-white hover:border-slate-900 hover:-translate-y-0.5 transition-all duration-300 shadow-sm"
                    >
                      {s.icon}
                    </a>
                  ))}
                  <div className="ml-auto">
                    <span className={`text-[9px] font-black uppercase tracking-widest bg-gradient-to-r ${member.accent} bg-clip-text text-transparent`}>
                      Core Member
                    </span>
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
