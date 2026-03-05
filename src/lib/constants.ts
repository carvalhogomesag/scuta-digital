/**
 * FONTE DA VERDADE ABSOLUTA - SCUTA DIGITAL
 * Centralização de dados críticos focada em conversão e clareza para o cliente.
 */

export type Language = "pt-pt" | "pt-br" | "en" | "es";

interface LanguageStrings {
  navbar: {
    why: string;
    solutions: string;
    samples: string;
    faq: string;
    contact: string;
  };
  hero: {
    badge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    cta: string;
    secondaryCta: string;
    trust: {
      noSurprise: string;
      fast: string;
      mobile: string;
    };
  };
  why: {
    sectionBadge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    reasons: { title: string; description: string }[];
    stats: string[];
  };
  solutions: {
    badge: string;
    title: string;
    subtitle: string;
    features: string[];
    items: { icon: string; title: string; description: string }[];
    cta: string;
  };
  samples: {
    badge: string;
    title: string;
    subtitle: string;
    caseStudy: string;
    performance: string;
    analyze: string;
    cardCta: string;
    cardBadge: string;
  };
  process: {
    badge: string;
    title: string;
    steps: { icon: string; title: string; description: string }[];
  };
  testimonials: {
    badge: string;
    title: string;
    items: { author: string; role: string; content: string; avatar: string }[];
  };
  faq: {
    sectionBadge: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaText: string;
  };
  contact: {
    badge: string;
    title: string;
    subtitle: string;
    whatsapp: string;
    email: string;
    form: {
      title: string;
      name: string;
      email: string;
      subject: string;
      message: string;
      send: string;
    };
    trustNote: string;
  };
  footer: {
    tagline: string;
    rights: string;
    sections: {
      company: { title: string; links: string[] };
      services: { title: string; links: string[] };
    };
    legal: { privacy: string; terms: string };
  };
  legalPages: {
    privacy: {
      title: string;
      lastUpdated: string;
      sections: { title: string; content: string }[];
    };
    terms: {
      title: string;
      lastUpdated: string;
      sections: { title: string; content: string }[];
    };
  };
}

export const BRAND_INFO = {
  name: "Scuta Digital",
  tagline: "Criamos o seu site. Você recebe os clientes.",
  url: "https://scutadigital.pt/", 
};

export const CONTACT_INFO = {
  phone: "+351 914 044 836",
  phoneRaw: "351914044836",
  email: "appschedy@gmail.com",
  location: "Portugal · Atendimento em todo o país",
  whatsappMessage: "Olá! Gostaria de saber como um site pode ajudar o meu negócio a atrair mais clientes.",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/scutadigital",
  linkedin: "https://linkedin.com/company/scutadigital",
};

