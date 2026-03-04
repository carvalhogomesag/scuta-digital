import { motion } from 'motion/react';
import { Search, Clock, ShieldCheck, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function WhyWeb() {
  const t = UI_STRINGS.pt.why;

  const reasons = [
    {
      icon: Search,
      title: "Dominar a Visibilidade Local",
      description: "Estar no Google não é luxo, é sobrevivência. Garantimos que, quando o seu cliente precisa, a sua empresa é a primeira a aparecer.",
      color: "text-blue-400",
      delay: 0.1
    },
    {
      icon: Clock,
      title: "Automação de Contactos",
      description: "O seu site filtra as dúvidas básicas e qualifica os seus leads. Menos mensagens inúteis, mais tempo para vender.",
      color: "text-emerald-400",
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: "Autoridade de Mercado",
      description: "Um site amador é um convite para o seu cliente ir ao concorrente. Projetamos confiança imediata com design premium.",
      color: "text-violet-400",
      delay: 0.3
    }
  ];

  return (
    <section id="why" className="relative py-32 px-6 noise bg-scuta-primary overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-125 h-125 bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              Performance Digital de Elite
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              Porquê um site <br />
              <span className="text-zinc-600 italic font-light">de alta performance?</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-left font-medium leading-relaxed pb-2"
          >
            A diferença entre o crescimento sustentado e a estagnação é a qualidade da sua infraestrutura digital.
          </motion.p>
        </div>

        {/* Bento Grid Refinado */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reason.delay }}
              className="bento-card group flex flex-col h-full border border-white/5 relative overflow-hidden"
            >
              {/* Efeito Hover */}
              <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                <reason.icon className={`size-8 ${reason.color}`} />
              </div>

              <div className="text-left grow relative z-10">
                <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-400 transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
              
              <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  Arquitetura Scuta
                </span>
                <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-all">
                  <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stat Bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 py-10 border-y border-white/5 flex flex-wrap justify-center md:justify-start gap-16"
        >
          <div className="flex items-center gap-4">
            <Zap size={20} className="text-emerald-400" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">+40% Contactos qualificados</span>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp size={20} className="text-emerald-400" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">Posicionamento SEO Local</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}