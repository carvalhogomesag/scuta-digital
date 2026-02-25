import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight, MousePointer2, Sparkles } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

export default function Samples() {
  return (
    <section id="samples" className="relative py-32 px-6 overflow-hidden noise">
      {/* Luz de fundo decorativa */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-scuta-accent/5 blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* --- CABEÇALHO ESTRATÉGICO --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <div className="flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> Portfólio de Alta Conversão
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-scuta-silk leading-none">
              Experiências que <br />
              <span className="text-scuta-gradient">Geram Resultados.</span>
            </h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-left font-medium leading-relaxed md:mb-2"
          >
            Não criamos apenas sites. Desenhamos ferramentas de venda personalizadas para cada setor do mercado português.
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
                className="group relative block h-full bento-card border border-white/5 overflow-hidden"
              >
                {/* Efeito de Brilho de Fundo Dinâmico (Sutil) */}
                <div 
                  className="absolute -top-24 -right-24 w-48 h-48 blur-[80px] opacity-0 group-hover:opacity-20 transition-opacity duration-700 rounded-full"
                  style={{ backgroundColor: site.theme.primary }}
                />

                {/* Badge do Setor com Estilo Glass */}
                <div className="flex justify-between items-start mb-10">
                  <span 
                    className="px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest bg-white/5 border border-white/10 text-slate-300 group-hover:border-white/20 transition-all"
                  >
                    {site.sector}
                  </span>
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center bg-scuta-primary border border-white/5 text-slate-500 group-hover:text-scuta-silk group-hover:border-white/20 transition-all shadow-2xl"
                  >
                    <MousePointer2 size={18} />
                  </div>
                </div>

                {/* Conteúdo do Cliente */}
                <div className="mb-8 text-left">
                  <div className="flex items-center gap-2 text-scuta-highlight mb-3 text-[10px] font-black uppercase tracking-widest">
                    <AlertCircle size={14} /> Caso de Estudo
                  </div>
                  <h3 className="text-3xl font-black text-scuta-silk mb-4 tracking-tighter leading-none group-hover:text-scuta-gradient transition-all">
                    {site.companyName}
                  </h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed line-clamp-2">
                    {site.pain}
                  </p>
                </div>

                {/* Barra de Progresso/Sucesso Visual */}
                <div className="flex items-center gap-3 text-scuta-silk/90 mb-10 text-left">
                  <div 
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${site.theme.primary}20`, color: site.theme.primary }}
                  >
                    <CheckCircle size={18} />
                  </div>
                  <p className="text-xs font-bold leading-tight uppercase tracking-tight">
                    Solução de Alta Performance Ativada
                  </p>
                </div>

                {/* Botão de Ação Dinâmico */}
                <div 
                  className="p-4 rounded-xl flex items-center justify-between transition-all duration-500 shadow-2xl group-hover:scale-[1.02]"
                  style={{ backgroundColor: site.theme.primary }}
                >
                  <div className="flex items-center gap-3">
                    <TrendingUp size={18} className="text-white/80" />
                    <span className="text-[10px] font-black uppercase tracking-widest text-white">Explorar Estratégia</span>
                  </div>
                  <ArrowRight size={18} className="text-white transform group-hover:translate-x-1 transition-transform" />
                </div>

                {/* Borda de Brilho (Stroke) Ativa no Hover */}
                <div 
                  className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2 border-transparent"
                  style={{ borderColor: `${site.theme.primary}40` }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* --- FOOTER DA SECÇÃO --- */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col items-center gap-6"
        >
          <div className="flex gap-2 text-scuta-highlight animate-pulse">
            <Sparkles size={16} />
            <Sparkles size={16} />
            <Sparkles size={16} />
          </div>
          <p className="text-zinc-500 font-black text-[10px] uppercase tracking-[0.5em] text-center">
            Qualidade Certificada · Scuta Digital Engine
          </p>
        </motion.div>
      </div>
    </section>
  );
}