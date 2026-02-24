import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: "A sua montra digital 24/7",
    description: "Mesmo fora do horário comercial, o seu website trabalha por si. É o primeiro local onde potenciais clientes procuram validar a seriedade do seu negócio."
  },
  {
    icon: Users,
    title: "Credibilidade desde a primeira visita",
    description: "Em Portugal, a ausência de um site profissional gera desconfiança imediata. Transmita autoridade e profissionalismo desde o primeiro clique."
  },
  {
    icon: TrendingUp,
    title: "Mais visibilidade no Google",
    description: "Apareça nas pesquisas locais quando procurarem pelos seus serviços, em vez de entregar essas oportunidades diretamente à concorrência."
  },
  {
    icon: ShieldCheck,
    title: "Canal próprio da sua marca",
    description: "As redes sociais são terrenos alugados. O seu website é o seu território: controla a mensagem, o design e toda a jornada do seu cliente."
  }
];

export default function WhyWeb() {
  return (
    <section id="why" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">A pergunta certa</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Porque deve a sua empresa ter um site em 2026?</h3>
          <p className="text-lg text-zinc-600">
            Hoje, quem não aparece online perde oportunidades reais de negócio. Um website profissional é o motor que melhora a sua reputação, expande o seu alcance e potencia as suas vendas.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-black/5 hover:shadow-xl transition-all group"
            >
              <div className="w-14 h-14 bg-zinc-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-emerald-50 transition-colors">
                <reason.icon className="w-7 h-7 text-zinc-900 group-hover:text-emerald-600 transition-colors" />
              </div>
              <h4 className="text-xl font-bold text-zinc-900 mb-3">{reason.title}</h4>
              <p className="text-zinc-600 leading-relaxed">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}