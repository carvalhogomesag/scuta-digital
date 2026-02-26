import { motion } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  TrendingUp, 
  Sparkles, 
  ShieldCheck, 
  Clock, 
  Smartphone 
} from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function Hero() {
  const t = UI_STRINGS.pt.hero;

  return (
    <section className="relative pt-24 pb-12 px-6 overflow-hidden noise bg-scuta-primary">
      {/* --- EFEITOS DE FUNDO (Cores mais densas para garantir contraste) --- */}
      <div className="absolute top-0 left-1/4 w-150 h-150 bg-scuta-accent/30 blur-[140px] rounded-full animate-glow pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-125 h-125 bg-scuta-highlight/20 blur-[120px] rounded-full animate-glow delay-1000 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* --- LADO ESQUERDO: TEXTO --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Badge: Escurecido para destaque */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 border border-white/10 text-scuta-silk text-[10px] font-black uppercase tracking-[0.2em] mb-10 shadow-2xl backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-scuta-highlight opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-scuta-highlight"></span>
            </span>
            Especialistas em Portugal
          </div>

          {/* Título: Aumentado e com gradiente agressivo */}
          <h1 className="text-6xl md:text-[84px] font-black tracking-tighter text-white mb-8 leading-[0.85]">
            {t.title.split('.').map((part, i) => (
              <span key={i} className={i === 0 ? "block" : "text-scuta-gradient block mt-2"}>
                {part}{i === 0 ? "." : ""}
              </span>
            ))}
          </h1>
          
          <p className="text-xl text-slate-400 mb-12 max-w-lg leading-relaxed font-medium">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-scuta-silk text-scuta-primary rounded-2xl font-black text-lg hover:scale-105 hover:bg-scuta-highlight transition-all flex items-center justify-center gap-3 group active:scale-95 shadow-[0_20px_50px_rgba(0,0,0,0.3)]"
            >
              {t.cta} <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#samples" 
              className="px-10 py-5 bg-white/5 text-scuta-silk border border-white/10 rounded-2xl font-black text-lg hover:bg-white/10 transition-all text-center active:scale-95 backdrop-blur-md"
            >
              {t.secondaryCta}
            </a>
          </div>
          
          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { text: 'Sem custos surpresa', icon: ShieldCheck },
              { text: 'Site pronto em dias', icon: Clock },
              { text: 'Lê-se bem no telemóvel', icon: Smartphone }
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 text-[10px] text-slate-500 font-black uppercase tracking-widest">
                <CheckCircle2 className="w-4 h-4 text-scuta-highlight shrink-0" />
                {item.text}
              </div>
            ))}
          </div>
        </motion.div>

        {/* --- LADO DIREITO: IMAGEM --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative lg:ml-6"
        >
          <div className="absolute -inset-1 bg-linear-to-r from-scuta-accent to-scuta-highlight opacity-30 blur-2xl rounded-[3rem]" />
          
          <div className="relative aspect-4/3 rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop" 
              alt="Estratégia Scuta" 
              className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-1000"
            />
            <div className="absolute inset-0 bg-linear-to-t from-scuta-primary via-transparent to-transparent opacity-60" />
          </div>

          {/* Badge Flutuante Bento */}
          <motion.div 
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-6 glass-dark p-6 rounded-3xl border border-scuta-highlight/30 hidden md:flex items-center gap-4 max-w-60 shadow-2xl"
          >
            <div className="w-12 h-12 bg-scuta-highlight rounded-xl flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(16,185,129,0.4)]">
              <TrendingUp size={24} className="text-scuta-primary" />
            </div>
            <div className="text-left">
              <p className="text-sm font-black text-white leading-tight mb-0.5">Resultados</p>
              <p className="text-[9px] text-slate-400 font-bold uppercase tracking-widest leading-none">Foco em Vendas</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}