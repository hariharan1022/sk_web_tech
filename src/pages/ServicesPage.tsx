import { motion } from 'framer-motion';
import {
  Globe, Monitor, Server, Smartphone, Palette, Cloud,
  ShoppingCart, Search, Shield, ArrowUpRight, Check, Clock,
  Zap, Code2, GitBranch, Rocket, MessageSquare, PenLine,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Services from '../components/Services';

/* ─── SERVICE DATA ─────────────────────────────────────── */
const fullServices = [
  {
    icon: <Globe size={28} />,
    title: 'Web Development',
    tagline: 'Full-stack, production-grade websites',
    description:
      'We build blazing-fast, SEO-ready websites with React, Next.js, and modern backend stacks. Every project is engineered for performance, security, and scalability from day one.',
    features: ['Custom React / Next.js build', 'REST & GraphQL APIs', 'Database design (SQL/NoSQL)', 'Authentication & security', 'CI/CD & deployment pipeline'],
    stack: ['React', 'Next.js', 'Node.js', 'MongoDB'],
    delivery: '5–10 days',
    accent: 'from-blue-500 to-indigo-600',
    glow: 'rgba(99,102,241,0.12)',
    badge: 'Most Requested',
    badgeColor: 'bg-blue-50 text-blue-700 border-blue-100',
  },
  {
    icon: <Monitor size={28} />,
    title: 'Frontend Development',
    tagline: 'Pixel-perfect, interactive interfaces',
    description:
      'We craft interactive, accessible, and highly performant UIs using TypeScript and Tailwind CSS. Every component is animated, responsive, and tested across all browsers.',
    features: ['TypeScript + Tailwind CSS', 'Framer Motion animations', 'Component libraries', 'Cross-browser testing', 'Accessibility (WCAG)'],
    stack: ['TypeScript', 'Tailwind', 'Framer Motion', 'Vite'],
    delivery: '3–7 days',
    accent: 'from-purple-500 to-pink-600',
    glow: 'rgba(168,85,247,0.12)',
    badge: null,
    badgeColor: '',
  },
  {
    icon: <Server size={28} />,
    title: 'Backend & APIs',
    tagline: 'Scalable, secure server-side systems',
    description:
      'Robust REST and GraphQL APIs, microservices architecture, and database management. We design systems that handle real traffic with graceful scaling and zero downtime.',
    features: ['Node.js / Express APIs', 'Database optimization', 'Auth (JWT / OAuth)', 'Rate limiting & security', 'Automated testing'],
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Redis'],
    delivery: '5–12 days',
    accent: 'from-pink-500 to-rose-600',
    glow: 'rgba(236,72,153,0.12)',
    badge: null,
    badgeColor: '',
  },
  {
    icon: <Smartphone size={28} />,
    title: 'Responsive Design',
    tagline: 'Flawless on every screen & device',
    description:
      'We ensure your product looks and works beautifully on mobiles, tablets, and desktops. Mobile-first methodology with thorough QA across real devices.',
    features: ['Mobile-first approach', 'Breakpoint-perfect layouts', 'Touch gesture support', 'Device & browser QA', 'Performance optimization'],
    stack: ['CSS Grid', 'Flexbox', 'Tailwind', 'Chrome DevTools'],
    delivery: '2–5 days',
    accent: 'from-cyan-500 to-blue-600',
    glow: 'rgba(6,182,212,0.12)',
    badge: null,
    badgeColor: '',
  },
  {
    icon: <ShoppingCart size={28} />,
    title: 'E-Commerce Solutions',
    tagline: 'Convert browsers into buyers',
    description:
      'From product catalogues to full checkout flows, we build e-commerce platforms that convert. Integrated payments, inventory, and order management — all in one.',
    features: ['Razorpay / Stripe integration', 'Product & cart management', 'Admin dashboard', 'Order tracking', 'Email notifications'],
    stack: ['React', 'Node.js', 'Razorpay', 'Firebase'],
    delivery: '10–18 days',
    accent: 'from-emerald-500 to-teal-600',
    glow: 'rgba(16,185,129,0.12)',
    badge: 'New',
    badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  },
  {
    icon: <Palette size={28} />,
    title: 'UI/UX Design',
    tagline: 'Cinematic design that earns trust',
    description:
      "Visual identities that communicate your brand's premium position. We design in Figma with a focus on user psychology, conversion, and aesthetic excellence.",
    features: ['Figma design system', 'User journey mapping', 'Wireframes & prototypes', 'Brand style guide', 'Handoff to dev-ready'],
    stack: ['Figma', 'FigJam', 'Framer', 'Adobe CC'],
    delivery: '3–8 days',
    accent: 'from-amber-500 to-orange-600',
    glow: 'rgba(245,158,11,0.12)',
    badge: null,
    badgeColor: '',
  },
  {
    icon: <Search size={28} />,
    title: 'SEO & Performance',
    tagline: 'Rank higher, load faster',
    description:
      'Technical SEO audits, Core Web Vitals optimization, and structured data implementation. We make sure your site gets found and keeps users engaged.',
    features: ['Technical SEO audit', 'Core Web Vitals (LCP/CLS)', 'Meta & schema markup', 'Sitemap & robots.txt', 'Google Search Console setup'],
    stack: ['Lighthouse', 'Google Search Console', 'Ahrefs', 'Next.js'],
    delivery: '2–4 days',
    accent: 'from-rose-500 to-red-600',
    glow: 'rgba(244,63,94,0.12)',
    badge: null,
    badgeColor: '',
  },
  {
    icon: <Cloud size={28} />,
    title: 'Cloud & Deployment',
    tagline: 'Zero-downtime, iron-clad infrastructure',
    description:
      'We handle hosting, CI/CD pipelines, domain setup, and SSL so your product is live and safe. From GitHub Actions to AWS — we configure the entire DevOps stack.',
    features: ['Vercel / AWS / Netlify setup', 'GitHub Actions CI/CD', 'Domain & SSL config', 'Environment management', 'Uptime monitoring'],
    stack: ['Vercel', 'AWS', 'GitHub Actions', 'Docker'],
    delivery: '1–3 days',
    accent: 'from-violet-500 to-purple-600',
    glow: 'rgba(139,92,246,0.12)',
    badge: null,
    badgeColor: '',
  },
];

/* ─── PROCESS STEPS ───────────────────────────────────── */
const process = [
  { step: '01', title: 'Discovery Call', desc: 'We understand your goals, audience, and scope through a free 30-minute consultation.', icon: <MessageSquare size={22} /> },
  { step: '02', title: 'Design & Plan', desc: 'We create wireframes, select the tech stack, and plan the entire build roadmap.', icon: <PenLine size={22} /> },
  { step: '03', title: 'Build & Iterate', desc: 'Agile development with daily progress updates and review checkpoints.', icon: <Code2 size={22} /> },
  { step: '04', title: 'Test & QA', desc: 'Rigorous cross-device, cross-browser, and performance testing before delivery.', icon: <Shield size={22} /> },
  { step: '05', title: 'Deploy & Launch', desc: 'We handle the live deployment, DNS, SSL, and post-launch monitoring.', icon: <Rocket size={22} /> },
  { step: '06', title: 'Support & Grow', desc: 'Ongoing support, feature updates, and performance improvements after launch.', icon: <GitBranch size={22} /> },
];

/* ─── TECH STACK ──────────────────────────────────────── */
const techStack = [
  { name: 'React.js', color: '#61DAFB' },
  { name: 'Next.js', color: '#000000' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Node.js', color: '#339933' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'Framer Motion', color: '#FF0055' },
  { name: 'Firebase', color: '#FFCA28' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'Figma', color: '#F24E1E' },
  { name: 'GitHub Actions', color: '#2088FF' },
];

const fadeUp: any = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.08, duration: 0.7, ease: "easeOut" as any } }),
};

