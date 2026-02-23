import { motion } from 'motion/react';
import { Globe, Users, TrendingUp, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: Globe,
    title: "Vitrine Aberta 24/7",
    description: "Mesmo enquanto você dorme, seu site trabalha. É o primeiro lugar onde potenciais clientes buscam confirmar se você é confiável e profissional."
  },
  {
    icon: Users,
    title: "Credibilidade Imediata",
    description: "No mercado atual, não ter um site profissional muitas vezes significa 'não existir' para grandes clientes. Passe autoridade desde o primeiro clique."
  },
  {
    icon: TrendingUp,
    title: "Apareça no Google",
    description: "Quando alguém busca pelo que você faz, um site otimizado garante que você apareça nos resultados, em vez de entregar o cliente para a concorrência."
  },
  {
    icon: ShieldCheck,
    title: "Você Dono do seu Canal",
    description: "Redes sociais mudam regras o tempo todo. Seu site é seu território: você controla a mensagem, o design e toda a experiência do seu cliente."
  }
];

export default function WhyWeb() {
  return (
    <section id="why" className="py-24 bg-zinc-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">A Grande Questão</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Por que sua empresa precisa de um site profissional hoje?</h3>
          <p className="text-lg text-zinc-600">
            O mundo mudou. Ter uma presença digital sólida não é mais um "luxo", é o alicerce para qualquer negócio que deseja sobreviver e prosperar na nova economia.
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