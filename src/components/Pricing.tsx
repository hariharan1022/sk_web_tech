import { motion } from 'framer-motion';
import { Check, Zap, ArrowRight } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Landing Page',
    price: '₹2,999',
    description: 'Perfect for quick professional presence and high-conversion landing pages.',
    features: [
      '1 Custom High-Performance Page',
      'Advanced Contact Form',
      'Instant Automatic Emails',
      'Full Mobile Optimization',
      'SEO Foundation Included',
      'Lightning Fast Loading'
    ],
    cta: 'Get Started',
    popular: false,
    color: 'blue'
  },
  {
    name: 'Standard Package',
    price: '₹5,999',
    description: 'The ultimate professional choice for established businesses needing more depth.',
    features: [
      '3 Bespoke Premium Pages',
      'Interactive Experience',
      'Custom Automated Workflows',
      'Mobile-First Design',
      'Full SEO Optimization',
      'Priority Deployment'
    ],
    cta: 'Get Started',
    popular: true,
    color: 'indigo'
  },
  {
    name: 'Premium Suite',
    price: '₹9,999',
    description: 'Full-scale digital ecosystem for brands that demand absolute dominance.',
    features: [
      'Unlimited Pages (Up to 10)',
      'E-commerce / CMS Integration',
      'Cinematic Motion UI',
      'Custom Design System',
      '1 Month Support & Hosting',
      'Advanced Data Analytics'
    ],
    cta: 'Go Premium',
    popular: false,
    color: 'purple'
  }
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-20 md:py-32 px-6 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 mb-6 border border-slate-100"
          >
            <Zap size={12} className="text-primary" />
            Transparent Pricing
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-7xl font-black font-outfit text-slate-900 mb-6 md:mb-8"
          >
            Choose Your <span className="text-gradient">Growth Path</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto font-medium px-4"
          >
            Fixed costs. High-end results. No hidden fees. Just world-class engineering tailored to your vision.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              className={cn(
                "relative group p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] transition-all duration-500",
                plan.popular 
                  ? "bg-slate-900 text-white shadow-[0_40px_100px_rgba(0,0,0,0.1)] md:scale-105" 
                  : "bg-white border border-slate-100 shadow-[0_20px_60px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
              )}
            >
              {plan.popular && (
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
                  Most Popular Choice
                </div>
              )}

              <div className="flex flex-col h-full">
                <div className="mb-10">
                  <h3 className={cn(
                    "text-2xl md:text-3xl font-black font-outfit mb-4",
                    plan.popular ? "text-white" : "text-slate-900"
                  )}>
                    {plan.name}
                  </h3>
                  <p className={cn(
                    "text-sm font-medium leading-relaxed",
                    plan.popular ? "text-slate-400" : "text-slate-500"
                  )}>
                    {plan.description}
                  </p>
                </div>

                <div className="mb-12">
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className={cn(
                      "text-4xl md:text-5xl font-black font-outfit",
                      plan.popular ? "text-white" : "text-slate-900"
                    )}>
                      {plan.price}
                    </span>
                    <span className={cn(
                      "text-sm font-bold uppercase tracking-widest",
                      plan.popular ? "text-slate-500" : "text-slate-400"
                    )}>
                      / Single Payment
                    </span>
                  </div>
                </div>

                <ul className="space-y-6 mb-12 flex-grow">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-4 group/item">
                      <div className={cn(
                        "w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300 group-hover/item:scale-110",
                        plan.popular ? "bg-primary/20 text-primary" : "bg-blue-50 text-blue-600"
                      )}>
                        <Check size={14} strokeWidth={3} />
                      </div>
                      <span className={cn(
                        "text-sm font-bold tracking-tight",
                        plan.popular ? "text-slate-300" : "text-slate-600"
                      )}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button className={cn(
                  "w-full py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 transition-all duration-300",
                  plan.popular 
                    ? "bg-white text-slate-900 hover:bg-primary hover:text-white" 
                    : "bg-slate-900 text-white hover:bg-primary shadow-xl shadow-slate-200"
                )}>
                  {plan.cta}
                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
