import { motion } from 'motion/react';
import { 
  Smartphone, 
  Search, 
  PenTool, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Zap,
  Layers
} from 'lucide-react';

export default function Solutions() {
  const solutions = [
    {
      icon: Smartphone,
      title: "Mobile-First de Elite",
      description: "80% dos seus clientes estão no telemóvel. Criamos interfaces que carregam instantaneamente e convertem cliques em chamadas.",
      delay: 0.1
    },
    {
      icon: Search,
      title: "Domínio Orgânico (SEO)",
      description: "Não basta existir. Configuramos a sua presença para que o Google o coloque à frente da concorrência local no momento da decisão.",
      delay: 0.2
    },
    {
      icon: PenTool,
      title: "Copywriting Comercial",
      description: "Textos escritos por especialistas em vendas. Transformamos a história da sua empresa num argumento de venda irresistível.",
      delay: 0.3
    },
    {
      icon: ShieldCheck,
      title: "Gestão 'Zero Preocupação'",
      description: "Segurança, backups e atualizações críticas. Tratamos de toda a infraestrutura técnica para que se foque apenas em faturar.",
      delay: 0.4
    }
  ];

  return (
    <section id="solutions" className="relative py-24 md:py-32 px-6 bg-[#030712] overflow-hidden">
      {/* Noise e Textura de Fundo */}
      <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24 items-start">
          
          {/* LADO ESQUERDO: A Narrativa de Valor */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-[10px] font-black uppercase tracking-[0.3em] mb-6">
                <Zap size={12} className="fill-current" />
                Engenharia de Conversão
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.85] tracking-tighter mb-8">
                A infraestrutura <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-emerald-400">
                  dos 1% do mercado.
                </span>
              </h2>
              
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-medium max-w-md">
                Eliminamos a barreira tecnológica entre a sua empresa e o sucesso digital. Entregamos uma presença de luxo, pronta a dominar o seu setor.
              </p>
              
              <ul className="space-y-5 mb-12">
                {[
                  "Design que transmite autoridade imediata",
                  "Arquitetura focada em agendamentos/vendas",
                  "Alojamento de ultra-baixa latência em Portugal",
                  "Suporte prioritário via WhatsApp dedicado"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-slate-200 font-bold text-sm group">
                    <div className="size-6 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20 group-hover:bg-emerald-500 transition-colors duration-500">
                      <CheckCircle2 size={14} className="text-emerald-400 group-hover:text-black" />
                    </div>
                    <span className="opacity-80 group-hover:opacity-100 transition-opacity">{item}</span>
                  </li>
                ))}
              </ul>

              <motion.a 
                href="#contact" 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-4 px-10 py-5 bg-white text-black rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-emerald-400 transition-all shadow-[0_20px_40px_rgba(255,255,255,0.05)]"
              >
                Solicitar Consultoria <ArrowRight size={18} />
              </motion.a>
            </motion.div>
          </div>

          {/* LADO DIREITO: Bento Grid de Soluções */}
          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: solution.delay, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className={`relative p-10 rounded-4xl bg-[#0a1229]/60 backdrop-blur-3xl border border-white/5 flex flex-col group overflow-hidden ${
                    index % 2 !== 0 ? 'sm:mt-12' : ''
                  }`}
                >
                  {/* Efeito de brilho interno no hover */}
                  <div className="absolute inset-0 bg-linear-to-br from-violet-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                  
                  <div className="size-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 border border-white/10 group-hover:border-violet-500/50 group-hover:bg-violet-500/10 transition-all duration-500 relative z-10">
                    <solution.icon className="size-7 text-white group-hover:text-violet-400 transition-colors" />
                  </div>
                  
                  <h4 className="text-2xl font-black text-white mb-4 tracking-tighter relative z-10">
                    {solution.title}
                  </h4>
                  
                  <p className="text-slate-400 leading-relaxed font-medium text-sm relative z-10">
                    {solution.description}
                  </p>

                  <div className="mt-8 pt-6 border-t border-white/5 relative z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-black text-violet-400 uppercase tracking-widest flex items-center gap-2">
                      Padrão Scuta Digital <Layers size={12} />
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}