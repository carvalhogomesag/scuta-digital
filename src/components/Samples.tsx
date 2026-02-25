import React from 'react';
import { CheckCircle, AlertCircle, TrendingUp } from 'lucide-react';
import { SAMPLE_CASES, UI_STRINGS } from '../lib/constants';

export default function Samples() {
  const t = UI_STRINGS.pt.navbar;

  return (
    <section id="samples" className="py-24 px-6 bg-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Como ajudamos negócios como o seu
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-medium">
            Não criamos apenas sites bonitos. Criamos ferramentas que resolvem problemas reais e trazem dinheiro para o seu bolso.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {SAMPLE_CASES.map((item) => (
            <div key={item.id} className="bg-white p-8 rounded-3xl shadow-sm border border-zinc-100 flex flex-col">
              <div className="flex items-center gap-2 text-amber-600 mb-4 text-sm font-bold">
                <AlertCircle size={16} /> O Problema: {item.pain}
              </div>
              <h3 className="text-xl font-bold mb-4 text-zinc-900">{item.business}</h3>
              {/* CORREÇÃO AQUI: 'grow' em vez de 'flex-grow' */}
              <div className="flex items-start gap-2 text-zinc-600 mb-6 grow">
                <CheckCircle size={18} className="shrink-0 mt-1 text-zinc-400" />
                <p className="text-sm font-medium"><strong>A Nossa Solução:</strong> {item.solution}</p>
              </div>
              <div className="mt-auto bg-zinc-900 p-4 rounded-2xl flex items-center gap-3 text-white">
                <TrendingUp size={20} className="text-emerald-400" />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-zinc-400 block font-bold">Resultado esperado</span>
                  <span className="text-sm font-medium">{item.result}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}