import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'motion/react';
import {
  Home, Paintbrush, Hammer, ChevronRight, Sparkles,
  ArrowUpRight, Phone, Mail, MapPin, Award, Star,
  Clock, CheckCircle, Quote, Plus, Minus
} from 'lucide-react';

// ─── Paleta ──────────────────────────────────────────────────────────────────
const C = {
  cream:    '#fdf8f6',
  sand:     '#f5ede6',
  terracota:'#78350f',
  bronze:   '#b45309',
  bronze2:  '#92400e',
  charcoal: '#1c1917',
  mid:      '#57534e',
  muted:    '#a8a29e',
};

// ─── Dados ────────────────────────────────────────────────────────────────────
const PROJECTS = [
  { id: '01', title: 'Quinta das Pedras', type: 'Reabilitação Rural', area: '620 m²', year: '2023', location: 'Alentejo', img: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80' },
  { id: '02', title: 'Penthouse Avenida', type: 'Design de Interiores', area: '310 m²', year: '2024', location: 'Lisboa', img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80' },
  { id: '03', title: 'Villa São Lourenço', type: 'Arquitetura Nova', area: '850 m²', year: '2023', location: 'Algarve', img: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80' },
  { id: '04', title: 'Atelier Mouraria', type: 'Reconversão Urbana', area: '180 m²', year: '2024', location: 'Porto', img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80' },
];

const SERVICES = [
  { icon: Home,       num: '01', title: 'Reabilitação',      desc: 'Revalorizamos imóveis históricos e contemporâneos, preservando a alma do espaço enquanto elevamos o seu padrão para o mercado de excelência.' },
  { icon: Paintbrush, num: '02', title: 'Design de Interiores', desc: 'Cada detalhe é escolhido com intenção. Da textura das paredes à curvatura do mobiliário — criamos ambientes que comunicam quem os habita.' },
  { icon: Hammer,     num: '03', title: 'Execução Chave na Mão', desc: 'Gerimos todo o processo de obra com rigor técnico e transparência total. Entregamos dentro do prazo, sem surpresas no orçamento.' },
];

const TESTIMONIALS = [
  { name: 'Ana Beatriz M.', role: 'Proprietária · Lisboa', text: 'Vendemos o apartamento 30% acima do preço esperado. A Lumina transformou completamente a perceção do imóvel.', stars: 5 },
  { name: 'Carlos Ferreira', role: 'Investidor Imobiliário', text: 'Trabalho com eles há três anos. Cada projeto entregue dentro do prazo e com uma qualidade que os clientes reconhecem de imediato.', stars: 5 },
  { name: 'Sofia & Rui Costa', role: 'Moradores · Cascais', text: 'A casa dos nossos sonhos. Ouviram-nos de verdade e transformaram as nossas ideias numa casa que não queríamos deixar.', stars: 5 },
];

const FAQS = [
  { q: 'Qual o prazo médio de um projeto de reabilitação?', a: 'Depende da dimensão e complexidade. Um apartamento T3 de reabilitação completa demora entre 4 a 7 meses. Fornecemos sempre um cronograma detalhado antes do início da obra.' },
  { q: 'Trabalham fora de Lisboa e Porto?', a: 'Sim. Temos projetos ativos no Alentejo, Algarve, Douro e Ilha da Madeira. Deslocamo-nos a qualquer ponto de Portugal.' },
  { q: 'Como funciona a avaliação inicial?', a: 'A primeira visita ao imóvel é gratuita e sem compromisso. Em 48h entregamos um relatório de potencial de valorização com estimativa de investimento e retorno esperado.' },
  { q: 'Fazem gestão de arrendamento turístico?', a: 'Temos parceiros especializados para a gestão de AL. Podemos coordenar todo o processo, desde o projeto até à primeira reserva.' },
];

const STATS = [
  { value: '+120', label: 'Projetos Concluídos' },
  { value: '25%', label: 'Valorização Média' },
  { value: '9.8', label: 'Satisfação dos Clientes' },
  { value: '12', label: 'Anos de Experiência' },
];

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
      className="border-b border-stone-200"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left gap-6 group"
      >
        <span className="text-base font-bold text-stone-800 group-hover:text-amber-800 transition-colors leading-snug">
          {q}
        </span>
        <div className="shrink-0 w-8 h-8 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 group-hover:border-amber-700 group-hover:text-amber-700 transition-all">
          {open ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-7 text-stone-500 leading-relaxed font-medium text-sm">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function LuminaSample() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const heroY    = useTransform(scrollY, [0, 700],  [0, 180]);
  const heroOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const [activeProject, setActiveProject] = useState(0);

  return (
    <div
      className="min-h-screen overflow-x-hidden font-serif"
      style={{ backgroundColor: C.cream, color: C.charcoal }}
    >
      {/* ── NAVBAR ────────────────────────────────────────────────────────── */}
      <nav
        className="fixed w-full z-50 px-8 py-6 flex justify-between items-center"
        style={{ mixBlendMode: 'multiply' }}
      >
        <span className="text-xl font-black uppercase tracking-[0.25em]" style={{ color: C.charcoal }}>
          LUMINA
        </span>
        <div className="hidden md:flex items-center gap-10">
          {['Serviços', 'Projetos', 'Processo', 'Contacto'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`}
              className="text-[10px] font-black uppercase tracking-[0.25em] transition-all hover:opacity-50"
              style={{ color: C.charcoal }}
            >
              {item}
            </a>
          ))}
        </div>
        <a href="#contacto"
          className="px-6 py-3 text-[10px] font-black uppercase tracking-widest rounded-full transition-all hover:opacity-80"
          style={{ backgroundColor: C.terracota, color: 'white' }}
        >
          Avaliação Gratuita
        </a>
      </nav>

      {/* ── HERO EDITORIAL ────────────────────────────────────────────────── */}
      <section ref={heroRef} className="relative h-screen flex flex-col justify-end pb-24 px-8 overflow-hidden">

        {/* Imagem paralaxe */}
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0 scale-110"
        >
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1800&q=90"
            alt="Lumina Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${C.charcoal}cc 0%, transparent 60%)` }} />
        </motion.div>

        {/* Texto hero */}
        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 max-w-7xl mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-300 mb-6"
          >
            Arquitetura & Valorização · Portugal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }}
            className="text-6xl md:text-[100px] font-black leading-[0.88] tracking-tighter text-white mb-10"
          >
            REDEFINIMOS<br />
            <span className="italic font-light" style={{ color: '#fbbf24' }}>o valor</span><br />
            DO SEU ESPAÇO.
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8"
          >
            <p className="text-white/70 max-w-sm text-lg leading-relaxed font-medium">
              Design de interiores e reabilitação estratégica para imóveis que merecem mais.
            </p>
            <a href="#contacto"
              className="flex items-center gap-3 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:gap-5"
              style={{ backgroundColor: '#fbbf24', color: C.charcoal }}
            >
              Ver os nossos projetos <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
        >
          <div className="w-px h-12 bg-white/30" />
          <span className="text-[9px] font-black uppercase tracking-[0.4em] text-white/40">Scroll</span>
        </motion.div>
      </section>

      {/* ── NÚMEROS ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.terracota }} className="py-16 px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-amber-300 mb-2">{s.value}</div>
              <div className="text-[10px] font-black uppercase tracking-widest text-white/60">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── SERVIÇOS ──────────────────────────────────────────────────────── */}
      <section id="serviços" style={{ backgroundColor: C.cream }} className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: C.bronze }}>
              O que fazemos
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none" style={{ color: C.charcoal }}>
              Transformamos<br />
              <span className="italic font-light" style={{ color: C.muted }}>espaços em ativos.</span>
            </h2>
          </motion.div>

          <div className="divide-y" style={{ borderColor: '#e7e0dc' }}>
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="group flex flex-col md:flex-row md:items-center gap-6 md:gap-16 py-12 cursor-default"
              >
                <span className="text-[11px] font-black uppercase tracking-[0.3em]" style={{ color: C.muted }}>
                  {s.num}
                </span>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-all group-hover:scale-110"
                  style={{ backgroundColor: C.sand, border: `1px solid #e7e0dc` }}>
                  <s.icon size={24} style={{ color: C.bronze }} strokeWidth={1.5} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-black tracking-tight mb-3 group-hover:translate-x-2 transition-transform"
                    style={{ color: C.charcoal }}>
                    {s.title}
                  </h3>
                  <p className="leading-relaxed font-medium text-sm max-w-lg" style={{ color: C.mid }}>
                    {s.desc}
                  </p>
                </div>
                <div className="shrink-0 w-10 h-10 rounded-full border flex items-center justify-center transition-all group-hover:scale-125 group-hover:rotate-45"
                  style={{ borderColor: C.muted, color: C.muted }}>
                  <ChevronRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETOS ──────────────────────────────────────────────────────── */}
      <section id="projetos" style={{ backgroundColor: C.charcoal }} className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-end mb-20 gap-6"
          >
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.4em] text-amber-400 mb-4">Portfólio</p>
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-white">
                Projetos<br />
                <span className="italic font-light text-stone-400">selecionados.</span>
              </h2>
            </div>
            <a href="#contacto"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-amber-400 hover:gap-4 transition-all"
            >
              Ver portfólio completo <ArrowUpRight size={14} />
            </a>
          </motion.div>

          {/* Grid de projetos com destaque no selecionado */}
          <div className="grid md:grid-cols-2 gap-6">
            {PROJECTS.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                onMouseEnter={() => setActiveProject(i)}
                className="group relative overflow-hidden rounded-3xl cursor-pointer"
                style={{ height: i === 0 ? '520px' : '340px' }}
              >
                <motion.img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 transition-opacity duration-300"
                  style={{ background: `linear-gradient(to top, ${C.charcoal}ee 0%, transparent 50%)` }} />

                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.3em] text-amber-400 mb-2">
                        {p.type} · {p.location}
                      </p>
                      <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">{p.title}</h3>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">{p.area}</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-stone-400">{p.year}</div>
                    </div>
                  </div>
                </div>

                <div className="absolute top-6 right-6 w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0"
                  style={{ backgroundColor: '#fbbf24', color: C.charcoal }}>
                  <ArrowUpRight size={16} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESSO ──────────────────────────────────────────────────────── */}
      <section id="processo" style={{ backgroundColor: C.sand }} className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: C.bronze }}>
              Como trabalhamos
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: C.charcoal }}>
              Sem surpresas.<br />
              <span className="italic font-light" style={{ color: C.muted }}>Apenas resultados.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Award,       step: '01', title: 'Avaliação',    desc: 'Visita gratuita ao imóvel. Identificamos o potencial real e definimos a estratégia de valorização.' },
              { icon: Paintbrush,  step: '02', title: 'Projeto',      desc: 'Desenvolvemos o projeto de arquitetura e design com render 3D fotorrealista para aprovação.' },
              { icon: Hammer,      step: '03', title: 'Execução',     desc: 'Gerimos a obra de ponta a ponta com relatórios semanais e atualizações em tempo real.' },
              { icon: CheckCircle, step: '04', title: 'Entrega',      desc: 'Entregamos dentro do prazo com garantia de 2 anos em todos os trabalhos executados.' },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="relative"
              >
                {/* Linha conectora */}
                {i < 3 && (
                  <div className="hidden md:block absolute top-7 left-full w-full h-px -translate-y-1/2 z-0"
                    style={{ background: `linear-gradient(to right, ${C.bronze}40, transparent)` }} />
                )}
                <div className="relative z-10 p-8 rounded-3xl bg-white border transition-all hover:shadow-xl"
                  style={{ borderColor: '#e7e0dc' }}>
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-5xl font-black" style={{ color: `${C.bronze}30` }}>{step.step}</span>
                    <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: C.sand, border: `1px solid #e7e0dc` }}>
                      <step.icon size={22} style={{ color: C.bronze }} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className="text-xl font-black mb-3" style={{ color: C.charcoal }}>{step.title}</h3>
                  <p className="text-sm leading-relaxed font-medium" style={{ color: C.mid }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTEMUNHOS ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.cream }} className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mb-20"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: C.bronze }}>
              Clientes
            </p>
            <h2 className="text-5xl md:text-6xl font-black tracking-tighter" style={{ color: C.charcoal }}>
              O que dizem<br />
              <span className="italic font-light" style={{ color: C.muted }}>sobre nós.</span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className="p-10 rounded-3xl border relative group hover:shadow-xl transition-all"
                style={{ backgroundColor: C.sand, borderColor: '#e7e0dc' }}
              >
                <Quote size={40} className="absolute top-8 right-8 opacity-10" style={{ color: C.terracota }} />
                <div className="flex gap-1 mb-6">
                  {[...Array(t.stars)].map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-lg italic font-medium leading-relaxed mb-8" style={{ color: C.charcoal }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="font-black text-sm uppercase tracking-widest" style={{ color: C.charcoal }}>{t.name}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mt-1" style={{ color: C.muted }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: C.sand }} className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.4em] mb-4" style={{ color: C.bronze }}>FAQ</p>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter" style={{ color: C.charcoal }}>
              Perguntas frequentes
            </h2>
          </motion.div>
          <div className="border-t" style={{ borderColor: '#d6ccc5' }}>
            {FAQS.map((faq, i) => (
              <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section id="contacto" style={{ backgroundColor: C.charcoal }} className="py-40 px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5"
          style={{ backgroundImage: 'radial-gradient(circle at 50% 50%, #fbbf24, transparent 70%)' }} />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          >
            <Sparkles className="mx-auto mb-10 text-amber-400" size={40} />
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-white leading-tight">
              O seu imóvel<br />
              <span className="italic font-light text-amber-400">vale mais do que pensa.</span>
            </h2>
            <p className="text-stone-400 text-xl mb-14 max-w-xl mx-auto leading-relaxed font-medium">
              Avaliação gratuita ao imóvel. Em 48h recebe um relatório com o potencial de valorização e estimativa de retorno.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20">
              <a href="tel:+351910000000"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest transition-all hover:brightness-110"
                style={{ backgroundColor: '#fbbf24', color: C.charcoal }}
              >
                <Phone size={18} /> Ligar agora
              </a>
              <a href="mailto:hello@luminahome.pt"
                className="flex items-center justify-center gap-3 px-10 py-5 rounded-full font-black text-sm uppercase tracking-widest border transition-all hover:bg-white/10"
                style={{ borderColor: 'rgba(255,255,255,0.2)', color: 'white' }}
              >
                <Mail size={18} /> Enviar email
              </a>
            </div>

            {/* Info de contacto */}
            <div className="flex flex-col md:flex-row justify-center gap-10 text-stone-500">
              {[
                { icon: Phone,   text: '+351 910 000 000' },
                { icon: Mail,    text: 'hello@luminahome.pt' },
                { icon: MapPin,  text: 'Av. da Liberdade, Lisboa' },
                { icon: Clock,   text: 'Seg–Sex, 9h–18h' },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-bold uppercase tracking-widest">
                  <item.icon size={14} className="text-amber-500" />
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer
        className="py-10 px-8 flex flex-col md:flex-row items-center justify-between gap-4 border-t"
        style={{ backgroundColor: C.charcoal, borderColor: 'rgba(255,255,255,0.05)' }}
      >
        <span className="text-xl font-black uppercase tracking-[0.25em] text-white">LUMINA</span>
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-stone-600">
          © 2024 Lumina Home & Interiors · Estratégia Scuta Digital
        </p>
        <div className="flex gap-6">
          {['Privacidade', 'Termos'].map((l) => (
            <a key={l} href="#" className="text-[10px] font-black uppercase tracking-widest text-stone-600 hover:text-stone-400 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </footer>
    </div>
  );
}