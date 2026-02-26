import { BRAND_INFO, CONTACT_INFO, SOCIAL_LINKS } from '../lib/constants';
import { Instagram, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-20 px-6 bg-scuta-primary noise border-t border-white/5 overflow-hidden">
      {/* Brilho sutil de fundo para profundidade */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-scuta-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-20">
          
          {/* COLUNA 1: Branding e Identidade */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-scuta-silk rounded-xl flex items-center justify-center shadow-xl">
                <span className="text-scuta-primary font-black text-xl leading-none">S</span>
              </div>
              <span className="font-black text-2xl tracking-tighter text-scuta-silk leading-none">
                {BRAND_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-8">
              Transformamos negócios em referências digitais através de design de alta performance e estratégia focada em conversão.
            </p>
            {/* Redes Sociais */}
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-scuta-accent hover:text-white hover:border-scuta-accent transition-all duration-300">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-scuta-accent hover:text-white hover:border-scuta-accent transition-all duration-300">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* COLUNA 2: Links Rápidos */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-scuta-highlight mb-8">Navegação</h4>
            <ul className="space-y-4">
              {['Portfólio', 'O que fazemos', 'Processo', 'Dúvidas'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-bold text-slate-400 hover:text-scuta-silk transition-colors flex items-center gap-2 group">
                    <div className="w-1 h-1 bg-scuta-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: Legal Portugal (Obrigatório e Profissional) */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-scuta-highlight mb-8">Legal & Transparência</h4>
            <div className="space-y-6">
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/20 transition-all group"
              >
                <div className="w-10 h-10 bg-scuta-silk/10 rounded-xl flex items-center justify-center text-scuta-silk">
                  <ShieldCheck size={20} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-scuta-silk">Livro de Reclamações</p>
                  <p className="text-[9px] font-bold text-slate-600">Acesso ao formato eletrónico</p>
                </div>
                <ExternalLink size={14} className="ml-auto text-slate-700" />
              </a>
              
              <div className="text-left px-1">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  Scuta Digital Unipessoal Lda. <br />
                  NIF: 123 456 789 — Portugal <br />
                  Entidade de Resolução de Litígios (RAL)
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* BARRA FINAL: Copyright e Micro-links */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {BRAND_INFO.name}. Desenhado para Performance Absoluta.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-scuta-highlight transition-colors">Privacidade</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-scuta-highlight transition-colors">Termos</a>
            <a href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-scuta-highlight transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}