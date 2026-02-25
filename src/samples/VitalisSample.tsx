import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Users, Stethoscope, Activity, ArrowRight, 
  ShieldCheck, Clock, Award, ChevronRight, Menu, X 
} from 'lucide-react';

export default function VitalisSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. NAVBAR VITALIS 
          Sticky top-11 (44px) para colar logo abaixo da barra Scuta Digital */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-left">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <Heart size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Vitalis</span>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8 text-left">
            {['Especialidades', 'Equipa', 'Acordos', 'Contacto'].map((item) => (
              <a key={item} href="#" className="text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest leading-none">
                {item}
              </a>
            ))}
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-500/20 active:scale-95 transition-all leading-none">
              Marcar Consulta
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4 text-left">
                {['Especialidades', 'Equipa', 'Acordos'].map((item) => (
                  <a key={item} href="#" onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700 py-2 border-b border-slate-50">{item}</a>
                ))}
                <button className="w-full bg-brand-600 text-white py-4 mt-2 rounded-xl font-bold shadow-lg">Marcar Consulta</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO BESPOKE PARA CLÍNICA */}
      <section className="relative min-h-[85vh] flex items-center pt-10 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 rounded-l-[100px] hidden lg:block -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-left">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Activity size={14} /> Cuidado Humanizado
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter text-left">
              Sua saúde em <br /><span className="text-brand-600 italic">boas mãos.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium text-left">
              Oferecemos atendimento médico humanizado com tecnologia de ponta para cuidar de si e da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand-500/30 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 group active:scale-95">
                Agendar Agora <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            {/* CORRIGIDO: aspect-4/5 para linter Tailwind v4 */}
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-4/5 lg:aspect-auto" 
              alt="Medical Team" 
            />
            {/* Floating Badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100 z-20"
            >
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <p className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tighter text-left">Certificado <br/>de Qualidade</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ESPECIALIDADES GRID */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter text-slate-900">Nossas Especialidades</h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { title: 'Cardiologia', icon: Heart, color: 'bg-red-50 text-red-500' },
              { title: 'Pediatria', icon: Users, color: 'bg-blue-50 text-blue-500' },
              { title: 'Clínica Geral', icon: Stethoscope, color: 'bg-emerald-50 text-emerald-500' },
              { title: 'Laboratório', icon: Activity, color: 'bg-purple-50 text-purple-500' }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer"
              >
                <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-sm group-hover:scale-110 transition-transform`}>
                  <s.icon size={40} />
                </div>
                <h3 className="text-2xl font-black mb-4 tracking-tight text-slate-900 text-center">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed text-center">Cuidado especializado com foco no seu bem-estar contínuo e saúde integral.</p>
                <button className="text-brand-600 font-bold flex items-center gap-2 mx-auto group-hover:gap-3 transition-all">
                  Saber mais <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}