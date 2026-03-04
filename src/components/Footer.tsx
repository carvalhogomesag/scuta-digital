import { BRAND_INFO, CONTACT_INFO, SOCIAL_LINKS } from '../lib/constants';
import { Instagram, Linkedin, ExternalLink, ShieldCheck } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-24 px-6 bg-scuta-primary noise border-t border-white/5 overflow-hidden">
      {/* Gradiente de ancoragem no topo para transição suave do Midnight Obsidian */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-white/10 to-transparent" />
      
      {/* Brilho sutil de fundo para profundidade */}
      <div className="absolute top-0 right-0 size-80 bg-scuta-accent/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* COLUNA 1: Branding */}
          <div className="md:col-span-5 text-left">
            <div className="flex items-center gap-4 mb-8">
              <div className="size-12 bg-scuta-silk rounded-2xl flex items-center justify-center shadow-2xl">
                <span className="text-scuta-primary font-black text-2xl leading-none">S</span>
              </div>
              <span className="font-black text-3xl tracking-tighter text-scuta-silk leading-none">
                {BRAND_INFO.name}
              </span>
            </div>
            <p className="text-slate-400 text-lg font-medium leading-relaxed max-w-sm mb-10">
              Transformamos negócios em referências digitais através de design de alta performance e estratégia focada em conversão.
            </p>
            
            <div className="flex gap-4">
              {[SOCIAL_LINKS.instagram, SOCIAL_LINKS.linkedin].map((link, i) => (
                <a 
                  key={i} 
                  href={link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-scuta-accent hover:text-white hover:border-scuta-accent transition-all duration-300"
                >
                  {i === 0 ? <Instagram size={20} /> : <Linkedin size={20} />}
                </a>
              ))}
            </div>
          </div>

          {/* COLUNA 2: Links */}
          <div className="md:col-span-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-scuta-highlight mb-10">Navegação</h4>
            <ul className="space-y-6">
              {['Portfólio', 'O que fazemos', 'Processo', 'Dúvidas'].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-bold text-slate-400 hover:text-scuta-silk transition-colors flex items-center gap-3 group">
                    <div className="size-1.5 bg-scuta-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUNA 3: Legal Portugal */}
          <div className="md:col-span-4 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-scuta-highlight mb-10">Legal & Transparência</h4>
            <div className="space-y-6">
              <a 
                href="https://www.livroreclamacoes.pt" 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
              >
                <div className="size-14 bg-scuta-silk/10 rounded-2xl flex items-center justify-center text-scuta-silk shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 group-hover:text-scuta-silk">Livro de Reclamações</p>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Acesso ao formato eletrónico</p>
                </div>
                <ExternalLink size={16} className="ml-auto text-slate-600" />
              </a>
              
              <div className="text-left px-2">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest leading-relaxed">
                  Scuta Digital Unipessoal Lda. <br />
                  NIF: 123 456 789 — Portugal <br />
                  Entidade de Resolução de Litígios (RAL)
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* BARRA FINAL */}
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {BRAND_INFO.name}. Desenhado para Performance Absoluta.
          </p>
          <div className="flex gap-10">
            {['Privacidade', 'Termos', 'Cookies'].map((item) => (
              <a key={item} href="#" className="text-[10px] font-black uppercase tracking-widest text-slate-600 hover:text-scuta-highlight transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}