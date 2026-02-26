import { motion } from 'motion/react';
import { Smartphone, Search, PenTool, Wrench, ArrowRight, CheckCircle2 } from 'lucide-react';
import { UI_STRINGS } from '../lib/constants';

export default function Solutions() {
  const t = UI_STRINGS.pt.solutions;

  const solutions = [
    {
      icon: Smartphone,
      title: "Funciona em qualquer ecrã",
      description: "O seu site será fácil de ler tanto no computador como no telemóvel. O cliente encontra o que precisa num segundo.",
      delay: 0.1
    },
    {
      icon: Search,
      title: "Configurado para o Google",
      description: "Preparamos tudo para que o Google entenda o seu negócio e o mostre a quem procura os seus serviços na sua zona.",
      delay: 0.2
    },
    {
      icon: PenTool,
      title: "Textos que convencem",
      description: "Ajudamos a escrever de forma simples e profissional para que o cliente sinta confiança e carregue no botão para ligar.",
      delay: 0.3
    },
    {
      icon: Wrench,
      title: "Manutenção incluída",
      description: "Nós tratamos da segurança e das atualizações por si. Assim, pode focar o seu tempo apenas no seu negócio.",
      delay: 0.4
    }
  ];

  return (
    <section id="solutions" className="relative py-12 px-6 noise bg-scuta-primary overflow-hidden">
      {/* Brilho de fundo para separar da secção anterior */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-16 items-start">
          
          {/* LADO ESQUERDO: Texto de Apoio e Checklist Premium */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-scuta-accent font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                O Nosso Método
              </span>
              <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter mb-8">
                {t.title.split('para').map((part, i) => (
                  <span key={i} className={i === 1 ? "text-scuta-gradient block" : ""}>
                    {i === 1 ? `para ${part}` : part}
                  </span>
                ))}
              </h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium">
                Desenvolvemos um processo sem complicações. Não precisa de ser um perito em tecnologia — nós entregamos tudo pronto a faturar.
              </p>
              
              <ul className="space-y-6 mb-12">
                {[
                  "Design que transmite confiança imediata",
                  "Botão direto para WhatsApp ou Telefone",
                  "Alojamento rápido e seguro em Portugal",
                  "Apoio total para mudar preços ou fotos"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-scuta-silk font-bold text-sm group">
                    <div className="w-6 h-6 rounded-full bg-scuta-highlight/10 flex items-center justify-center shrink-0 group-hover:bg-scuta-highlight transition-colors duration-300">
                      <CheckCircle2 size={14} className="text-scuta-highlight group-hover:text-scuta-primary" />
                    </div>
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className="inline-flex items-center gap-3 px-8 py-4 bg-scuta-silk text-scuta-primary rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-scuta-highlight transition-all active:scale-95 shadow-2xl"
              >
                Pedir Orçamento Grátis <ArrowRight size={18} />
              </a>
            </motion.div>
          </div>

          {/* LADO DIREITO: Grelha Assimétrica de Soluções */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: solution.delay }}
                  className={`bento-card border border-white/5 flex flex-col group ${
                    index === 1 || index === 3 ? 'sm:translate-y-12' : ''
                  }`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 group-hover:bg-scuta-accent/20 group-hover:border-scuta-accent/40 transition-all duration-500">
                    <solution.icon className="w-6 h-6 text-scuta-silk group-hover:text-scuta-accent" />
                  </div>
                  <h4 className="text-xl font-black text-scuta-silk mb-3 tracking-tight group-hover:text-scuta-accent transition-colors">
                    {solution.title}
                  </h4>
                  <p className="text-sm text-slate-400 leading-relaxed font-medium">
                    {solution.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}