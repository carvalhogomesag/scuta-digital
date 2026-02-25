import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';
// CORREÇÃO: O import agora aponta para a pasta 'lib' onde está o ficheiro
import { UI_STRINGS, BRAND_INFO } from '../lib/constants'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const t = UI_STRINGS.pt.navbar;

  // Lista de links atualizada para incluir a nova secção de amostras (#samples)
  const navLinks = [
    { name: t.why, href: '#why' },
    { name: t.solutions, href: '#solutions' },
    { name: t.samples, href: '#samples' },
    { name: t.faq, href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo - Identidade Scuta Digital */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-white font-bold text-xl leading-none">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight text-zinc-900">
            {BRAND_INFO.name}
          </span>
        </div>

        {/* Desktop Nav - Foco em clareza para o empresário português */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              className="text-sm font-medium text-zinc-600 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2.5 bg-black text-white rounded-full text-sm font-bold hover:bg-zinc-800 transition-all flex items-center gap-2 active:scale-95"
          >
            {t.contact} <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle - Aumentado para melhor toque (UX) */}
        <button 
          className="md:hidden p-2 text-zinc-900 focus:outline-none" 
          onClick={() => setIsOpen(!isOpen)} 
          aria-label={isOpen ? "Fechar Menu" : "Abrir Menu"}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Estrutura otimizada para telemóveis */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-black/10 overflow-hidden shadow-2xl"
          >
            <div className="p-6 flex flex-col gap-4 bg-white">
              {navLinks.map((link) => (
                <a 
                  key={link.href}
                  href={link.href} 
                  onClick={() => setIsOpen(false)} 
                  className="text-lg font-semibold text-zinc-800 py-3 border-b border-zinc-50 flex justify-between items-center"
                >
                  {link.name}
                  <ArrowRight size={16} className="text-zinc-300" />
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)} 
                className="w-full py-4 mt-2 bg-black text-white rounded-xl text-center font-bold flex items-center justify-center gap-2 active:scale-95 transition-transform shadow-lg"
              >
                {t.contact} <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}