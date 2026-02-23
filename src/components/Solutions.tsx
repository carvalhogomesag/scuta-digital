import { motion } from 'motion/react';
import { Layout, Zap, MessageSquare, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Layout,
    title: "Landing Pages de Alta Conversão",
    description: "Não criamos apenas páginas; construímos máquinas de vendas. Cada elemento é posicionado estrategicamente para converter visitantes em clientes."
  },
  {
    icon: Zap,
    title: "Velocidade e Performance",
    description: "Ninguém gosta de site lento. Nossas páginas carregam instantaneamente, mantendo seu público engajado e melhorando seu ranking no Google."
  },
  {
    icon: MessageSquare,
    title: "Comunicação Estratégica",
    description: "Ajudamos você a falar a língua do seu cliente. Sem termos técnicos complicados, apenas mensagens claras que vendem o seu valor."
  },
  {
    icon: BarChart3,
    title: "Resultados Mensuráveis",
    description: "Configuramos o rastreamento necessário para que você saiba exatamente quantos contatos está recebendo através do seu novo site."
  }
];

export default function Solutions() {
  return (
    <section id="solutions" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-6 rounded-3xl bg-zinc-50 border border-black/5"
                >
                  <solution.icon className="w-8 h-8 text-emerald-600 mb-4" />
                  <h4 className="text-lg font-bold text-zinc-900 mb-2">{solution.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Como Ajudamos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Nós cuidamos da tecnologia, você cuida do seu negócio.</h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Na Scuta Digital, acreditamos que a internet deve ser simples. Você não precisa entender de 'hospedagem' ou 'DNS' para ter um site de classe mundial. 
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Design exclusivo alinhado à sua marca",
                "Totalmente responsivo (perfeito no celular)",
                "Hospedagem segura e confiável inclusa",
                "Suporte contínuo e atualizações"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-zinc-800 font-medium">
                  <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <div className="w-2 h-2 bg-emerald-600 rounded-full" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <a href="#contact" className="inline-block px-8 py-4 bg-black text-white rounded-2xl font-semibold text-lg hover:bg-zinc-800 transition-all">
              Conheça Nosso Processo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}