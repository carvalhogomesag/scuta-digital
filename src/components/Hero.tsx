import { motion } from 'motion/react';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function Hero() {
  const t = UI_STRINGS.pt.hero;

  return (
    <section className="pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-900 text-xs font-bold uppercase tracking-wider mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-zinc-900"></span>
            </span>
            Atendimento em Portugal
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-6 leading-[1.1]">
            {t.title}
          </h1>
          <p className="text-xl text-zinc-600 mb-8 max-w-xl leading-relaxed">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="px-8 py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group shadow-lg active:scale-95"
            >
              {t.cta} <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#samples" 
              className="px-8 py-4 bg-white text-black border border-zinc-200 rounded-2xl font-bold text-lg hover:bg-zinc-50 transition-all text-center active:scale-95"
            >
              {t.secondaryCta}
            </a>
          </div>
          
          <div className="mt-10 flex flex-wrap gap-6">
            {[
              'Sem custos surpresa', 
              'Site pronto em dias', 
              'Lê-se bem no telemóvel'
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-zinc-500 font-bold">
                <CheckCircle2 className="w-4 h-4 text-black" />
                {item}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-4/3 rounded-3xl overflow-hidden shadow-2xl border border-black/5 bg-zinc-100">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Site profissional que aparece no Google Portugal" 
              className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* CORREÇÃO AQUI: max-w-60 em vez de max-w-[240px] */}
          <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-2xl border border-zinc-100 hidden md:block max-w-60">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center shrink-0">
                <TrendingUp size={24} className="text-white" />
              </div>
              <div>
                <p className="text-sm font-bold text-zinc-900">No Topo do Google</p>
                <p className="text-xs text-zinc-500">Seja encontrado por quem procura os seus serviços hoje.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}