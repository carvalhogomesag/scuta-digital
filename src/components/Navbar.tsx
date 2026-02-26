import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Sparkles } from 'lucide-react';
import { UI_STRINGS, BRAND_INFO } from '../lib/constants';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = UI_STRINGS.pt.navbar;

  // Detetar o scroll para mudar o aspeto da barra
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.why, href: '#why' },
    { name: t.solutions, href: '#solutions' },
    { name: t.samples, href: '#samples' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-100 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Container da Barra com Efeito de Vidro Negro */}
        <div className={`glass-dark rounded-full px-8 py-4 flex items-center justify-between transition-all duration-500 ${
          scrolled ? 'border-scuta-accent/30 shadow-[0_0_30px_rgba(124,58,237,0.1)]' : 'bg-transparent border-transparent shadow-none'
        }`}>
          
          {/* LOGO: Mais impactante com ícone Scuta */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="w-10 h-10 bg-scuta-silk rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 duration-300 shadow-xl">
              <span className="text-scuta-primary font-black text-xl leading-none">S</span>
            </div>
            <div className="flex flex-col">
              <span className="font-black text-lg tracking-tighter text-scuta-silk leading-none">
                {BRAND_INFO.name}
              </span>
              <span className="text-[9px] font-bold text-scuta-highlight uppercase tracking-[0.2em] mt-1">
                Estratégia Digital
              </span>
            </div>
          </div>

          {/* DESKTOP NAV: Links com efeito de hover premium */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.href}
                href={link.href} 
                className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-scuta-silk transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scuta-highlight transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* CTA: Botão com Gradiente e Brilho */}
          <div className="hidden md:flex items-center gap-6">
            <a 
              href="#contact" 
              className="px-6 py-3 bg-scuta-silk text-scuta-primary rounded-full text-xs font-black uppercase tracking-widest hover:bg-scuta-highlight hover:text-scuta-primary transition-all flex items-center gap-2 shadow-2xl active:scale-95"
            >
              {t.contact} <ArrowRight size={14} />
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button 
            className="md:hidden text-scuta-silk p-1" 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU: Efeito imersivo */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 glass-dark rounded-[2.5rem] p-8 border border-white/10 overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col gap-8 text-left">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-2xl font-black text-scuta-silk tracking-tighter flex items-center justify-between group"
                >
                  {link.name}
                  <ArrowRight size={20} className="text-scuta-highlight opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="w-full py-5 bg-scuta-accent text-white rounded-2xl text-center font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                {t.contact} <Sparkles size={16} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}