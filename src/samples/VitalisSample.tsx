import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Heart, Users, Stethoscope, Activity, ArrowRight, 
  ShieldCheck, Clock, ChevronRight, Menu, X,
  MapPin, Phone, Mail
} from 'lucide-react';

export default function VitalisSample() {
  const[isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[]);

  return (
    <div className="font-sans text-slate-900 bg-white">
      
      {/* 1. NAVBAR VITALIS */}
      <nav className={`sticky top-11 w-full z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md py-4 border-b border-slate-100 shadow-sm' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 text-left">
            <div className="w-10 h-10 bg-brand-600 rounded-xl flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
              <Heart size={22} fill="currentColor" />
            </div>
            <span className="text-2xl font-bold tracking-tight text-slate-900">Vitalis</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-left">
            {['Especialidades', 'Equipa', 'Acordos', 'Contacto'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-bold text-slate-500 hover:text-brand-600 transition-colors uppercase tracking-widest leading-none">
                {item}
              </a>
            ))}
            <button className="bg-brand-600 text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-brand-500/20 active:scale-95 transition-all leading-none">
              Portal do Doente
            </button>
          </div>

          <button className="md:hidden text-slate-900 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-b border-slate-100 overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4 text-left">
                {['Especialidades', 'Equipa', 'Acordos'].map((item) => (
                  <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setIsOpen(false)} className="text-lg font-bold text-slate-700 py-2 border-b border-slate-50">{item}</a>
                ))}
                <button className="w-full bg-brand-600 text-white py-4 mt-2 rounded-xl font-bold shadow-lg">Portal do Doente</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* 2. HERO */}
      <section className="relative min-h-[85vh] flex items-center pt-10 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 rounded-l-[100px] hidden lg:block -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center text-left">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="text-left">
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-6">
              <Activity size={14} /> Cuidado Humanizado
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter text-left">
              A sua saúde em <br /><span className="text-brand-600 italic">boas mãos.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium text-left">
              Centro clínico de excelência em Portugal. Atendimento médico humanizado com tecnologia de ponta para cuidar de si.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand-500/30 hover:bg-brand-700 transition-all flex items-center justify-center gap-2 group active:scale-95">
                Marcar Consulta <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1 }} className="relative">
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-[3rem] shadow-2xl border-8 border-white object-cover aspect-4/5 lg:aspect-auto" 
              alt="Equipa Médica" 
            />
            <motion.div animate={{ y:[0, -10, 0] }} transition={{ duration: 4, repeat: Infinity }} className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100 z-20">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600 shadow-inner">
                <ShieldCheck size={28} />
              </div>
              <p className="text-sm font-black text-slate-900 leading-tight uppercase tracking-tighter text-left">Certificado <br/>ERS Portugal</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. ESPECIALIDADES */}
      <section id="especialidades" className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-16 tracking-tighter text-slate-900">Especialidades Clínicas</h2>
          <div className="grid md:grid-cols-4 gap-6 text-left">
            {[
              { title: 'Cardiologia', icon: Heart, color: 'bg-red-50 text-red-500' },
              { title: 'Pediatria', icon: Users, color: 'bg-blue-50 text-blue-500' },
              { title: 'Clínica Geral', icon: Stethoscope, color: 'bg-emerald-50 text-emerald-500' },
              { title: 'Laboratório', icon: Activity, color: 'bg-purple-50 text-purple-500' }
            ].map((s, i) => (
              <motion.div key={i} whileHover={{ y: -10 }} className="p-8 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all group cursor-pointer">
                <div className={`w-16 h-16 ${s.color} rounded-2xl flex items-center justify-center mb-6 mx-auto shadow-sm group-hover:scale-110 transition-transform`}>
                  <s.icon size={32} />
                </div>
                <h3 className="text-xl font-black mb-3 tracking-tight text-slate-900 text-center">{s.title}</h3>
                <p className="text-slate-500 text-sm mb-6 leading-relaxed text-center">Cuidado especializado com foco no seu bem-estar contínuo.</p>
                <button className="text-brand-600 font-bold text-sm flex items-center gap-2 mx-auto group-hover:gap-3 transition-all">
                  Saber mais <ChevronRight size={16} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CORPO CLÍNICO (Nova Secção) */}
      <section id="equipa" className="py-24 bg-slate-50 px-6 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 text-left">
            <div className="max-w-2xl">
              <span className="text-brand-600 font-black uppercase tracking-widest text-[10px] mb-4 block">A Nossa Equipa</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900">Médicos de Excelência</h2>
            </div>
            <button className="text-brand-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
              Ver Corpo Clínico <ArrowRight size={20} />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Dr. João Oliveira', role: 'Diretor Clínico / Cardiologia', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=800&auto=format&fit=crop' },
              { name: 'Dra. Marta Silva', role: 'Pediatra Integral', img: 'https://images.unsplash.com/photo-1594824436951-7f12bc4142e9?q=80&w=800&auto=format&fit=crop' },
              { name: 'Dr. Tiago Mendes', role: 'Medicina Interna', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop' },
              { name: 'Dra. Inês Costa', role: 'Dermatologia', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop' }
            ].map((doc, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group">
                <div className="relative overflow-hidden rounded-[2.5rem] mb-6 aspect-4/5 shadow-md">
                  <img src={doc.img} alt={doc.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 grayscale-[0.2] group-hover:grayscale-0" />
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-1">{doc.name}</h3>
                <p className="text-brand-600 font-bold text-xs uppercase tracking-wider">{doc.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ACORDOS E SEGUROS (Nova Secção Portugal) */}
      <section id="acordos" className="py-24 bg-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-brand-600 font-black uppercase tracking-widest text-[10px] mb-4 block">Parcerias de Saúde</span>
          <h2 className="text-4xl font-black tracking-tighter text-slate-900 mb-6">Trabalhamos com o seu Seguro</h2>
          <p className="text-lg text-slate-500 mb-16 leading-relaxed">
            A Clínica Vitalis tem acordos com as principais seguradoras e subsistemas de saúde em Portugal para garantir que tem acesso ao melhor cuidado, sem preocupações.
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simulação de logos usando tipografia pesada */}
            <div className="text-3xl font-black tracking-tighter text-slate-800">MÉDIS</div>
            <div className="text-3xl font-black tracking-tighter text-slate-800">Multicare</div>
            <div className="text-3xl font-black tracking-tighter text-blue-800 italic">ADSE</div>
            <div className="text-3xl font-black tracking-tighter text-slate-800">Advance<span className="text-green-600">Care</span></div>
          </div>
        </div>
      </section>

      {/* 6. CONTACTOS E LOCALIZAÇÃO (Nova Secção) */}
      <section id="contacto" className="py-24 bg-brand-600 text-white px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-black mb-8 tracking-tighter leading-tight">
              Estamos aqui <br />para o ajudar.
            </h2>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <MapPin size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Clínica Sede (Porto)</h4>
                  <p className="text-brand-100">Avenida da Boavista, 1234<br />4100-113 Porto, Portugal</p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Phone size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Linha de Apoio</h4>
                  <p className="text-brand-100">+351 220 123 456 <span className="text-xs opacity-70">(Chamada para a rede fixa nacional)</span></p>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center shrink-0">
                  <Clock size={28} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Horário de Funcionamento</h4>
                  <p className="text-brand-100">Segunda a Sexta: 08h00 - 20h00<br />Sábados: 09h00 - 13h00</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-[3rem] text-slate-900 shadow-2xl">
            <h3 className="text-2xl font-black mb-6 tracking-tight">Pedido de Contacto</h3>
            <form className="space-y-4">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Nome</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-brand-500" placeholder="O seu nome" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Telefone</label>
                <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-brand-500" placeholder="Ex: 912 345 678" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Especialidade</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-2xl p-4 focus:outline-none focus:border-brand-500">
                  <option>Cardiologia</option>
                  <option>Pediatria</option>
                  <option>Medicina Geral</option>
                </select>
              </div>
              <button type="button" className="w-full bg-brand-600 text-white font-bold py-4 rounded-2xl mt-4 hover:bg-brand-700 transition-colors">
                Solicitar Marcação
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
}