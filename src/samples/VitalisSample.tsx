import React from 'react';
import { motion } from 'motion/react';
import { 
  Heart, Users, Stethoscope, Activity, ArrowRight, 
  ShieldCheck, Clock, Award, ChevronRight 
} from 'lucide-react';

export default function VitalisSample() {
  return (
    <div className="font-sans text-slate-900 bg-white">
      {/* HERO BESPOKE PARA CLÍNICA */}
      <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-slate-50">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-50 rounded-l-[100px] hidden lg:block -z-10" />
        
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-brand-100 text-brand-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest mb-6">
              <Activity size={14} /> Cuidado Humanizado
            </div>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 leading-[0.9] mb-8 tracking-tighter">
              Sua saúde em <br /><span className="text-brand-600 italic">boas mãos.</span>
            </h1>
            <p className="text-xl text-slate-600 mb-10 max-w-lg leading-relaxed font-medium">
              Oferecemos atendimento médico humanizado com tecnologia de ponta para cuidar de si e da sua família.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-600 text-white px-10 py-5 rounded-2xl font-black text-lg shadow-2xl shadow-brand-500/30 hover:bg-brand-700 transition-all flex items-center justify-center gap-2">
                Agendar Agora <ArrowRight size={20} />
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
              className="rounded-[3rem] shadow-2xl border-8 border-white" 
              alt="Medical Team" 
            />
            {/* Floating Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-xl flex items-center gap-4 border border-slate-100">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
                <ShieldCheck size={28} />
              </div>
              <p className="text-sm font-black text-slate-900 leading-none">Certificado <br/>de Qualidade</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ESPECIALIDADES GRID (Diagramação diferente do padrão) */}
      <section className="py-32 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black mb-20 tracking-tighter">Nossas Especialidades</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Cardiologia', icon: Heart, color: 'bg-red-50 text-red-500' },
              { title: 'Pediatria', icon: Users, color: 'bg-blue-50 text-blue-500' },
              { title: 'Clínica Geral', icon: Stethoscope, color: 'bg-emerald-50 text-emerald-500' },
              { title: 'Laboratório', icon: Activity, color: 'bg-purple-50 text-purple-500' }
            ].map((s, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl transition-all"
              >
                <div className={`w-20 h-20 ${s.color} rounded-3xl flex items-center justify-center mb-8 mx-auto shadow-sm`}>
                  <s.icon size={40} />
                </div>
                <h3 className="text-2xl font-black mb-4">{s.title}</h3>
                <button className="text-brand-600 font-bold flex items-center gap-2 mx-auto">
                  Saber mais <ChevronRight size={18} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}