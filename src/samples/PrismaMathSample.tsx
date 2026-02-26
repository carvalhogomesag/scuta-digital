import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  GraduationCap, 
  ChevronRight, 
  CheckCircle2, 
  Plus,
  ArrowUpRight,
  Zap
} from 'lucide-react';

const PrismaMathSample = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-50 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* BACKGROUND: Blueprint Grid (Distinto da Scuta) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        
        {/* --- HERO SECTION --- */}
        <section className="relative pt-32 pb-20 px-6">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-black uppercase tracking-[0.2em] mb-8">
                <Plus size={14} className="animate-spin-slow" /> 
                Método de Alta Performance
              </div>
              
              <h1 className="text-7xl md:text-9xl font-black tracking-tighter leading-[0.8] mb-8 italic">
                DOMINA O <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">CÁLCULO.</span>
              </h1>
              
              <p className="text-xl text-slate-400 max-w-lg mb-12 leading-relaxed font-medium">
                Do 1º ciclo ao acesso à Faculdade. Transformamos o medo da matemática na ferramenta mais poderosa do teu currículo académico.
              </p>

              <div className="flex flex-wrap gap-6">
                <button className="group px-8 py-5 bg-cyan-500 text-slate-950 font-black rounded-2xl flex items-center gap-3 hover:bg-cyan-400 transition-all shadow-[0_20px_40px_rgba(6,182,212,0.2)] hover:-translate-y-1">
                  AGENDAR DIAGNÓSTICO <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </button>
              </div>
            </motion.div>

            {/* FOTO 01: Hero Image com Efeito Paralaxe */}
            <motion.div 
              style={{ y: y1 }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-4xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <img 
                src="/prisma01.jpg" 
                alt="Explicações de Matemática" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700 scale-105 hover:scale-100"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#0f172a] via-transparent to-transparent opacity-60" />
              
              {/* Badge Flutuante */}
              <div className="absolute bottom-8 left-8 bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/20">
                <div className="text-4xl font-black text-cyan-400 tracking-tighter">18.5</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-300">Média em Exames Nacionais</div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- BENTO GRID: A ENGENHARIA DO SUCESSO --- */}
        <section className="py-24 px-6 bg-slate-900/50 border-y border-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
              
              {/* Card de Foco: FOTO 02 */}
              <motion.div 
                whileHover={{ scale: 0.99 }}
                className="md:col-span-5 h-[450px] rounded-4xl overflow-hidden relative group border border-slate-700"
              >
                <img src="/prisma02.jpg" alt="Estudo Focado" className="size-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-10 left-10">
                  <h3 className="text-3xl font-black text-white mb-2 tracking-tight">Foco Absoluto.</h3>
                  <p className="text-slate-300 font-medium">Ambiente desenhado para a concentração máxima.</p>
                </div>
              </motion.div>

              {/* Card de Metodologia */}
              <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Target, title: "Análise de Falhas", desc: "Detetamos onde o raciocínio bloqueia e corrigimos a base.", color: "text-orange-400" },
                  { icon: Zap, title: "Aceleração de Notas", desc: "Estratégias específicas para testes e exames nacionais.", color: "text-cyan-400" },
                  { icon: GraduationCap, title: "Acesso à Faculdade", desc: "Acompanhamento focado nas médias de Engenharia e Medicina.", color: "text-blue-400" },
                  { icon: Calculator, title: "Cálculo Mental", desc: "Desenvolvimento de agilidade cognitiva e lógica pura.", color: "text-emerald-400" },
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    whileHover={{ y: -5 }}
                    className="p-8 rounded-4xl bg-slate-800/40 border border-slate-700 hover:border-cyan-500/30 transition-all"
                  >
                    <item.icon className={`${item.color} mb-6`} size={32} />
                    <h4 className="text-xl font-black mb-3">{item.title}</h4>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* --- STATS SECTION --- */}
        <section className="py-24 px-6 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-16 uppercase italic">
              A prova está nos <span className="text-cyan-400">Resultados.</span>
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
              <div>
                <div className="text-6xl font-black text-white mb-2">+300</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Alunos Admitidos</div>
              </div>
              <div>
                <div className="text-6xl font-black text-white mb-2">100%</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Taxa de Sucesso</div>
              </div>
              <div className="col-span-2 md:col-span-1">
                <div className="text-6xl font-black text-white mb-2">#1</div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Em Rankings Locais</div>
              </div>
            </div>
          </div>
        </section>

        {/* --- CTA FINAL: FOTO 03 --- */}
        <section className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[3rem] overflow-hidden bg-slate-900 border border-white/5">
              <div className="grid lg:grid-cols-2 items-center">
                <div className="p-12 md:p-20 relative z-10">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none mb-8">
                    NÃO DEIXES <br /> PARA O <span className="text-orange-500 italic">EXAME.</span>
                  </h2>
                  <p className="text-lg text-slate-400 mb-10 font-medium">
                    As vagas para o acompanhamento personalizado do 3º período estão quase esgotadas. Garante o futuro académico do teu filho hoje.
                  </p>
                  <button className="px-12 py-6 bg-white text-slate-950 font-black rounded-2xl hover:scale-105 transition-all shadow-2xl flex items-center gap-4">
                    SOLICITAR VAGA AGORA <CheckCircle2 size={24} />
                  </button>
                </div>
                
                {/* FOTO 03 */}
                <div className="h-full min-h-[400px] relative">
                  <img src="/prisma03.jpg" alt="Resultados" className="absolute inset-0 w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-linear-to-r from-slate-900 via-transparent to-transparent lg:block hidden" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="py-12 border-t border-slate-800/50 px-6 text-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-slate-500">
             <div className="flex items-center gap-2">
                <div className="size-6 bg-cyan-500 rounded flex items-center justify-center font-black text-slate-950 text-[10px]">Δ</div>
                <span className="font-black tracking-widest text-white">PRISMA</span>
             </div>
             <p className="text-xs font-bold uppercase tracking-widest">© 2024 PRISMA MATEMÁTICA · EDUCAÇÃO DE ELITE</p>
             <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest">
                <a href="#" className="hover:text-cyan-400 transition-colors">Método</a>
                <a href="#" className="hover:text-cyan-400 transition-colors">Privacidade</a>
             </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrismaMathSample;