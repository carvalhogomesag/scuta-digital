import { useRef } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect } from 'react';
import { Search, Clock, ShieldCheck, ArrowRight, TrendingUp, Zap } from 'lucide-react';
import { Language } from '../lib/constants';

// --- Textos por idioma ---
const WHY_STRINGS = {
  'pt-pt': {
    badge: 'O seu negócio',
    title: 'Porquê é que precisa',
    titleHighlight: 'de um site hoje?',
    subtitle: 'Enquanto não aparece no Google, o seu vizinho do lado está a receber os clientes que podiam ser seus.',
    cards: [
      {
        icon: Search,
        color: 'text-blue-400',
        title: 'Aparecer no Google',
        description:
          'Quando alguém pesquisa pelo que vende na sua zona, o seu negócio tem de aparecer. Caso contrário, essa pessoa vai ao concorrente — e nem sabe que você existe.',
        delay: 0.1,
      },
      {
        icon: Clock,
        color: 'text-emerald-400',
        title: 'Receber clientes a dormir',
        description:
          'O site trabalha por si 24 horas por dia. Enquanto descansa, potenciais clientes ficam a conhecer o seu negócio e entram em contacto.',
        delay: 0.2,
      },
      {
        icon: ShieldCheck,
        color: 'text-violet-400',
        title: 'Transmitir confiança imediata',
        description:
          'Hoje em dia, se não tem site, as pessoas desconfiam. Um site profissional é o equivalente a ter a montra mais bonita da rua.',
        delay: 0.3,
      },
    ],
    stat1Value: 70,
    stat1Suffix: '%',
    stat1Label: 'dos clientes perdidos para a concorrência por falta de presença online',
    stat2Value: 8,
    stat2Suffix: '',
    stat2Label: 'em cada 10 pessoas pesquisam no Google antes de escolher um negócio local',
  },
  'pt-br': {
    badge: 'O seu negócio',
    title: 'Por que você precisa',
    titleHighlight: 'de um site hoje?',
    subtitle: 'Enquanto você não aparece no Google, o seu concorrente está recebendo os clientes que poderiam ser seus.',
    cards: [
      {
        icon: Search,
        color: 'text-blue-400',
        title: 'Aparecer no Google',
        description:
          'Quando alguém pesquisa pelo que você vende na sua região, o seu negócio precisa aparecer. Do contrário, essa pessoa vai ao concorrente — e nem sabe que você existe.',
        delay: 0.1,
      },
      {
        icon: Clock,
        color: 'text-emerald-400',
        title: 'Receber clientes enquanto dorme',
        description:
          'O site trabalha por você 24 horas por dia. Enquanto descansa, potenciais clientes ficam conhecendo o seu negócio e entram em contato.',
        delay: 0.2,
      },
      {
        icon: ShieldCheck,
        color: 'text-violet-400',
        title: 'Passar credibilidade imediata',
        description:
          'Hoje em dia, empresa sem site parece empresa que não cresceu ainda. Um site bem feito passa seriedade antes mesmo de qualquer contato.',
        delay: 0.3,
      },
    ],
    stat1Value: 70,
    stat1Suffix: '%',
    stat1Label: 'dos clientes perdidos para a concorrência por falta de presença online',
    stat2Value: 8,
    stat2Suffix: '',
    stat2Label: 'em cada 10 pessoas pesquisam no Google antes de escolher um negócio local',
  },
  'en': {
    badge: 'Your business',
    title: 'Why you need',
    titleHighlight: 'a website today?',
    subtitle: 'While you are not showing up on Google, your competitor down the road is getting the clients that could be yours.',
    cards: [
      {
        icon: Search,
        color: 'text-blue-400',
        title: 'Show up on Google',
        description:
          'When someone searches for what you sell in your area, your business needs to appear. Otherwise, that person goes to your competitor — and doesn\'t even know you exist.',
        delay: 0.1,
      },
      {
        icon: Clock,
        color: 'text-emerald-400',
        title: 'Get clients while you sleep',
        description:
          'Your website works for you 24 hours a day. While you rest, potential clients are discovering your business and getting in touch.',
        delay: 0.2,
      },
      {
        icon: ShieldCheck,
        color: 'text-violet-400',
        title: 'Build instant trust',
        description:
          'These days, no website means no credibility. A professional site is the equivalent of having the most impressive shopfront on the street.',
        delay: 0.3,
      },
    ],
    stat1Value: 70,
    stat1Suffix: '%',
    stat1Label: 'of clients lost to competitors due to lack of online presence',
    stat2Value: 8,
    stat2Suffix: '',
    stat2Label: 'out of 10 people search Google before choosing a local business',
  },
  'es': {
    badge: 'Tu negocio',
    title: 'Por qué necesitas',
    titleHighlight: 'una web hoy?',
    subtitle: 'Mientras no apareces en Google, tu competidor de la esquina está recibiendo los clientes que podrían ser tuyos.',
    cards: [
      {
        icon: Search,
        color: 'text-blue-400',
        title: 'Aparecer en Google',
        description:
          'Cuando alguien busca lo que vendes en tu zona, tu negocio tiene que aparecer. Si no, esa persona va a la competencia — y ni sabe que existes.',
        delay: 0.1,
      },
      {
        icon: Clock,
        color: 'text-emerald-400',
        title: 'Recibir clientes mientras duermes',
        description:
          'Tu web trabaja por ti las 24 horas. Mientras descansas, potenciales clientes conocen tu negocio y se ponen en contacto.',
        delay: 0.2,
      },
      {
        icon: ShieldCheck,
        color: 'text-violet-400',
        title: 'Transmitir confianza al instante',
        description:
          'Hoy en día, sin web parece que el negocio no es serio. Una web profesional es como tener el escaparate más bonito de la calle.',
        delay: 0.3,
      },
    ],
    stat1Value: 70,
    stat1Suffix: '%',
    stat1Label: 'de clientes perdidos ante la competencia por falta de presencia online',
    stat2Value: 8,
    stat2Suffix: '',
    stat2Label: 'de cada 10 personas buscan en Google antes de elegir un negocio local',
  },
};

