import { BRAND_INFO, SOCIAL_LINKS, UI_STRINGS, Language } from '../lib/constants';
import { Instagram, Linkedin, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer({ lang }: { lang: Language }) {
  const t = UI_STRINGS[lang].footer;

  return (
    <footer className="relative py-24 px-6 bg-scuta-primary border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
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
              {t.tagline}
            </p>
            <div className="flex gap-4">
              <a href={SOCIAL_LINKS.instagram} className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-scuta-accent hover:text-white transition-all">
                <Instagram size={20} />
              </a>
              <a href={SOCIAL_LINKS.linkedin} className="size-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-scuta-accent hover:text-white transition-all">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div className="md:col-span-3 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-scuta-highlight mb-10">{t.sections.company.title}</h4>
            <ul className="space-y-6">
              {t.sections.company.links.map((link, i) => (
                <li key={i}>
                  <a href="#" className="text-sm font-bold text-slate-400 hover:text-scuta-silk transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 text-left">
            <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-scuta-highlight mb-10">{t.sections.services.title}</h4>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/5 border border-white/5">
                <div className="size-14 bg-scuta-silk/10 rounded-2xl flex items-center justify-center text-scuta-silk shrink-0">
                  <ShieldCheck size={24} />
                </div>
                <div className="text-left">
                  <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">Livro de Reclamações</p>
                  <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">Acesso ao formato eletrónico</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            © {new Date().getFullYear()} {BRAND_INFO.name}. {t.rights}
          </p>
          <div className="flex gap-8">
            <Link to="/privacidade" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">{t.legal.privacy}</Link>
            <Link to="/termos" className="text-slate-600 hover:text-white text-[10px] font-bold uppercase tracking-widest transition-colors">{t.legal.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
