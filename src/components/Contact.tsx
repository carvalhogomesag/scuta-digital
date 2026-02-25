import { motion } from 'motion/react';
import { Mail, Phone, MapPin, MessageSquare, Send } from 'lucide-react';
import { CONTACT_INFO, UI_STRINGS } from '../lib/constants';

export default function Contact() {
  const t = UI_STRINGS.pt.contact;

  return (
    <section id="contact" className="py-24 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        
        {/* Efeito de luz sutil (Zinc/White) em vez de Emerald para manter a autoridade */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-white/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-4">
              Inicie o seu projeto
            </h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight tracking-tight">
              {t.title}
            </h3>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed max-w-lg">
              {t.subtitle}
            </p>

            {/* Cartões de Contacto Direto */}
            <div className="space-y-8">
              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mb-1">WhatsApp (Resposta rápida)</p>
                  <a 
                    href={`https://wa.me/${CONTACT_INFO.phoneRaw}?text=${encodeURIComponent(CONTACT_INFO.whatsappMessage)}`}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl font-bold hover:text-zinc-300 transition-colors"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mb-1">E-mail para Orçamentos</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-xl font-bold hover:text-zinc-300 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="group flex items-center gap-5">
                <div className="w-14 h-14 bg-zinc-900 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-white/20 transition-colors">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 uppercase font-black tracking-widest mb-1">Sediada em</p>
                  <p className="text-xl font-bold">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formulário Profissional (Netlify Ready) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 p-8 md:p-12 rounded-[40px] border border-white/10 backdrop-blur-sm relative z-10 shadow-2xl"
          >
            <form 
              name="contact" 
              method="POST" 
              action="/" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>Não preencha: <input name="bot-field" /></label>
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">O seu Nome</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    placeholder="Como se chama?"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-white transition-colors text-white font-medium"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">E-mail de Contacto</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="exemplo@email.pt"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-white transition-colors text-white font-medium"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">O seu Negócio</label>
                <div className="relative">
                  <select 
                    name="tipo_negocio"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-white transition-colors appearance-none text-zinc-400 font-medium cursor-pointer"
                  >
                    <option>Negócio local (Loja, Salão, Restaurante...)</option>
                    <option>Serviços profissionais (Advogado, Contabilista...)</option>
                    <option>Venda Online / E-commerce</option>
                    <option>Outro tipo de projeto</option>
                  </select>
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-600">
                    <Send size={14} className="rotate-90" />
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-xs font-black text-zinc-400 uppercase tracking-widest ml-1">Como podemos ajudar?</label>
                <textarea 
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Explique-nos brevemente o que o seu negócio faz..."
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-white transition-colors resize-none text-white font-medium"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-white text-black font-black text-lg rounded-2xl hover:bg-zinc-200 transition-all flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                Pedir Orçamento Grátis <Send className="w-5 h-5" />
              </button>
              <p className="text-center text-[10px] text-zinc-600 uppercase tracking-widest font-bold">
                Respondemos em menos de 24 horas úteis.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}