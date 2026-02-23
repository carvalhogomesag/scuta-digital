import React from 'react';
import { motion } from 'motion/react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'Por que um Site?', href: '#why' },
    { name: 'Soluções', href: '#solutions' },
    { name: 'Dúvidas', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">S</span>
          </div>
          <span className="font-bold text-xl tracking-tight">Scuta Digital</span>
        </div>

        {/* Desktop Nav */}
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
            className="px-5 py-2.5 bg-black text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2"
          >
            Começar Agora <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-black/5 p-6 flex flex-col gap-4 shadow-xl"
        >
          {navLinks.map((link) => (
            <a 
              key={link.href}
              href={link.href} 
              onClick={() => setIsOpen(false)} 
              className="text-lg font-medium text-zinc-800"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)} 
            className="w-full py-4 bg-black text-white rounded-xl text-center font-medium flex items-center justify-center gap-2"
          >
            Começar Agora <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>
      )}
    </nav>
  );
}