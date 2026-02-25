import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, AlertCircle, TrendingUp, 
  Smartphone, MousePointer2, Zap, ShieldCheck,
  Leaf, Truck, Wallet, Activity, Video, FileText, Clock, CheckCircle, Award
} from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

// Mapeamento de ícones para transformar texto em componentes visuais
const IconMap: Record<string, any> = {
  leaf: Leaf, truck: Truck, wallet: Wallet,
  user: Activity, video: Video, file: FileText,
  clock: Clock, check: CheckCircle, award: Award,
  shield: ShieldCheck
};

export default function SampleSitePage() {
  const { slug } = useParams<{ slug: string }>();
  const site = SAMPLE_SITES.find((s) => s.slug === slug);

  if (!site) return <Navigate to="/" replace />;

  document.title = `${site.companyName} | Protótipo Scuta Digital`;

  return (
    <div className="min-h-screen bg-white selection:bg-black selection:text-white">
      
      {/* 1. BARRA DE CONTROLO (Identidade Scuta Digital) */}
      <nav className="bg-black text-white py-4 px-6 sticky top-0 z-50 border-b border-white/10 shadow-xl">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all group font-bold text-sm">
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> 
            Sair da Demonstração
          </Link>
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-black">Protótipo Funcional</span>
            <div className="h-4 w-px bg-zinc-800" />
            <span className="text-sm font-medium">Cliente: <span className="text-zinc-300">{site.companyName}</span></span>
          </div>
        </div>
      </nav>

      {/* 2. O SITE DO CLIENTE (Layout Dinâmico e Moderno) */}
      <div className="relative">
        
        {/* HERO DINÂMICO */}
        <section 
          className="relative py-28 md:py-48 px-6 overflow-hidden"
          style={{ backgroundColor: site.theme.secondary }}
        >
          {/* Fundo Decorativo Dinâmico */}
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

        {/* FUNCIONALIDADES (Cards Modernos) */}
        <section className="py-24 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {site.features.map((feature, i) => {
              const Icon = IconMap[feature.iconName] || Zap;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100 hover:border-zinc-200 transition-all duration-500 hover:shadow-2xl"
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-sm"
                    style={{ backgroundColor: site.theme.primary, color: 'white' }}
                  >
                    <Icon size={30} />
                  </div>
                  <h3 className="text-2xl font-black mb-4 text-zinc-900">{feature.title}</h3>
                  <p className="text-zinc-600 leading-relaxed font-medium">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* 3. ANÁLISE SCUTA (O "Porquê" Funciona) */}
        <section className="py-32 px-6 bg-zinc-900 text-white relative overflow-hidden">
          {/* CORREÇÃO AQUI: w-150 e h-150 em vez de valores arbitrários */}
          <div 
            className="absolute top-0 right-0 w-150 h-150 blur-[150px] opacity-10 pointer-events-none rounded-full" 
            style={{ backgroundColor: site.theme.primary }} 
          />

          <div className="max-w-5xl mx-auto relative z-10">
            <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-8 border-b border-white/10 pb-12">
              <div className="max-w-2xl">
                <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">Intelligence Report</span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none">
                  Como resolvemos a <br />
                  <span className="text-zinc-500 font-normal italic">dor deste negócio.</span>
                </h2>
              </div>
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-3xl border border-white/10 hidden md:block">
                <ShieldCheck className="text-emerald-400 mb-2" size={32} />
                <p className="text-[10px] font-black uppercase tracking-widest text-zinc-400">Estratégia Validada</p>
              </div>
            </div>

            <div className="grid gap-6">
              {/* CARTÃO DE DOR */}
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0">
                  <AlertCircle className="text-amber-500" size={32} />
                </div>
                <div>
                  <h4 className="text-amber-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">O Problema Real</h4>
                  <p className="text-2xl font-medium text-zinc-200 leading-tight tracking-tight italic">"{site.pain}"</p>
                </div>
              </motion.div>

              {/* CARTÃO DE SOLUÇÃO */}
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] bg-white/5 border border-white/10 flex flex-col md:flex-row gap-8 items-center">
                <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0">
                  <MousePointer2 className="text-blue-500" size={32} />
                </div>
                <div>
                  <h4 className="text-blue-500 font-black uppercase text-[10px] tracking-[0.2em] mb-2">A Execução Scuta Digital</h4>
                  <p className="text-xl font-medium text-zinc-300 leading-relaxed">{site.solution}</p>
                </div>
              </motion.div>

              {/* CARTÃO DE RESULTADO */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 rounded-[3rem] bg-emerald-500/10 border border-emerald-500/30 flex flex-col md:flex-row gap-8 items-center shadow-2xl">
                <div className="w-16 h-16 rounded-full bg-emerald-500 flex items-center justify-center shrink-0 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                  <TrendingUp className="text-black" size={32} />
                </div>
                <div>
                  <h4 className="text-emerald-400 font-black uppercase text-[10px] tracking-[0.2em] mb-2">Impacto no Negócio</h4>
                  <p className="text-3xl font-black text-white leading-none tracking-tighter">{site.expectedResult}</p>
                </div>
              </motion.div>
            </div>

            <div className="mt-24 text-center">
              <Link 
                to="/"
                className="inline-flex items-center gap-4 bg-white text-black px-12 py-6 rounded-3xl font-black text-2xl hover:scale-105 transition-all shadow-2xl active:scale-95 group"
              >
                Quero um site assim <ArrowRight className="group-hover:translate-x-2 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER DO ESTUDO DE CASO */}
      <footer className="py-20 bg-zinc-50 border-t border-zinc-200 text-center px-6">
        <div className="flex flex-col items-center gap-4">
          <div className="flex gap-4 opacity-20">
            <Smartphone size={24} />
            <Zap size={24} />
          </div>
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-400 max-w-xl leading-relaxed">
            Desenvolvido para Conversão Extrema · Scuta Digital 2026
          </p>
        </div>
      </footer>
    </div>
  );
}