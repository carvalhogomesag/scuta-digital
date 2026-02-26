import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Calculator, 
  BookOpen, 
  Users, 
  ArrowRight, 
  ChevronRight, 
  Menu, 
  X,
  GraduationCap,
  BrainCircuit,
  Target,
  CheckCircle2,
  TrendingUp,
  Zap,
  Award
} from 'lucide-react';

export default function PrismaMathSample() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Efeito de Parallax para os ícones flutuantes
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900 font-prisma-display selection:bg-prisma-indigo/10 overflow-x-hidden">
      
      {/* --- BACKGROUND ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 math-grid opacity-60" />
        {/* Usando w- e h- para garantir compatibilidade caso o spacing scale 150 não esteja definido */}
        <div className="prisma-blob w-150 h-150 bg-prisma-indigo/10 -top-40 -left-40" />
        <div className="prisma-blob w-130 h-130 bg-prisma-cyan/10 bottom-20 -right-20 delay-700" />
      </div>

      <div className="relative z-10">
        
        {/* --- NAVBAR INTERNAL --- */}
        <nav className={`fixed top-11 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'py-4' : 'py-8'}`}>
          <div className="max-w-7xl mx-auto px-6">
            <div className={`glass-light rounded-full px-8 py-4 flex items-center justify-between transition-all ${isScrolled ? 'shadow-2xl border-prisma-indigo/10' : 'bg-transparent border-transparent shadow-none'}`}>
              <div className="flex items-center gap-3">
                <div className="size-10 bg-prisma-indigo rounded-xl flex items-center justify-center shadow-lg shadow-prisma-indigo/30 transition-transform hover:rotate-12">
                  <Calculator className="text-white size-6" />
                </div>
                <span className="font-prisma-display font-black text-xl tracking-tighter text-slate-900 uppercase italic">
                  PRISMA<span className="text-prisma-indigo">MATH</span>
                </span>
              </div>

              <div className="hidden md:flex items-center gap-10">
                {['Projeto', 'Aulas', 'Resultados', 'Contactos'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-prisma-indigo transition-colors leading-none">
                    {item}
                  </a>
                ))}
                <button className="px-8 py-3 bg-prisma-indigo text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-xl shadow-prisma-indigo/20 active:scale-95">
                  Começar Agora
                </button>
              </div>

              <button className="md:hidden text-slate-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                {mobileMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </nav>

        {/* --- HERO --- */}
        <section className="relative min-h-screen flex items-center justify-center pt-24 px-6 overflow-hidden">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-prisma-indigo/5 border border-prisma-indigo/10 text-[10px] font-black tracking-[0.3em] uppercase mb-10 text-prisma-indigo leading-none">
                Educação Matemática de Alta Performance
              </span>
              
              <h1 className="text-6xl md:text-[110px] font-black tracking-tighter leading-[0.85] mb-10 text-slate-900 uppercase italic">
                Aprende com <br />
                <span className="text-prisma-gradient">Clareza Absoluta.</span>
              </h1>
              
              <p className="max-w-2xl mx-auto text-xl md:text-2xl text-slate-500 leading-relaxed mb-14 font-medium italic">
                Desbloqueia o teu potencial com explicações personalizadas, estratégias de estudo validadas e foco total em Exames Nacionais.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <button className="group px-12 py-6 bg-prisma-indigo text-white rounded-2xl font-black text-xl flex items-center gap-4 hover:scale-105 transition-all shadow-2xl shadow-prisma-indigo/30 active:scale-95 leading-none">
                  Agendar Aula Grátis
                  <ArrowRight className="size-6 group-hover:translate-x-2 transition-transform" />
                </button>
                <button className="px-12 py-6 bg-white border border-slate-200 text-slate-900 rounded-2xl font-black text-xl hover:bg-slate-50 transition-all shadow-sm leading-none">
                  O Método
                </button>
              </div>
            </motion.div>

            {/* ÍCONES FLUTUANTES COM STYLE CORRIGIDO (MERGED) */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              {[
                { Icon: BrainCircuit, top: '20%', left: '5%', color: 'text-prisma-indigo/20', size: 80 },
                { Icon: Target, top: '65%', left: '10%', color: 'text-prisma-cyan/20', size: 60 },
                { Icon: BookOpen, top: '15%', left: '85%', color: 'text-prisma-indigo/20', size: 70 },
                { Icon: GraduationCap, top: '75%', left: '80%', color: 'text-prisma-cyan/20', size: 90 },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: i }}
                  className={`absolute hidden lg:block ${item.color}`}
                  style={{ 
                    y: y1, 
                    top: item.top, 
                    left: item.left 
                  }} // ATRIBUTO ÚNICO MERGEADO AQUI
                >
                  <item.Icon size={item.size} strokeWidth={1} />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PHOTO SLOTS --- */}
        <section id="galeria" className="py-32 bg-slate-50 border-y border-slate-200">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8 text-left">
              <div>
                <span className="text-prisma-indigo font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Espaço & Foco</span>
                <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 uppercase italic leading-none">Galeria de <br />Excelência.</h2>
              </div>
              <p className="text-slate-500 max-w-sm font-medium leading-relaxed mb-2 italic">
                Um vislumbre do nosso compromisso com o rigor técnico e o conforto absoluto do aluno.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { img: '/prisma01.jpg', title: 'Foco Total', desc: 'Ambiente clínico para máxima concentração.' },
                { img: '/prisma02.jpg', title: 'Tecnologia', desc: 'Ferramentas digitais para visualização lógica.' },
                { img: '/prisma03.jpg', title: 'Sucesso', desc: 'Acompanhamento rigoroso até ao objetivo.' }
              ].map((photo, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className="group relative aspect-[4/5] rounded-4xl overflow-hidden shadow-2xl border border-white"
                >
                  <img 
                    src={photo.img} 
                    alt={photo.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 p-10 translate-y-6 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 text-left">
                    <h3 className="text-3xl font-black text-white mb-2 tracking-tighter italic uppercase">{photo.title}</h3>
                    <p className="text-white/80 font-medium text-sm leading-tight">{photo.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* --- PROJECT SECTION --- */}
        <section id="projeto" className="py-32 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -top-12 -left-12 size-80 bg-prisma-indigo/5 rounded-full blur-3xl" />
                <div className="rounded-[4rem] overflow-hidden shadow-3xl relative z-10 border-8 border-white bg-slate-100 aspect-[4/5]">
                  <img src="/prisma02.jpg" alt="Estudo Prisma" className="size-full object-cover" />
                </div>
                <motion.div 
                  initial={{ x: 20 }}
                  whileInView={{ x: 0 }}
                  className="absolute -bottom-10 -right-6 glass-light p-10 rounded-4xl max-w-[300px] z-20 shadow-2xl text-left"
                >
                  <div className="flex items-center gap-5 mb-5">
                    <div className="size-16 bg-prisma-indigo rounded-2xl flex items-center justify-center text-white shadow-xl shadow-prisma-indigo/30">
                      <TrendingUp size={32} />
                    </div>
                    <div>
                      <div className="text-4xl font-black text-slate-900 tracking-tighter leading-none">98%</div>
                      <div className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em]">Aprovação</div>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 font-bold leading-relaxed italic">Alunos que superaram as metas iniciais e transformaram os resultados.</p>
                </motion.div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-left"
              >
                <span className="text-prisma-indigo font-black uppercase tracking-[0.3em] text-[10px] mb-8 block">Engenharia Académica</span>
                <h2 className="text-5xl md:text-7xl font-black mb-10 leading-[0.9] tracking-tighter text-slate-900 uppercase italic">
                  Um caminho <span className="text-prisma-indigo">lógico</span> para o teu sucesso.
                </h2>
                
                <div className="space-y-10">
                  {[
                    { title: "Personalização", desc: "Cada aluno tem o seu ritmo. Identificamos lacunas de base e preenchemo-las cirurgicamente.", icon: Zap },
                    { title: "Raciocínio Puro", desc: "Abordagem analítica: ensinamos a pensar, não a decorar fórmulas que se esquecem no dia seguinte.", icon: BrainCircuit },
                    { title: "Preparação de Exame", desc: "Foco total no IAVE. Simulacros reais e estratégias de gestão de ansiedade e tempo.", icon: Award }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-6 group">
                      <div className="shrink-0 size-16 rounded-2xl bg-prisma-indigo/5 border border-prisma-indigo/10 flex items-center justify-center transition-all group-hover:bg-prisma-indigo group-hover:text-white group-hover:scale-110">
                        <item.icon className="size-8" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-2xl font-black mb-2 text-slate-900 tracking-tight uppercase italic">{item.title}</h4>
                        <p className="text-slate-500 leading-relaxed font-semibold italic">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- LESSONS --- */}
        <section id="aulas" className="py-32 bg-slate-50 border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-6 text-center mb-24">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 uppercase italic leading-none">O Teu Escalão.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-xl font-medium italic">Suporte especializado em todos os ciclos de ensino, com foco em resultados práticos.</p>
          </div>

          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "Ensino Básico", type: "Fundações", features: ["Recuperação de Notas", "Apoio ao Estudo Diário", "Cálculo Mental"], icon: BookOpen },
              { title: "Ensino Secundário", type: "Elite", features: ["Exames Nacionais", "Geometria Descritiva", "Matemática A/B"], popular: true, icon: GraduationCap },
              { title: "Ensino Superior", type: "Cálculo", features: ["Análise Matemática", "Álgebra Linear", "Probabilidades"], icon: BrainCircuit }
            ].map((lesson, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`relative p-12 rounded-[48px] border transition-all duration-500 hover:shadow-2xl flex flex-col group ${lesson.popular ? 'bg-white border-prisma-indigo shadow-xl' : 'bg-white border-slate-200'} text-left`}
              >
                {lesson.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-prisma-indigo text-white text-[10px] font-black rounded-full uppercase tracking-[0.2em] shadow-lg">
                    Mais Procurado
                  </div>
                )}
                <div className={`size-16 rounded-2xl mb-10 flex items-center justify-center transition-transform group-hover:rotate-12 ${lesson.popular ? 'bg-prisma-indigo text-white shadow-xl' : 'bg-slate-100 text-slate-600'}`}>
                  <lesson.icon className="size-8" />
                </div>
                <h3 className="text-3xl font-black mb-2 text-slate-900 tracking-tighter uppercase italic leading-none">{lesson.title}</h3>
                <div className="text-lg font-black mb-12 text-prisma-indigo uppercase tracking-widest">{lesson.type}</div>
                <ul className="space-y-6 mb-14 flex-grow">
                  {lesson.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-4 text-slate-600 font-bold italic">
                      <div className="size-2 rounded-full bg-prisma-indigo/30" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-6 rounded-2xl font-black text-sm uppercase tracking-widest transition-all ${lesson.popular ? 'bg-prisma-indigo text-white hover:bg-slate-900 shadow-2xl' : 'bg-slate-900 text-white hover:bg-prisma-indigo'}`}>
                  Saber Mais
                </button>
              </motion.div>
            ))}
          </div>
        </section>

        {/* --- FOOTER --- */}
        <footer className="py-32 bg-white border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-24">
              <div className="md:col-span-2 text-left">
                <div className="flex items-center gap-4 mb-10">
                  <div className="size-14 bg-prisma-indigo rounded-2xl flex items-center justify-center shadow-xl shadow-prisma-indigo/20">
                    <Calculator className="text-white size-8" />
                  </div>
                  <span className="font-black text-3xl tracking-tighter text-slate-900 uppercase italic">
                    PRISMA<span className="text-prisma-indigo">MATH</span>
                  </span>
                </div>
                <p className="text-slate-500 max-w-sm mb-12 text-lg font-semibold italic leading-relaxed">
                  Dedicados a transformar a jornada académica de cada aluno através de um ensino lógico, personalizado e inspirador.
                </p>
              </div>
              <div className="text-left">
                <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-400 leading-none">Navegação</h4>
                <ul className="space-y-6">
                  {['O Projeto', 'Aulas', 'Resultados', 'Galeria'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-slate-600 font-bold hover:text-prisma-indigo transition-all uppercase text-xs tracking-widest leading-none">{item}</a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-left">
                <h4 className="font-black mb-10 uppercase text-[10px] tracking-[0.3em] text-slate-400 leading-none">Contacto</h4>
                <ul className="space-y-6 text-slate-600 font-bold italic text-sm">
                  <li>Lisboa / Online</li>
                  <li>geral@prismamath.pt</li>
                  <li>+351 914 044 748</li>
                </ul>
              </div>
            </div>
            <div className="pt-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.4em] text-slate-400">
              <p>© 2024 PRISMA MATEMÁTICA · PORTUGAL</p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}