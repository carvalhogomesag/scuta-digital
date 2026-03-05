import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Solutions from './components/Solutions';
import Samples from './components/Samples';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import SampleSitePage from './pages/SampleSitePage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import { Language } from './lib/constants';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function HomePage({ lang, setLang }: { lang: Language; setLang: (l: Language) => void }) {
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <Solutions lang={lang} />
      <Process lang={lang} />
      <Testimonials lang={lang} />
      <Samples lang={lang} />
      <FAQ lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  const [lang, setLang] = useState<Language>("pt-pt");

  return (
    <div className="min-h-screen bg-scuta-primary font-sans text-scuta-silk selection:bg-scuta-highlight selection:text-scuta-primary">
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
          <Route path="/exemplos/:slug" element={<SampleSitePage lang={lang} setLang={setLang} />} />
          <Route path="/privacidade" element={<PrivacyPolicy lang={lang} setLang={setLang} />} />
          <Route path="/termos" element={<TermsOfService lang={lang} setLang={setLang} />} />
        </Routes>
      </main>
    </div>
  );
}
