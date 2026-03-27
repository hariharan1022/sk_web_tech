import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Monitor } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'HTML5 / CSS3', level: 95 },
    { name: 'JavaScript (ES6+)', level: 90 },
    { name: 'React.js / Next.js', level: 85 },
    { name: 'Node.js / Express', level: 80 },
    { name: 'MySQL / MongoDB', level: 75 },
    { name: 'Tailwind CSS', level: 95 },
  ];

  return (
    <section className="py-24 px-6 overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <div className="flex items-center gap-3 font-bold text-primary mb-6 p-3 glass w-max rounded-2xl border-white/60 shadow-xl shadow-blue-500/5">
            <Monitor size={22} />
            <span>Hariharan S</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black font-outfit mb-8 text-slate-900 leading-[1.1]">
            Bridging Design & <span className="text-gradient">Technology</span>
          </h2>
          <p className="text-slate-500 text-xl leading-relaxed mb-10 font-medium italic">
            "Currently pursuing B.Tech IT at Mount Zion College of Engineering and Technology." 
          </p>
          <p className="text-slate-600 text-lg leading-relaxed mb-12">
            Passionate about building scalable web applications and intuitive user interfaces.
            With a focus on clean code and modern design systems, I help brands bridge the gap between imagination and reality.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
            <div className="flex items-start gap-5 p-6 glass-card group">
              <div className="p-4 rounded-2xl bg-blue-500/10 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                <GraduationCap size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wider">Education</h4>
                <p className="text-sm font-bold text-slate-400">B.Tech IT Undergraduate</p>
              </div>
            </div>
            <div className="flex items-start gap-5 p-6 glass-card group">
              <div className="p-4 rounded-2xl bg-purple-500/10 text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                <Briefcase size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg uppercase tracking-wider">Focus</h4>
                <p className="text-sm font-bold text-slate-400">Full Stack Expert</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="space-y-8 bg-slate-50/50 p-10 rounded-[3rem] border border-white"
        >
          <h3 className="text-3xl font-black font-outfit mb-4 text-slate-900">Technical <span className="text-primary">Stack</span></h3>
          <div className="space-y-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between text-sm font-black uppercase tracking-widest text-slate-500">
                  <span>{skill.name}</span>
                  <span className="text-primary">{skill.level}%</span>
                </div>
                <div className="h-3 w-full bg-slate-200 rounded-full overflow-hidden shadow-inner">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-[0_0_10px_rgba(37,99,235,0.3)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
