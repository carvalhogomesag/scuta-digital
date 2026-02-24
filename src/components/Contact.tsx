import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-black text-white px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-200 h-200 bg-emerald-500/10 blur-[120px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-bold text-emerald-400 uppercase tracking-widest mb-4">Contacto</h2>
            <h3 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">Pronto para transformar a sua presença digital?</h3>
            <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
              Pare de perder clientes para a concorrência. Vamos construir uma página que representa o seu negócio com a autoridade que merece.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">E-mail</p>
                  <p className="text-lg font-medium">contacto@scutadigital.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Telemóvel / WhatsApp</p>
                  <p className="text-lg font-medium">+351 914 044 748</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-zinc-900 rounded-xl flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-zinc-500 uppercase font-bold tracking-wider">Localização</p>
                  <p className="text-lg font-medium">Portugal & Remoto</p>
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
            {/* 
              CONFIGURAÇÃO NETLIFY: 
              - name="contact" é o nome do formulário no painel
              - data-netlify="true" ativa o serviço
            */}
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true"
              className="space-y-6"
            >
              {/* Campo oculto necessário para React/Netlify funcionar */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Nome Completo</label>
                  <input 
                    type="text" 
                    name="nome"
                    required
                    placeholder="Ex: José Silva"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">E-mail Profissional</label>
                  <input 
                    type="email" 
                    name="email"
                    required
                    placeholder="jose@empresa.pt"
                    className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Tipo de Projeto</label>
                <select 
                  name="tipo_projeto"
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors appearance-none text-zinc-400"
                >
                  <option>Landing Page de Vendas</option>
                  <option>Site Institucional</option>
                  <option>Sistema Web Personalizado</option>
                  <option>Outros</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-zinc-500 uppercase tracking-wider">Como podemos ajudar?</label>
                <textarea 
                  name="mensagem"
                  rows={4}
                  required
                  placeholder="Conte-nos brevemente qual é o seu objetivo..."
                  className="w-full bg-black border border-white/10 rounded-2xl p-4 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                />
              </div>
              <button 
                type="submit"
                className="w-full py-5 bg-emerald-500 text-black font-bold text-lg rounded-2xl hover:bg-emerald-400 transition-all flex items-center justify-center gap-2"
              >
                Enviar Mensagem <Send className="w-5 h-5" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}