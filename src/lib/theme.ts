/**
 * SISTEMA DE CORES REFINADO (SCUTA DIGITAL)
 * Estética: Midnight Obsidian (Stealth/Premium)
 * Foco: Contraste máximo e legibilidade em fundos escuros.
 */

export const SCUTA_THEME = {
  // Base: Azul Noite ultra profundo (A fundação da marca)
  primary: "#030712",    // Gray-950/Midnight
  
  // Superfícies: Navy saturado para Glassmorphism e Bento Grids
  surface: "#0a1229",    // Navy Premium
  
  // Destaques: Cores vibrantes para CTAs e estados ativos
  accent: "#7c3aed",     // Violeta Elétrico
  highlight: "#10b981",  // Esmeralda Neon
  
  // Tipografia
  textMain: "#f8fafc",   // Branco Seda
  textMuted: "#cbd5e1",  // Slate-300 para hierarquia secundária
  
  // Auxiliares
  bg: "#030712"          
};

/**
 * TEMAS BESPOKE PARA OS SAMPLES
 * Mapeamento robusto para evitar erros de 'undefined' no render.
 */
export const SAMPLE_THEMES = {
  // 1. PRISMA MATEMÁTICA
  "prisma-math": { 
    primary: "#1e40af", 
    secondary: "#f8fafc", 
    accent: "#22d3ee", 
    font: "font-display" 
  },

  // 2. EDUSPARK (Antiga 'loja-bairro')
  "edu-spark": { 
    primary: "#6366f1", 
    secondary: "#f8fafc", 
    accent: "#f43f5e", 
    font: "font-display" 
  },
  "loja-bairro": { // Mantido para compatibilidade com dados antigos
    primary: "#6366f1", 
    secondary: "#f8fafc", 
    accent: "#f43f5e", 
    font: "font-display" 
  },

  // 3. CLÍNICA VIDA+ (Vitalis)
  "clinica-vida-mais": { 
    primary: "#0ea5e9", 
    secondary: "#f0f9ff", 
    accent: "#0284c7", 
    font: "font-sans" 
  },

  // 4. RENOVA (Antiga 'assistencia-24h')
  "renova-home": { 
    primary: "#7f1d1d", 
    secondary: "#111827", 
    accent: "#d4af37", 
    font: "font-serif" 
  },
  "assistencia-24h": { // Mantido para compatibilidade com dados antigos
    primary: "#7f1d1d", 
    secondary: "#111827", 
    accent: "#d4af37", 
    font: "font-serif" 
  },

  // 5. PADEL PRO HUB
  "padel-hub": { 
    primary: "#a3e635", 
    secondary: "#020617", 
    accent: "#f59e0b", 
    font: "font-black" 
  },
  "padel-pro-hub": { // Aliasing para evitar crash se o slug for usado como chave
    primary: "#a3e635", 
    secondary: "#020617", 
    accent: "#f59e0b", 
    font: "font-black" 
  }
};