/* ─── PAGE ────────────────────────────────────────────── */
const ServicesPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* ══ HERO BANNER ══════════════════════════════════ */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 overflow-hidden bg-white">
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none -z-10">
          <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
          <div className="absolute top-10 right-0 w-[400px] h-[400px] bg-purple-100/30 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:40px_40px] opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-900 text-white text-[10px] font-black uppercase tracking-[0.35em] mb-8 shadow-xl">
            <Zap size={12} className="text-yellow-400" />
            What We Build
          </motion.div>

          <motion.h1 initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: "easeOut" }}
            className="text-4xl sm:text-6xl md:text-8xl font-black font-outfit text-slate-900 leading-[0.95] tracking-tighter mb-8">
            Our Digital <span className="text-gradient">Services</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.7 }}
            className="text-lg sm:text-xl md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed mb-10">
            From idea to launch — we cover every layer of your digital product with{' '}
            <span className="text-slate-900 font-black">world-class precision.</span>
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started"
              className="btn-primary group px-10 py-5 rounded-2xl text-sm sm:text-base shadow-[0_20px_60px_rgba(0,0,0,0.1)] hover:shadow-primary/20">
              Start a Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link to="/pricing" className="btn-outline px-10 py-5 rounded-2xl text-sm sm:text-base">
              View Pricing
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ══ MARQUEE (existing) ═══════════════════════════ */}
      <Services />

      {/* ══ FULL SERVICE CARDS ═══════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:36px_36px] opacity-40 pointer-events-none" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 mb-4">
              Deep Dive
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl sm:text-5xl md:text-7xl font-black font-outfit text-slate-900 tracking-tighter leading-[1] mb-5">
              Everything We <span className="text-gradient">Offer</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium">
              Each service is a complete, end-to-end solution — not just a piece of the puzzle.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {fullServices.map((svc, i) => (
              <motion.div
                key={svc.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i % 3}
                whileHover={{ y: -6, transition: { type: 'spring', stiffness: 300 } }}
                className="relative bg-white rounded-[2.5rem] border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.09)] transition-shadow duration-500 overflow-hidden group"
              >
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${svc.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                <div className="p-7 md:p-9">
                  {/* Badge */}
                  {svc.badge && (
                    <span className={`inline-block mb-4 text-[9px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border ${svc.badgeColor}`}>
                      {svc.badge}
                    </span>
                  )}

                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${svc.accent} text-white flex items-center justify-center mb-5 shadow-lg`}
                    style={{ boxShadow: `0 8px 24px ${svc.glow}` }}>
                    {svc.icon}
                  </div>

                  {/* Title + tagline */}
                  <h3 className="text-xl md:text-2xl font-black font-outfit text-slate-900 mb-1">{svc.title}</h3>
                  <p className={`text-xs font-black uppercase tracking-widest bg-gradient-to-r ${svc.accent} bg-clip-text text-transparent mb-4`}>{svc.tagline}</p>

                  {/* Description */}
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium mb-6">{svc.description}</p>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6">
                    {svc.features.map((f) => (
                      <li key={f} className="flex items-start gap-3">
                        <div className={`mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br ${svc.accent} flex items-center justify-center flex-shrink-0`}>
                          <Check size={11} strokeWidth={3} className="text-white" />
                        </div>
                        <span className="text-slate-600 text-sm font-semibold">{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Footer row */}
                  <div className="flex items-center justify-between pt-5 border-t border-slate-100">
                    <div className="flex flex-wrap gap-1.5">
                      {svc.stack.map((s) => (
                        <span key={s} className="text-[9px] font-black uppercase tracking-wide px-2.5 py-1 rounded-lg bg-slate-50 text-slate-500 border border-slate-100">
                          {s}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center gap-1.5 text-[10px] font-black text-slate-400 whitespace-nowrap ml-3">
                      <Clock size={12} />
                      {svc.delivery}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PROCESS SECTION ══════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-50/60 rounded-full blur-[120px] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-14 md:mb-20">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 mb-4">
              How We Work
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl sm:text-5xl md:text-7xl font-black font-outfit text-slate-900 tracking-tighter leading-[1] mb-5">
              Our <span className="text-gradient">Process</span>
            </motion.h2>
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
              className="text-slate-500 text-base md:text-xl max-w-2xl mx-auto font-medium">
              A transparent, collaborative workflow designed to deliver on time — every time.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {process.map((step, i) => (
              <motion.div
                key={step.step}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                variants={fadeUp}
                custom={i % 3}
                whileHover={{ y: -5, transition: { type: 'spring', stiffness: 300 } }}
                className="relative bg-white border border-slate-100 rounded-3xl p-7 md:p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_16px_50px_rgba(0,0,0,0.08)] transition-shadow duration-500 group overflow-hidden"
              >
                {/* Step number background */}
                <div className="absolute -top-4 -right-4 text-[6rem] font-black text-slate-50 leading-none select-none pointer-events-none group-hover:text-blue-50 transition-colors duration-500">
                  {step.step}
                </div>

                <div className="relative z-10">
                  <div className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center mb-5 group-hover:bg-primary transition-colors duration-500">
                    {step.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-black font-outfit text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ TECH STACK ═══════════════════════════════════ */}
      <section className="py-16 md:py-24 px-4 sm:px-6 bg-slate-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
              className="text-[10px] font-black uppercase tracking-[0.35em] text-slate-400 mb-4">
              Technologies
            </motion.p>
            <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
              className="text-3xl sm:text-5xl md:text-6xl font-black font-outfit text-slate-900 tracking-tighter leading-[1]">
              Built With the <span className="text-gradient">Best Stack</span>
            </motion.h2>
          </div>
          <div className="flex flex-wrap justify-center gap-3 md:gap-4">
            {techStack.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                custom={i % 6}
                whileHover={{ scale: 1.08, y: -3 }}
                transition={{ type: 'spring', stiffness: 300 }}
                className="flex items-center gap-2.5 px-5 py-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-slate-200 transition-all duration-300 cursor-default"
              >
                <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ background: tech.color }} />
                <span className="text-sm font-black text-slate-700">{tech.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA SECTION ══════════════════════════════════ */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-slate-900 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-40 -left-20 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -right-20 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[100px]" />
          <div className="absolute inset-0 bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:40px_40px] opacity-20" />
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/10 text-white text-[10px] font-black uppercase tracking-[0.35em] mb-8">
            <Rocket size={12} className="text-yellow-400" />
            Ready to Build?
          </motion.div>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={1}
            className="text-3xl sm:text-5xl md:text-7xl font-black font-outfit text-white tracking-tighter leading-[1] mb-6">
            Let's Build Something <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Extraordinary</span>
          </motion.h2>
          <motion.p initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={2}
            className="text-slate-400 text-base md:text-xl font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
            Tell us about your project — we'll craft a tailored solution, a clear timeline, and a fixed price. No surprises.
          </motion.p>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} custom={3}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/get-started"
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-2xl bg-white text-slate-900 font-black text-sm sm:text-base hover:bg-primary hover:text-white hover:scale-[1.03] transition-all duration-500 shadow-2xl shadow-black/30">
              Start Your Project <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
            <Link to="/pricing"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl border border-white/20 text-white font-black text-sm sm:text-base hover:bg-white/10 transition-all duration-500">
              See Pricing
            </Link>
          </motion.div>
        </div>
      </section>

    </motion.div>
  );
};

export default ServicesPage;
