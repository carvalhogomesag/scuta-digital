import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, AlertCircle, TrendingUp, Smartphone, ShieldCheck, MousePointer2 } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

// IMPORTAÇÃO DOS SITES COM VIDA PRÓPRIA
import VitalisSample from '../samples/VitalisSample';

export default function SampleSitePage() {
  const { slug } = useParams<{ slug: string }>();
  const site = SAMPLE_SITES.find((s) => s.slug === slug);

  if (!site) return <Navigate to="/" replace />;

  document.title = `${site.companyName} | Demonstração Scuta Digital`;

  /**
   * CÉREBRO DE RENDERIZAÇÃO
   * Decide qual layout carregar com base no slug do cliente.
   */
  const renderBespokeContent = () => {
    // 1. Caso seja a Clínica, carrega a experiência única
    if (slug === 'clinica-vida-mais') {
      return <VitalisSample />;
    }

    // 2. Fallback para os outros projetos (Padrão Scuta)
    return (
      <section 
        className="relative py-28 md:py-48 px-6 overflow-hidden"
        style={{ backgroundColor: site.theme.secondary }}
      >
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          {site.bgStyle === "dots" && (
            <div className="h-full w-full" style={{ backgroundImage: `radial-gradient(${site.theme.primary} 1px, transparent 1px)`, backgroundSize: '30px 30px' }} />
          )}
          {site.bgStyle === "mesh" && (
            <div className="h-full w-full" style={{ background: `linear-gradient(135deg, ${site.theme.primary}55 0%, transparent 100%)` }} />
          )}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span 
              className="inline-block px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest mb-8 shadow-sm"
              style={{ backgroundColor: 'white', color: site.theme.primary }}
            >
              {site.sector}
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-zinc-900 mb-10 tracking-tighter leading-[0.9]">
              {site.heroTitle}
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 mb-14 max-w-3xl mx-auto leading-relaxed font-medium">
              {site.heroSubtitle}
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-6 rounded-3xl font-black text-xl shadow-2xl flex items-center gap-3 mx-auto transition-all"
              style={{ backgroundColor: site.theme.primary, color: 'white' }}
            >
              {site.ctaText} <MousePointer2 size={24} />
            </motion.button>
          </motion.div>
        </div>
      </section>
    );
  };

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      
      {/* CORREÇÃO AQUI: Mudado de z-[100] para z-100 */}
      <nav className="bg-black text-white py-3 px-6 sticky top-0 z-100 border-b border-white/5 shadow-2xl flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all font-bold text-[10px] uppercase tracking-widest">
          <ArrowLeft size={14} /> Sair do Exemplo
        </Link>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 animate-pulse">
          Modo de Experiência Ativa
        </span>
      </nav>

      {/* O SITE REAL COM VIDA PRÓPRIA (DINÂMICO) */}
      <div className="relative">
        {renderBespokeContent()}
      </div>

      {/* ANÁLISE SCUTA (Persistente no fundo para explicar o porquê de funcionar) */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden border-t border-white/5">
        <div 
          className="absolute top-0 right-0 w-150 h-150 blur-[150px] opacity-10 pointer-events-none rounded-full" 
          style={{ backgroundColor: site.theme.primary }} 
        />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-12">
            <div className="max-w-2xl text-left">
              <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block underline underline-offset-8">Estratégia Aplicada</span>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-6">
                Como este design <br />
                <span className="text-zinc-500 italic font-normal">domina o mercado.</span>
              </h2>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hidden md:block">
              <ShieldCheck className="text-emerald-400 mb-2" size={32} />
              <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Estratégia Validada</p>
            </div>
          </div>

          <div className="grid gap-6">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center text-left">
              <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                <AlertCircle className="text-amber-500" size={32} />
              </div>
              <div>
                <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">A Dor do Cliente</h4>
                <p className="text-2xl font-medium text-zinc-200 leading-tight italic">"{site.pain}"</p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] bg-emerald-500/10 border border-emerald-500/30 flex flex-col md:flex-row gap-8 items-center shadow-2xl text-left">
              <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                <TrendingUp className="text-black" size={32} />
              </div>
              <div>
                <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">O Resultado Scuta Digital</h4>
                <p className="text-3xl font-black text-white leading-none tracking-tighter">{site.expectedResult}</p>
              </div>
            </motion.div>
          </div>

          <div className="mt-24 text-center">
            <Link to="/" className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 group">
              Quero um site com esta alma <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER DA DEMO */}
      <footer className="py-12 bg-zinc-50 border-t border-zinc-200 text-center flex flex-col items-center gap-4">
        <div className="flex gap-4 opacity-20"><Smartphone size={20}/><ShieldCheck size={20}/></div>
        <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400">Scuta Digital · High Performance Experiences</p>
      </footer>
    </div>
  );
}