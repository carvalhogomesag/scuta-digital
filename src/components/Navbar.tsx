import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import { UI_STRINGS, BRAND_INFO, Language } from '../lib/constants';

export default function Navbar({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const t = UI_STRINGS[lang];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fechar menu de idioma ao clicar fora
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as HTMLElement;
      if (!target.closest('#lang-menu-wrapper')) {
        setShowLangMenu(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinks = [
    { name: t.navbar.why,       href: '#why' },
    { name: t.navbar.solutions, href: '#solutions' },
    { name: t.navbar.samples,   href: '#samples' },
    { name: t.navbar.pricing,   href: '#pricing' },
    { name: t.navbar.faq,       href: '#faq' },
  ];

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'pt-pt', label: 'Portugal', flag: '🇵🇹' },
    { code: 'pt-br', label: 'Brasil',   flag: '🇧🇷' },
    { code: 'en',    label: 'English',  flag: '🇬🇧' },
    { code: 'es',    label: 'Español',  flag: '🇪🇸' },
  ];

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'py-4' : 'py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className={`backdrop-blur-xl border transition-all duration-500 rounded-full px-8 py-4 flex items-center justify-between ${
          scrolled
            ? 'bg-scuta-primary/80 border-white/10 shadow-2xl'
            : 'bg-transparent border-transparent'
        }`}>

          {/* Logo */}
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="size-10 bg-scuta-silk rounded-xl flex items-center justify-center transition-transform group-hover:rotate-12 duration-300 shadow-xl">
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

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-scuta-silk transition-all relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-scuta-highlight transition-all group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Direita: idioma + CTA */}
          <div className="hidden md:flex items-center gap-6">

            {/* Selector de idioma */}
            <div className="relative" id="lang-menu-wrapper">
              <button
                onClick={() => setShowLangMenu(!showLangMenu)}
                className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-300 hover:text-scuta-silk transition-all"
              >
                <span>{currentLang.flag}</span>
                <span className="hidden lg:inline">{currentLang.label}</span>
                <ChevronDown size={12} className={`transition-transform ${showLangMenu ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {showLangMenu && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute top-full right-0 mt-4 bg-scuta-surface border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[140px]"
                  >
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => {
                          setLang(l.code);
                          setShowLangMenu(false);
                        }}
                        className={`w-full flex items-center gap-3 px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all ${
                          lang === l.code
                            ? 'bg-scuta-highlight text-scuta-primary'
                            : 'text-slate-400 hover:bg-white/5 hover:text-scuta-silk'
                        }`}
                      >
                        <span>{l.flag}</span>
                        <span>{l.label}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Botão CTA */}
            <a
              href="#contact"
              className="px-6 py-3 bg-scuta-silk text-scuta-primary rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-scuta-highlight hover:text-scuta-primary transition-all flex items-center gap-2 shadow-2xl active:scale-95"
            >
              {t.navbar.contact} <ArrowRight size={14} />
            </a>
          </div>

          {/* Botão hamburger mobile */}
          <button
            className="md:hidden text-scuta-silk p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 bg-scuta-surface border border-white/10 rounded-[2.5rem] p-8 overflow-hidden shadow-2xl"
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

              {/* Selector de idioma mobile */}
              <div className="grid grid-cols-2 gap-4">
                {languages.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => {
                      setLang(l.code);
                      setIsOpen(false);
                    }}
                    className={`flex items-center justify-center gap-2 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest border transition-all ${
                      lang === l.code
                        ? 'bg-scuta-highlight border-scuta-highlight text-scuta-primary'
                        : 'bg-white/5 border-white/10 text-slate-400'
                    }`}
                  >
                    <span>{l.flag}</span>
                    <span>{l.label}</span>
                  </button>
                ))}
              </div>

              {/* CTA mobile */}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="w-full py-5 bg-scuta-accent text-white rounded-2xl text-center font-black uppercase tracking-widest text-sm flex items-center justify-center gap-3 shadow-xl active:scale-95"
              >
                {t.navbar.contact}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}