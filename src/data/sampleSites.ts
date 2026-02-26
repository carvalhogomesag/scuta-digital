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
  theme: any; 
  bgStyle: "mesh" | "dots" | "simple";
}

export const SAMPLE_SITES: SampleSite[] = [
  {
    slug: "prisma-matematica",
    companyName: "Prisma Matemática",
    sector: "Educação de Alta Performance",
    pain: "Pais preocupados com a média de acesso à universidade e alunos com 'bloqueio' matemático em métodos de ensino genéricos.",
    solution: "Interface de 'Clareza Absoluta' com design geométrico minimalista. Foco total em autoridade técnica, provas de sucesso (médias reais) e um sistema de agendamento ultra-rápido.",
    expectedResult: "Elevação do valor/hora em 60% e preenchimento total das vagas trimestrais em apenas 15 dias.",
    heroTitle: "A Matemática deixa de ser um obstáculo. Torna-se a tua vantagem.",
    heroSubtitle: "Explicações personalizadas do 1º Ciclo ao Secundário. Transformamos a ansiedade dos exames na confiança necessária para entrar no curso dos teus sonhos.",
    ctaText: "Agendar Sessão de Avaliação",
    theme: SAMPLE_THEMES["prisma-math"], 
    bgStyle: "dots",
    features: [
      { title: "Preparação de Elite", desc: "Foco intensivo em Exames Nacionais e testes intermédios.", iconName: "award" },
      { title: "Método Analítico", desc: "Identificamos as lacunas de base que impedem o progresso atual.", iconName: "shield" },
      { title: "Relatórios Mensais", desc: "Feedback detalhado para os pais sobre a evolução cognitiva.", iconName: "file" }
    ],
    seoTitle: "Prisma Matemática | Explicações de Alta Performance em Portugal",
    seoDescription: "Domina a matemática do 1º ao 12º ano. Preparação para exames, apoio personalizado e resultados garantidos com o método Prisma."
  },
  {
    slug: "edu-spark",
    companyName: "EduSpark ATL",
    sector: "Educação & Inovação",
    pain: "Dificuldade em comunicar o valor da sua metodologia diferenciada, perdendo alunos para centros de estudos genéricos.",
    solution: "Criação de uma plataforma vibrante com animações fluidas e 'Glassmorphism', focada em demonstrar os benefícios da neuroeducação aos pais.",
    expectedResult: "Aumento de 45% nas marcações de visitas e preenchimento total das vagas antes do início do ano letivo.",
    heroTitle: "Onde a aprendizagem ganha superpoderes.",
    heroSubtitle: "ATL especializado em neuroeducação e tecnologia em Lisboa. Preparamos o seu filho para os desafios de amanhã com diversão e foco hoje.",
    ctaText: "Marcar Visita Grátis",
    theme: SAMPLE_THEMES["edu-spark"],
    bgStyle: "mesh",
    features: [
      { title: "Neuroeducação", desc: "Métodos baseados em como o cérebro realmente aprende.", iconName: "user" },
      { title: "Robótica & Coding", desc: "Programação para os inventores de amanhã.", iconName: "shield" },
      { title: "Sucesso Escolar", desc: "Apoio personalizado para notas de excelência.", iconName: "award" }
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
      { title: "Equipa Sénior", desc: "Médicos especialistas com vasta experiência clínica.", iconName: "user" },
      { title: "Exames Online", desc: "Aceda aos seus resultados diretamente no telemóvel.", iconName: "file" }
    ],
    seoTitle: "Clínica Vida+ | Consultas e Exames Online",
    seoDescription: "Marque a sua consulta na Clínica Vida+. Atendimento personalizado e acordos com todos os seguros."
  },
  {
    slug: "renova-home",
    companyName: "Renova Home & Design",
    sector: "Arquitetura & Reformas",
    pain: "Muitos projetos de qualidade realizados, mas uma imagem online antiquada que não atraía clientes de alto padrão.",
    solution: "Site estilo 'Editorial de Luxo' com efeitos de parallax, tipografia moderna e foco visual que justifica orçamentos premium.",
    expectedResult: "Aumento de 300% em pedidos de orçamento para reformas integrais e design de interiores.",
    heroTitle: "Redefinindo o seu Espaço Vital.",
    heroSubtitle: "Especialistas em reformas residenciais de alto padrão. Unimos funcionalidade, estética e precisão técnica para criar ambientes extraordinários.",
    ctaText: "Ver Portfólio",
    theme: SAMPLE_THEMES["renova-home"],
    bgStyle: "simple",
    features: [
      { title: "Gestão Total", desc: "Tratamos de tudo, da licença à entrega das chaves.", iconName: "shield" },
      { title: "Design Premium", desc: "Projetos exclusivos focados no seu estilo de vida.", iconName: "award" },
      { title: "Prazo Rigoroso", desc: "Método que garante custos e entregas sem atrasos.", iconName: "clock" }
    ],
    seoTitle: "Renova Home | Reformas e Design de Luxo em Portugal",
    seoDescription: "Transforme a sua casa com a Renova. Especialistas em design de interiores e reformas integrais de alto padrão."
  },
  {
    slug: "padel-pro-hub",
    companyName: "Padel Pro Hub",
    sector: "Desporto & Lazer",
    pain: "Dificuldade em preencher campos em horários vazios e excesso de tempo gasto no WhatsApp para gerir reservas manuais.",
    solution: "Portal focado em conversão direta com sistema de reservas intuitivo e uma secção 'Social & Coffee' para aumentar o consumo médio por cliente.",
    expectedResult: "Campos com 90% de ocupação e automação total do processo de reserva e pagamento.",
    heroTitle: "Mais do que um jogo, uma experiência social.",
    heroSubtitle: "Campos de última geração, academia para todos os níveis e a melhor cafetaria de convívio pós-jogo em Lisboa.",
    ctaText: "Reservar Campo Agora",
    theme: SAMPLE_THEMES["padel-hub"],
    bgStyle: "mesh",
    features: [
      { title: "Cancha Premium", desc: "Vidro panorâmico e relva oficial WPT.", iconName: "award" },
      { title: "Social Club", desc: "Cafetaria, balneários de luxo e zona Lounge.", iconName: "user" },
      { title: "App de Reservas", desc: "Marque e pague o seu campo em 30 segundos.", iconName: "clock" }
    ],
    seoTitle: "Padel Pro Hub | O Melhor Clube de Padel em Lisboa",
    seoDescription: "Jogue Padel em campos premium. Escola de Padel para todos os níveis, aluguer online e ambiente social único."
  }
];