export const UI_STRINGS: Record<Language, LanguageStrings> = {
  "pt-pt": {
    navbar: {
      why: "Porquê ter um site?",
      solutions: "O que fazemos",
      samples: "Exemplos reais",
      faq: "Dúvidas frequentes",
      contact: "Pedir orçamento",
    },
    hero: {
      badge: "Negócios em Portugal já confiam em nós",
      title: "Pare de perder clientes\npara quem aparece no Google.",
      titleHighlight: "para quem aparece no Google.",
      subtitle: "Criamos o site do seu negócio para que apareça quando os clientes procuram o que vende — e para que fiquem com vontade de ligar.",
      cta: "Quero mais clientes",
      secondaryCta: "Ver exemplos reais",
      trust: {
        noSurprise: "Sem custos surpresa",
        fast: "Pronto em 1 a 2 semanas",
        mobile: "Funciona bem em qualquer telemóvel",
      }
    },
    why: {
      sectionBadge: "Porque é que precisa de um site hoje?",
      title: "O seu cliente procura no Google.\nEle encontra o seu concorrente.",
      titleHighlight: "encontra o seu concorrente.",
      subtitle: "Se não aparecer online quando alguém precisa do que oferece, esse cliente vai a outro lado — e provavelmente não volta.",
      reasons: [
        {
          title: "Apareça quando procuram por si",
          description: "Quando alguém pesquisa 'cabeleireiro perto de mim' ou 'canalizador urgente Lisboa', o seu nome tem de estar lá. Caso contrário, está a oferecer o cliente à concorrência.",
        },
        {
          title: "Pare de responder às mesmas perguntas",
          description: "O site responde por si: preços, horários, localização, formas de contacto. Menos mensagens inúteis no WhatsApp, mais tempo para o que realmente importa.",
        },
        {
          title: "Transmita confiança antes da primeira chamada",
          description: "Um negócio sem site online parece um negócio que não leva a sério os clientes. Um site bem feito passa confiança imediata — mesmo antes de qualquer contacto.",
        },
      ],
      stats: [
        "Mais contactos qualificados",
        "Visível nas pesquisas da sua zona",
      ],
    },
    solutions: {
      badge: "O que está incluído",
      title: "Tratamos de tudo.\nVocê foca-se no negócio.",
      subtitle: "Da primeira reunião à entrega final, não precisa de saber nada de tecnologia. Explicamos tudo de forma simples e ficamos disponíveis depois.",
      features: [
        "Design Exclusivo & Moderno",
        "Otimização para Google (SEO)",
        "Textos de Alta Conversão",
        "Suporte Técnico Permanente"
      ],
      items: [
        {
          icon: "Smartphone",
          title: "Funciona bem em qualquer telemóvel",
          description: "Mais de 80% dos seus clientes vão abrir o site no telemóvel. Garantimos que a experiência é rápida, fácil e agradável em qualquer ecrã.",
        },
        {
          icon: "Search",
          title: "Aparece no Google quando procuram por si",
          description: "Configuramos o site para que o Google perceba onde está, o que vende e para quem. Quando alguém procura na sua zona, você aparece.",
        },
        {
          icon: "PenTool",
          title: "Textos que convencem o cliente a contactar",
          description: "Escrevemos os textos do site por si — com palavras que o seu cliente usa, que respondem às suas dúvidas e que o motivam a ligar ou marcar.",
        },
        {
          icon: "ShieldCheck",
          title: "Nós tratamos de tudo, sempre",
          description: "Segurança, velocidade, atualizações. Nunca vai receber um email a dizer que tem de resolver algum problema técnico. Isso é connosco.",
        },
      ],
      cta: "Solicitar proposta",
    },
    samples: {
      badge: "Portfólio Estratégico",
      title: "Experiências que Convertem Cliques.",
      subtitle: "Cada projeto é um ecossistema único, desenhado para resolver as dores específicas do mercado português.",
      caseStudy: "Caso de Estudo",
      performance: "Performance Ativada",
      analyze: "Analisar Estratégia",
      cardCta: "Ver como foi feito",
      cardBadge: "Resultado real",
    },
    process: {
      badge: "O Nosso Método",
      title: "Como transformamos a sua presença digital.",
      steps: [
        {
          icon: "Search",
          title: "01. Descoberta",
          description: "Analisamos o seu negócio, concorrência e público-alvo para definir a melhor estratégia de conversão."
        },
        {
          icon: "PenTool",
          title: "02. Estratégia & Copy",
          description: "Escrevemos os textos e planeamos a estrutura focada em transformar visitantes em clientes reais."
        },
        {
          icon: "Layout",
          title: "03. Design & Dev",
          description: "Criamos uma interface de alta performance, otimizada para telemóveis e com carregamento ultra-rápido."
        },
        {
          icon: "Rocket",
          title: "04. Lançamento",
          description: "Colocamos o seu site online, configuramos o SEO e garantimos que tudo funciona perfeitamente."
        }
      ]
    },
    testimonials: {
      badge: "O que dizem os nossos clientes",
      title: "Resultados que falam por si.",
      items: [
        {
          author: "Ricardo Oliveira",
          role: "CEO, TechFlow Portugal",
          content: "A Scuta Digital não criou apenas um site, criou uma máquina de vendas. O nosso tráfego orgânico subiu 40% em apenas 3 meses.",
          avatar: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
          author: "Helena Santos",
          role: "Fundadora, Bloom Interiors",
          content: "O design editorial que desenvolveram para o nosso portfólio elevou a nossa marca para um patamar de luxo que não conseguíamos atingir sozinhos.",
          avatar: "https://i.pravatar.cc/150?u=helena"
        },
        {
          author: "Tiago Mendes",
          role: "Diretor Clínico, Vitalis",
          content: "A automação de marcações no site poupou-nos horas de trabalho administrativo. O investimento pagou-se no primeiro mês.",
          avatar: "https://i.pravatar.cc/150?u=tiago"
        }
      ]
    },
    faq: {
      sectionBadge: "Perguntas que nos fazem sempre",
      title: "Tem dúvidas?\nTemos respostas.",
      titleHighlight: "Temos respostas.",
      subtitle: "Respondemos às perguntas mais comuns de forma simples. Se a sua não estiver aqui, fale connosco.",
      ctaText: "A sua dúvida não está aqui? Fale connosco →",
    },
    contact: {
      badge: "Inicie a sua expansão",
      title: "Pronto para Vencer Online?",
      subtitle: "Não precisa de saber nada de sites. Conta-nos o seu negócio e nós dizemos o que faz sentido fazer — sem compromisso.",
      whatsapp: "Falar pelo WhatsApp agora",
      email: "Enviar mensagem por email",
      form: {
        title: "Solicitar Orçamento",
        name: "O seu nome",
        email: "E-mail de contacto",
        subject: "Tipo de negócio",
        message: "Mensagem breve",
        send: "Enviar Solicitação",
      },
      trustNote: "Respondemos em menos de 24 horas · Os seus dados estão seguros",
    },
    footer: {
      tagline: "Criamos o seu site. Você recebe os clientes.",
      rights: "Desenhado para Performance Absoluta.",
      sections: {
        company: {
          title: "Navegação",
          links: ["Portfólio", "O que fazemos", "Processo", "Dúvidas"]
        },
        services: {
          title: "Legal & Transparência",
          links: ["Livro de Reclamações", "Arbitragem de Consumo"]
        }
      },
      legal: {
        privacy: "Política de Privacidade",
        terms: "Termos de Serviço"
      }
    },
    legalPages: {
      privacy: {
        title: "Política de Privacidade",
        lastUpdated: "Última atualização: 20 de Maio de 2024",
        sections: [
          {
            title: "1. Introdução",
            content: "A Scuta Digital valoriza a sua privacidade. Esta política explica como recolhemos, usamos e protegemos os seus dados pessoais quando utiliza o nosso site."
          },
          {
            title: "2. Dados Recolhidos",
            content: "Recolhemos apenas os dados necessários para o contacto (nome, email, tipo de negócio) através do nosso formulário de contacto."
          },
          {
            title: "3. Finalidade",
            content: "Os dados são utilizados exclusivamente para responder aos seus pedidos de orçamento e melhorar a nossa prestação de serviços."
          }
        ]
      },
      terms: {
        title: "Termos de Serviço",
        lastUpdated: "Última atualização: 20 de Maio de 2024",
        sections: [
          {
            title: "1. Aceitação",
            content: "Ao aceder a este site, concorda em cumprir estes termos de serviço e todas as leis aplicáveis."
          },
          {
            title: "2. Propriedade Intelectual",
            content: "Todo o conteúdo deste site, incluindo design, textos e imagens, é propriedade da Scuta Digital ou dos seus licenciadores."
          }
        ]
      }
    },
  },
  "pt-br": {
    navbar: {
      why: "Por que ter um site?",
      solutions: "O que fazemos",
      samples: "Exemplos reais",
      faq: "Dúvidas frequentes",
      contact: "Pedir orçamento",
    },
    hero: {
      badge: "Negócios brasileiros já crescem com a gente",
      title: "Seu negócio merece ser\nencontrado na internet.",
      titleHighlight: "encontrado na internet.",
      subtitle: "A gente cria o site da sua empresa para aparecer quando seus clientes pesquisam no Google — e para convencer eles a entrar em contato.",
      cta: "Quero atrair mais clientes",
      secondaryCta: "Ver exemplos reais",
      trust: {
        noSurprise: "Sem surpresas no orçamento",
        fast: "Pronto em 1 a 2 semanas",
        mobile: "Funciona em qualquer celular",
      }
    },
    why: {
      sectionBadge: "Por que investir num site agora?",
      title: "Seus clientes estão pesquisando.\nEles estão achando o concorrente.",
      titleHighlight: "Eles estão achando o concorrente.",
      subtitle: "Toda vez que alguém pesquisa pelo seu serviço e não te encontra, esse cliente vai embora — geralmente pra sempre.",
      reasons: [
        {
          title: "Apareça quando pesquisam por você",
          description: "Quando alguém digita 'salão de beleza perto de mim' ou 'encanador urgente', o seu nome precisa estar lá. Do contrário, você está entregando o cliente pro seu concorrente de bandeja.",
        },
        {
          title: "Pare de responder as mesmas perguntas no WhatsApp",
          description: "O site responde por você: preço, horário, localização, formas de pagamento. Você para de perder tempo com mensagens repetitivas e passa a receber só quem realmente quer comprar.",
        },
        {
          title: "Passe credibilidade antes de qualquer contato",
          description: "Empresa sem site parece empresa que não cresceu ainda. Um site bem feito passa seriedade e confiança — antes mesmo de a pessoa te ligar.",
        },
      ],
      stats: [
        "Mais contatos qualificados",
        "Visível nas buscas da sua região",
      ],
    },
    solutions: {
      badge: "O que está incluído",
      title: "A gente cuida de tudo.\nVocê só recebe os clientes.",
      subtitle: "Você não precisa entender nada de tecnologia. A gente explica tudo de um jeito simples e fica do lado mesmo depois da entrega.",
      features: [
        "Design Exclusivo & Moderno",
        "Otimização para Google (SEO)",
        "Textos de Alta Conversão",
        "Suporte Técnico Permanente"
      ],
      items: [
        {
          icon: "Smartphone",
          title: "Funciona direitinho em qualquer celular",
          description: "Mais de 80% dos seus clientes vão abrir o site no celular. A gente garante que tudo carrega rápido e é fácil de navegar em qualquer tela.",
        },
        {
          icon: "Search",
          title: "Aparece no Google quando pesquisam por você",
          description: "Configuramos o site pra que o Google saiba onde você está, o que você vende e pra quem. Resultado: você aparece pra quem está procurando na sua região.",
        },
        {
          icon: "PenTool",
          title: "Textos que fazem o cliente querer te contratar",
          description: "A gente escreve os textos do site pra você — com a linguagem do seu cliente, respondendo as dúvidas dele e convencendo ele a entrar em contato.",
        },
        {
          icon: "ShieldCheck",
          title: "Suporte permanente, sem complicação",
          description: "Segurança, velocidade, atualizações. Você não vai precisar se preocupar com nenhuma questão técnica. Isso é com a gente, pra sempre.",
        },
      ],
      cta: "Solicitar proposta",
    },
    samples: {
      badge: "Portfólio Estratégico",
      title: "Experiências que Convertem Cliques.",
      subtitle: "Cada projeto é um ecossistema único, desenhado para resolver as dores específicas do mercado brasileiro.",
      caseStudy: "Caso de Estudo",
      performance: "Performance Ativada",
      analyze: "Analisar Estratégia",
      cardCta: "Ver como foi feito",
      cardBadge: "Resultado real",
    },
    process: {
      badge: "Nosso Método",
      title: "Como transformamos sua presença digital.",
      steps: [
        {
          icon: "Search",
          title: "01. Descoberta",
          description: "Analisamos seu negócio, concorrência e público-alvo para definir a melhor estratégia de conversão."
        },
        {
          icon: "PenTool",
          title: "02. Estratégia & Copy",
          description: "Escrevemos os textos e planejamos a estrutura focada em transformar visitantes em clientes reais."
        },
        {
          icon: "Layout",
          title: "03. Design & Dev",
          description: "Criamos uma interface de alta performance, otimizada para celulares e com carregamento ultra-rápido."
        },
        {
          icon: "Rocket",
          title: "04. Lançamento",
          description: "Colocamos seu site online, configuramos o SEO e garantimos que tudo funciona perfeitamente."
        }
      ]
    },
    testimonials: {
      badge: "O que dizem nossos clientes",
      title: "Resultados que falam por si.",
      items: [
        {
          author: "Ricardo Oliveira",
          role: "CEO, TechFlow",
          content: "A Scuta Digital não criou apenas um site, criou uma máquina de vendas. Nosso tráfego orgânico subiu 40% em apenas 3 meses.",
          avatar: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
          author: "Helena Santos",
          role: "Fundadora, Bloom Interiors",
          content: "O design editorial que desenvolveram para nosso portfólio elevou nossa marca para um patamar de luxo que não conseguíamos atingir sozinhos.",
          avatar: "https://i.pravatar.cc/150?u=helena"
        },
        {
          author: "Tiago Mendes",
          role: "Diretor Clínico, Vitalis",
          content: "A automação de marcações no site nos poupou horas de trabalho administrativo. O investimento se pagou no primeiro mês.",
          avatar: "https://i.pravatar.cc/150?u=tiago"
        }
      ]
    },
    faq: {
      sectionBadge: "Perguntas que a gente recebe sempre",
      title: "Tem dúvida?\nTem resposta.",
      titleHighlight: "Tem resposta.",
      subtitle: "Respondemos as perguntas mais comuns de forma bem direta. Se a sua não estiver aqui, é só chamar.",
      ctaText: "Sua dúvida não está aqui? Fala com a gente →",
    },
    contact: {
      badge: "Inicie sua expansão",
      title: "Pronto para Vencer Online?",
      subtitle: "Não precisa saber nada de sites. Me conta o seu negócio e a gente te diz o que faz sentido — sem compromisso nenhum.",
      whatsapp: "Falar pelo WhatsApp agora",
      email: "Enviar mensagem por email",
      form: {
        title: "Solicitar Orçamento",
        name: "Seu nome",
        email: "E-mail de contato",
        subject: "Tipo de negócio",
        message: "Mensagem breve",
        send: "Enviar Solicitação",
      },
      trustNote: "Respondemos em menos de 24 horas · Seus dados estão seguros",
    },
    footer: {
      tagline: "A gente cria o site. Você recebe os clientes.",
      rights: "Desenhado para Performance Absoluta.",
      sections: {
        company: {
          title: "Navegação",
          links: ["Portfólio", "O que fazemos", "Processo", "Dúvidas"]
        },
        services: {
          title: "Legal & Transparência",
          links: ["Política de Privacidade", "Termos de Uso"]
        }
      },
      legal: {
        privacy: "Privacidade",
        terms: "Termos"
      }
    },
    legalPages: {
      privacy: {
        title: "Política de Privacidade",
        lastUpdated: "Última atualização: 20 de Maio de 2024",
        sections: [
          {
            title: "1. Introdução",
            content: "A Scuta Digital valoriza sua privacidade. Esta política explica como coletamos, usamos e protegemos seus dados pessoais quando você utiliza nosso site."
          },
          {
            title: "2. Dados Coletados",
            content: "Coletamos apenas os dados necessários para o contato (nome, email, tipo de negócio) através do nosso formulário de contato."
          }
        ]
      },
      terms: {
        title: "Termos de Uso",
        lastUpdated: "Última atualização: 20 de Maio de 2024",
        sections: [
          {
            title: "1. Aceitação",
            content: "Ao acessar este site, você concorda em cumprir estes termos de uso e todas as leis aplicáveis."
          }
        ]
      }
    },
  },
  "en": {
    navbar: {
      why: "Why do I need a website?",
      solutions: "What we do",
      samples: "Real examples",
      faq: "Common questions",
      contact: "Get a quote",
    },
    hero: {
      badge: "Trusted by businesses across Portugal & Europe",
      title: "Your business deserves to be\nfound online.",
      titleHighlight: "found online.",
      subtitle: "We build websites that show up when your customers search — and make them want to call you instead of your competitor.",
      cta: "I want more customers",
      secondaryCta: "See real examples",
      trust: {
        noSurprise: "No hidden fees",
        fast: "Ready in 1–2 weeks",
        mobile: "Works perfectly on mobile",
      }
    },
    why: {
      sectionBadge: "Why does your business need a website now?",
      title: "Your customers are searching.\nThey're finding someone else.",
      titleHighlight: "They're finding someone else.",
      subtitle: "Every time someone searches for what you do and doesn't find you, that's a customer you'll never know you lost.",
      reasons: [
        {
          title: "Show up when people search for you",
          description: "When someone types 'hairdresser near me' or 'emergency plumber', your name needs to be there. If it isn't, you're sending that customer straight to your competition.",
        },
        {
          title: "Stop answering the same questions all day",
          description: "Your website works for you 24/7 — answering questions about prices, hours, location, and services. You only hear from people who are ready to book.",
        },
        {
          title: "Build trust before the first call",
          description: "A business without a website looks like a business that's not serious. A professional website makes people confident before they've even spoken to you.",
        },
      ],
      stats: [
        "More qualified enquiries",
        "Visible in local searches",
      ],
    },
    solutions: {
      badge: "What's included",
      title: "We handle everything.\nYou focus on your business.",
      subtitle: "You don't need to know anything about websites. We explain everything in plain language and stay by your side after launch.",
      features: [
        "Exclusive & Modern Design",
        "Google Optimization (SEO)",
        "High-Conversion Copywriting",
        "Permanent Technical Support"
      ],
      items: [
        {
          icon: "Smartphone",
          title: "Works great on every phone",
          description: "Over 80% of your customers will open your website on their phone. We make sure it loads fast and is easy to use on any screen.",
        },
        {
          icon: "Search",
          title: "Appears on Google when people search nearby",
          description: "We set up your website so Google knows exactly where you are, what you offer, and who you serve. When someone searches in your area, you show up.",
        },
        {
          icon: "PenTool",
          title: "Words that make customers want to contact you",
          description: "We write all the copy for you — using the language your customers use, answering their questions, and giving them a reason to pick up the phone.",
        },
        {
          icon: "ShieldCheck",
          title: "We take care of everything, always",
          description: "Security, speed, updates. You'll never receive an email asking you to fix something technical. That's our job — permanently.",
        },
      ],
      cta: "Request a proposal",
    },
    samples: {
      badge: "Strategic Portfolio",
      title: "Experiences that Convert Clicks.",
      subtitle: "Each project is a unique ecosystem, designed to solve specific market challenges.",
      caseStudy: "Case Study",
      performance: "Performance Activated",
      analyze: "Analyze Strategy",
      cardCta: "See how it was done",
      cardBadge: "Real result",
    },
    process: {
      badge: "Our Method",
      title: "How we transform your digital presence.",
      steps: [
        {
          icon: "Search",
          title: "01. Discovery",
          description: "We analyze your business, competition, and target audience to define the best conversion strategy."
        },
        {
          icon: "PenTool",
          title: "02. Strategy & Copy",
          description: "We write the copy and plan the structure focused on turning visitors into real customers."
        },
        {
          icon: "Layout",
          title: "03. Design & Dev",
          description: "We create a high-performance interface, optimized for mobile with ultra-fast loading."
        },
        {
          icon: "Rocket",
          title: "04. Launch",
          description: "We put your site online, configure SEO, and ensure everything works perfectly."
        }
      ]
    },
    testimonials: {
      badge: "What our clients say",
      title: "Results that speak for themselves.",
      items: [
        {
          author: "Ricardo Oliveira",
          role: "CEO, TechFlow",
          content: "Scuta Digital didn't just create a website, they created a sales machine. Our organic traffic went up 40% in just 3 months.",
          avatar: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
          author: "Helena Santos",
          role: "Founder, Bloom Interiors",
          content: "The editorial design they developed for our portfolio elevated our brand to a luxury level we couldn't reach alone.",
          avatar: "https://i.pravatar.cc/150?u=helena"
        },
        {
          author: "Tiago Mendes",
          role: "Clinical Director, Vitalis",
          content: "The booking automation on the site saved us hours of administrative work. The investment paid for itself in the first month.",
          avatar: "https://i.pravatar.cc/150?u=tiago"
        }
      ]
    },
    faq: {
      sectionBadge: "Questions we always get",
      title: "You have questions.\nWe have answers.",
      titleHighlight: "We have answers.",
      subtitle: "We answer the most common questions clearly and simply. If yours isn't here, just get in touch.",
      ctaText: "Can't find your answer? Talk to us →",
    },
    contact: {
      badge: "Start your expansion",
      title: "Ready to Win Online?",
      subtitle: "You don't need to know anything about websites. Tell us about your business and we'll tell you exactly what makes sense — no commitment required.",
      whatsapp: "Chat on WhatsApp now",
      email: "Send us an email",
      form: {
        title: "Request a Quote",
        name: "Your name",
        email: "Contact email",
        subject: "Business type",
        message: "Brief message",
        send: "Send Request",
      },
      trustNote: "We reply within 24 hours · Your data is safe with us",
    },
    footer: {
      tagline: "We build your website. You get the customers.",
      rights: "Designed for Absolute Performance.",
      sections: {
        company: {
          title: "Navigation",
          links: ["Portfolio", "What we do", "Process", "FAQ"]
        },
        services: {
          title: "Legal & Transparency",
          links: ["Privacy Policy", "Terms of Use"]
        }
      },
      legal: {
        privacy: "Privacy",
        terms: "Terms"
      }
    },
    legalPages: {
      privacy: {
        title: "Privacy Policy",
        lastUpdated: "Last updated: May 20, 2024",
        sections: [
          {
            title: "1. Introduction",
            content: "Scuta Digital values your privacy. This policy explains how we collect, use, and protect your personal data when you use our website."
          },
          {
            title: "2. Data Collected",
            content: "We only collect data necessary for contact (name, email, business type) through our contact form."
          }
        ]
      },
      terms: {
        title: "Terms of Service",
        lastUpdated: "Last updated: May 20, 2024",
        sections: [
          {
            title: "1. Acceptance",
            content: "By accessing this website, you agree to comply with these terms of service and all applicable laws."
          }
        ]
      }
    },
  },
  "es": {
    navbar: {
      why: "¿Por qué necesito una web?",
      solutions: "Qué hacemos",
      samples: "Ejemplos reales",
      faq: "Preguntas frecuentes",
      contact: "Pedir presupuesto",
    },
    hero: {
      badge: "Negocios en España y Portugal ya confían en nosotros",
      title: "Tu negocio merece aparecer\ncuando te buscan online.",
      titleHighlight: "cuando te buscan online.",
      subtitle: "Creamos la web de tu negocio para que salga en Google cuando tus clientes buscan lo que ofreces — y para que quieran llamarte a ti, no a tu competencia.",
      cta: "Quiero más clientes",
      secondaryCta: "Ver ejemplos reales",
      trust: {
        noSurprise: "Sin costes ocultos",
        fast: "Lista en 1 a 2 semanas",
        mobile: "Perfecta en cualquier móvil",
      }
    },
    why: {
      sectionBadge: "¿Por qué necesitas una web ahora mismo?",
      title: "Tus clientes están buscando.\nEstán encontrando a tu competencia.",
      titleHighlight: "Están encontrando a tu competencia.",
      subtitle: "Cada vez que alguien busca lo que ofreces y no te encuentra, ese cliente se va a otro sitio — y probablemente no vuelve.",
      reasons: [
        {
          title: "Aparece cuando te buscan",
          description: "Cuando alguien escribe 'peluquería cerca de mí' o 'fontanero urgente en Madrid', tu nombre tiene que estar ahí. Si no estás, le estás regalando ese cliente a tu competidor.",
        },
        {
          title: "Deja de responder las mismas preguntas todo el día",
          description: "Tu web trabaja por ti las 24 horas: precios, horarios, ubicación, formas de contacto. Tú solo recibes mensajes de personas que ya quieren contratarte.",
        },
        {
          title: "Genera confianza antes del primer contacto",
          description: "Un negocio sin web parece un negocio que no se toma en serio a sus clientes. Una web profesional transmite seguridad desde el primer segundo.",
        },
      ],
      stats: [
        "Más contactos cualificados",
        "Visible en las búsquedas de tu zona",
      ],
    },
    solutions: {
      badge: "Qué está incluido",
      title: "Nosotros nos encargamos de todo.\nTú te centras en tu negocio.",
      subtitle: "No necesitas saber nada de tecnología. Te lo explicamos todo en un lenguaje normal y seguimos a tu lado después de la entrega.",
      features: [
        "Diseño Exclusivo y Moderno",
        "Optimización para Google (SEO)",
        "Textos de Alta Conversión",
        "Soporte Técnico Permanente"
      ],
      items: [
        {
          icon: "Smartphone",
          title: "Funciona perfectamente en cualquier móvil",
          description: "Más del 80% de tus clientes van a abrir tu web desde el móvil. Nos aseguramos de que cargue rápido y sea fácil de usar en cualquier pantalla.",
        },
        {
          icon: "Search",
          title: "Aparece en Google cuando te buscan cerca",
          description: "Configuramos tu web para que Google entienda dónde estás, qué vendes y para quién. Cuando alguien busca en tu zona, tú apareces.",
        },
        {
          icon: "PenTool",
          title: "Textos que hacen que el cliente quiera llamarte",
          description: "Escribimos todos los textos de tu web — con las palabras que usa tu cliente, respondiendo sus dudas y dándole una razón clara para contactarte.",
        },
        {
          icon: "ShieldCheck",
          title: "Nos ocupamos de todo, para siempre",
          description: "Seguridad, velocidad, actualizaciones. Nunca recibirás un mensaje pidiéndote que resuelvas algo técnico. Eso es cosa nuestra, siempre.",
        },
      ],
      cta: "Solicitar propuesta",
    },
    samples: {
      badge: "Portfolio Estratégico",
      title: "Experiencias que Convierten Clics.",
      subtitle: "Cada proyecto es un ecosistema único, diseñado para resolver los desafíos específicos del mercado.",
      caseStudy: "Caso de Estudio",
      performance: "Performance Activada",
      analyze: "Analizar Estrategia",
      cardCta: "Ver cómo se hizo",
      cardBadge: "Resultado real",
    },
    process: {
      badge: "Nuestro Método",
      title: "Cómo transformamos tu presencia digital.",
      steps: [
        {
          icon: "Search",
          title: "01. Descubrimiento",
          description: "Analizamos tu negocio, competencia y público objetivo para definir la mejor estrategia de conversión."
        },
        {
          icon: "PenTool",
          title: "02. Estrategia & Copy",
          description: "Escribimos los textos y planificamos la estructura enfocada en transformar visitantes en clientes reales."
        },
        {
          icon: "Layout",
          title: "03. Diseño & Dev",
          description: "Creamos una interfaz de alto rendimiento, optimizada para móviles y con carga ultra rápida."
        },
        {
          icon: "Rocket",
          title: "04. Lanzamiento",
          description: "Ponemos tu sitio online, configuramos el SEO y garantizamos que todo funcione perfectamente."
        }
      ]
    },
    testimonials: {
      badge: "Lo que dicen nuestros clientes",
      title: "Resultados que hablan por sí mismos.",
      items: [
        {
          author: "Ricardo Oliveira",
          role: "CEO, TechFlow",
          content: "Scuta Digital no solo creó un sitio web, creó uma máquina de ventas. Nuestro tráfico orgánico subió un 40% en solo 3 meses.",
          avatar: "https://i.pravatar.cc/150?u=ricardo"
        },
        {
          author: "Helena Santos",
          role: "Fundadora, Bloom Interiors",
          content: "El diseño editorial que desarrollaron para nuestro portafolio elevó nuestra marca a un nivel de lujo que no podíamos alcanzar solos.",
          avatar: "https://i.pravatar.cc/150?u=helena"
        },
        {
          author: "Tiago Mendes",
          role: "Director Clínico, Vitalis",
          content: "La automatización de reservas en el sitio nos ahorró horas de trabajo administrativo. La inversión se pagó sola en el primer mes.",
          avatar: "https://i.pravatar.cc/150?u=tiago"
        }
      ]
    },
    faq: {
      sectionBadge: "Preguntas que nos hacen siempre",
      title: "Tienes dudas.\nTenemos respuestas.",
      titleHighlight: "Tenemos respuestas.",
      subtitle: "Respondemos las preguntas más comunes de forma directa y sin tecnicismos. Si la tuya no está, escríbenos.",
      ctaText: "¿No encuentras tu respuesta? Habla con nosotros →",
    },
    contact: {
      badge: "Inicie su expansión",
      title: "¿Listo para Vencer Online?",
      subtitle: "No necesitas saber nada de webs. Cuéntanos tu negocio y te decimos exactamente qué tiene sentido hacer — sin ningún compromiso.",
      whatsapp: "Hablar por WhatsApp ahora",
      email: "Enviar mensaje por email",
      form: {
        title: "Solicitar Presupuesto",
        name: "Tu nombre",
        email: "Email de contacto",
        subject: "Tipo de negocio",
        message: "Mensaje breve",
        send: "Enviar Solicitud",
      },
      trustNote: "Respondemos en menos de 24 horas · Tus datos están seguros",
    },
    footer: {
      tagline: "Creamos tu web. Tú recibes los clientes.",
      rights: "Diseñado para Performance Absoluta.",
      sections: {
        company: {
          title: "Navegación",
          links: ["Portafolio", "Qué hacemos", "Proceso", "Dudas"]
        },
        services: {
          title: "Legal y Transparencia",
          links: ["Política de Privacidad", "Términos de Uso"]
        }
      },
      legal: {
        privacy: "Privacidad",
        terms: "Términos"
      }
    },
    legalPages: {
      privacy: {
        title: "Política de Privacidad",
        lastUpdated: "Última actualización: 20 de mayo de 2024",
        sections: [
          {
            title: "1. Introducción",
            content: "Scuta Digital valora su privacidad. Esta política explica cómo recopilamos, usamos y protegemos sus datos personales cuando utiliza nuestro sitio web."
          }
        ]
      },
      terms: {
        title: "Términos de Uso",
        lastUpdated: "Última actualización: 20 de mayo de 2024",
        sections: [
          {
            title: "1. Aceptación",
            content: "Al acceder a este sitio web, usted acepta cumplir con estos términos de uso y todas las leyes aplicables."
          }
        ]
      }
    },
  },
};

