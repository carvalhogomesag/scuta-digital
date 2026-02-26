import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

export default function Samples() {
  return (
    <section id="samples" className="relative py-32 px-6 overflow-hidden noise bg-scuta-primary">
      {/* Brilho de fundo para profundidade */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-scuta-accent/5 blur-[180px] pointer-events-none opacity-50" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- CABEÇALHO --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} className="animate-pulse" /> Portfólio Estratégico
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-white leading-none">
              Experiências que <br />
              <span className="text-scuta-gradient">Convertem Cliques.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-300 max-w-sm text-left font-medium leading-relaxed md:mb-2 opacity-80"
          >
            Cada projeto é um ecossistema único, desenhado para resolver as dores específicas do mercado português.
          </motion.p>
        </div>

        {/* --- BENTO GRID DE PROJETOS --- */}
        <div className="grid md:grid-cols-3 gap-8">
          {SAMPLE_SITES.map((site, index) => (
            <motion.div
              key={site.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <Link 
                to={`/exemplos/${site.slug}`}
                className="group relative block h-full bento-card border border-white/10 overflow-hidden bg-scuta-surface/90"
              >
                {/* Efeito de Brilho Dinâmico */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: site.theme.primary }}
                />

                {/* Badge do Setor */}
                <div className="flex justify-between items-start mb-12">
                  <span 
                    className="px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-white shadow-2xl"
                  >
                    {site.sector}
                  </span>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-black/40 border border-white/10 text-white group-hover:bg-white group-hover:text-black transition-all shadow-2xl"
                  >
                    <MousePointer2 size={18} />
                  </div>
                </div>

                {/* Conteúdo: FOCO TOTAL EM CONTRASTE */}
                <div className="mb-10 text-left">
                  <div className="flex items-center gap-2 text-scuta-highlight mb-4 text-[10px] font-black uppercase tracking-[0.2em]">
                    <AlertCircle size={14} strokeWidth={3} /> Caso de Estudo
                  </div>
                  
                  {/* Título Branco Puro */}
                  <h3 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tighter leading-none group-hover:text-scuta-gradient transition-all duration-300">
                    {site.companyName}
                  </h3>
                  
                  {/* Descrição: Mudada de Slate-500 para Slate-200 (Contraste Máximo) */}
                  <p className="text-base text-slate-200 font-medium leading-relaxed line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                    {site.pain}
                  </p>
                </div>

                {/* Barra de Status */}
                <div className="flex items-center gap-3 py-3 px-4 rounded-2xl bg-white/5 border border-white/5 mb-10 text-left">
                  <div 
                    className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 shadow-lg"
                    style={{ backgroundColor: site.theme.primary, color: 'white' }}
                  >
                    <CheckCircle size={14} strokeWidth={3} />
                  </div>
                  <p className="text-[10px] font-black text-white/90 uppercase tracking-widest">
                    Performance Ativada
                  </p>
                </div>

                {/* Botão de Ação */}
                <div 
                  className="p-5 rounded-2xl flex items-center justify-between transition-all duration-500 shadow-[0_15px_30px_-10px_rgba(0,0,0,0.5)] group-hover:scale-[1.02] group-hover:shadow-scuta-highlight/20"
                  style={{ backgroundColor: site.theme.primary }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-white" strokeWidth={3} />
                    <span className="text-xs font-black uppercase tracking-widest text-white">Analisar Estratégia</span>
                  </div>
                  <ArrowRight size={20} className="text-white transform group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Borda de Iluminação no Hover */}
                <div 
                  className="absolute inset-0 rounded-4xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-transparent"
                  style={{ borderColor: `${site.theme.primary}60` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER SECÇÃO --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-6"
        >
          <p className="text-slate-500 font-black text-[10px] uppercase tracking-[0.5em] text-center">
            Standard de Qualidade Scuta Digital
          </p>
        </motion.div>
      </div>
    </section>
  );
}