import { motion } from 'motion/react';
import { CheckCircle2, Sparkles, ArrowRight } from 'lucide-react';
import { Language } from '../lib/constants';

const PLANS = {
  'pt-pt': [
    {
      name: 'Presença',
      tagline: 'Para quem quer existir online',
      price: 'A partir de 297€',
      period: 'pagamento único',
      highlight: false,
      features: [
        'Site profissional de 1 página',
        'Aparece no Google (SEO local)',
        'Adaptado a telemóvel',
        'Formulário de contacto',
        'Entregue em 7 dias',
      ],
      cta: 'Quero este plano',
    },
    {
      name: 'Crescimento',
      tagline: 'Para quem quer mais clientes',
      price: 'A partir de 597€',
      period: 'pagamento único',
      highlight: true,
      features: [
        'Site completo com várias páginas',
        'SEO avançado — mais visibilidade',
        'Galeria de fotos / portfólio',
        'Integração com WhatsApp e redes sociais',
        'Relatório mensal de visitas',
        'Suporte durante 3 meses',
      ],
      cta: 'Quero crescer',
    },
    {
      name: 'Autoridade',
      tagline: 'Para liderar no seu sector',
      price: 'Orçamento personalizado',
      period: 'projecto à medida',
      highlight: false,
      features: [
        'Tudo do plano Crescimento',
        'Loja online (e-commerce)',
        'Design exclusivo para a sua marca',
        'Blog e conteúdo para SEO',
        'Suporte prioritário 12 meses',
      ],
      cta: 'Falar com a equipa',
    },
  ],
  'pt-br': [
    {
      name: 'Presença',
      tagline: 'Para quem quer existir online',
      price: 'A partir de R$ 1.497',
      period: 'pagamento único',
      highlight: false,
      features: [
        'Site profissional de 1 página',
        'Aparece no Google (SEO local)',
        'Adaptado para celular',
        'Formulário de contato',
        'Entregue em 7 dias',
      ],
      cta: 'Quero esse plano',
    },
    {
      name: 'Crescimento',
      tagline: 'Para quem quer mais clientes',
      price: 'A partir de R$ 2.997',
      period: 'pagamento único',
      highlight: true,
      features: [
        'Site completo com várias páginas',
        'SEO avançado — mais visibilidade',
        'Galeria de fotos / portfólio',
        'Integração com WhatsApp e redes sociais',
        'Relatório mensal de visitas',
        'Suporte durante 3 meses',
      ],
      cta: 'Quero crescer',
    },
    {
      name: 'Autoridade',
      tagline: 'Para liderar no seu setor',
      price: 'Orçamento personalizado',
      period: 'projeto sob medida',
      highlight: false,
      features: [
        'Tudo do plano Crescimento',
        'Loja online (e-commerce)',
        'Design exclusivo para a sua marca',
        'Blog e conteúdo para SEO',
        'Suporte prioritário 12 meses',
      ],
      cta: 'Falar com a equipe',
    },
  ],
  'en': [
    {
      name: 'Presence',
      tagline: 'For those who want to exist online',
      price: 'From €297',
      period: 'one-time payment',
      highlight: false,
      features: [
        'Professional 1-page website',
        'Shows up on Google (local SEO)',
        'Mobile-friendly',
        'Contact form',
        'Delivered in 7 days',
      ],
      cta: 'I want this plan',
    },
    {
      name: 'Growth',
      tagline: 'For those who want more clients',
      price: 'From €597',
      period: 'one-time payment',
      highlight: true,
      features: [
        'Full multi-page website',
        'Advanced SEO — more visibility',
        'Photo gallery / portfolio',
        'WhatsApp & social media integration',
        'Monthly visitor report',
        '3-month support',
      ],
      cta: 'I want to grow',
    },
    {
      name: 'Authority',
      tagline: 'To lead in your sector',
      price: 'Custom quote',
      period: 'tailored project',
      highlight: false,
      features: [
        'Everything in Growth',
        'Online store (e-commerce)',
        'Exclusive brand design',
        'SEO blog & content',
        '12-month priority support',
      ],
      cta: 'Talk to the team',
    },
  ],
  'es': [
    {
      name: 'Presencia',
      tagline: 'Para quienes quieren existir online',
      price: 'Desde €297',
      period: 'pago único',
      highlight: false,
      features: [
        'Sitio profesional de 1 página',
        'Aparece en Google (SEO local)',
        'Adaptado para móvil',
        'Formulario de contacto',
        'Entregado en 7 días',
      ],
      cta: 'Quiero este plan',
    },
    {
      name: 'Crecimiento',
      tagline: 'Para quienes quieren más clientes',
      price: 'Desde €597',
      period: 'pago único',
      highlight: true,
      features: [
        'Sitio completo con varias páginas',
        'SEO avanzado — más visibilidad',
        'Galería de fotos / portafolio',
        'Integración con WhatsApp y redes sociales',
        'Informe mensual de visitas',
        'Soporte durante 3 meses',
      ],
      cta: 'Quiero crecer',
    },
    {
      name: 'Autoridad',
      tagline: 'Para liderar en tu sector',
      price: 'Presupuesto personalizado',
      period: 'proyecto a medida',
      highlight: false,
      features: [
        'Todo del plan Crecimiento',
        'Tienda online (e-commerce)',
        'Diseño exclusivo para tu marca',
        'Blog y contenido para SEO',
        'Soporte prioritario 12 meses',
      ],
      cta: 'Hablar con el equipo',
    },
  ],
};

