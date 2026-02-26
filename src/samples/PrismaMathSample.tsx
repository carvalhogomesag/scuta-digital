import React from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  TrendingUp, 
  Target, 
  GraduationCap, 
  ChevronRight, 
  CheckCircle2, 
  Clock, 
  MousePointerClick 
} from 'lucide-react';

const PrismaMathSample = () => {
  // Variantes de animação para stagger
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-slate-50 selection:bg-cyan-500/30 font-sans overflow-x-hidden">
      {/* Background Decorativo: Grelha Matemática & Glow */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-15" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative z-10">
        {/* --- HERO SECTION --- */}
        <section className="pt-24 pb-16 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold tracking-widest uppercase mb-6"
            >
              <span className="relative flex size-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full size-2 bg-cyan-500"></span>
              </span>
              Vagas Limitadas para o 3º Período
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8"
            >
              A MATEMÁTICA <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                SEM LIMITES.
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-xl text-lg text-slate-400 leading-relaxed mb-10"
            >
              Não ensinamos apenas fórmulas. Construímos o raciocínio lógico necessário para conquistar as notas mais altas do país e garantir o acesso ao ensino superior.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="px-8 py-4 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-xl transition-all shadow-[0_0_20px_rgba(8,145,178,0.3)] flex items-center justify-center gap-2 group">
                Agendar Avaliação Gratuita
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white font-bold rounded-xl border border-white/10 transition-all backdrop-blur-md">
                Ver Métodos
              </button>
            </motion.div>
          </div>
        </section>

        {/* --- BENTO GRID: OS PILARES --- */}
        <section className="py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              
              {/* Card Grande: Resultados */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-8 bg-linear-to-br from-white/10 to-transparent p-8 rounded-4xl border border-white/10 backdrop-blur-2xl relative overflow-hidden group"
              >
                <div className="relative z-10">
                  <div className="size-12 bg-cyan-500/20 rounded-xl flex items-center justify-center mb-6">
                    <TrendingUp className="text-cyan-400" />
                  </div>
                  <h3 className="text-3xl font-black mb-4">Média de +4,5 Valores</h3>
                  <p className="text-slate-400 max-w-md">
                    Os nossos alunos registam uma subida média imediata após o primeiro trimestre de acompanhamento personalizado.
                  </p>
                </div>
                <div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Calculator size={160} />
                </div>
              </motion.div>

              {/* Card Pequeno: Foco */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-4 bg-[#0a1229] p-8 rounded-4xl border border-white/5 flex flex-col justify-between"
              >
                <div className="size-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Target className="text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-6 mb-2">Foco Total</h3>
                  <p className="text-sm text-slate-500">Preparação intensiva para Exames Nacionais e testes intermédios.</p>
                </div>
              </motion.div>

              {/* Card Pequeno: Sessões */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-4 bg-[#0a1229] p-8 rounded-4xl border border-white/5 flex flex-col justify-between"
              >
                <div className="size-12 bg-emerald-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mt-6 mb-2">Horários Flexíveis</h3>
                  <p className="text-sm text-slate-500">Presencial em Lisboa ou Online para todo o país.</p>
                </div>
              </motion.div>

              {/* Card Médio: Metodologia */}
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-8 bg-linear-to-br from-white/5 to-white/10 p-8 rounded-4xl border border-white/10 backdrop-blur-md"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-1">
                    <div className="size-12 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                      <GraduationCap className="text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-black mb-3">Método Prisma™</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Uma abordagem analítica que identifica falhas de base desde o 1º ciclo, garantindo que o aluno não decora, mas compreende a estrutura lógica.
                    </p>
                  </div>
                  <div className="flex-1 grid grid-cols-1 gap-2 w-full">
                    {['Diagnóstico Inicial', 'Plano Personalizado', 'Simulacros Mensais', 'Suporte via WhatsApp'].map((item) => (
                      <div key={item} className="flex items-center gap-2 px-4 py-2 bg-white/5 rounded-lg border border-white/5 text-xs text-slate-300">
                        <CheckCircle2 size={14} className="text-cyan-400" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* --- SOCIAL PROOF / STATS --- */}
        <section className="py-20 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: 'Alunos Ativos', val: '120+' },
                { label: 'Taxa de Aprovação', val: '99%' },
                { label: 'Nota Média Exames', val: '17.8' },
                { label: 'Anos de Experiência', val: '12' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-3xl md:text-5xl font-black text-white mb-2">{stat.val}</div>
                  <div className="text-xs uppercase tracking-widest text-slate-500 font-bold">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- CTA FINAL --- */}
        <section className="py-24 px-6 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8">
              PREPARADO PARA <br />
              <span className="text-cyan-400">SUBIR DE NÍVEL?</span>
            </h2>
            <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
              As inscrições para os grupos de preparação intensiva de Junho estão prestes a fechar. Garanta agora o seu lugar.
            </p>
            <div className="inline-flex flex-col items-center">
              <button className="px-12 py-6 bg-white text-[#030712] font-black text-xl rounded-2xl hover:scale-105 transition-transform shadow-[0_20px_40px_rgba(255,255,255,0.1)] mb-4">
                RESERVAR AVALIAÇÃO
              </button>
              <div className="flex items-center gap-2 text-slate-500 text-sm italic">
                <MousePointerClick size={16} />
                Resposta em menos de 2 horas via WhatsApp
              </div>
            </div>
          </div>
        </section>

        {/* --- FOOTER SIMULADO --- */}
        <footer className="py-12 border-t border-white/5 px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="size-8 bg-cyan-600 rounded-lg flex items-center justify-center font-black text-white italic">P</div>
              <span className="font-black tracking-tighter text-xl text-white">PRISMA</span>
            </div>
            <div className="flex gap-8 text-sm text-slate-500">
              <a href="#" className="hover:text-cyan-400 transition-colors">Método</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Preços</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Testemunhos</a>
              <a href="#" className="hover:text-cyan-400 transition-colors">Contactos</a>
            </div>
            <p className="text-xs text-slate-600">© 2024 Prisma Matemática. Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default PrismaMathSample;