import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight, Home, Paintbrush, Hammer, ChevronRight, Sparkles } from 'lucide-react';

export default function LuminaSample() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);

  return (
    <div className="min-h-screen bg-[#fdf8f6] text-slate-900 font-serif selection:bg-orange-200 overflow-x-hidden">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed w-full z-50 p-8 flex justify-between items-center mix-blend-difference text-white">
        <span className="text-2xl font-black uppercase tracking-[0.2em]">LUMINA</span>
        <button className="text-[10px] uppercase font-black tracking-[0.3em] border-b border-white/50 hover:border-white transition-all">Menu</button>
      </nav>

      {/* --- HERO EDITORIAL --- */}
      <section className="h-screen flex flex-col justify-center items-center px-6 relative">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-7xl md:text-[120px] font-light text-center tracking-tighter leading-[0.9]"
        >
          A ARTE DE <br /><span className="italic">REMODELAR.</span>
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}
          className="absolute bottom-12 text-[10px] uppercase tracking-[0.4em] font-black"
        >
          Lisboa · Porto · Algarve
        </motion.div>
      </section>

      {/* --- SERVIÇOS (LAYOUT EDITORIAL) --- */}
      <section className="max-w-7xl mx-auto py-32 px-6">
        <div className="grid md:grid-cols-3 gap-16 border-t border-slate-300">
          {[
            { icon: Home, title: "Reabilitação", desc: "Damos nova vida a estruturas históricas com respeito pela identidade." },
            { icon: Paintbrush, title: "Interiores", desc: "Design curado para refletir o seu estilo de vida único." },
            { icon: Hammer, title: "Execução", desc: "Precisão técnica e cumprimento rigoroso de prazos." }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              whileHover={{ y: -10 }}
              className="pt-12 group cursor-pointer"
            >
              <s.icon className="mb-8 text-orange-800" size={32} strokeWidth={1} />
              <h3 className="text-2xl font-bold uppercase tracking-widest mb-6">{s.title}</h3>
              <p className="text-slate-500 leading-relaxed font-medium">{s.desc}</p>
              <div className="mt-8 flex items-center gap-2 text-sm font-black uppercase tracking-widest group-hover:text-orange-800 transition-colors">
                Saber mais <ChevronRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- FOTO DE DESTAQUE COM PARALAXE --- */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto overflow-hidden rounded-3xl h-[600px] relative">
          <motion.img 
            style={{ y: y1 }}
            src="/prisma01.jpg" 
            className="w-full h-full object-cover scale-110"
            alt="Obra de Luxo"
          />
        </div>
      </section>

      {/* --- CTA DE VALORIZAÇÃO --- */}
      <section className="py-32 px-6 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Sparkles className="mx-auto mb-10 text-orange-500" size={40} />
          <h2 className="text-5xl md:text-7xl font-light mb-12 tracking-tighter italic">
            O seu imóvel é o seu ativo mais importante. <br />
            <span className="font-bold not-italic text-orange-500">Vamos valorizá-lo?</span>
          </h2>
          <button className="px-12 py-6 bg-white text-slate-900 font-black uppercase tracking-widest text-sm rounded-full hover:bg-orange-500 hover:text-white transition-all shadow-2xl">
            Solicitar Avaliação de Projeto
          </button>
        </div>
      </section>

      {/* --- FOOTER SIMPLIFICADO --- */}
      <footer className="py-20 text-center text-xs font-black uppercase tracking-[0.3em] text-slate-400">
        © 2024 Lumina Home & Interiors · Estratégia Scuta
      </footer>
    </div>
  );
}