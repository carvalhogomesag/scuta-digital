import { motion } from 'motion/react';
import { Search, Clock, ShieldCheck, ArrowRight } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function WhyWeb() {
  const t = UI_STRINGS.pt.why;

  const reasons = [
    {
      icon: Search,
      title: t.reason1.title,
      description: t.reason1.desc,
    },
    {
      icon: Clock,
      title: t.reason2.title,
      description: t.reason2.desc,
    },
    {
      icon: ShieldCheck,
      title: t.reason3.title,
      description: t.reason3.desc,
    }
  ];

  return (
    <section id="why" className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho da secção: Foco na dor e solução */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-extrabold text-zinc-400 uppercase tracking-[0.2em] mb-4">
            Crescimento Profissional
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6 tracking-tight">
            {t.title}
          </h3>
          <p className="text-lg text-zinc-600 leading-relaxed">
            Hoje em dia, quem não é encontrado no Google não existe para o mercado. 
            Um site profissional é a diferença entre ser a **primeira opção** ou ser invisível.
          </p>
        </div>

        {/* Grelha de Benefícios: Limpa e focada */}
        <div className="grid md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-zinc-50 border border-zinc-100 hover:bg-black transition-all duration-500"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:bg-zinc-800 transition-colors">
                <reason.icon className="w-7 h-7 text-zinc-900 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-white transition-colors">
                {reason.title}
              </h4>
              <p className="text-zinc-600 leading-relaxed group-hover:text-zinc-400 transition-colors">
                {reason.description}
              </p>
              
              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-black group-hover:text-zinc-300 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                Saiba como ajudamos <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}