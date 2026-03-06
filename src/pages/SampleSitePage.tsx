import { useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, MousePointer2 } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';
import { Language, UI_STRINGS } from '../lib/constants';
// IMPORTAÇÃO DOS SITES BESPOKE
import VitalisSample from '../samples/VitalisSample';
import PrismaMathSample from '../samples/PrismaMathSample';
import LuminaSample from '../samples/LuminaSample';

export default function SampleSitePage({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const { slug } = useParams<{ slug: string }>();
  const site = SAMPLE_SITES.find((s) => s.slug === slug);
  const t = UI_STRINGS[lang].samples;

  if (!site) return <Navigate to="/" replace />;

  const renderBespokeContent = () => {
    switch (slug) {
      case 'prisma-matematica':
        return <PrismaMathSample />;
      case 'clinica-vida-mais':
        return <VitalisSample />;
      case 'lumina-home':
        return <LuminaSample />;
      default:
        return (
          <div className="pt-0 text-left">
            <section
              className="relative py-28 md:py-48 px-6 overflow-hidden"
              style={{ backgroundColor: site.theme.secondary }}
            >
              <div className="max-w-6xl mx-auto relative z-10 text-left">
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
                  <p className="text-xl md:text-2xl text-zinc-600 mb-14 max-w-3xl leading-relaxed font-medium">
                    {site.heroSubtitle}
                  </p>
                  <button
                    className="px-12 py-6 rounded-3xl font-black text-xl shadow-2xl flex items-center gap-3 transition-all"
                    style={{ backgroundColor: site.theme.primary, color: 'white' }}
                  >
                    {site.ctaText} <MousePointer2 size={24} />
                  </button>
                </motion.div>
              </div>
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Barra de exemplo colada no topo — sem Navbar Scuta nesta página */}
      <nav className="bg-black text-white px-6 fixed top-0 left-0 right-0 z-[1000] flex justify-between items-center h-12">
        <a href="/" className="flex items-center gap-2 text-zinc-500 hover:text-white transition-all font-bold text-[10px] uppercase tracking-widest">
          <ArrowLeft size={14} /> {lang === 'en' ? 'Exit Example' : lang === 'es' ? 'Salir del Ejemplo' : 'Sair do Exemplo'}
        </a>
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 hidden md:inline">
          {lang === 'en' ? 'High Performance Demo' : lang === 'es' ? 'Demostración de Alto Rendimiento' : 'Demonstração de Alta Performance'}
        </span>
        <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">{site.companyName}</span>
      </nav>

      {/* pt-12 = 48px = apenas a barra preta */}
      <div className="relative pt-12">
        {renderBespokeContent()}
      </div>
    </div>
  );
}