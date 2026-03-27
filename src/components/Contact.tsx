import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, User, AtSign } from 'lucide-react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { cn } from '../lib/utils';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Mocking successful submission for demonstration
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    { icon: <Mail size={24} />, title: 'Email', value: 'hariharanmahesh34@gmail.com', link: 'mailto:hariharanmahesh34@gmail.com' },
    { icon: <Phone size={24} />, title: 'Phone', value: '+91 98765 43210', link: 'tel:+919876543210' },
    { icon: <MapPin size={24} />, title: 'Location', value: 'Tamil Nadu, India', link: '#' },
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, href: 'https://www.linkedin.com/in/hariharan-s-92b566381' },
    { icon: <FaInstagram size={24} />, href: 'https://www.instagram.com/hari_mahesh_sk' },
    { icon: <FaGithub size={24} />, href: 'https://github.com' },
  ];

  return (
    <section className="py-24 px-6 relative overflow-hidden bg-slate-50">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-5 py-2 rounded-2xl glass border-white text-primary font-black mb-8 shadow-xl shadow-blue-500/5"
          >
            Connect With Us
          </motion.div>
          <h2 className="text-5xl md:text-7xl font-black font-outfit mb-10 leading-tight text-slate-900">
            Let's Start a <br />
            <span className="text-gradient">Conversation</span>
          </h2>
          <p className="text-slate-500 text-xl mb-12 font-medium leading-relaxed">
            Have a revolutionary project in mind? We'd love to hear from you. <br />
            Let's build something extraordinary together.
          </p>

          <div className="space-y-8 mb-12">
            {contactInfo.map((info, i) => (
              <motion.a
                key={info.title}
                href={info.link}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-8 p-6 glass-card group hover:scale-[1.02] transition-transform"
              >
                <div className="p-5 rounded-[1.5rem] bg-blue-600 text-white shadow-xl shadow-blue-500/20 group-hover:rotate-6 transition-transform">
                  {info.icon}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl tracking-tight mb-1">{info.title}</h4>
                  <p className="text-slate-500 font-bold">{info.value}</p>
                </div>
              </motion.a>
            ))}
          </div>

          <div className="flex gap-6">
             {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-16 h-16 rounded-2xl glass bg-white flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary hover:scale-110 transition-all duration-300 shadow-xl shadow-slate-200"
                >
                  {social.icon}
                </a>
             ))}
          </div>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, x: 50 }}
           whileInView={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8 }}
           viewport={{ once: true }}
           className="glass-card p-12 relative overflow-hidden bg-white border-white shadow-2xl rounded-[3rem]"
        >
          <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest block ml-2">Full Name</label>
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300">
                   <User size={22} />
                </div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Hariharan S"
                  required
                  className="w-full pl-16 pr-8 py-5 rounded-[1.5rem] bg-slate-50 border-2 border-slate-100 focus:border-primary/30 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest block ml-2">Email Address</label>
              <div className="relative">
                <div className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300">
                   <AtSign size={22} />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="hari@skweb.com"
                  required
                  className="w-full pl-16 pr-8 py-5 rounded-[1.5rem] bg-slate-50 border-2 border-slate-100 focus:border-primary/30 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-sm font-black text-slate-400 uppercase tracking-widest block ml-2">Your Vision</label>
              <div className="relative">
                <div className="absolute left-6 top-7 text-slate-300">
                   <MessageSquare size={22} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  placeholder="Tell us about your amazing project idea..."
                  required
                  className="w-full pl-16 pr-8 py-5 rounded-[2rem] bg-slate-50 border-2 border-slate-100 focus:border-primary/30 focus:bg-white text-slate-900 font-bold outline-none transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={cn(
                "btn-primary w-full flex items-center justify-center gap-4 py-6 text-xl",
                isSubmitting && "opacity-70 cursor-not-allowed"
              )}
            >
              {isSubmitting ? (
                <div className="w-8 h-8 border-3 border-white/20 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Connect Project
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>

            {submitStatus === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center space-y-2 bg-emerald-50 p-6 rounded-2xl border border-emerald-100"
              >
                <p className="text-emerald-700 font-black text-xl">
                  Inquiry Sent Successfully!
                </p>
                <p className="text-emerald-600/80 font-bold text-sm">
                  A confirmation email has been sent to your inbox automatically.
                </p>
              </motion.div>
            )}
          </form>
          
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
