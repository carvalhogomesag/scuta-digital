import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { 
  Hammer, Paintbrush, Layout, Home, CheckCircle2, ArrowUpRight, 
  Menu, X, Plus, Quote
} from 'lucide-react';

export default function RenovaSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  // Efeito de movimento nas imagens (Parallax)
  const y1 = useTransform(scrollY, [0, 500], [0, 100]);
  const y2 = useTransform(scrollY, [0, 500], [0, -80]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-900 bg-[#fafafa]">
      {/* 1. NAVBAR RENOVA - Corrigido max-w-350 */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 border-b border-slate-100' : 'bg-transparent py-8'}`}>
        <div className="max-w-350 mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-slate-900">
            <Layout size={24} />
            <span className="text-xl font-renova-display font-bold tracking-tighter uppercase">Renova.</span>
          </div>
          <div className="hidden md:flex items-center gap-12">
            {['Projetos', 'Serviços', 'Processo'].map((link) => (
              <a key={link} href="#" className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900 transition-colors">{link}</a>
            ))}
            <button className="bg-slate-900 text-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.2em] hover:bg-accent-600 transition-all">
              Solicitar Orçamento
            </button>
          </div>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>{isOpen ? <X /> : <Menu />}</button>
        </div>
      </nav>

      {/* 2. HERO RENOVA - Corrigido max-w-350, h-150, h-100, h-75 */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <div className="max-w-350 mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 z-10">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <span className="inline-block text-[10px] font-black uppercase tracking-[0.4em] text-accent-600 mb-6">
                Arquitetura & Design de Interiores
              </span>
              <h1 className="text-6xl md:text-8xl font-renova-display font-bold leading-[0.85] mb-8 tracking-tighter">
                REDEFININDO O SEU <br />
                <span className="text-slate-300 italic font-light">ESPAÇO</span> VITAL.
              </h1>
              <p className="text-xl text-slate-500 max-w-xl mb-12 leading-relaxed">
                Especialistas em reformas residenciais de alto padrão em Portugal. Unimos funcionalidade e precisão técnica.
              </p>
              <div className="flex flex-wrap gap-6">
                <button className="bg-slate-900 text-white px-10 py-5 font-bold uppercase text-xs tracking-widest hover:bg-accent-600 transition-colors flex items-center gap-3">
                  Ver Portfólio <ArrowUpRight size={20} />
                </button>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-5 relative h-150">
            <motion.div style={{ y: y1 }} className="absolute top-0 right-0 w-4/5 h-100 rounded-2xl overflow-hidden shadow-2xl z-20">
              <img src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" className="w-full h-full object-cover" alt="Interior" />
            </motion.div>
            <motion.div style={{ y: y2 }} className="absolute bottom-0 left-0 w-3/5 h-75 rounded-2xl overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img src="https://images.unsplash.com/photo-1556912177-f547c1268457?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover" alt="Kitchen" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3. SERVIÇOS - Corrigido max-w-350 */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-350 mx-auto grid lg:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl font-renova-display font-bold mb-12 tracking-tighter uppercase leading-none">
              Soluções para <br /><span className="text-slate-300">Transformação.</span>
            </h2>
            <div className="space-y-4">
              {[
                { title: 'Reforma Residencial', icon: <Home /> },
                { title: 'Design de Interiores', icon: <Paintbrush /> },
                { title: 'Consultoria Técnica', icon: <Hammer /> }
              ].map((s, i) => (
                <div key={i} className="group bg-slate-50 p-8 border border-slate-100 hover:border-slate-900 transition-all cursor-pointer flex items-center justify-between">
                  <div className="flex items-center gap-8">
                    <div className="text-slate-400 group-hover:text-accent-600 transition-colors">{s.icon}</div>
                    <h3 className="text-xl font-bold uppercase tracking-tight">{s.title}</h3>
                  </div>
                  <Plus size={24} className="group-hover:rotate-45 transition-transform duration-300" />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-slate-900 text-white p-12 rounded-3xl flex flex-col justify-center relative overflow-hidden">
             <Quote size={80} className="absolute -top-4 -right-4 opacity-10" />
             <p className="text-2xl font-medium italic leading-relaxed mb-8">
               "O processo foi transparente e o resultado final é simplesmente impecável. Redefiniram a nossa casa."
             </p>
             <div className="text-accent-500 font-bold uppercase tracking-widest text-xs">Ricardo & Helena</div>
          </div>
        </div>
      </section>
    </div>
  );
}