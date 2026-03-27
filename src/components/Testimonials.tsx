import React from 'react';
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
    <section id="testimonials" className="py-24 px-6 bg-[#05001a]/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold font-outfit"
          >
            Client <span className="text-gradient">Voices</span>
          </motion.h2>
          <div className="flex justify-center mt-4">
             <div className="flex gap-1 text-yellow-500">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="currentColor" />)}
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-8 relative"
            >
              <div className="p-4 rounded-xl bg-primary/10 text-primary w-fit mb-6 absolute -top-6 -right-6 -rotate-12">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 text-yellow-500 mb-6 font-medium">
                 {[...Array(testimonial.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>

              <p className="text-white/70 italic mb-8 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary p-[2px]">
                   <div className="w-full h-full bg-background rounded-full flex items-center justify-center font-bold text-lg">
                      {testimonial.name[0]}
                   </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-white/40">{testimonial.role}</p>
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
