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
    slug: "loja-bairro", // Mantivemos o slug para estabilidade de rotas, agora como EduSpark
    companyName: "EduSpark ATL",
    sector: "Educação & Inovação",
    pain: "Dificuldade em comunicar o valor da sua metodologia diferenciada, perdendo alunos para centros de estudos genéricos e mais baratos.",
    solution: "Criação de uma plataforma vibrante com animações fluidas e 'Glassmorphism', focada em demonstrar os benefícios da neuroeducação aos pais.",
    expectedResult: "Aumento de 45% nas marcações de visitas e preenchimento total das vagas antes do início do ano letivo.",
    heroTitle: "Onde o aprendizado ganha superpoderes.",
    heroSubtitle: "ATL especializado em neuroeducação e tecnologia em Lisboa. Preparamos o seu filho para os desafios de amanhã com diversão e foco hoje.",
    ctaText: "Marcar Visita Grátis",
    theme: SAMPLE_THEMES["loja-bairro"],
    bgStyle: "mesh",
    features: [
      { title: "Neuroeducação", desc: "Métodos baseados em como o cérebro aprende.", iconName: "user" }, // user mapeia para Brain no Vitalis, ajustaremos no Edu
      { title: "Robótica & Coding", desc: "Programação para os inventores de amanhã.", iconName: "shield" },
      { title: "Sucesso Escolar", desc: "Apoio personalizado para notas excelentes.", iconName: "award" }
    ],
    seoTitle: "EduSpark ATL | O Melhor Centro de Estudos em Lisboa",
    seoDescription: "Mais do que um ATL. Um centro de inovação educativa focado em neurociência, robótica e sucesso escolar em Portugal."
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