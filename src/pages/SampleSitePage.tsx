import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, ArrowRight, AlertCircle, TrendingUp, 
  Smartphone, MousePointer2, Zap, ShieldCheck,
  Leaf, Truck, Wallet, Activity, Video, FileText, Clock, CheckCircle, Award
} from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

// IMPORTAÇÃO DOS SITES BESPOKE (EXPERIÊNCIAS ÚNICAS)
import VitalisSample from '../samples/VitalisSample';
import RenovaSample from '../samples/RenovaSample';
import EduSparkSample from '../samples/EduSparkSample';
import PadelSample from '../samples/PadelSample';
import PrismaMathSample from '../samples/PrismaMathSample'; // Novo Sample Integrado

/**
 * MAPEAMENTO DE ÍCONES (Fallback para projetos em rascunho)
 */
const IconMap: Record<string, any> = {
  leaf: Leaf, 
  truck: Truck, 
  wallet: Wallet,
  user: Activity, 
  video: Video, 
  file: FileText,
  clock: Clock, 
  check: CheckCircle, 
  award: Award,
  shield: ShieldCheck
};

export default function SampleSitePage() {
  const { slug } = useParams<{ slug: string }>();
  const site = SAMPLE_SITES.find((s) => s.slug === slug);

  // Redirecionamento de segurança para rotas inexistentes
  if (!site) return <Navigate to="/" replace />;

  // SEO Dinâmico
  document.title = `${site.companyName} | Scuta Digital Portfólio`;

  /**
   * RENDERIZAÇÃO DINÂMICA DE EXPERIÊNCIAS ÚNICAS
   */
  const renderBespokeContent = () => {
    switch (slug) {
      case 'prisma-matematica':
        return <PrismaMathSample />;
      case 'clinica-vida-mais':
        return <VitalisSample />;
      case 'renova-home': // Slug atualizado para bater com o data
      case 'assistencia-24h':
        return <RenovaSample />;
      case 'edu-spark':
      case 'loja-bairro':
        return <EduSparkSample />;
      case 'padel-pro-hub':
        return <PadelSample />;
      default:
        // TEMPLATE DE FALLBACK (Design System v4)
        return (
          <div className="pt-0 text-left overflow-hidden">
            <section 
              className="relative py-32 md:py-56 px-6"
              style={{ backgroundColor: site.theme.secondary }}
            >
              {/* Overlay Decorativo */}
              <div className="absolute inset-0 opacity-10 pointer-events-none">
                {site.bgStyle === "dots" && (
                  <div className="size-full bg-[radial-gradient(circle,#000_1px,transparent_1px)] [background-size:32px_32px]" />
                )}
              </div>

              <div className="max-w-6xl mx-auto relative z-10">
                <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-black text-white text-[10px] font-black uppercase tracking-widest mb-8">
                    {site.sector}
                  </span>
                  <h1 className="text-6xl md:text-9xl font-black text-zinc-950 mb-10 tracking-tighter leading-[0.85]">
                    {site.heroTitle}
                  </h1>
                  <p className="text-xl md:text-2xl text-zinc-600 mb-14 max-w-2xl leading-tight font-medium">
                    {site.heroSubtitle}
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-6 rounded-2xl font-black text-xl shadow-2xl flex items-center gap-4 transition-all"
                    style={{ backgroundColor: site.theme.primary, color: 'white' }}
                  >
                    {site.ctaText} <MousePointer2 size={24} />
                  </motion.button>
                </motion.div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] selection:bg-emerald-500 selection:text-black">
      
      {/* 1. BARRA DE CONTROLO (Moldura de Autoridade Scuta) */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md text-white px-6 z-[100] border-b border-white/10 flex justify-between items-center h-12">
        <Link to="/" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-all font-bold text-[10px] uppercase tracking-widest">
          <ArrowLeft size={14} /> Sair do Exemplo
        </Link>
        <span className="text-[9px] font-black uppercase tracking-[0.4em] text-emerald-500 animate-pulse hidden md:block">
          Demonstração de Alta Performance Digital
        </span>
        <div className="flex items-center gap-3">
           <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{site.companyName}</span>
           <div className="size-2 bg-emerald-500 rounded-full animate-pulse" />
        </div>
      </nav>

      {/* 2. CONTEÚDO DO EXEMPLO */}
      <main className="relative">
        {renderBespokeContent()}
      </main>

      {/* 3. INTELLIGENCE REPORT (Estratégia Scuta Digital) */}
      <section className="py-32 px-6 bg-zinc-950 text-white relative overflow-hidden border-t border-white/5">
        {/* Glow dinâmico de marca */}
        <div 
          className="absolute -top-24 -right-24 size-150 blur-[160px] opacity-15 rounded-full" 
          style={{ backgroundColor: site.theme.primary }} 
        />

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between mb-24 gap-8 border-b border-white/10 pb-16">
            <div className="max-w-3xl">
              <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[11px] mb-6 block italic">
                Intelligence Report
              </span>
              <h2 className="text-5xl md:text-8xl font-black tracking-tighter leading-none">
                A Estratégia por trás <br />
                <span className="text-zinc-600 italic font-light">da Performance.</span>
              </h2>
            </div>
            <div className="hidden md:flex flex-col items-end gap-2">
              <div className="bg-white/5 backdrop-blur-xl p-4 rounded-2xl border border-white/10 shadow-2xl flex items-center gap-3">
                <ShieldCheck className="text-emerald-400" size={24} />
                <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Arquitetura Blindada</span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bloco: O Problema */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              className="p-12 rounded-4xl bg-white/5 border border-white/10 flex flex-col gap-6"
            >
              <div className="size-14 rounded-2xl bg-amber-500/10 flex items-center justify-center border border-amber-500/20">
                <AlertCircle className="text-amber-500" size={28} />
              </div>
              <div>
                <h4 className="text-amber-500 font-black uppercase text-[11px] tracking-[0.2em] mb-4">O Desafio do Setor</h4>
                <p className="text-2xl font-medium text-zinc-300 leading-tight tracking-tight italic">
                  "{site.pain}"
                </p>
              </div>
            </motion.div>

            {/* Bloco: A Solução de Engenharia */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-12 rounded-4xl bg-linear-to-br from-emerald-500/20 to-transparent border border-emerald-500/20 flex flex-col gap-6"
            >
              <div className="size-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-[0_0_40px_rgba(16,185,129,0.4)]">
                <TrendingUp className="text-black" size={28} />
              </div>
              <div>
                <h4 className="text-emerald-400 font-black uppercase text-[11px] tracking-[0.2em] mb-4">A Intervenção Scuta Digital</h4>
                <p className="text-3xl font-black text-white leading-none tracking-tighter">
                  {site.expectedResult}
                </p>
              </div>
            </motion.div>
          </div>

          {/* CTA de Fecho */}
          <div className="mt-32 text-center">
            <Link to="/" className="inline-flex items-center gap-6 bg-white text-black px-16 py-8 rounded-2xl font-black text-3xl hover:scale-105 transition-all shadow-[0_30px_60px_rgba(255,255,255,0.1)] group">
              QUERO ESTE RESULTADO <ArrowRight className="group-hover:translate-x-3 transition-transform" />
            </Link>
            <p className="mt-8 text-zinc-500 font-bold uppercase tracking-[0.3em] text-[10px]">
              Projetos exclusivos com entrega em 21 dias.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-16 bg-black border-t border-white/5 text-center">
        <p className="text-[10px] font-black uppercase tracking-[0.6em] text-zinc-600">
          Scuta Digital · Estúdio de Presença de Luxo · Portugal
        </p>
      </footer>
    </div>
  );
}