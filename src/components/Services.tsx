import { motion } from 'framer-motion';
import { FaGlobe, FaDesktop, FaServer, FaMobileAlt, FaLayerGroup, FaPalette, FaCloud } from 'react-icons/fa';

const services = [
  {
    icon: <FaGlobe size={32} />,
    title: 'Web Development',
    description: 'High-performance, scalable web applications built with React and Node.',
    color: 'bg-blue-600',
  },
  {
    icon: <FaDesktop size={32} />,
    title: 'Frontend Mastery',
    description: 'Interactive user interfaces focused on experience and accessibility.',
    color: 'bg-purple-600',
  },
  {
    icon: <FaServer size={32} />,
    title: 'Backend Logic',
    description: 'Robust server-side architecture and secure database management.',
    color: 'bg-pink-600',
  },
  {
    icon: <FaMobileAlt size={32} />,
    title: 'Responsive Design',
    description: 'Ensuring your vision looks perfect on every device, from mobile to desktop.',
    color: 'bg-cyan-600',
  },
  {
    icon: <FaLayerGroup size={32} />,
    title: 'Custom Web Apps',
    description: 'Tailor-made solutions designed explicitly for your business goals.',
    color: 'bg-indigo-600',
  },
  {
    icon: <FaPalette size={32} />,
    title: 'UI/UX Design',
    description: 'Visual identity that effectively communicates your elite brand.',
    color: 'bg-amber-600',
  },
  {
    icon: <FaCloud size={32} />,
    title: 'Cloud Solutions',
    description: 'Secure and scalable cloud infrastructure for modern applications.',
    color: 'bg-emerald-600',
  },
];

const allServices = [...services, ...services];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-slate-50/20 -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center lg:text-left">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 border border-slate-100"
        >
          Our Expertise
        </motion.div>
        <h2 className="text-4xl md:text-7xl font-black font-outfit text-slate-900 mb-6">
          Digital <span className="text-gradient">Solutions</span>
        </h2>
        <p className="text-lg md:text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
          Architecting high-conversion digital experiences through cinematic design and world-class engineering.
        </p>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div 
          className="flex whitespace-nowrap gap-8 py-10"
          animate={{ x: [0, -2500] }} 
          transition={{
            x: {
              repeat: Infinity,
              duration: 40,
              ease: "linear",
            },
          }}
        >
          {allServices.map((service, index) => (
            <div
              key={index}
              className="inline-block w-[320px] md:w-[400px] shrink-0 glass-card p-10 border-slate-100 bg-slate-50/50 rounded-[3rem] transition-all duration-300"
            >
              <div className={`w-20 h-20 rounded-3xl mb-8 flex items-center justify-center ${service.color} text-white shadow-2xl shadow-slate-200`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black font-outfit text-slate-900 mb-4 whitespace-normal">{service.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium whitespace-normal text-base md:text-lg">
                {service.description}
              </p>
              
              <div className="mt-8 flex items-center gap-3">
                 <div className="h-1 w-12 bg-primary rounded-full opacity-30" />
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-[widest]">Premium Build</span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Depth Gradients */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
};

export default Services;
