import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';
import { 
  Sparkles, BookOpen, Palette, Cpu, Brain, 
  Rocket, ArrowRight, Menu, X, 
  Play, GraduationCap, Lightbulb, Trophy, Users, Star, Target, ChevronRight
} from 'lucide-react';

export default function EduSparkSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Setup para Parallax e Scroll fluido
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -150]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.05]);
  const smoothY = useSpring(y1, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-edu-display text-slate-900 bg-edu-bg overflow-x-hidden selection:bg-edu-primary selection:text-white">
      
      {/* 1. NAVBAR PREMIUM GLASS */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${scrolled ? 'py-2' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className={`glass rounded-full px-8 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'shadow-2xl bg-white/90' : 'bg-white/40 border-transparent'}`}>
            <div className="flex items-center gap-3 group cursor-pointer text-left">
              <motion.div 
                whileHover={{ rotate: 180, scale: 1.1 }}
                className="w-12 h-12 bg-linear-to-tr from-edu-primary to-purple-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-indigo-500/30"
              >
                <Sparkles size={24} />
              </motion.div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter text-slate-900 leading-none">EduSpark</span>
                <span className="text-[10px] font-bold text-edu-primary uppercase tracking-[0.2em]">Learning Hub</span>
              </div>
            </div>

            <div className="hidden md:flex items-center gap-10 text-left">
              {['Matérias', 'Metodologia', 'Preços'].map((link) => (
                <a key={link} href="#" className="text-sm font-extrabold text-slate-600 hover:text-edu-primary transition-colors relative group leading-none">
                  {link}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-edu-primary transition-all group-hover:w-full" />
                </a>
              ))}
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-zinc-900 text-white px-8 py-3 rounded-full text-sm font-black hover:bg-edu-primary transition-all shadow-xl active:scale-95 leading-none"
              >
                Matrículas Abertas
              </motion.button>
            </div>

            <button className="md:hidden text-slate-900" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} className="absolute top-full left-6 right-6 mt-4 glass rounded-[2.5rem] p-10 md:hidden shadow-2xl border-white/40">
              <div className="flex flex-col gap-8 text-left font-black">
                {['Matérias', 'Metodologia', 'Preços'].map((link) => (
                  <a key={link} href="#" onClick={() => setIsOpen(false)} className="text-3xl text-slate-900 tracking-tighter border-b border-slate-100 pb-2">{link}</a>
                ))}
                <button className="w-full bg-edu-primary text-white py-5 rounded-2xl font-black text-xl shadow-lg">Inscrição 2026</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO COM PROFUNDIDADE */}
      <section className="relative min-h-screen flex items-center pt-10 pb-24 overflow-hidden">
        <div className="blob bg-indigo-400 w-150 h-150 -top-40 -left-40 opacity-20" />
        <div className="blob bg-rose-400 w-150 h-150 -bottom-40 -right-40 opacity-20 delay-1000" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-12 gap-16 items-center text-left text-slate-900">
            <motion.div 
              initial={{ opacity: 0, x: -50 }} 
              animate={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md px-5 py-2 rounded-full text-[11px] font-black uppercase tracking-[0.25em] mb-10 border border-white/40 shadow-sm text-edu-primary">
                <Target size={16} /> O Futuro Começa Aqui
              </div>
              
              <h1 className="text-6xl md:text-[100px] font-black leading-[0.85] mb-10 tracking-tighter text-slate-900">
                O ATL QUE <br />
                <span className="text-gradient">ACENDE</span> A <br />
                CURIOSIDADE.
              </h1>
              
              <p className="text-xl md:text-2xl text-slate-500 mb-14 max-w-xl leading-relaxed font-semibold italic border-l-4 border-edu-primary pl-6">
                Não somos apenas um centro de estudos. Somos o laboratório onde o potencial do seu filho se transforma em superpoderes.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start gap-8">
                <motion.button 
                  /* CORREÇÃO AQUI: boxShadow em vez de shadow */
                  whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-edu-primary text-white px-12 py-6 rounded-[2rem] font-black text-2xl shadow-2xl flex items-center gap-4 transition-all"
                >
                  Agendar Visita <ArrowRight size={28} />
                </motion.button>
                <div className="flex items-center gap-4 text-left">
                  <div className="flex -space-x-4">
                    {[1,2,3].map(i => (
                      <div key={i} className="w-14 h-14 rounded-full border-4 border-white bg-slate-200 overflow-hidden shadow-lg shrink-0">
                        <img src={`https://i.pravatar.cc/150?u=${i+10}`} alt="aluno" />
                      </div>
                    ))}
                  </div>
                  <div className="text-left leading-tight">
                    <div className="flex text-yellow-500 gap-0.5"><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/><Star size={12} fill="currentColor"/></div>
                    <span className="text-sm font-black text-slate-900">+200 Famílias</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              style={{ scale }}
              className="lg:col-span-5 relative"
            >
              <div className="rounded-[4rem] overflow-hidden shadow-2xl border-[12px] border-white rotate-2 group hover:rotate-0 transition-transform duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop" 
                  className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  alt="Aprendizado Ativo" 
                />
              </div>
              <motion.div 
                style={{ y: y2 }}
                className="absolute -top-10 -right-10 glass p-8 rounded-[2.5rem] shadow-2xl hidden lg:block border-white/60 text-left"
              >
                <Brain className="text-edu-primary mb-3" size={40} />
                <p className="text-xl font-black text-slate-900 leading-tight">Neuro <br/>Educação</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. EXPLORER (BENTO GRID) */}
      <section className="py-40 bg-white relative">
        <div className="max-w-7xl mx-auto px-6 text-left">
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-5 mb-12 text-left text-zinc-900">
              <span className="text-edu-primary font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">Nosso Currículo</span>
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter uppercase leading-none text-left">Explore as <br /><span className="text-gradient">Aventuras.</span></h2>
              <p className="text-xl text-slate-500 font-bold mb-10 text-left">Desenhámos cada matéria para ser sentida, não apenas lida.</p>
              <button className="flex items-center gap-3 text-lg font-black text-edu-primary group">
                Ver Plano de Estudos Completo <ChevronRight className="group-hover:translate-x-2 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                { name: 'Coding', icon: Rocket, color: 'bg-indigo-600', desc: 'Criar mundos digitais com lógica.', size: 'h-80' },
                { name: 'Artes', icon: Palette, color: 'bg-rose-500', desc: 'Expressão sem limites.', size: 'h-80 md:mt-12' },
                { name: 'Ciências', icon: Cpu, color: 'bg-emerald-500', desc: 'Como o mundo funciona.', size: 'h-80' },
                { name: 'Brain Gym', icon: Brain, color: 'from-amber-400 to-orange-600', desc: 'Agilidade mental extrema.', size: 'h-80 md:mt-12' }
              ].map((s, i) => (
                <motion.div 
                  key={i}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`${s.size} rounded-[3rem] p-10 text-white relative overflow-hidden shadow-2xl group transition-all text-left`}
                >
                  <div className={`absolute inset-0 bg-linear-to-br ${s.color} opacity-90 group-hover:opacity-100 transition-opacity`} />
                  <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-xl rounded-2xl flex items-center justify-center">
                      <s.icon size={36} />
                    </div>
                    <div>
                      <h3 className="text-3xl font-black mb-2 tracking-tighter uppercase">{s.name}</h3>
                      <p className="text-white/80 font-bold leading-tight">{s.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. METODOLOGIA */}
      <section className="py-40 bg-slate-900 text-white relative overflow-hidden text-left text-zinc-300">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-edu-primary/10 blur-[120px] pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-left">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="text-left text-white">
              <span className="text-edu-primary font-black uppercase tracking-[0.4em] text-[10px] mb-8 block text-left">Método EduSpark</span>
              <h2 className="text-5xl md:text-[80px] font-black mb-10 leading-[0.9] tracking-tighter uppercase text-left">
                Ensinamos a <br /><span className="italic text-transparent bg-clip-text bg-linear-to-r from-edu-primary to-indigo-400">pensar</span>, <br />não a decorar.
              </h2>
              <div className="space-y-10 text-left">
                {[
                  { title: 'Neurociência Aplicada', desc: 'Entendemos o ritmo único de cada cérebro.', icon: Brain },
                  { title: 'Foco no Indivíduo', desc: 'Acompanhamento personalizado em cada passo.', icon: Users }
                ].map((item, i) => (
                  <div key={i} className="flex gap-6 items-start group text-left">
                    <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-edu-primary border border-white/10 group-hover:bg-edu-primary group-hover:text-white transition-all shrink-0">
                      <item.icon size={30} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-black mb-2 tracking-tight">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <motion.div 
                style={{ y: smoothY }}
                className="rounded-[5rem] overflow-hidden border-[16px] border-white/5 shadow-2xl relative"
              >
                <img src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2132&auto=format&fit=crop" alt="Methodology" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </motion.div>
              <motion.div 
                whileHover={{ rotate: 0, scale: 1.1 }}
                className="absolute -bottom-10 -left-10 glass p-10 rounded-[3rem] text-slate-900 max-w-64 shadow-2xl -rotate-6 border-white/60 text-left"
              >
                <div className="text-6xl font-black text-edu-primary mb-4 leading-none tracking-tighter">98%</div>
                <p className="font-black text-sm uppercase tracking-widest text-slate-500 leading-tight">De Sucesso e Melhora Radical nas Notas</p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CTA FINAL */}
      <section className="py-40 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            whileInView={{ scale: [0.95, 1], opacity: [0, 1] }}
            className="bg-zinc-900 rounded-[4rem] p-12 md:p-32 text-center text-white relative overflow-hidden shadow-2xl"
          >
            <div className="blob bg-edu-primary w-full h-full -top-1/2 -left-1/2 opacity-20" />
            <div className="relative z-10">
              <h2 className="text-5xl md:text-8xl font-black mb-12 tracking-tighter leading-none uppercase">
                Vamos acender a <br /><span className="text-gradient italic">faísca</span> do seu filho?
              </h2>
              <p className="text-xl md:text-2xl text-slate-400 mb-16 max-w-2xl mx-auto font-bold uppercase tracking-widest">
                Vagas limitadas para o 2º Semestre de 2026.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-zinc-950">
                <button className="bg-white text-zinc-950 px-12 py-6 rounded-[2.5rem] font-black text-2xl hover:scale-105 transition-all shadow-white/20 shadow-2xl active:scale-95 leading-none">
                  Marcar Visita Agora
                </button>
                <button className="text-xl font-black uppercase tracking-widest border-b-4 border-edu-primary pb-2 hover:text-edu-primary transition-colors text-white">
                  Pedido de Informação
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 6. FOOTER */}
      <footer className="py-20 bg-slate-50 border-t border-slate-200 text-center flex flex-col items-center gap-4">
        <div className="flex gap-4 opacity-30">
             <Trophy size={24} /> <GraduationCap size={24} /> <Target size={24} />
        </div>
        <p className="text-[11px] font-black uppercase tracking-[0.6em] text-zinc-400 leading-relaxed">
          EduSpark ATL · Lisboa 2026 · Powered by Scuta Digital
        </p>
      </footer>
    </div>
  );
}