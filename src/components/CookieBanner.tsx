/**
 * CookieBanner.tsx — Scuta Digital
 * Conformidade: RGPD (UE/Portugal), LGPD (Brasil), UK GDPR
 * Google Analytics só corre APÓS consentimento explícito do utilizador.
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Cookie, ShieldCheck, BarChart2, ChevronDown, ChevronUp } from 'lucide-react';
import { Language } from '../lib/constants';

// --- Substitua pelo seu Measurement ID do Google Analytics ---
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const STRINGS = {
  'pt-pt': {
    title: 'Utilizamos cookies',
    description: 'Usamos cookies para melhorar a sua experiência e analisar o tráfego do site (Google Analytics). Pode escolher quais aceita.',
    acceptAll: 'Aceitar todos',
    essentialOnly: 'Só essenciais',
    manage: 'Gerir preferências',
    save: 'Guardar preferências',
    essential: { title: 'Cookies essenciais', description: 'Necessários para o funcionamento básico do site. Não podem ser desativados.', always: 'Sempre ativos' },
    analytics: { title: 'Cookies de análise', description: 'Google Analytics — permitem-nos perceber como os visitantes usam o site. Não são usados para publicidade.' },
    privacy: 'Política de Privacidade',
    badge: 'Os seus dados, as suas escolhas.',
  },
  'pt-br': {
    title: 'Usamos cookies',
    description: 'Usamos cookies para melhorar sua experiência e analisar o tráfego do site (Google Analytics). Você pode escolher quais aceita.',
    acceptAll: 'Aceitar todos',
    essentialOnly: 'Só essenciais',
    manage: 'Gerenciar preferências',
    save: 'Salvar preferências',
    essential: { title: 'Cookies essenciais', description: 'Necessários para o funcionamento básico do site. Não podem ser desativados.', always: 'Sempre ativos' },
    analytics: { title: 'Cookies de análise', description: 'Google Analytics — nos permitem entender como os visitantes usam o site. Não são usados para publicidade.' },
    privacy: 'Política de Privacidade',
    badge: 'Seus dados, suas escolhas.',
  },
  'en': {
    title: 'We use cookies',
    description: 'We use cookies to improve your experience and analyse site traffic (Google Analytics). You can choose which ones you accept.',
    acceptAll: 'Accept all',
    essentialOnly: 'Essential only',
    manage: 'Manage preferences',
    save: 'Save preferences',
    essential: { title: 'Essential cookies', description: 'Required for the site to function. These cannot be disabled.', always: 'Always active' },
    analytics: { title: 'Analytics cookies', description: 'Google Analytics — help us understand how visitors use the site. Not used for advertising.' },
    privacy: 'Privacy Policy',
    badge: 'Your data, your choices.',
  },
  'es': {
    title: 'Usamos cookies',
    description: 'Usamos cookies para mejorar tu experiencia y analizar el tráfico del sitio (Google Analytics). Puedes elegir cuáles aceptas.',
    acceptAll: 'Aceptar todos',
    essentialOnly: 'Solo esenciales',
    manage: 'Gestionar preferencias',
    save: 'Guardar preferencias',
    essential: { title: 'Cookies esenciales', description: 'Necesarios para el funcionamiento básico del sitio. No se pueden desactivar.', always: 'Siempre activos' },
    analytics: { title: 'Cookies de análisis', description: 'Google Analytics — nos ayudan a entender cómo los visitantes usan el sitio. No se usan para publicidad.' },
    privacy: 'Política de Privacidad',
    badge: 'Tus datos, tus elecciones.',
  },
};

// --- Declaração correcta do tipo Window para evitar ts(2352) ---
declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

function loadGoogleAnalytics() {
  if (document.getElementById('ga-script')) return;

  const script = document.createElement('script');
  script.id = 'ga-script';
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  window.gtag = function (...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag('js', new Date());
  window.gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, storage: 'granted' });
}

function disableGoogleAnalytics() {
  // Usa a chave tipada correctamente via declaração de interface acima
  window[`ga-disable-${GA_MEASUREMENT_ID}`] = true;
}

type ConsentState = 'pending' | 'accepted' | 'essential' | 'custom';
interface Preferences { analytics: boolean }

export default function CookieBanner({ lang }: { lang: Language }) {
  const t = STRINGS[lang] ?? STRINGS['pt-pt'];
  const [consent, setConsent] = useState<ConsentState>('pending');
  const [showDetails, setShowDetails] = useState(false);
  const [prefs, setPrefs] = useState<Preferences>({ analytics: false });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem('scuta_cookie_consent');
      if (saved) {
        const parsed = JSON.parse(saved) as { state: ConsentState; prefs: Preferences };
        setConsent(parsed.state);
        if (parsed.prefs.analytics) loadGoogleAnalytics();
        else disableGoogleAnalytics();
      } else {
        const timer = setTimeout(() => setVisible(true), 1000);
        return () => clearTimeout(timer);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function saveConsent(state: ConsentState, analytics: boolean) {
    const data = { state, prefs: { analytics }, date: new Date().toISOString() };
    localStorage.setItem('scuta_cookie_consent', JSON.stringify(data));
    setConsent(state);
    setVisible(false);
    if (analytics) loadGoogleAnalytics();
    else disableGoogleAnalytics();
  }

  if (consent !== 'pending') return null;

  return (
    <AnimatePresence>
      {visible && (
        <>
          {showDetails && (
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-998 backdrop-blur-sm"
            />
          )}

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 80 }}
            transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
            className="fixed bottom-0 left-0 right-0 z-999 p-4 md:p-6"
          >
            <div className="max-w-4xl mx-auto bg-scuta-surface border border-white/10 rounded-3xl shadow-2xl overflow-hidden">

              <div className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-scuta-highlight/10 border border-scuta-highlight/20 flex items-center justify-center shrink-0">
                    <Cookie size={20} className="text-scuta-highlight" />
                  </div>
                  <div>
                    <h3 className="text-scuta-silk font-black text-lg tracking-tight">{t.title}</h3>
                    <p className="text-[10px] font-black uppercase tracking-widest text-scuta-highlight">{t.badge}</p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 font-medium">
                  {t.description}{' '}
                  <a href="/privacidade" className="text-scuta-highlight underline hover:no-underline">{t.privacy}</a>.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={() => saveConsent('accepted', true)}
                    className="flex-1 py-3 px-6 bg-scuta-highlight text-scuta-primary font-black text-sm uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all active:scale-95"
                  >
                    {t.acceptAll}
                  </button>
                  <button
                    onClick={() => saveConsent('essential', false)}
                    className="flex-1 py-3 px-6 bg-white/5 border border-white/10 text-slate-300 font-black text-sm uppercase tracking-widest rounded-2xl hover:bg-white/10 transition-all active:scale-95"
                  >
                    {t.essentialOnly}
                  </button>
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="flex items-center justify-center gap-2 py-3 px-6 text-slate-500 font-bold text-xs uppercase tracking-widest rounded-2xl hover:text-slate-300 transition-all"
                  >
                    {t.manage}
                    {showDetails ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                  </button>
                </div>
              </div>

              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                    className="overflow-hidden border-t border-white/5"
                  >
                    <div className="p-6 md:p-8 space-y-4">

                      {/* Essenciais — sempre activos */}
                      <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-start gap-3">
                          <ShieldCheck size={18} className="text-slate-500 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <p className="text-scuta-silk font-bold text-sm">{t.essential.title}</p>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{t.essential.description}</p>
                          </div>
                        </div>
                        <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 shrink-0 mt-1">{t.essential.always}</span>
                      </div>

                      {/* Analytics — toggle */}
                      <div className="flex items-start justify-between gap-4 p-4 rounded-2xl bg-white/[0.03] border border-white/5">
                        <div className="flex items-start gap-3">
                          <BarChart2 size={18} className="text-slate-500 mt-0.5 shrink-0" />
                          <div className="text-left">
                            <p className="text-scuta-silk font-bold text-sm">{t.analytics.title}</p>
                            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{t.analytics.description}</p>
                          </div>
                        </div>
                        <button
                          role="switch"
                          aria-checked={prefs.analytics}
                          onClick={() => setPrefs(p => ({ ...p, analytics: !p.analytics }))}
                          className={`relative shrink-0 mt-0.5 w-11 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-scuta-highlight/50 ${prefs.analytics ? 'bg-scuta-highlight' : 'bg-white/10'}`}
                        >
                          <span className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform duration-300 ${prefs.analytics ? 'translate-x-5' : 'translate-x-0'}`} />
                        </button>
                      </div>

                      <button
                        onClick={() => saveConsent('custom', prefs.analytics)}
                        className="w-full py-3 bg-scuta-accent text-white font-black text-sm uppercase tracking-widest rounded-2xl hover:brightness-110 transition-all active:scale-95"
                      >
                        {t.save}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}