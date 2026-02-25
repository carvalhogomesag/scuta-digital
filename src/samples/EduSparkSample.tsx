import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, BookOpen, Palette, Cpu, Brain, 
  Rocket, ArrowRight, Menu, X, 
  Play, GraduationCap, Lightbulb, Trophy, Users
} from 'lucide-react';

export default function EduSparkSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-edu-display text-slate-900 bg-edu-bg overflow-x-hidden">
      
      {/* 1. NAVBAR */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-full px-6 py-3 flex justify-between items-center transition-all ${scrolled ? 'shadow-2xl bg-white/80' : 'bg-white/40'}`}>
            <div className="flex items-center gap-2 group cursor-pointer text-left">
              <motion.div whileHover={{ rotate: 180 }} className="w-10 h-10 bg-edu-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Sparkles size={20} />
              </motion.div>
              <span className="text-xl font-black tracking-tight text-slate-900 leading-none">EduSpark</span>
            </div>

            <div className="hidden md:flex items-center gap-8">
              {['Matérias', 'Método', 'Preços'].map((link) => (
                <a key={link} href="#" className="text-sm font-bold text-slate-600 hover:text-edu-primary transition-colors leading-none">{link}</a>
              ))}
              <button className="bg-edu-primary text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-indigo-700 transition-all shadow-lg shadow-indigo-500/20 active:scale-95 leading-none">
                Matrículas Abertas
              </button>
            </div>

            <button className="md:hidden text-slate-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} className="absolute top-full left-6 right-6 mt-4 glass rounded-3xl p-8 md:hidden shadow-2xl border-white/40">
              <div className="flex flex-col gap-6 text-left font-bold">
                {['Matérias', 'Método', 'Preços'].map((link) => (
                  <a key={link} href="#" onClick={() => setIsOpen(false)} className="text-2xl text-slate-900">{link}</a>
                ))}
                <button className="w-full bg-edu-primary text-white py-4 rounded-2xl font-bold shadow-lg">Inscrição Rápida</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden text-center">
        <div className="blob bg-indigo-300 w-96 h-96 top-20 -left-20" />
        <div className="blob bg-pink-300 w-96 h-96 bottom-20 right-20 delay-700 opacity-20" />
        <div className="blob bg-yellow-200 w-80 h-80 top-1/2 left-1/2 -translate-x-1/2 delay-1000 opacity-30" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 border border-indigo-200">
              <Rocket size={14} /> Onde o aprendizado ganha vida
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.9] mb-8 tracking-tighter text-slate-900">
              O ATL QUE <span className="text-gradient">ACENDE</span> A CURIOSIDADE.
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Apoio escolar personalizado e atividades extracurriculares que transformam o potencial do seu filho em superpoderes.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-edu-primary text-white px-10 py-5 rounded-2xl font-black text-xl shadow-2xl shadow-indigo-500/40 hover:bg-indigo-700 transition-all flex items-center gap-3 active:scale-95">
                Conhecer o Espaço <ArrowRight size={20} />
              </motion.button>
              <button className="flex items-center gap-3 text-lg font-black text-slate-900 group transition-all">
                <div className="w-14 h-14 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-white group-hover:border-white group-hover:shadow-xl transition-all">
                  <Play size={20} fill="currentColor" />
                </div>
                Ver Vídeo
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 1 }} className="mt-20 relative max-w-5xl mx-auto">
            <div className="rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white/60">
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kids Learning" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. MATÉRIAS - CORRIGIDO: Removido cloneElement */}
      <section className="py-32 bg-white relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-left mb-20">
            <h2 className="text-5xl font-black mb-6 tracking-tighter uppercase leading-none">Explore as <span className="text-edu-primary">Aventuras.</span></h2>
            <p className="text-xl text-slate-500 font-medium">Cada matéria é uma nova jornada de descoberta prática.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left">
            {[
              { name: 'Ciências', icon: Cpu, color: 'from-emerald-400 to-teal-600', desc: 'Experiências reais que explicam o mundo.' },
              { name: 'Matemática', icon: Brain, color: 'from-blue-500 to-indigo-600', desc: 'Lógica e jogos que tornam os números divertidos.' },
              { name: 'Artes', icon: Palette, color: 'from-pink-500 to-rose-600', desc: 'Criatividade sem limites para pequenos artistas.' },
              { name: 'Coding', icon: Rocket, color: 'from-purple-500 to-indigo-700', desc: 'Programação e Robótica para o futuro.' }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -15 }} className="group relative h-[400px] rounded-[3rem] overflow-hidden cursor-pointer shadow-xl">
                <div className={`absolute inset-0 bg-linear-to-br ${s.color} transition-transform duration-700 group-hover:scale-110`} />
                <div className="relative h-full p-8 flex flex-col justify-between text-white">
                  <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                    <s.icon size={30} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-black mb-3 tracking-tighter leading-none">{s.name}</h3>
                    <p className="text-white/80 text-sm font-medium leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA */}
      <section className="py-32 bg-slate-900 text-white relative overflow-hidden text-left">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <span className="text-edu-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Nossa Metodologia</span>
            <h2 className="text-5xl md:text-7xl font-black mb-8 leading-tight tracking-tighter uppercase">
              Ensinamos a <span className="text-gradient italic">pensar</span>, não a decorar.
            </h2>
            <p className="text-slate-400 text-xl mb-12 leading-relaxed font-medium">
              Utilizamos técnicas de neuroeducação para entender como o cérebro de cada criança aprende melhor. Ambiente projetado para zero stress.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: 'Aprendizado Ativo', icon: Lightbulb, color: 'bg-yellow-100/20 text-yellow-500' },
                { title: 'Foco Individual', icon: Users, color: 'bg-indigo-100/20 text-indigo-400' }
              ].map((f, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/5 p-6 rounded-3xl border border-white/10">
                  <div className={`w-12 h-12 ${f.color} rounded-2xl flex items-center justify-center`}>
                    <f.icon size={24} />
                  </div>
                  <span className="font-bold text-lg">{f.title}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[4rem] overflow-hidden border-8 border-white/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Method" />
            </div>
            <motion.div whileHover={{ scale: 1.05 }} className="absolute -bottom-10 -left-10 glass p-8 rounded-[2.5rem] text-slate-900 max-w-[220px] shadow-2xl border-white/40">
              <div className="text-5xl font-black text-edu-primary mb-2">98%</div>
              <p className="font-black text-sm uppercase tracking-widest leading-tight text-slate-500">Sucesso Escolar</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5. FOOTER */}
      <footer className="py-20 bg-slate-50 text-center border-t border-slate-200 px-6">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-edu-primary rounded-lg flex items-center justify-center text-white">
              <Sparkles size={16} />
            </div>
            <span className="text-lg font-black tracking-tight uppercase">EduSpark.pt</span>
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-400">
            Protótipo Criativo · Scuta Digital 2026
          </p>
        </div>
      </footer>
    </div>
  );
}