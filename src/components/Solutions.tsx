import { motion } from 'motion/react';
import { Layout, Zap, MessageSquare, BarChart3 } from 'lucide-react';

const solutions = [
  {
    icon: Layout,
    title: "Landing pages de alta conversão",
    description: "Criamos páginas focadas exclusivamente em pedidos de orçamento, geração de leads qualificados e marcações diretas para o seu negócio."
  },
  {
    icon: Zap,
    title: "Desempenho rápido e estável",
    description: "Garantimos a melhor base técnica de SEO e uma velocidade de carregamento superior, tanto em desktop como em telemóvel."
  },
  {
    icon: MessageSquare,
    title: "Mensagem clara para o cliente ideal",
    description: "Ajudamos a comunicar o seu valor de forma simples e persuasiva, sem utilizar linguagem técnica que afaste os seus potenciais clientes."
  },
  {
    icon: BarChart3,
    title: "Métricas para decidir melhor",
    description: "Acompanhamos rigorosamente a origem dos seus contactos para que possa medir o retorno real do seu investimento digital."
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
            <h2 className="text-sm font-bold text-emerald-600 uppercase tracking-widest mb-4">Como ajudamos</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">Nós tratamos da tecnologia para que se foque no seu negócio.</h3>
            <p className="text-lg text-zinc-600 mb-8 leading-relaxed">
              Desenvolvemos um processo simples e transparente, desenhado especificamente para apoiar pequenas empresas em Portugal a crescerem online sem complicações.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Design alinhado com a identidade da marca",
                "Website 100% responsivo (mobile-first)",
                "Hospedagem segura e estável",
                "Suporte contínuo e otimização"
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
              Conhecer o processo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}