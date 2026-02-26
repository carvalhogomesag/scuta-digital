import { motion } from 'motion/react';
import { Mail, MapPin, MessageSquare, Send, Sparkles, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO, UI_STRINGS } from '../lib/constants';

export default function Contact() {
  const t = UI_STRINGS.pt.contact;

  return (
    <section id="contact" className="relative py-16 px-6 noise bg-scuta-primary overflow-hidden">
      {/* Mesh Gradient de Fundo para fecho de página */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full bg-scuta-accent/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* COLUNA ESQUERDA: Texto e Autoridade */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-6">
                <Sparkles size={14} /> Inicie a sua expansão
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-scuta-silk leading-[0.9] tracking-tighter mb-8">
                Pronto para <br />
                <span className="text-scuta-gradient">Vencer Online?</span>
              </h2>
              <p className="text-xl text-slate-400 mb-12 leading-relaxed font-medium max-w-md">
                {t.subtitle}
              </p>

              {/* Cartões de Contacto Estilo Bento-Mini */}
              <div className="space-y-6">
                <a 
                  href={`https://wa.me/${CONTACT_INFO.phoneRaw}`}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-6 p-4 rounded-3xl bg-white/5 border border-white/5 hover:border-scuta-highlight/50 transition-all duration-500"
                >
                  <div className="w-12 h-12 rounded-2xl bg-scuta-highlight flex items-center justify-center text-scuta-primary shadow-[0_0_15px_rgba(16,185,129,0.3)]">
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
                  <div className="w-12 h-12 rounded-2xl bg-scuta-accent flex items-center justify-center text-scuta-silk shadow-[0_0_15px_rgba(124,58,237,0.3)]">
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

          {/* COLUNA DIREITA: O Formulário de Comando */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bento-card border-white/10 relative"
          >
            <div className="absolute -top-4 -right-4 w-20 h-20 bg-scuta-highlight/20 blur-2xl rounded-full" />
            
            <h3 className="text-2xl font-black text-scuta-silk mb-8 tracking-tight flex items-center gap-3 text-left">
              Solicitar Orçamento <div className="h-px bg-white/10 grow ml-2" />
            </h3>

            <form 
              name="contact" 
              method="POST" 
              action="/" 
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              className="space-y-5"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">O seu nome</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    placeholder="João Silva"
                    className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all placeholder:text-slate-700"
                  />
                </div>
                <div className="space-y-2 text-left">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">E-mail de contacto</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="joao@empresa.pt"
                    className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all placeholder:text-slate-700"
                  />
                </div>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Tipo de negócio</label>
                <select 
                  name="tipo_negocio"
                  className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-slate-400 outline-none focus:border-scuta-accent transition-all appearance-none cursor-pointer font-bold"
                >
                  <option>Negócio local (Loja, Salão, Restaurante...)</option>
                  <option>Serviços profissionais (Advogado, Contabilista...)</option>
                  <option>Venda Online / E-commerce</option>
                  <option>Outro tipo de projeto</option>
                </select>
              </div>

              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Mensagem breve</label>
                <textarea 
                  name="mensagem"
                  rows={3}
                  required
                  placeholder="O que o seu negócio precisa hoje?"
                  className="w-full bg-scuta-primary/50 border border-white/5 rounded-2xl p-4 text-scuta-silk outline-none focus:border-scuta-accent transition-all resize-none placeholder:text-slate-700"
                />
              </div>

              <button 
                type="submit"
                className="w-full py-5 bg-scuta-silk text-scuta-primary font-black text-sm uppercase tracking-[0.2em] rounded-2xl hover:bg-scuta-highlight transition-all shadow-2xl flex items-center justify-center gap-3 active:scale-95"
              >
                Enviar Solicitação <Send size={16} />
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