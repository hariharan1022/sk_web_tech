import { motion } from 'framer-motion';
import { 
  SiHtml5, 
  SiCss as SiCss3, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiMongodb, 
  SiPostgresql, 
  SiTailwindcss, 
  SiTypescript, 
  SiFramer,
  SiVite,
  SiGoogle 
} from 'react-icons/si';

const techItems = [
  { icon: <SiHtml5 size={40} />, name: 'HTML5', color: 'text-orange-500' },
  { icon: <SiCss3 size={40} />, name: 'CSS3', color: 'text-blue-500' },
  { icon: <SiJavascript size={40} />, name: 'JS', color: 'text-yellow-400' },
  { icon: <SiTypescript size={40} />, name: 'TS', color: 'text-blue-600' },
  { icon: <SiReact size={40} />, name: 'React', color: 'text-cyan-400' },
  { icon: <SiNextdotjs size={40} />, name: 'Next.js', color: 'text-slate-900' },
  { icon: <SiNodedotjs size={40} />, name: 'Node.js', color: 'text-emerald-500' },
  { icon: <SiExpress size={40} />, name: 'Express', color: 'text-slate-600' },
  { icon: <SiMongodb size={40} />, name: 'MongoDB', color: 'text-green-500' },
  { icon: <SiPostgresql size={40} />, name: 'SQL', color: 'text-blue-400' },
  { icon: <SiTailwindcss size={40} />, name: 'Tailwind', color: 'text-cyan-500' },
  { icon: <SiFramer size={40} />, name: 'Motion', color: 'text-purple-500' },
  { icon: <SiVite size={40} />, name: 'Vite', color: 'text-indigo-500' },
  { icon: <SiGoogle size={40} />, name: 'SEO', color: 'text-blue-500' },
];

const allTech = [...techItems, ...techItems, ...techItems];

const TechStack = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden border-y border-slate-100">
      {/* Reverse Marquee: Left to Right */}
      <div className="relative flex overflow-hidden">
        <motion.div 
          className="flex whitespace-nowrap gap-16 py-6"
          animate={{ x: [-2800, 0] }} 
          transition={{
            x: {
              repeat: Infinity,
              duration: 50,
              ease: "linear",
            },
          }}
        >
          {allTech.map((tech, index) => (
            <div
              key={index}
              className="flex items-center gap-4 group"
            >
              <div className={`p-4 rounded-2xl bg-white shadow-xl shadow-slate-200/50 transition-all duration-300 group-hover:scale-125 group-hover:rotate-6 ${tech.color}`}>
                {tech.icon}
              </div>
              <span className="text-xl font-black font-outfit text-slate-800 uppercase tracking-tighter opacity-20 group-hover:opacity-100 transition-opacity">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Fades */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default TechStack;
