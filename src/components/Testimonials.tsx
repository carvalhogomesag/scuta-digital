import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { UI_STRINGS, Language } from '../lib/constants';

export default function Testimonials({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].testimonials;

  return (
    <section id="testimonials" className="relative py-24 px-6 bg-scuta-surface overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-black text-scuta-silk tracking-tighter mb-6">
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
              className="p-10 rounded-[2.5rem] bg-scuta-primary/50 border border-white/5 relative group hover:bg-scuta-primary transition-all"
            >
              <Quote className="absolute top-8 right-8 text-white/5 size-16 group-hover:text-scuta-highlight/10 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-scuta-highlight text-scuta-highlight" />
                ))}
              </div>

              <p className="text-lg text-slate-300 font-medium leading-relaxed mb-10 italic text-left">
                "{item.content}"
              </p>

              <div className="flex items-center gap-4">
                <img src={item.avatar} alt={item.author} className="size-12 rounded-full border-2 border-white/10" referrerPolicy="no-referrer" />
                <div className="text-left">
                  <h4 className="text-white font-black text-sm uppercase tracking-widest">{item.author}</h4>
                  <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
