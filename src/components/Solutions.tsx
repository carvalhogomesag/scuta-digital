import { motion } from 'motion/react';
import { Smartphone, Search, PenTool, Wrench, ArrowRight } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants'; // Caminho corrigido

export default function Solutions() {
  const t = UI_STRINGS.pt.solutions;

  const solutions = [
    {
      icon: Smartphone,
      title: "Funciona em qualquer ecrã",
      description: "O seu site será fácil de ler tanto no computador como no telemóvel. O cliente encontra o que precisa num segundo."
    },
    {
      icon: Search,
      title: "Configurado para o Google",
      description: "Preparamos tudo para que o Google entenda o seu negócio e o mostre a quem procura os seus serviços na sua zona."
    },
    {
      icon: PenTool,
      title: "Textos que convencem",
      description: "Ajudamos a escrever de forma simples e profissional para que o cliente sinta confiança e carregue no botão para ligar."
    },
    {
      icon: Wrench,
      title: "Manutenção incluída",
      description: "Nós tratamos da segurança e das atualizações por si. Assim, pode focar o seu tempo apenas no seu negócio."
    }
  ];

  return (
    <section id="solutions" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Grelha de Cartões: Foco na facilidade */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <solution.icon className="w-10 h-10 text-black mb-6" />
                  <h4 className="text-lg font-extrabold text-zinc-900 mb-3 leading-tight">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Texto de Apoio: Foco na paz de espírito do cliente */}
          <div className="order-1 lg:order-2">
            <h2 className="text-sm font-black text-zinc-400 uppercase tracking-[0.2em] mb-4">
              O Nosso Trabalho
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-8 tracking-tight">
              {t.title}
            </h3>
            <p className="text-lg text-zinc-600 mb-10 leading-relaxed">
              Desenvolvemos um processo sem complicações. Não precisa de perceber de informática ou design — nós entregamos tudo pronto a faturar.
            </p>
            
            <ul className="space-y-5 mb-12">
              {[
                "Design profissional que passa confiança imediata",
                "Botão direto para o seu WhatsApp ou telefone",
                "Alojamento rápido e seguro em Portugal",
                "Apoio sempre que precisar de mudar preços ou fotos"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-zinc-800 font-bold">
                  <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  </div>
                  <span className="text-base leading-tight">{item}</span>
                </li>
              ))}
            </ul>

            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-10 py-4 bg-black text-white rounded-2xl font-bold text-lg hover:bg-zinc-800 transition-all active:scale-95 shadow-xl"
            >
              Pedir um Orçamento Grátis <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}