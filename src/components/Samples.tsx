import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight, MousePointer2 } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites';

export default function Samples() {
  return (
    <section id="samples" className="py-24 px-6 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        
        {/* Cabeçalho da Secção com animação de entrada */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-zinc-900 mb-6">
              Soluções reais para <br />
              <span className="text-zinc-400">problemas reais.</span>
            </h2>
            <p className="text-xl text-zinc-600 max-w-2xl mx-auto font-medium leading-relaxed">
              Clique nos exemplos abaixo para ver como transformámos a presença digital destes negócios com estratégia e design.
            </p>
          </motion.div>
        </div>

        {/* Grelha de Projetos */}
        <div className="grid md:grid-cols-3 gap-8">
          {SAMPLE_SITES.map((site, index) => (
            <motion.div
              key={site.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link 
                to={`/exemplos/${site.slug}`}
                className="group relative bg-white p-2 rounded-[2.5rem] border border-zinc-200 transition-all duration-500 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.1)] hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Conteúdo Interno do Cartão - Corrigido rounded-4xl */}
                <div className="p-8 rounded-4xl flex flex-col grow transition-colors duration-500"
                     style={{ backgroundColor: `${site.theme.primary}05` }}>
                  
                  {/* Badge do Setor */}
                  <div className="flex justify-between items-start mb-8">
                    <span 
                      className="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm"
                      style={{ backgroundColor: 'white', color: site.theme.primary }}
                    >
                      {site.sector}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-zinc-300 group-hover:text-zinc-900 transition-colors shadow-sm">
                      <MousePointer2 size={18} />
                    </div>
                  </div>

                  {/* Info do Cliente */}
                  <div className="mb-6 text-left">
                    <div className="flex items-center gap-2 text-amber-600 mb-3 text-[10px] font-black uppercase tracking-widest">
                      <AlertCircle size={14} /> Dor: {site.pain.substring(0, 30)}...
                    </div>
                    <h3 className="text-3xl font-black text-zinc-900 mb-4 tracking-tighter leading-none">
                      {site.companyName}
                    </h3>
                  </div>

                  {/* Resumo da Solução */}
                  <div className="flex items-start gap-3 text-zinc-600 mb-8 grow text-left">
                    <CheckCircle size={20} className="shrink-0 mt-1" style={{ color: site.theme.primary }} />
                    <p className="text-sm font-medium leading-relaxed">
                      <strong>Solução Scuta:</strong> {site.solution.substring(0, 85)}...
                    </p>
                  </div>

                  {/* CTA do Cartão */}
                  <div 
                    className="mt-auto p-5 rounded-2xl flex items-center justify-between text-white transition-all duration-500 shadow-lg"
                    style={{ backgroundColor: site.theme.primary }}
                  >
                    <div className="flex items-center gap-3">
                      <TrendingUp size={20} className="text-white/80" />
                      <span className="text-sm font-black uppercase tracking-widest text-white">Explorar Projeto</span>
                    </div>
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform text-white" />
                  </div>
                </div>

                {/* Overlay de Hover (Glow sutil com a cor do tema) */}
                <div 
                  className="absolute inset-0 rounded-[2.5rem] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none border-2"
                  style={{ borderColor: site.theme.primary }}
                />
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Mensagem de Rodapé da Secção */}
        <div className="mt-20 text-center">
          <p className="text-zinc-400 font-bold text-xs uppercase tracking-[0.3em]">
            Novos estudos de caso adicionados mensalmente
          </p>
        </div>
      </div>
    </section>
  );
}