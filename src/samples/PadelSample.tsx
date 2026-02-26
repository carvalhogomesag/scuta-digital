import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Trophy, Users, Coffee, Calendar, ArrowRight, 
  CheckCircle2, Clock, Star, MapPin, Phone, 
  ChevronRight, Menu, X, Play, Zap
} from 'lucide-react';

export default function PadelSample() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="font-sans text-slate-100 bg-scuta-primary overflow-x-hidden selection:bg-[#a3e635] selection:text-black">
      
      {/* 1. NAVBAR DESPORTIVA */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-left">
            <div className="w-10 h-10 bg-[#a3e635] rounded-lg flex items-center justify-center text-black shadow-[0_0_20px_rgba(163,230,53,0.4)]">
              <Zap size={24} fill="currentColor" />
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase italic text-left">Padel Pro<span className="text-[#a3e635]">Hub</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Campos', 'Academia', 'Social', 'Contactos'].map((item) => (
              <a key={item} href="#" className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-[#a3e635] transition-colors leading-none">
                {item}
              </a>
            ))}
            <button className="bg-[#a3e635] text-black px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl hover:scale-105 transition-all active:scale-95 leading-none">
              Reservar Agora
            </button>
          </div>

          <button className="md:hidden text-white focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 2. HERO: ARENA VIBE */}
      <section className="relative min-h-[90vh] flex items-center pt-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(163,230,53,0.1),transparent_70%)]" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
            <div className="inline-flex items-center gap-2 bg-[#a3e635]/10 text-[#a3e635] px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-8 border border-[#a3e635]/20">
              <Star size={14} fill="currentColor" /> O Clube #1 de Lisboa
            </div>
            <h1 className="text-6xl md:text-8xl font-black leading-[0.85] mb-8 tracking-tighter uppercase italic text-left">
              Domine a <br /><span className="text-[#a3e635]">Cancha.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-lg leading-relaxed font-medium text-left">
              Campos panorâmicos de última geração, treinadores certificados WPT e o melhor ambiente social pós-jogo da capital.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="bg-[#a3e635] text-black px-10 py-5 rounded-2xl font-black text-xl shadow-[0_20px_40px_rgba(163,230,53,0.2)] hover:shadow-[0_20px_40px_rgba(163,230,53,0.4)] transition-all flex items-center justify-center gap-3 group active:scale-95">
                Alugar Campo <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white/5 aspect-4/3 bg-slate-800">
              {/* --- A TUA IMAGEM PERSONALIZADA AQUI --- */}
              <img 
                src="/paddel.png" 
                className="w-full h-full object-cover" 
                alt="Padel Pro Hub Arena" 
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent" />
            </div>
            
            {/* Stats Card */}
            <motion.div 
              animate={{ y: [0, -15, 0] }} 
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} 
              className="absolute -bottom-6 -right-6 glass p-8 rounded-3xl shadow-2xl z-20 border border-white/10 text-left"
            >
              <div className="text-4xl font-black text-[#a3e635] mb-1 leading-none tracking-tighter">12</div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none">Campos Ativos</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. BENTO GRID: SERVIÇOS DO CLUBE */}
      <section className="py-32 bg-white text-slate-900 px-6 noise">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Campo Rental */}
            <div className="md:col-span-2 bg-scuta-primary rounded-[3rem] p-12 text-white flex flex-col justify-between relative overflow-hidden group min-h-[450px]">
              <div className="absolute top-0 right-0 p-12 opacity-5 group-hover:opacity-10 transition-opacity">
                <Trophy size={280} />
              </div>
              <div className="relative z-10 text-left">
                <span className="text-[#a3e635] font-black uppercase tracking-widest text-[10px] mb-4 block">Disponibilidade 24/7</span>
                <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic leading-none mb-6">Aluguer de <br/>Campos.</h3>
                <p className="text-slate-400 max-w-sm mb-10 text-lg leading-relaxed">Reserve a sua hora em campos com manutenção diária e iluminação LED profissional.</p>
                <button className="bg-white text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-xs hover:bg-[#a3e635] transition-all active:scale-95 shadow-xl">Ver Horários</button>
              </div>
            </div>

            {/* Academia */}
            <div className="bg-slate-50 rounded-[3rem] p-10 flex flex-col justify-between text-left group hover:bg-[#a3e635] transition-all duration-500 border border-slate-100">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-[#a3e635] mb-8 shadow-xl transition-transform group-hover:rotate-12">
                <Zap size={32} fill="currentColor" />
              </div>
              <div>
                <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-4">Academia Pro.</h3>
                <p className="text-slate-600 font-medium group-hover:text-black transition-colors leading-relaxed">Aulas individuais ou em grupo para todos os níveis, com técnicos certificados.</p>
              </div>
              <div className="mt-8 w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all">
                <ArrowRight size={20} />
              </div>
            </div>

            {/* Cafetaria / Social */}
            <div className="bg-[#f59e0b] rounded-[3rem] p-10 flex flex-col justify-between text-left text-white md:col-span-3 lg:col-span-1 relative overflow-hidden group shadow-xl">
               <div className="absolute -bottom-10 -right-10 opacity-20 rotate-12 group-hover:rotate-0 transition-transform duration-700">
                 <Coffee size={220} />
               </div>
               <div className="relative z-10">
                <h3 className="text-3xl font-black tracking-tighter uppercase italic mb-4">Social & <br/>Coffee.</h3>
                <p className="text-black/80 font-bold leading-relaxed">O 3º tempo é o mais importante. Cafetaria premium com esplanada e zona lounge exclusiva.</p>
              </div>
              <button className="mt-12 w-fit bg-black text-white px-6 py-3 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all">Ver Menu Hub</button>
            </div>
          </div>
        </div>
      </section>

      {/* 4. FOOTER DO CLUBE */}
      <footer className="py-20 bg-[#020617] border-t border-white/5 text-center px-6">
        <div className="flex flex-col items-center gap-10">
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            <div className="text-2xl font-black tracking-tighter uppercase italic">ADIDAS</div>
            <div className="text-2xl font-black tracking-tighter uppercase italic text-[#a3e635]">BULLPADEL</div>
            <div className="text-2xl font-black tracking-tighter uppercase italic text-white">HEAD</div>
          </div>
          <div className="h-px w-32 bg-white/5" />
          <p className="text-[10px] font-black uppercase tracking-[0.6em] text-slate-600">
            Padel Pro Hub Lisboa · Developed by Scuta Digital
          </p>
        </div>
      </footer>
    </div>
  );
}