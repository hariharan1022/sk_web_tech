import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jhonson',
    role: 'CEO, TechFlow',
    content: 'Hariharan delivered exceptional work on our dashboard. His attention to detail and modern design sensibilities are unmatched.',
    rating: 5,
  },
  {
    name: 'Michael Chen',
    role: 'Founder, CloudStream',
    content: "The SK Brothers team transformed our vision into a stunning reality. Highly professional and technically proficient.",
    rating: 5,
  },
  {
    name: 'Emma Williams',
    role: 'Design Lead, Creative Agency',
    content: 'Working with them was a seamless experience. The performance of the React app they built is incredible.',
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-32 px-6 bg-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-2xl bg-slate-50 border-slate-100 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 shadow-sm border"
          >
            Social Proof
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black font-outfit text-slate-900 mb-8"
          >
            Client <span className="text-gradient">Voices</span>
          </motion.h2>
          <div className="flex justify-center gap-1.5 text-yellow-500 mt-6">
             {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="currentColor" />)}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-10 relative bg-slate-50/50 border-slate-100 hover:border-primary/20 transition-all duration-500"
            >
              <div className="p-5 rounded-2xl bg-primary text-white w-fit mb-8 shadow-xl shadow-primary/20">
                <Quote size={28} />
              </div>
              
              <div className="flex gap-1 text-yellow-500 mb-8 font-medium">
                 {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>

              <p className="text-slate-600 italic text-lg leading-relaxed mb-10 font-medium">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-5 pt-8 border-t border-slate-100">
                <div className="w-14 h-14 rounded-2xl bg-slate-900 flex items-center justify-center font-black text-white text-xl shadow-xl shadow-slate-200">
                   {testimonial.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-lg font-outfit uppercase tracking-tight">{testimonial.name}</h4>
                  <p className="text-[10px] font-black tracking-widest uppercase text-slate-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
