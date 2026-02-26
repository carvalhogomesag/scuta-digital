import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Calculator, 
  Target, 
  GraduationCap, 
  ArrowRight, 
  CheckCircle2, 
  Plus,
  Zap,
  LineChart,
  BrainCircuit,
  ChevronRight
} from 'lucide-react';

export default function PrismaMathSample() {
  const { scrollYProgress } = useScroll();
  const yImage = useTransform(scrollYProgress, [0, 1], [0, -60]);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black overflow-x-hidden">
      
      {/* --- BACKGROUND TÉCNICO: GRID PAPEL MILIMÉTRICO --- */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-30" />
        <div className="absolute top-0 left-0 w-full h-full bg-linear-to-b from-cyan-500/5 via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        
        {/* --- NAVBAR PRISMA (MINIMALISTA) --- */}
        <nav className="sticky top-12 w-full py-6 px-6 z-50">
          <div className="max-w-7xl mx-auto flex justify-between items-center bg-slate-900/40 backdrop-blur-xl border border-white/5 rounded-2xl px-8 py-4">
            <div className="flex items-center gap-3">
              <div className="size-10 bg-cyan-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <Plus className="text-black" size={24} />
              </div>
              <span className="text-xl font-black tracking-tighter uppercase italic">PRISMA<span className="text-cyan-400">MATH</span></span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-[10px] font-black uppercase tracking-[0.2em]">
              <a href="#" className="hover:text-cyan-400 transition-colors">Método Analítico</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Preparação Exames</a>
              <button className="bg-white text-black px-6 py-2.5 rounded-lg hover:bg-cyan-400 transition-all leading-none">
                Agendar Diagnóstico
              </button>
            </div>
          </div>
        </nav>

        {/* --- HERO: O CÓDIGO DO SUCESSO --- */}
        <section className="relative pt-20 pb-32 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] font-black uppercase tracking-[0.3em] mb-8">
                <BrainCircuit size={14} /> Performance Académica de Elite
              </div>
              
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 italic uppercase">
                Domina a <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500 italic">
                  Lógica.
                </span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg mb-12 leading-tight font-medium border-l-2 border-cyan-500/30 pl-6">
                Não ensinamos a decorar fórmulas. Ensinamos a arquitetura do pensamento necessária para vencer os Exames Nacionais e entrar no curso dos teus sonhos.
              </p>

              <div className="flex flex-col sm:flex-row gap-6">
                <button className="px-10 py-5 bg-cyan-500 text-black font-black rounded-xl flex items-center justify-center gap-3 hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)] group uppercase text-sm tracking-widest">
                  Reservar Sessão <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* FOTO 01: Hero Image com Grid Técnico */}
            <motion.div 
              style={{ y: yImage }}
              className="relative aspect-square rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="/prisma01.jpg" 
                alt="Explicações Profissionais" 
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-1000"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#020617] via-transparent to-transparent opacity-60" />
              
              {/* Overlay de Dados Técnicos */}
              <div className="absolute top-8 right-8 bg-black/40 backdrop-blur-md p-4 rounded-xl border border-white/10">
                <LineChart className="text-cyan-400 mb-2" size={24} />
                <div className="text-2xl font-black">+4.5</div>
                <div className="text-[9px] font-bold uppercase tracking-widest text-slate-400">Média de Valores Recurperados</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BENTO GRID: A ENGENHARIA DO MÉTODO --- */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card de Foco (FOTO 02) */}
              <motion.div 
                whileHover={{ y: -10 }}
                className="md:col-span-5 h-[500px] rounded-4xl overflow-hidden relative group border border-white/5"
              >
                <img src="/prisma02.jpg" alt="Estudo Focado" className="size-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/40 to-transparent" />
                <div className="absolute bottom-10 left-10 text-left">
                  <div className="size-12 bg-cyan-500 rounded-xl flex items-center justify-center mb-6 text-black shadow-lg">
                    <Target size={28} />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tighter uppercase italic">Diagnóstico <br /> Cirúrgico.</h3>
                  <p className="text-slate-300 font-medium max-w-xs">Identificamos as lacunas de base que impedem o progresso no secundário.</p>
                </div>
              </motion.div>

              {/* Grid de Características Técnicas */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 leading-none">
                {[
                  { icon: Calculator, title: "Análise de Base", desc: "Revisão intensiva de conceitos fundamentais do 1º e 2º ciclo.", color: "text-blue-400" },
                  { icon: Zap, title: "Aceleração Provas", desc: "Técnicas de gestão de tempo e resolução rápida para testes.", color: "text-cyan-400" },
                  { icon: GraduationCap, title: "Exames Nacionais", desc: "Simulacros reais com o grau de dificuldade oficial do IAVE.", color: "text-indigo-400" },
                  { icon: CheckCircle2, title: "Suporte Digital", desc: "Acesso a plataforma exclusiva com resoluções em vídeo.", color: "text-emerald-400" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="p-10 rounded-4xl bg-white/5 border border-white/5 hover:border-cyan-500/30 transition-all text-left flex flex-col justify-between"
                  >
                    <item.icon className={`${item.color} mb-8`} size={40} />
                    <div>
                      <h4 className="text-2xl font-black mb-4 tracking-tight uppercase italic">{item.title}</h4>
                      <p className="text-slate-400 font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS: PRECISÃO EM NÚMEROS --- */}
        <section className="py-24 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { label: 'Nota Média', val: '17.4' },
              { label: 'Sucesso Exames', val: '100%' },
              { label: 'Alunos/Ano', val: '45' },
              { label: 'Anos de Método', val: '12' },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-7xl font-black text-white mb-2 tracking-tighter italic">{stat.val}</div>
                <div className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.3em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* --- CTA FINAL (FOTO 03) --- */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-slate-900 rounded-[3.5rem] overflow-hidden border border-white/10 relative group">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-12 md:p-24 relative z-10 text-left">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-8 uppercase italic">
                    O Teu Futuro <br /><span className="text-cyan-400">Calculado.</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-12 font-medium max-w-md">
                    As vagas para o acompanhamento personalizado do próximo trimestre estão limitadas. Garante a tua vaga no grupo de alta performance.
                  </p>
                  <button className="px-12 py-6 bg-white text-black font-black text-xl rounded-2xl hover:bg-cyan-400 transition-all flex items-center gap-4 group">
                    QUERO COMEÇAR AGORA <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                  </button>
                </div>
                
                {/* FOTO 03 */}
                <div className="h-[600px] relative overflow-hidden">
                  <img src="/prisma03.jpg" alt="Sucesso Académico" className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-1000" />
                  <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER PRISMA --- */}
        <footer className="py-20 px-6 border-t border-white/5">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <div className="size-8 bg-cyan-500 rounded flex items-center justify-center font-black text-black italic text-xs tracking-tighter">Δ</div>
              <span className="font-black tracking-tighter text-xl uppercase italic">PRISMA<span className="text-cyan-400 text-sm">MATH</span></span>
            </div>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.5em]">
              Portugal · Método Desenvolvido por Scuta Digital
            </p>
            <div className="flex gap-8 text-[10px] font-black uppercase tracking-widest text-slate-400">
               <a href="#" className="hover:text-cyan-400 transition-colors">Método</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
               <a href="#" className="hover:text-cyan-400 transition-colors">Contactos</a>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}