const HEADING = {
  'pt-pt': {
    badge: 'Investimento',
    title: 'Quanto custa ter',
    highlight: 'um site profissional?',
    subtitle: 'Preços transparentes, sem surpresas. Escolha o que faz mais sentido para o seu negócio agora.',
    popular: 'Mais popular',
    footer: 'Todos os preços incluem domínio e alojamento no primeiro ano. Sem mensalidades escondidas.',
  },
  'pt-br': {
    badge: 'Investimento',
    title: 'Quanto custa ter',
    highlight: 'um site profissional?',
    subtitle: 'Preços transparentes, sem surpresas. Escolha o que faz mais sentido para o seu negócio agora.',
    popular: 'Mais popular',
    footer: 'Todos os preços incluem domínio e hospedagem no primeiro ano. Sem mensalidades escondidas.',
  },
  'en': {
    badge: 'Investment',
    title: 'How much does',
    highlight: 'a professional website cost?',
    subtitle: 'Transparent pricing, no surprises. Choose what makes the most sense for your business right now.',
    popular: 'Most popular',
    footer: 'All prices include domain and hosting for the first year. No hidden monthly fees.',
  },
  'es': {
    badge: 'Inversión',
    title: '¿Cuánto cuesta',
    highlight: 'una web profesional?',
    subtitle: 'Precios transparentes, sin sorpresas. Elige lo que tiene más sentido para tu negocio ahora.',
    popular: 'Más popular',
    footer: 'Todos los precios incluyen dominio y alojamiento el primer año. Sin cuotas mensuales ocultas.',
  },
};

export default function Pricing({ lang }: { lang: Language }) {
  const plans = PLANS[lang] ?? PLANS['pt-pt'];
  const h = HEADING[lang] ?? HEADING['pt-pt'];

  return (
    <section id="pricing" className="relative py-32 px-6 bg-scuta-primary overflow-hidden">
      {/* Glow central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-scuta-highlight/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 text-scuta-highlight font-black uppercase tracking-[0.3em] text-[10px] mb-4">
              <Sparkles size={14} /> {h.badge}
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-scuta-silk leading-tight tracking-tighter mb-6">
              {h.title} <br />
              <span className="text-scuta-highlight">{h.highlight}</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl mx-auto font-medium leading-relaxed">
              {h.subtitle}
            </p>
          </motion.div>
        </div>

        {/* Cards de planos */}
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative rounded-4xl p-8 border flex flex-col transition-all duration-500 ${
                plan.highlight
                  ? 'bg-scuta-highlight border-scuta-highlight shadow-2xl shadow-scuta-highlight/20 md:scale-105'
                  : 'bg-scuta-surface/50 border-white/10 hover:border-white/20'
              }`}
            >
              {/* Badge "Mais popular" */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-scuta-silk text-scuta-primary text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full shadow-xl whitespace-nowrap">
                    {h.popular}
                  </span>
                </div>
              )}

              {/* Nome e tagline */}
              <div className="mb-8">
                <h3 className={`text-2xl font-black tracking-tighter mb-1 ${
                  plan.highlight ? 'text-scuta-primary' : 'text-scuta-silk'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm font-medium ${
                  plan.highlight ? 'text-scuta-primary/70' : 'text-slate-400'
                }`}>
                  {plan.tagline}
                </p>
              </div>

              {/* Preço */}
              <div className="mb-8">
                <p className={`text-3xl font-black tracking-tighter ${
                  plan.highlight ? 'text-scuta-primary' : 'text-scuta-silk'
                }`}>
                  {plan.price}
                </p>
                <p className={`text-xs font-bold uppercase tracking-widest mt-1 ${
                  plan.highlight ? 'text-scuta-primary/60' : 'text-slate-500'
                }`}>
                  {plan.period}
                </p>
              </div>

              {/* Lista de features */}
              <ul className="space-y-4 mb-10 grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className={`shrink-0 mt-0.5 ${
                        plan.highlight ? 'text-scuta-primary' : 'text-scuta-highlight'
                      }`}
                      strokeWidth={2.5}
                    />
                    <span className={`text-sm font-medium leading-snug ${
                      plan.highlight ? 'text-scuta-primary/90' : 'text-slate-300'
                    }`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full py-4 rounded-2xl text-center text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all active:scale-95 ${
                  plan.highlight
                    ? 'bg-scuta-primary text-scuta-highlight hover:bg-scuta-primary/90'
                    : 'bg-white/5 border border-white/10 text-scuta-silk hover:bg-white/10'
                }`}
              >
                {plan.cta} <ArrowRight size={16} />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Nota de rodapé */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-slate-500 text-sm mt-12 font-medium"
        >
          {h.footer}
        </motion.p>

      </div>
    </section>
  );
}