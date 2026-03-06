import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

export default function Testimonials({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].testimonials;

  return (
    // ALTERAÇÃO: bg-slate-50 em vez de bg-scuta-surface — secção clara entre Solutions e Samples escuros
    <section id="testimonials" className="relative py-24 px-6 bg-slate-50 overflow-hidden">

      {/* ALTERAÇÃO: noise svg removido (invisível em fundo claro) — substituído por detalhe geométrico subtil */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          {/* ALTERAÇÃO: text-scuta-silk → text-slate-900 */}
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tighter mb-6">
            {t.title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {t.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              // ALTERAÇÃO: bg-scuta-primary/50 → bg-white, border-white/5 → border-slate-200, hover:bg-scuta-primary → hover:shadow-xl
              className="p-10 rounded-[2.5rem] bg-white border border-slate-200 relative group hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* ALTERAÇÃO: text-white/5 → text-slate-100, group-hover:text-scuta-highlight/10 → group-hover:text-emerald-100 */}
              <Quote className="absolute top-8 right-8 text-slate-100 size-16 group-hover:text-emerald-100 transition-colors" />

              {/* Estrelas — preservadas */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-scuta-highlight text-scuta-highlight" />
                ))}
              </div>

              {/* ALTERAÇÃO: text-slate-300 → text-slate-600 */}
              <p className="text-lg text-slate-600 font-medium leading-relaxed mb-10 italic text-left">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                {/* Avatar com fallback — lógica 100% preservada, classes adaptadas para claro */}
                <div className="relative size-12 shrink-0">
                  <img
                    src={item.avatar}
                    alt={item.author}
                    className="size-12 rounded-full border-2 border-slate-200 object-cover"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      const img = e.currentTarget;
                      img.style.display = 'none';
                      const parent = img.parentElement;
                      if (parent && !parent.querySelector('.avatar-fallback')) {
                        const div = document.createElement('div');
                        div.className =
                          'avatar-fallback size-12 rounded-full border-2 border-slate-200 bg-scuta-accent flex items-center justify-center text-white font-black text-lg absolute inset-0';
                        div.textContent = item.author.charAt(0).toUpperCase();
                        parent.appendChild(div);
                      }
                    }}
                  />
                </div>

                <div className="text-left">
                  {/* ALTERAÇÃO: text-white → text-slate-900 */}
                  <h4 className="text-slate-900 font-black text-sm uppercase tracking-widest">
                    {item.author}
                  </h4>
                  {/* text-slate-500 mantido — funciona bem em claro */}
                  <p className="text-slate-400 text-[10px] font-bold uppercase tracking-widest">
                    {item.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}