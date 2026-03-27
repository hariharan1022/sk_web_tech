import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';

const faqs = [
  {
    question: "Why should I choose SK WEB TECHNOLOGIES?",
    answer: "We are a dedicated team of elite developers and designers. Our biggest advantage is our relentless motivation: we work tirelessly on your project until you are 100% satisfied. No middlemen, direct communication, and maximum dedication to your success."
  },
  {
    question: "How long does a typical project take?",
    answer: "Our motto is 'Faster live, faster growth'. Standard landing pages and simple projects are often completed in 1-2 weeks. More complex ecosystems and deep architectural platforms vary depending on scope, but we always prioritize velocity without sacrificing quality."
  },
  {
    question: "How much does a custom website cost?",
    answer: "Every project is a unique digital footprint. While we offer starting packages (Landing Page: ₹2,999, Standard: ₹5,999), we also provide individual quotes based on specific requirements, integrations, and architectural complexity. Contact us for a free, deep-dive consultation."
  },
  {
    question: "What core technologies do you specialize in?",
    answer: "We build for the future using React 19, Next.js, TypeScript, and Tailwind CSS. For the data layer and payments, we utilize Supabase and Stripe. Every build is meticulously optimized for a PageSpeed score of 100/100."
  },
  {
    question: "Are your websites optimized for SEO?",
    answer: "Absolutely. Advanced SEO is non-negotiable. Every build includes Schema.org structured data, meta-tag optimization, dynamic sitemaps, performance tuning, and mobile-first responsiveness as standard features."
  },
  {
    question: "Do you offer in-person consultations?",
    answer: "Yes, we can arrange personal meetings for strategic planning. However, we primarily operate as a digital-first studio via high-fidelity video calls, allowing for maximum flexibility and rapid iteration across time zones."
  },
  {
    question: "Why not use a standard page builder like Wix or WordPress?",
    answer: "Page builders are convenient but structurally limited. Our custom-engineered solutions offer infinite scalability, far superior performance (PageSpeed 100 vs typical 50-70), bespoke security kernels, and a unique visual identity that truly represents your brand."
  }
];

const FAQItem = ({ question, answer, isOpen, onClick }: { question: string, answer: string, isOpen: boolean, onClick: () => void }) => {
  return (
    <div className={cn(
      "group mb-4 rounded-3xl transition-all duration-300 border-b border-slate-100/50 overflow-hidden",
      isOpen ? "bg-slate-50 border-slate-200 shadow-xl shadow-slate-200/20" : "bg-white hover:bg-slate-50/50"
    )}>
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 md:p-8 text-left transition-all duration-300"
      >
        <span className={cn(
          "text-lg md:text-xl font-black font-outfit transition-colors pr-8",
          isOpen ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
        )}>
          {question}
        </span>
        <div className={cn(
          "w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-500",
          isOpen ? "bg-slate-900 text-white rotate-180" : "bg-slate-100 text-slate-400 group-hover:bg-slate-200"
        )}>
          <ChevronDown size={22} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: "circOut" }}
          >
            <div className="px-6 md:px-8 pb-6 md:pb-8 text-slate-500 font-medium leading-relaxed max-w-3xl text-base md:text-lg">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-32 px-6 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-20">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="sticky top-40"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-8 border border-slate-100">
                <HelpCircle size={12} className="text-primary" />
                Straight Answers
              </div>
              <h2 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 mb-6 md:mb-8 leading-[1.1]">
                Everything You Need to <span className="text-gradient">Know</span>.
              </h2>
              <p className="text-lg md:text-xl text-slate-500 mb-8 md:mb-10 font-medium">
                Got questions? We've got the logic. Our process is transparent, efficient, and laser-focused on your digital growth.
              </p>
              <div className="pt-8 border-t border-slate-100">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest mb-6">Need more details?</p>
                <Link to="/contact" className="inline-flex items-center gap-3 text-lg font-black text-primary hover:gap-6 transition-all duration-300">
                  Discuss your project <ArrowRight size={20} />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-12 lg:hidden h-[1px] bg-slate-100" />

          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4"
            >
              {faqs.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
