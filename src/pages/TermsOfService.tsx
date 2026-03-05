import { motion } from 'motion/react';
import { Language, UI_STRINGS } from '../lib/constants';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function TermsOfService({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  const t = UI_STRINGS[lang].legalPages.terms;

  return (
    <div className="min-h-screen bg-scuta-primary">
      <Navbar lang={lang} setLang={setLang} />
      
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-scuta-silk mb-4 tracking-tighter">
              {t.title}
            </h1>
            <p className="text-scuta-silk/50 mb-12 font-mono text-sm">
              {t.lastUpdated}
            </p>

            <div className="space-y-12">
              {t.sections.map((section, index) => (
                <section key={index} className="space-y-4">
                  <h2 className="text-2xl font-bold text-scuta-highlight">
                    {section.title}
                  </h2>
                  <p className="text-scuta-silk/70 leading-relaxed text-lg">
                    {section.content}
                  </p>
                </section>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer lang={lang} />
    </div>
  );
}
