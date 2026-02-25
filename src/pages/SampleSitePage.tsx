import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  ArrowLeft, 
  CheckCircle2, 
  AlertCircle, 
  TrendingUp, 
  MousePointer2,
  ExternalLink,
  Smartphone
} from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

export default function SampleSitePage() {
  const { slug } = useParams<{ slug: string }>();
  
  // Procura os dados do exemplo com base no link (slug)
  const site = SAMPLE_SITES.find((s) => s.slug === slug);

  // Se o utilizador tentar aceder a um link que não existe, volta para a Home
  if (!site) return <Navigate to="/" replace />;

  // Atualiza o título da página no navegador (SEO básico)
  document.title = `${site.companyName} | Estudo de Caso Scuta Digital`;

  return (
    <div className="min-h-screen bg-white">
      {/* 1. BARRA DE NAVEGAÇÃO DE ESTUDO DE CASO */}
      <div className="bg-zinc-900 text-white py-4 px-6 sticky top-20 z-40 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <Link 
            to="/" 
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors text-sm font-bold"
          >
            <ArrowLeft size={16} /> Voltar aos exemplos
          </Link>
          <div className="flex items-center gap-3">
            <span className="bg-white/10 px-3 py-1 rounded-full text-[10px] uppercase tracking-widest font-bold">
              Modo de Demonstração
            </span>
            <span className="text-zinc-500 hidden md:block">|</span>
            <p className="text-xs text-zinc-300 font-medium">
              Este é um exemplo de como seria o site da <strong>{site.companyName}</strong>
            </p>
          </div>
        </div>
      </div>

      {/* 2. O "SITE REAL" (Simulação do Layout do Cliente) */}
      <div className="relative border-x border-zinc-100 max-w-7xl mx-auto shadow-2xl">
        
        {/* HERO SIMULADO - CORRIGIDO: bg-linear-to-b para versão canónica */}
        <section className="py-24 md:py-32 px-6 bg-linear-to-b from-zinc-50 to-white overflow-hidden">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-zinc-400 uppercase tracking-widest text-[10px] font-black mb-4 block">
                {site.sector}
              </span>
              <h1 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-6 tracking-tight">
                {site.heroTitle}
              </h1>
              <p className="text-xl text-zinc-600 mb-10 leading-relaxed max-w-2xl mx-auto">
                {site.heroSubtitle}
              </p>
              <button className="bg-zinc-900 text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-xl flex items-center gap-2 mx-auto active:scale-95 transition-transform">
                {site.ctaText} <MousePointer2 size={20} />
              </button>
            </motion.div>
          </div>
        </section>

        {/* FUNCIONALIDADES SIMULADAS */}
        <section className="py-20 px-6 bg-white border-y border-zinc-100">
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {site.features.map((feature, i) => (
              <div key={i} className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                   <CheckCircle2 className="text-zinc-900" size={24} />
                </div>
                <h3 className="font-bold text-lg mb-2 text-zinc-900">{feature.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 3. ANÁLISE ESTRATÉGICA (O Lado Scuta Digital) */}
        <section className="py-24 px-6 bg-zinc-900 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-[10px] font-black uppercase tracking-widest mb-8">
              Análise Scuta Digital
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold mb-12 tracking-tight">
              Como este site resolve os <br />
              <span className="text-zinc-500">problemas do negócio.</span>
            </h2>

            <div className="grid gap-8">
              {/* DOR */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <div className="flex items-center gap-3 text-amber-400 mb-4 font-bold uppercase text-xs tracking-widest">
                  <AlertCircle size={18} /> A Dor do Cliente
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed italic">
                  "{site.pain}"
                </p>
              </div>

              {/* SOLUÇÃO */}
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl">
                <div className="flex items-center gap-3 text-blue-400 mb-4 font-bold uppercase text-xs tracking-widest">
                  <ExternalLink size={18} /> O que fizemos (Solução)
                </div>
                <p className="text-lg text-zinc-300 leading-relaxed">
                  {site.solution}
                </p>
              </div>

              {/* RESULTADO */}
              <div className="bg-emerald-500/10 border border-emerald-500/20 p-8 rounded-3xl">
                <div className="flex items-center gap-3 text-emerald-400 mb-4 font-bold uppercase text-xs tracking-widest">
                  <TrendingUp size={18} /> Impacto Esperado
                </div>
                <p className="text-lg text-emerald-50/90 leading-relaxed font-medium">
                  {site.expectedResult}
                </p>
              </div>
            </div>

            <div className="mt-16 text-center">
              <p className="text-zinc-500 mb-6 font-medium">
                Precisa de uma solução semelhante para o seu negócio?
              </p>
              <Link 
                to="/"
                className="inline-flex items-center gap-2 bg-white text-black px-10 py-4 rounded-2xl font-bold text-lg hover:bg-zinc-200 transition-all active:scale-95 shadow-lg"
              >
                Pedir Orçamento Grátis <ArrowLeft className="rotate-180" size={20} />
              </Link>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER DA PÁGINA DE EXEMPLO */}
      <div className="py-12 px-6 text-center bg-zinc-50 border-t border-zinc-200">
        <div className="flex items-center justify-center gap-2 mb-4 text-zinc-400">
          <Smartphone size={16} />
          <span className="text-[10px] font-black uppercase tracking-widest">Optimizado para telemóvel</span>
        </div>
        <p className="text-xs text-zinc-400 max-w-md mx-auto leading-relaxed">
          Este é um site de amostra criado pela Scuta Digital para demonstrar a aplicação de estratégias de conversão em diferentes sectores comerciais de Portugal.
        </p>
      </div>
    </div>
  );
}