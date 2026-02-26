/**
 * FONTE DA VERDADE ABSOLUTA - SCUTA DIGITAL
 * Centralização de dados críticos focada em conversão e clareza para o cliente.
 */

export type Language = "pt"; // Focado no mercado de Portugal

export const BRAND_INFO = {
  name: "Scuta Digital",
  tagline: "Criamos o seu site. Você recebe os clientes.",
  url: "https://scuta-digital.netlify.app/", 
};

export const CONTACT_INFO = {
  phone: "+351 914 044 748",
  phoneRaw: "351914044748",
  email: "contacto@scutadigital.pt",
  location: "Portugal · Atendimento em todo o país",
  whatsappMessage: "Olá! Gostaria de saber como um site pode ajudar o meu negócio a atrair mais clientes.",
};

export const SOCIAL_LINKS = {
  instagram: "https://instagram.com/scutadigital",
  linkedin: "https://linkedin.com/company/scutadigital",
};

export const SEO_DEFAULTS = {
  title: "Scuta Digital | Sites que trazem Clientes e Vendas em Portugal",
  description: "Criação de sites profissionais em Portugal. Apareça no Google, facilite agendamentos e venda mais com um site feito para o seu negócio.",
};

export const UI_STRINGS = {
  pt: {
    navbar: {
      why: "Porquê ter um site?",
      solutions: "O que fazemos",
      samples: "Exemplos",
      faq: "Dúvidas frequentes",
      contact: "Pedir orçamento",
    },
    hero: {
      title: "Pare de depender apenas do passa-palavra.",
      subtitle: "Criamos sites profissionais que funcionam como o seu melhor funcionário: apresentam o seu negócio, tiram dúvidas e trazem contactos 24h por dia.",
      cta: "Quero atrair mais clientes",
      secondaryCta: "Ver exemplos",
    },
    why: {
      title: "Porquê investir num site hoje?",
      reason1: {
        title: "Apareça no Google",
        desc: "Se alguém procura pelo seu serviço no Google e não o encontra, está a perder dinheiro para a concorrência."
      },
      reason2: {
        title: "Poupe tempo no WhatsApp",
        desc: "O site tira as dúvidas repetidas por si, para que só receba mensagens de quem realmente quer comprar."
      },
      reason3: {
        title: "Confiança imediata",
        desc: "Um negócio com site oficial passa muito mais segurança do que um que usa apenas redes sociais."
      }
    },
    solutions: {
      title: "Tudo o que precisa para crescer online",
      item1: "Sites que funcionam bem no telemóvel e computador.",
      item2: "Textos escritos para convencer o seu cliente a ligar.",
      item3: "Configuração para ser encontrado na sua zona (Google).",
      item4: "Suporte e manutenção: nós tratamos de tudo por si.",
    },
    contact: {
      title: "Pronto para o próximo passo?",
      subtitle: "Diga-nos o que faz e nós explicamos como um site pode aumentar as suas vendas.",
      button: "Enviar mensagem via WhatsApp",
    }
  }
};

/**
 * SEÇÃO OBRIGATÓRIA: SITES DE AMOSTRA
 * Foco em dores reais de negócios portugueses.
 */
export const SAMPLE_CASES = [
  {
    id: "sample-1",
    business: "Restaurante Local",
    pain: "As mesas estavam vazias e o telefone não tocava.",
    solution: "Site com menu online, fotos profissionais e botão de reserva rápida.",
    result: "O restaurante passou a receber reservas automáticas todas as noites via WhatsApp."
  },
  {
    id: "sample-2",
    business: "Clínica de Estética",
    pain: "Perdiam horas a explicar preços e tratamentos no Instagram.",
    solution: "Página com explicação detalhada de cada serviço e dúvidas frequentes.",
    result: "Menos mensagens inúteis e mais clientes que já chegam prontas para pagar."
  },
  {
    id: "sample-3",
    business: "Serviço de Urgência (Picheleiro/Canalizador)",
    pain: "Ninguém os encontrava nas pesquisas rápidas por 'emergência'.",
    solution: "Site focado em aparecer no topo do Google quando alguém pesquisa na zona.",
    result: "Passaram a ser a primeira opção da cidade em situações de urgência."
  }
];

/**
 * FAQ ALINHADA AO JSON-LD
 * Linguagem extremamente simples para o público geral.
 */
export const FAQ_ITEMS = [
  {
    question: "Preciso de saber de informática para ter um site?",
    answer: "Não. Nós tratamos de toda a parte técnica. O seu único trabalho será receber os contactos dos novos clientes."
  },
  {
    question: "O meu site vai funcionar no telemóvel?",
    answer: "Sim. Hoje em dia quase todos os clientes usam o telemóvel. O seu site será rápido e fácil de ler em qualquer ecrã."
  },
  {
    question: "Quanto tempo demora até o site estar pronto?",
    answer: "Normalmente, entre 1 a 2 semanas, dependendo do que o seu negócio precisa."
  },
  {
    question: "O meu negócio vai aparecer no Google?",
    answer: "Sim. Configuramos o site com as informações certas para que o Google o mostre a quem procura pelos seus serviços na sua região."
  }
];