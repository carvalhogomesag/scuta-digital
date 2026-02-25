import { SAMPLE_THEMES } from '../lib/theme';

export interface SampleSite {
  slug: string;
  companyName: string;
  sector: string;
  pain: string; // A dor do cliente
  solution: string; // O que a Scuta Digital fez
  expectedResult: string; // O benefício prático
  // Conteúdo para simular o site real
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  features: { title: string; desc: string; iconName: string }[];
  seoTitle: string;
  seoDescription: string;
  // Propriedades de Estilo Dinâmico
  theme: typeof SAMPLE_THEMES["loja-bairro"]; 
  bgStyle: "mesh" | "dots" | "simple";
}

export const SAMPLE_SITES: SampleSite[] = [
  {
    slug: "loja-bairro",
    companyName: "Mercearia da Esquina",
    sector: "Comércio Local",
    pain: "As pessoas passavam à porta mas não entravam. O WhatsApp estava parado e ninguém conhecia as promoções da semana.",
    solution: "Criámos uma interface com cores quentes e acolhedoras que convidam à confiança, focada em encomendas rápidas e proximidade.",
    expectedResult: "Aumento de 50% nos pedidos via telemóvel e maior fluxo de vizinhos novos na loja.",
    heroTitle: "O sabor do nosso bairro, agora à distância de um clique.",
    heroSubtitle: "Produtos frescos da nossa quinta diretamente para a sua mesa. Encomende pelo WhatsApp e levante na loja em 15 minutos.",
    ctaText: "Fazer Encomenda",
    theme: SAMPLE_THEMES["loja-bairro"],
    bgStyle: "dots",
    features: [
      { title: "Frescura Diária", desc: "Colhido hoje, na sua mesa hoje.", iconName: "leaf" },
      { title: "Entrega Grátis", desc: "Entregas em 15 min no seu quarteirão.", iconName: "truck" },
      { title: "Pague à Porta", desc: "Aceitamos MB WAY e dinheiro na entrega.", iconName: "wallet" }
    ],
    seoTitle: "Mercearia da Esquina | Produtos Frescos em Lisboa",
    seoDescription: "A sua loja de bairro agora online. Faça encomendas via WhatsApp e receba produtos frescos em casa."
  },
  {
    slug: "clinica-vida-mais",
    companyName: "Clínica Vida+",
    sector: "Saúde e Bem-estar",
    pain: "A secretária passava o dia a responder às mesmas dúvidas: 'aceitam seguros?', 'quais os horários?'. As marcações perdiam-se em chamadas.",
    solution: "Interface 'Clean' em tons de azul que transmite higiene e tecnologia, com FAQ inteligente que remove o trabalho manual da receção.",
    expectedResult: "Redução de 40% nas chamadas informativas e agenda sempre cheia via marcação online.",
    heroTitle: "Cuidar da sua saúde nunca foi tão simples.",
    heroSubtitle: "Especialistas em medicina geral e estética no Porto. Marque a sua consulta online em menos de 1 minuto, sem esperas.",
    ctaText: "Marcar Consulta",
    theme: SAMPLE_THEMES["clinica-vida-mais"],
    bgStyle: "mesh",
    features: [
      { title: "Acordos e Seguros", desc: "Trabalhamos com ADSE, Multicare e AdvanceCare.", iconName: "shield" },
      { title: "Equipa Sénior", desc: "Médicos especialistas com vasta experiência.", iconName: "user" },
      { title: "Exames Online", desc: "Aceda aos seus resultados no telemóvel.", iconName: "file" }
    ],
    seoTitle: "Clínica Vida+ | Consultas e Exames Online",
    seoDescription: "Marque a sua consulta na Clínica Vida+. Atendimento personalizado e acordos com todos os seguros."
  },
  {
    slug: "assistencia-24h",
    companyName: "Renova Home & Design",
    sector: "Arquitetura & Reformas",
    pain: "Muitos projetos de qualidade realizados, mas uma imagem online antiquada que não atraía clientes de alto padrão.",
    solution: "Site estilo 'Editorial de Luxo' com efeitos de parallax, tipografia moderna e foco visual que justifica orçamentos premium.",
    expectedResult: "Aumento de 300% em pedidos de orçamento para reformas integrais e design de interiores.",
    heroTitle: "Redefinindo o seu Espaço Vital.",
    heroSubtitle: "Especialistas em reformas residenciais de alto padrão. Unimos funcionalidade, estética e precisão técnica para criar ambientes extraordinários.",
    ctaText: "Ver Portfólio",
    theme: SAMPLE_THEMES["assistencia-24h"],
    bgStyle: "simple",
    features: [
      { title: "Gestão Total", desc: "Tratamos de tudo, da licença à entrega das chaves.", iconName: "shield" },
      { title: "Design Premium", desc: "Projetos exclusivos focados no seu estilo de vida.", iconName: "award" },
      { title: "Prazo Rigoroso", desc: "Método que garante custos e entregas sem atrasos.", iconName: "clock" }
    ],
    seoTitle: "Renova Home | Reformas e Design de Luxo em Portugal",
    seoDescription: "Transforme a sua casa com a Renova. Especialistas em design de interiores e reformas integrais de alto padrão."
  }
];