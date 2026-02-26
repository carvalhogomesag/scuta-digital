import { motion } from 'motion/react';
import { Search, Clock, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function WhyWeb() {
  const t = UI_STRINGS.pt.why;

  const reasons = [
    {
      icon: Search,
      title: t.reason1.title,
      description: t.reason1.desc,
      color: "text-blue-400",
      delay: 0.1
    },
    {
      icon: Clock,
      title: t.reason2.title,
      description: t.reason2.desc,
      color: "text-scuta-highlight",
      delay: 0.2
    },
    {
      icon: ShieldCheck,
      title: t.reason3.title,
      description: t.reason3.desc,
      color: "text-scuta-accent",
      delay: 0.3
    }
  ];

  return (
    <section id="why" className="relative py-12 px-6 noise bg-scuta-primary">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho: Mais compacto e alinhado à esquerda para impacto moderno */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <span className="text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Performance Digital
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter">
              {t.title}
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-left font-medium leading-relaxed pb-2"
          >
            Um site profissional é a diferença entre ser a **primeira opção** do seu cliente ou ser invisível para o mercado.
          </motion.p>
        </div>

        {/* Bento Grid: Cartões com profundidade e brilho */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: reason.delay }}
              className="bento-card group flex flex-col h-full border border-white/5 hover:bg-scuta-surface/60 transition-all duration-700"
            >
              {/* Ícone com Glow Suave */}
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500">
                <reason.icon className={`w-7 h-7 ${reason.color}`} />
              </div>

              <div className="text-left grow">
                <h3 className="text-2xl font-black text-scuta-silk mb-4 tracking-tight group-hover:text-scuta-highlight transition-colors">
                  {reason.title}
                </h3>
                <p className="text-slate-400 leading-relaxed font-medium">
                  {reason.description}
                </p>
              </div>
              
              {/* Botão de Saiba Mais que surge no Hover */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center justify-between group-hover:border-white/10 transition-colors">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-scuta-silk transition-colors">
                  Alta Conversão
                </span>
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-slate-600 group-hover:bg-scuta-highlight group-hover:text-scuta-primary transition-all -rotate-45deg group-hover:rotate-0">
                  <ArrowRight size={16} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Wow Factor: Stat bar discreta no fundo da secção */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 py-6 border-y border-white/5 flex flex-wrap justify-center md:justify-start gap-x-12 gap-y-4"
        >
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-scuta-highlight" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">+40% Contactos via Web</span>
          </div>
          <div className="flex items-center gap-2">
            <TrendingUp size={16} className="text-scuta-highlight" />
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">SEO Local Optimizado</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}