// --- Componente de número animado ---
function AnimatedNumber({
  value,
  suffix,
  prefix = '',
}: {
  value: number;
  suffix: string;
  prefix?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      animate(motionValue, value, { duration: 2, ease: 'easeOut' });
    }
  }, [isInView, motionValue, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

// --- Componente principal ---
export default function WhyWeb({ lang }: { lang: Language }) {
  const t = WHY_STRINGS[lang] || WHY_STRINGS['pt-pt'];

  return (
    <section id="why" className="relative py-32 px-6 noise bg-scuta-primary overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-violet-600/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl text-left"
          >
            <span className="text-emerald-400 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block">
              {t.badge}
            </span>
            <h2 className="text-5xl md:text-7xl font-black text-white leading-none tracking-tighter">
              {t.title} <br />
              <span className="text-zinc-500 italic font-light">{t.titleHighlight}</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-slate-400 max-w-sm text-left font-medium leading-relaxed pb-2"
          >
            {t.subtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {t.cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: card.delay }}
                className="bento-card group flex flex-col h-full border border-white/5 relative overflow-hidden"
              >
                {/* Efeito hover */}
                <div className="absolute inset-0 bg-linear-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="size-16 rounded-2xl bg-white/5 flex items-center justify-center mb-10 border border-white/10 group-hover:border-white/20 group-hover:scale-110 transition-all duration-500 relative z-10">
                  <Icon className={`size-8 ${card.color}`} />
                </div>

                <div className="text-left grow relative z-10">
                  <h3 className="text-2xl font-black text-white mb-6 tracking-tight group-hover:text-emerald-400 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed font-medium">
                    {card.description}
                  </p>
                </div>

                <div className="mt-12 pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                    Padrão Scuta Digital
                  </span>
                  <div className="size-10 rounded-full bg-white/5 flex items-center justify-center text-white group-hover:bg-emerald-500 transition-all">
                    <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Barra de estatísticas animadas */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 py-10 border-y border-white/5 flex flex-col md:flex-row justify-center md:justify-start gap-10 md:gap-16"
        >
          <div className="flex items-center gap-4">
            <Zap size={20} className="text-emerald-400 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
              <AnimatedNumber value={t.stat1Value} suffix={t.stat1Suffix} />{' '}
              {t.stat1Label}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <TrendingUp size={20} className="text-emerald-400 shrink-0" />
            <span className="text-[11px] font-black uppercase tracking-widest text-slate-300">
              <AnimatedNumber value={t.stat2Value} suffix={t.stat2Suffix} />{' '}
              {t.stat2Label}
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}