import { Link } from 'react-router-dom';
import { CheckCircle, AlertCircle, TrendingUp, ArrowRight } from 'lucide-react';
import { SAMPLE_SITES } from '../data/sampleSites'; // Nova fonte de dados centralizada

export default function Samples() {
  return (
    <section id="samples" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Como ajudamos negócios como o seu
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-medium">
            Não criamos apenas sites bonitos. Criamos ferramentas que resolvem problemas reais e trazem dinheiro para o seu bolso. 
            <span className="block mt-2 text-zinc-400 text-sm italic">Clique num exemplo abaixo para ver a solução detalhada.</span>
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SAMPLE_SITES.map((site) => (
            <Link 
              key={site.slug} 
              to={`/exemplos/${site.slug}`}
              className="group bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-zinc-300 cursor-pointer"
            >
              <div className="flex items-center gap-2 text-amber-600 mb-4 text-sm font-bold">
                <AlertCircle size={16} /> O Problema: {site.pain.substring(0, 40)}...
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-zinc-900 group-hover:text-black transition-colors">
                {site.companyName}
              </h3>
              
              <div className="flex items-start gap-2 text-zinc-600 mb-8 grow">
                <CheckCircle size={18} className="shrink-0 mt-1 text-zinc-400" />
                <p className="text-sm font-medium leading-relaxed">
                  <strong>A Nossa Solução:</strong> {site.solution.substring(0, 100)}...
                </p>
              </div>
              
              <div className="mt-auto">
                <div className="bg-zinc-900 p-4 rounded-2xl flex items-center justify-between text-white group-hover:bg-black transition-colors">
                  <div className="flex items-center gap-3">
                    <TrendingUp size={20} className="text-emerald-400" />
                    <span className="text-sm font-bold">Ver Estudo de Caso</span>
                  </div>
                  <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}