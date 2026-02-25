import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Hammer, Paintbrush, Layout, Home, ArrowUpRight, 
  Menu, X, Plus, Quote, MapPin, Phone
} from 'lucide-react';

export default function RenovaSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Efeito Parallax
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-[#fafafa]">
      
      {/* 1. NAVBAR RENOVA - Sticky top-11 para alinhar com a Scuta Digital */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-350 mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-900 text-left">
            <Layout size={24} />
            <span className="text-xl font-renova-display font-bold tracking-tighter uppercase leading-none text-left">Renova.</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Serviços', 'Portfólio', 'Método', 'Contacto'].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900 transition-colors leading-none">
                {link}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-600 transition-all leading-none active:scale-95">
              Solicitar Orçamento
            </button>
          </div>

          <button className="md:hidden text-slate-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-left">
                {['Serviços', 'Portfólio', 'Método'].map((link) => (
                  <a key={link} href={`#${link.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-2xl font-renova-display font-bold uppercase tracking-tighter border-b border-slate-50 py-2">{link}</a>
                ))}
                <button className="w-full bg-slate-900 text-white py-5 font-bold uppercase tracking-widest text-xs mt-4">Solicitar Orçamento</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO RENOVA */}
      <section className="relative min-h-[90vh] flex items-center pt-10 pb-20 overflow-hidden">
        <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center text-left">
          <div className="lg:col-span-7 z-10 text-left">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-left">
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent-600 mb-6 text-left">
                Arquitetura & Design de Interiores
              </span>
              <h1 className="text-6xl md:text-8xl font-renova-display font-bold leading-[0.85] mb-8 tracking-tighter text-left">
                REDEFININDO O SEU <br />
                <span className="text-slate-300 italic font-light">ESPAÇO</span> VITAL.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed font-medium text-left">
                Especialistas em reformas residenciais de alto padrão em Portugal. Unimos funcionalidade, estética e precisão técnica para criar ambientes extraordinários.
              </p>
              <div className="flex flex-wrap gap-6 text-left">
                <button className="bg-slate-900 text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-accent-600 transition-colors flex items-center gap-3 active:scale-95 shadow-xl">
                  Ver Portfólio <ArrowUpRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-150 hidden lg:block">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-4/5 h-100 rounded-3xl overflow-hidden shadow-2xl z-20 border border-white/20">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Interior Luxo" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-3/5 h-75 rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1556912177-f547c1268457?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover shadow-inner" alt="Cozinha Design" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS */}
      <section id="serviços" className="py-32 bg-white px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-left text-zinc-900">
            <h2 className="text-5xl md:text-7xl font-renova-display font-bold mb-12 tracking-tighter uppercase leading-none text-left">
              Soluções para <br /><span className="text-slate-300">Transformação.</span>
            </h2>
            <div className="space-y-4 text-left">
              {[
                { title: 'Reforma Integral (Chave na Mão)', icon: <Home size={32} /> },
                { title: 'Design de Interiores & Decoração', icon: <Paintbrush size={32} /> },
                { title: 'Consultoria e Viabilidade', icon: <Hammer size={32} /> }
              ].map((s, i) => (
                <div key={i} className="group bg-slate-50 p-8 border border-slate-100 hover:border-slate-900 transition-all cursor-pointer flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-8">
                    <div className="text-slate-400 group-hover:text-accent-600 transition-colors">{s.icon}</div>
                    <h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-slate-800">{s.title}</h3>
                  </div>
                  <Plus size={24} className="text-slate-300 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[3rem] flex flex-col justify-center relative overflow-hidden shadow-2xl text-left aspect-square">
             <Quote size={120} className="absolute -top-6 -right-6 opacity-10 text-accent-500" />
             <p className="text-3xl md:text-4xl font-light italic leading-snug mb-12 text-left text-zinc-300 tracking-tight">
               "O processo foi transparente e o resultado final é simplesmente impecável. Redefiniram a nossa casa e a nossa forma de viver nela."
             </p>
             <div className="text-left">
                <div className="text-accent-500 font-bold uppercase tracking-widest text-sm mb-1">Ricardo & Helena</div>
                <div className="text-xs text-zinc-500 uppercase tracking-widest">Proprietários · Loft Chiado</div>
             </div>
          </div>
        </div>
      </section>

      {/* 4. PORTFÓLIO - CORRIGIDO: h-200 e bg-linear-to-t */}
      <section id="portfólio" className="py-32 bg-slate-900 text-white px-6">
        <div className="max-w-350 mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="text-left">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-accent-500 mb-4 block text-left">Obras Entregues</span>
              <h2 className="text-5xl md:text-7xl font-renova-display font-bold tracking-tighter uppercase leading-none text-left">Obras em <br/><span className="text-slate-600">Destaque.</span></h2>
            </div>
            <button className="text-xs font-bold uppercase tracking-widest hover:text-accent-500 transition-colors flex items-center gap-2">
              Ver Galeria Completa <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="grid md:grid-cols-12 gap-6 h-200">
            <div className="md:col-span-8 relative group overflow-hidden bg-slate-800 rounded-3xl">
              <img src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Projeto" />
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-10 left-10 text-left">
                <p className="text-accent-500 font-black uppercase tracking-widest text-[10px] mb-2 text-left">Restauro Total</p>
                <h3 className="text-3xl font-renova-display font-bold text-left">Moradia Foz do Douro</h3>
              </div>
            </div>

            <div className="md:col-span-4 grid grid-rows-2 gap-6 text-left">
              <div className="relative group overflow-hidden bg-slate-800 rounded-3xl">
                <img src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Projeto" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <p className="text-accent-500 font-black uppercase tracking-widest text-[10px] mb-1 text-left">Cozinhas</p>
                  <h3 className="text-xl font-renova-display font-bold text-left">Apartamento Expo</h3>
                </div>
              </div>

              <div className="relative group overflow-hidden bg-slate-800 rounded-3xl text-left">
                <img src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" alt="Projeto" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-transparent to-transparent opacity-80" />
                <div className="absolute bottom-6 left-6 text-left text-white">
                  <p className="text-accent-500 font-black uppercase tracking-widest text-[10px] mb-1 text-left">Design</p>
                  <h3 className="text-xl font-renova-display font-bold text-left">Escritório Lisboa</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. CONTACTO */}
      <section id="contacto" className="py-32 bg-white px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-20">
          <div className="text-left text-zinc-900">
            <h2 className="text-5xl md:text-7xl font-renova-display font-bold tracking-tighter uppercase leading-none mb-8 text-left">
              Pronto para <br /><span className="text-accent-600">Construir?</span>
            </h2>
            <p className="text-xl text-slate-500 mb-12 font-medium text-left">Contacte-nos para avaliar a viabilidade do seu projeto de luxo em Portugal.</p>
            
            <div className="space-y-8 text-left">
              <div className="flex items-center gap-6 text-left">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0"><MapPin className="text-slate-900" /></div>
                <div className="text-left"><h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-left">Estúdio (Lisboa)</h4><p className="text-slate-500 text-left">Rua Castilho, 1234 - Príncipe Real</p></div>
              </div>
              <div className="flex items-center gap-6 text-left">
                <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center shrink-0"><Phone className="text-slate-900" /></div>
                <div className="text-left"><h4 className="font-bold uppercase tracking-widest text-xs mb-1 text-left">Telefone Direto</h4><p className="text-slate-500 text-left">+351 210 987 654</p></div>
              </div>
            </div>
          </div>

          <div className="bg-slate-50 p-12 rounded-[3rem] text-left">
            <h3 className="text-2xl font-bold uppercase tracking-tighter mb-8 text-left text-slate-900">Pedido de Orçamento</h3>
            <form className="space-y-6 text-left">
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2 text-left">Nome Completo</label>
                <input type="text" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:outline-none focus:border-slate-900 text-slate-900" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2 text-left">Email</label>
                <input type="email" className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:outline-none focus:border-slate-900 text-slate-900" />
              </div>
              <div className="space-y-2 text-left">
                <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 ml-2 text-left">Detalhes da Obra</label>
                <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-2xl p-5 focus:outline-none focus:border-slate-900 resize-none text-slate-900" placeholder="Ex: Apartamento T3 para renovação total..."></textarea>
              </div>
              <button className="w-full bg-slate-900 text-white font-bold uppercase tracking-widest text-xs py-5 rounded-2xl hover:bg-accent-600 transition-colors mt-4">
                Enviar Detalhes
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}