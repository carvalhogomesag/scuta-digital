import { motion } from 'motion/react';
import { Mail, MessageSquare, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, UI_STRINGS, Language } from '../lib/constants';

export default function Contact({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].contact;

  return (
    <section id="contact" className="relative py-24 px-6 bg-scuta-primary overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                <Sparkles size={14} /> {t.badge}
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-scuta-silk leading-[0.9] tracking-tighter mb-8 text-left">
                {t.title}
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-md text-left">
                {t.subtitle}
              </p>

              <div className="space-y-6">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-scuta-highlight/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-scuta-highlight flex items-center justify-center text-scuta-primary shadow-xl">
                    <MessageSquare size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">WhatsApp Rápido</p>
                    <p className="text-lg font-bold text-scuta-silk">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a 
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="group flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-scuta-accent/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-scuta-accent flex items-center justify-center text-scuta-silk shadow-xl">
                    <Mail size={24} />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Email Corporativo</p>
                    <p className="text-lg font-bold text-scuta-silk">{CONTACT_INFO.email}</p>
                  </div>
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-scuta-surface/90 backdrop-blur-3xl border border-white/10 rounded-4xl p-8 relative"
          >
            <h3 className="text-2xl font-black text-scuta-silk mb-8 tracking-tight flex items-center gap-3 text-left">
              {t.form.title} <div className="h-px bg-white/10 grow ml-2" />
            </h3>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.form.name}</label>
                  <input 
                    type="text" 
                    required
                    placeholder="João Silva"
                    className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.form.email}</label>
                  <input 
                    type="email" 
                    required
                    placeholder="joao@empresa.pt"
                    className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.form.subject}</label>
                <select 
                  className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-slate-400 outline-none focus:border-scuta-accent transition-all"
                >
                  <option>Negócio local (Loja, Salão, Restaurante...)</option>
                  <option>Serviços profissionais (Advogado, Contabilista...)</option>
                  <option>Venda Online / E-commerce</option>
                  <option>Outro tipo de projeto</option>
                </select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">{t.form.message}</label>
                <textarea 
                  rows={3}
                  required
                  placeholder="O que o seu negócio precisa hoje?"
                  className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all resize-none"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-scuta-silk text-scuta-primary font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-scuta-highlight transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                {t.form.send} <Send size={16} />
              </button>
              
              <div className="flex items-center justify-center gap-2 text-[9px] font-bold text-slate-600 uppercase tracking-widest mt-4">
                <ShieldCheck size={12} className="text-scuta-highlight" />
                Os seus dados estão seguros · Resposta em 24h
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
