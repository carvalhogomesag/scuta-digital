/**
 * SISTEMA DE CORES REFINADO (SCUTA DIGITAL)
 * Estética: Midnight Obsidian (Stealth/Premium)
 * Foco: Contraste máximo e legibilidade em fundos escuros.
 */

export const SCUTA_THEME = {
  // Base: Azul Noite ultra profundo (A fundação da marca)
  primary: "#030712",    // Gray-950/Midnight
  
  // Superfícies: Navy saturado para Glassmorphism e Bento Grids
  surface: "#0a1229",    // Navy Premium (mais profundo que o anterior)
  
  // Destaques: Cores vibrantes para CTAs e estados ativos
  accent: "#7c3aed",     // Violeta Elétrico
  highlight: "#10b981",  // Esmeralda Neon
  
  // Tipografia
  textMain: "#f8fafc",   // Branco Seda
  textMuted: "#cbd5e1",  // Slate-300 para hierarquia secundária
  
  // Auxiliares
  bg: "#030712"          // Padronizado com o primary para evitar flash de cor
};

/**
 * TEMAS BESPOKE PARA OS SAMPLES
 * Cada tema define a alma visual do cliente no portfólio.
 */
export const SAMPLE_THEMES = {
  "prisma-math": { 
    primary: "#1e40af",    // Royal Blue (Autoridade e Confiança)
    secondary: "#f8fafc",  // Branco Seda (Clareza e Limpeza)
    accent: "#22d3ee",     // Cyan Elétrico (Precisão e Tecnologia)
    font: "font-display"   // Tipografia técnica e moderna
  },
  "edu-spark": { 
    primary: "#6366f1", 
    secondary: "#f8fafc", 
    accent: "#f43f5e", 
    font: "font-display" 
  },
  "clinica-vida-mais": { 
    primary: "#0ea5e9", 
    secondary: "#f0f9ff", 
    accent: "#0284c7", 
    font: "font-sans" 
  },
  "renova-home": { 
    primary: "#7f1d1d",    // Bordeaux Luxo
    secondary: "#111827", 
    accent: "#d4af37",     // Dourado Mate
    font: "font-serif"     // Elegância editorial
  },
  "padel-hub": { 
    primary: "#a3e635",    // Volt Green (Energia)
    secondary: "#020617", 
    accent: "#f59e0b", 
    font: "font-black"     // Impacto e Força
  }
};