export const FAQ_ITEMS: Record<Language, { question: string; answer: string }[]> = {
  "pt-pt": [
    {
      question: "Preciso de saber de informática para ter um site?",
      answer: "Não. Nós tratamos de toda a parte técnica. O seu único trabalho é receber os novos clientes que o site vai trazer.",
    },
    {
      question: "O site vai funcionar no telemóvel dos meus clientes?",
      answer: "Sim, e isso é uma das nossas prioridades. Hoje em dia a maioria das pesquisas é feita no telemóvel, por isso o site é construído para funcionar na perfeição em qualquer ecrã.",
    },
    {
      question: "Quanto tempo demora até o site estar pronto?",
      answer: "Normalmente entre 1 a 2 semanas. Depende da quantidade de conteúdo que o seu negócio precisa, mas nunca o deixamos à espera sem saber o que está a acontecer.",
    },
    {
      question: "O meu negócio vai aparecer no Google?",
      answer: "Sim. Configuramos o site com as informações certas para que o Google o mostre a quem procura os seus serviços na sua zona. Não garantimos o primeiro lugar de um dia para o outro, mas damos-lhe todas as ferramentas para isso.",
    },
    {
      question: "Quanto custa?",
      answer: "Depende do que o seu negócio precisa. Mas trabalhamos com negócios de todos os tamanhos e temos pacotes pensados para não pesar no bolso. Peça um orçamento — é rápido e sem compromisso.",
    },
    {
      question: "E depois do site estar pronto, ficam disponíveis?",
      answer: "Sempre. Não entregamos o site e desaparecemos. Ficamos disponíveis para ajudas, ajustes e suporte — porque um site é algo que vai crescendo com o seu negócio.",
    },
  ],
  "pt-br": [
    {
      question: "Preciso saber de tecnologia pra ter um site?",
      answer: "Não. A gente cuida de tudo que é técnico. Você só precisa nos contar o seu negócio — e depois aproveitar os clientes que o site vai trazer.",
    },
    {
      question: "O site vai funcionar no celular dos meus clientes?",
      answer: "Sim, e isso é prioridade pra gente. Mais de 80% das pesquisas são feitas pelo celular, então o site é feito pra funcionar direitinho em qualquer tela.",
    },
    {
      question: "Quanto tempo demora pra ficar pronto?",
      answer: "Geralmente de 1 a 2 semanas. A gente te mantém informado durante todo o processo — nada de sumiço ou espera sem resposta.",
    },
    {
      question: "Meu negócio vai aparecer no Google?",
      answer: "Sim. A gente configura o site do jeito certo pra que o Google mostre você pra quem está procurando o que você oferece na sua região.",
    },
    {
      question: "Quanto custa?",
      answer: "Depende do que o seu negócio precisa. Mas trabalhamos com empresas de todos os tamanhos e temos opções que cabem no bolso. Pede um orçamento — é rápido e sem compromisso.",
    },
    {
      question: "E depois que o site ficar pronto, vocês somem?",
      answer: "De jeito nenhum. A gente fica disponível pra ajustes, suporte e melhorias. Um site bom é um site que vai crescendo junto com o seu negócio.",
    },
  ],
  "en": [
    {
      question: "Do I need to know anything about technology?",
      answer: "Not at all. We handle everything technical. Your only job is to tell us about your business — and then enjoy the new customers your website brings in.",
    },
    {
      question: "Will the website work on my customers' phones?",
      answer: "Yes, and it's one of our top priorities. Most searches happen on mobile, so every website we build is designed to work perfectly on any screen.",
    },
    {
      question: "How long does it take to be ready?",
      answer: "Usually 1 to 2 weeks, depending on how much content your business needs. We keep you informed throughout — no waiting in silence.",
    },
    {
      question: "Will my business show up on Google?",
      answer: "Yes. We set up your website so Google understands where you are, what you offer, and who your customers are. We can't promise overnight rankings, but we give you every advantage.",
    },
    {
      question: "How much does it cost?",
      answer: "It depends on what your business needs. We work with businesses of all sizes and have packages that won't break the bank. Ask for a quote — it's quick and free.",
    },
    {
      question: "What happens after the website is live?",
      answer: "We stay with you. We don't just deliver and disappear. We're available for updates, improvements, and support — because a good website grows with your business.",
    },
  ],
  "es": [
    {
      question: "¿Necesito saber de tecnología para tener una web?",
      answer: "Para nada. Nosotros nos encargamos de todo lo técnico. Tú solo tienes que contarnos tu negocio — y después disfrutar de los nuevos clientes que llegan.",
    },
    {
      question: "¿La web funcionará bien en el móvil de mis clientes?",
      answer: "Sí, y es una de nuestras principales prioridades. La mayoría de las búsquedas se hacen desde el móvil, así que cada web que creamos está pensada para funcionar perfectamente en cualquier pantalla.",
    },
    {
      question: "¿Cuánto tiempo tarda en estar lista?",
      answer: "Normalmente entre 1 y 2 semanas. Te mantenemos informado durante todo el proceso — sin desaparecer ni dejarte esperando.",
    },
    {
      question: "¿Mi negocio va a aparecer en Google?",
      answer: "Sí. Configuramos tu web para que Google entienda dónde estás, qué ofreces y a quién. No prometemos el primer puesto de la noche a la mañana, pero te damos todas las ventajas.",
    },
    {
      question: "¿Cuánto cuesta?",
      answer: "Depende de lo que necesite tu negocio. Trabajamos con empresas de todos los tamaños y tenemos opciones que no asustan. Pide presupuesto — es rápido y sin compromiso.",
    },
    {
      question: "¿Y después de entregar la web, desaparecéis?",
      answer: "Para nada. Nos quedamos disponibles para ajustes, mejoras y soporte. Una buena web es una web que crece con tu negocio.",
    },
  ],
};
