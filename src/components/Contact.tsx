import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { CONTACT_INFO } from '../lib/constants'; // Importação da verdade absoluta

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Fale connosco</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Pronto para aumentar a presença digital da sua empresa?</h3>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Focamo-nos em websites orientados para resultados e otimização SEO em Portugal. Comece hoje a atrair mais clientes qualificados.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Email</p>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Telefone</p>
                  <a href={`tel:${CONTACT_INFO.phoneRaw}`} className="text-lg font-medium hover:text-emerald-400 transition-colors">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Localização</p>
                  <p className="text-lg font-medium">{CONTACT_INFO.location}</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900 p-8 md:p-12 rounded-[40px] border border-white/5 relative z-10"
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
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Nome</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    placeholder="João Silva"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Email</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="joao@empresa.pt"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Tipo de Projeto</label>
                <select 
                  name="tipo_negocio"
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none text-zinc-400"
                >
                  <option>Negócio local</option>
                  <option>Loja online</option>
                  <option>Serviços profissionais</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Como podemos ajudar?</label>
                <textarea 
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Fale-nos sobre o seu projeto..."
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-emerald-500 text-black font-bold text-lg rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                Pedir proposta <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}