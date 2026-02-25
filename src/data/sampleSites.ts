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
  features: { title: string; desc: string }[];
  seoTitle: string;
  seoDescription: string;
}

export const SAMPLE_SITES: SampleSite[] = [
  {
    slug: "loja-bairro",
    companyName: "Mercearia da Esquina",
    sector: "Comércio Local",
    pain: "As pessoas passavam à porta mas não entravam. O WhatsApp estava parado e ninguém conhecia as promoções da semana.",
    solution: "Criámos uma página simples com mapa interativo, horário sempre atualizado e um botão direto para o WhatsApp para encomendas rápidas.",
    expectedResult: "Aumento de pedidos por telemóvel e maior fluxo de clientes novos que encontraram a loja no Google.",
    heroTitle: "Produtos frescos, da nossa família para a sua.",
    heroSubtitle: "Faça a sua encomenda pelo WhatsApp e levante na loja em 15 minutos. Qualidade de bairro com a rapidez que precisa.",
    ctaText: "Fazer Encomenda Grátis",
    features: [
      { title: "Entrega ao Domicílio", desc: "Entregamos na sua rua sem custos adicionais." },
      { title: "Produtos da Época", desc: "Trabalhamos apenas com produtores locais." },
      { title: "Cabazes Semanais", desc: "Poupe tempo com os nossos cabazes pré-preparados." }
    ],
    seoTitle: "Mercearia da Esquina | Produtos Frescos em Lisboa",
    seoDescription: "A sua loja de bairro agora online. Faça encomendas via WhatsApp e receba produtos frescos em casa."
  },
  {
    slug: "clinica-vida-mais",
    companyName: "Clínica Vida+",
    sector: "Saúde e Bem-estar",
    pain: "A secretária passava o dia a responder às mesmas dúvidas: 'aceitam seguros?', 'quais os horários?'. As marcações perdiam-se em chamadas não atendidas.",
    solution: "Implementámos uma secção de dúvidas frequentes (FAQ) clara e um sistema de pré-agendamento que filtra o tipo de consulta antes de chegar à recepção.",
    expectedResult: "Redução de 40% em chamadas informativas e aumento real nas consultas marcadas.",
    heroTitle: "Cuidar da sua saúde nunca foi tão simples.",
    heroSubtitle: "Especialistas em medicina geral e estética no Porto. Marque a sua consulta online em menos de 1 minuto.",
    ctaText: "Marcar Consulta",
    features: [
      { title: "Acordos e Seguros", desc: "Trabalhamos com as principais seguradoras de Portugal." },
      { title: "Equipa Especializada", desc: "Médicos com mais de 15 anos de experiência." },
      { title: "Resultados Online", desc: "Aceda aos seus exames sem sair de casa." }
    ],
    seoTitle: "Clínica Vida+ | Consultas e Exames Online",
    seoDescription: "Marque a sua consulta na Clínica Vida+. Atendimento personalizado e acordos com todos os seguros."
  },
  {
    slug: "assistencia-24h",
    companyName: "Picheleiro Urgente 24h",
    sector: "Serviços de Emergência",
    pain: "Só trabalhavam por recomendação. Quando alguém tinha um cano partido às 2h da manhã e procurava no Google, eles não apareciam.",
    solution: "Criámos um site 'Mobile-First' com foco total em velocidade e um botão de emergência que liga diretamente para o técnico de serviço.",
    expectedResult: "O negócio passou a ser a primeira escolha em situações de urgência na região.",
    heroTitle: "Cano partido ou fuga de água? Resolvemos agora.",
    heroSubtitle: "Assistência técnica urgente 24 horas em todo o país. Chegamos ao local em menos de 45 minutos.",
    ctaText: "Ligar para Urgência",
    features: [
      { title: "Disponível 24/7", desc: "Não importa a hora, temos sempre um técnico de piquete." },
      { title: "Orçamento Transparente", desc: "Sabe quanto vai pagar antes de começarmos o serviço." },
      { title: "Garantia de Serviço", desc: "Todos os nossos reparos têm garantia certificada." }
    ],
    seoTitle: "Picheleiro Urgente 24h | Reparações em Portugal",
    seoDescription: "Fugas de água ou entupimentos? Ligue já para a assistência 24h. Técnicos qualificados em todo o país."
  }
];