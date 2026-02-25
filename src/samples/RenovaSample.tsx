import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { 
  Hammer, Paintbrush, Layout, Home, ArrowUpRight, 
  Menu, X, Plus, Quote
} from 'lucide-react';

export default function RenovaSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Efeito de movimento Parallax para as imagens do Hero
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-[#fafafa]">
      
      {/* 1. NAVBAR RENOVA 
          Sticky top-11 (44px) para respeitar a moldura da Scuta Digital */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-8'
      }`}>
        <div className="max-w-350 mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-900">
            <Layout size={24} />
            <span className="text-xl font-renova-display font-bold tracking-tighter uppercase leading-none">Renova.</span>
          </div>

          <div className="hidden md:flex items-center gap-12">
            {['Projetos', 'Serviços', 'Processo'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900 transition-colors leading-none">
                {link}
              </a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-600 transition-all leading-none active:scale-95">
              Solicitar Orçamento
            </button>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-slate-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 w-full bg-white border-b border-slate-100 p-8 md:hidden shadow-2xl"
            >
              <div className="flex flex-col gap-6 text-left">
                {['Projetos', 'Serviços', 'Processo'].map((link) => (
                  <a key={link} href="#" onClick={() => setIsOpen(false)} className="text-2xl font-renova-display font-bold uppercase tracking-tighter border-b border-slate-50 py-2">{link}</a>
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
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent-600 mb-6">
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

          {/* Imagens Parallax com classes canónicas H-150, H-100, H-75 */}
          <div className="lg:col-span-5 relative h-150 hidden lg:block">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-4/5 h-100 rounded-3xl overflow-hidden shadow-2xl z-20 border border-white/20">
              <img 
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
                className="w-full h-full object-cover" 
                alt="Interior de Luxo" 
              />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-3/5 h-75 rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img 
                src="https://images.unsplash.com/photo-1556912177-f547c1268457?q=80&w=2070&auto=format&fit=crop" 
                className="w-full h-full object-cover shadow-inner" 
                alt="Cozinha Design" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-20">
          <div className="text-left">
            <h2 className="text-5xl font-renova-display font-bold mb-12 tracking-tighter uppercase leading-none text-left">
              Soluções para <br /><span className="text-slate-300">sua Transformação.</span>
            </h2>
            <div className="space-y-4 text-left">
              {[
                { title: 'Reforma Residencial', icon: <Home size={32} /> },
                { title: 'Design de Interiores', icon: <Paintbrush size={32} /> },
                { title: 'Consultoria Técnica', icon: <Hammer size={32} /> }
              ].map((s, i) => (
                <div key={i} className="group bg-slate-50 p-8 border border-slate-100 hover:border-slate-900 transition-all cursor-pointer flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-8">
                    <div className="text-slate-400 group-hover:text-accent-600 transition-colors">{s.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight text-slate-800">{s.title}</h3>
                  </div>
                  <Plus size={24} className="text-slate-300 group-hover:rotate-45 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 text-white p-12 rounded-[3rem] flex flex-col justify-center relative overflow-hidden shadow-2xl text-left">
             <Quote size={80} className="absolute -top-4 -right-4 opacity-10" />
             <p className="text-2xl font-medium italic leading-relaxed mb-8 text-left text-zinc-300 tracking-tight">
               "A Renova superou todas as nossas expectativas. O processo foi transparente e o resultado final é simplesmente impecável. Redefiniram a nossa casa e a nossa forma de viver nela."
             </p>
             <div>
                <div className="text-accent-500 font-bold uppercase tracking-widest text-xs">Ricardo & Helena</div>
                <div className="text-[10px] text-zinc-500 uppercase mt-1 tracking-widest">Proprietários · Loft Chiado</div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
}