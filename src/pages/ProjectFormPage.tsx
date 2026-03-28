import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  User, Building2, Phone, Briefcase, Target, MousePointer2, 
  Image as ImageIcon, Globe, FileText, IndianRupee, Clock, 
  MessageSquare, Send, CheckCircle2, ArrowRight, ArrowLeft 
} from 'lucide-react';
import { cn } from '../lib/utils';

const ProjectFormPage = () => {
  const [step, setStep] = useState(1);
  const totalSteps = 4;

  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    whatsapp: '',
    businessDescription: '',
    primaryService: '',
    mainGoal: '',
    primaryAction: '',
    readyToStart: '',
    referenceWebsites: '',
    requiredPages: [] as string[],
    budgetRange: '',
    timeline: '',
    additionalInfo: ''
  });

  const goals = ['Generate Leads', 'Drive Calls', 'Direct Sales'];
  const actions = ['WhatsApp Message', 'Direct Call', 'Fill Contact Form'];
  const readyStatus = ['Yes', 'No'];
  const budgetRanges = ['₹3K – ₹5K', '₹5K – ₹10K', '₹10K+'];
  const timelines = ['2–3 days (Urgent)', '1 week', 'Flexible (No immediate deadline)'];
  const pageOptions = ['Home Page', 'Services/Products Page', 'Contact Page', 'About Us/Team Page', 'Gallery/Portfolio', 'Landing Page'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (page: string) => {
    setFormData(prev => {
      const current = prev.requiredPages;
      if (current.includes(page)) {
        return { ...prev, requiredPages: current.filter(p => p !== page) };
      }
      return { ...prev, requiredPages: [...current, page] };
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Construct Message for WhatsApp and Email
    const message = `
*New Project Inquiry - SK Web Technologies*

*Name:* ${formData.name}
*Business Name:* ${formData.businessName || 'NA'}
*WhatsApp:* ${formData.whatsapp}
*Business Description:* ${formData.businessDescription || 'NA'}
*Primary Service/Product:* ${formData.primaryService || 'NA'}
*Main Goal:* ${formData.mainGoal}
*Primary Action:* ${formData.primaryAction}
*Logo & Content Ready:* ${formData.readyToStart}
*Reference Websites:* ${formData.referenceWebsites || 'NA'}
*Required Pages:* ${formData.requiredPages.join(', ')}
*Budget Range:* ${formData.budgetRange}
*Timeline:* ${formData.timeline}
*Additional Info:* ${formData.additionalInfo || 'NA'}
    `.trim();

    // 1. WhatsApp Submission
    const whatsappUrl = `https://wa.me/919442007621?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    // 2. Email Submission (mailto for now, or could use an API)
    const emailSubject = `New Project Inquiry from ${formData.name}`;
    const mailtoUrl = `mailto:hariharanmahesh34@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoUrl;

    setStep(5); // Success state
  };

  const nextStep = () => setStep(prev => Math.min(prev + 1, totalSteps));
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1));

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full glass bg-white border-slate-100 text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 shadow-sm mb-8">
            <Briefcase size={14} className="text-primary" />
            Project Launchpad
          </div>
          <h1 className="text-4xl md:text-6xl font-black font-outfit text-slate-900 leading-tight">
            Let's Scale Your <span className="text-gradient">Vision</span>
          </h1>
        </motion.div>

        <div className="glass-card bg-white p-8 md:p-12 shadow-2xl shadow-slate-200 border-white relative overflow-hidden">
          {/* Progress Bar */}
          <div className="absolute top-0 left-0 w-full h-1 bg-slate-50">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              className="h-full bg-primary"
            />
          </div>

          <form onSubmit={handleSubmit} className="space-y-10">
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">What's your name? *</label>
                      <div className="relative">
                        <User className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Hariharan S"
                          className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">WhatsApp number? *</label>
                      <div className="relative">
                        <Phone className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                        <input
                          type="tel"
                          name="whatsapp"
                          required
                          value={formData.whatsapp}
                          onChange={handleChange}
                          placeholder="+91 94420 07621"
                          className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Business name?</label>
                    <div className="relative">
                      <Building2 className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                      <input
                        type="text"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        placeholder="SK Web Technologies"
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">What does your business do? *</label>
                    <div className="relative">
                      <MessageSquare className="absolute left-6 top-5 text-slate-300" size={20} />
                      <textarea
                        name="businessDescription"
                        required
                        value={formData.businessDescription}
                        onChange={handleChange}
                        rows={4}
                        placeholder="Tell us briefly about your business..."
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Main Goal of your website? *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {goals.map(goal => (
                        <button
                          key={goal}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, mainGoal: goal }))}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all font-black text-sm text-center",
                            formData.mainGoal === goal 
                              ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <Target className="mx-auto mb-3" size={24} />
                          {goal}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Primary Action users should take? *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {actions.map(action => (
                        <button
                          key={action}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, primaryAction: action }))}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all font-black text-sm text-center",
                            formData.primaryAction === action 
                              ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <MousePointer2 className="mx-auto mb-3" size={24} />
                          {action}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Do you have logo and content ready? *</label>
                    <div className="grid grid-cols-2 gap-4">
                      {readyStatus.map(status => (
                        <button
                          key={status}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, readyToStart: status }))}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all font-black text-sm text-center",
                            formData.readyToStart === status 
                              ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <ImageIcon className="mx-auto mb-3" size={24} />
                          {status}
                        </button>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Which pages do you need? *</label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                      {pageOptions.map(page => (
                        <button
                          key={page}
                          type="button"
                          onClick={() => handleCheckboxChange(page)}
                          className={cn(
                            "p-5 rounded-2xl border-2 transition-all font-black text-xs text-left flex items-center gap-4",
                            formData.requiredPages.includes(page)
                              ? "bg-slate-900 text-white border-slate-900 shadow-xl"
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <FileText size={18} />
                          {page}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Any reference websites you like?</label>
                    <div className="relative">
                      <Globe className="absolute left-6 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                      <input
                        type="url"
                        name="referenceWebsites"
                        value={formData.referenceWebsites}
                        onChange={handleChange}
                        placeholder="https://example.com"
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-8"
                >
                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Budget Range *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {budgetRanges.map(range => (
                        <button
                          key={range}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, budgetRange: range }))}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all font-black text-sm text-center",
                            formData.budgetRange === range 
                              ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <IndianRupee className="mx-auto mb-3" size={24} />
                          {range}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">When do you need it? *</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {timelines.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setFormData(prev => ({ ...prev, timeline: time }))}
                          className={cn(
                            "p-6 rounded-2xl border-2 transition-all font-black text-[10px] md:text-sm text-center",
                            formData.timeline === time 
                              ? "bg-primary text-white border-primary shadow-xl shadow-primary/20" 
                              : "bg-slate-50 text-slate-600 border-slate-100 hover:border-primary/20"
                          )}
                        >
                          <Clock className="mx-auto mb-3" size={24} />
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest block ml-2">Anything else to mention?</label>
                    <div className="relative">
                      <Send className="absolute left-6 top-5 text-slate-300" size={20} />
                      <textarea
                        name="additionalInfo"
                        value={formData.additionalInfo}
                        onChange={handleChange}
                        rows={3}
                        placeholder="Tell us any specific requirements..."
                        className="w-full pl-16 pr-8 py-5 rounded-2xl bg-slate-50 border-2 border-slate-100 focus:border-primary/20 focus:bg-white text-slate-900 font-bold outline-none transition-all resize-none"
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {step === 5 && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-8"
                >
                  <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                    <CheckCircle2 size={48} />
                  </div>
                  <h2 className="text-4xl md:text-5xl font-black font-outfit text-slate-900">
                    Application Received!
                  </h2>
                  <p className="text-xl text-slate-500 font-medium max-w-lg mx-auto">
                    We've sent your inquiry via WhatsApp and opened your email client. We'll be in touch within 24 hours to initiate your digital legacy.
                  </p>
                  <button
                    onClick={() => window.location.href = '/'}
                    className="btn-primary px-12 py-6 rounded-full text-xl"
                  >
                    Back to Home
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {step <= 4 && (
              <div className="flex items-center justify-between pt-10 border-t border-slate-100">
                <button
                  type="button"
                  onClick={prevStep}
                  disabled={step === 1}
                  className={cn(
                    "flex items-center gap-3 font-black text-sm uppercase tracking-widest transition-all",
                    step === 1 ? "opacity-0 invisible" : "text-slate-400 hover:text-slate-900"
                  )}
                >
                  <ArrowLeft size={20} /> Back
                </button>

                {step < totalSteps ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="btn-primary px-12 py-5 rounded-2xl flex items-center gap-4 text-sm"
                  >
                    Next Step <ArrowRight size={20} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="btn-primary group px-12 py-6 rounded-2xl flex items-center gap-4 text-xl shadow-2xl shadow-primary/20"
                  >
                    Launch Project <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>
                )}
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProjectFormPage;
