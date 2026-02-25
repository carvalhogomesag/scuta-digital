import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyWeb from './components/WhyWeb';
import Solutions from './components/Solutions';
import Samples from './components/Samples';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Importação da página de detalhes
import SampleSitePage from './pages/SampleSitePage';

/**
 * Componente Auxiliar: Garante que a página volta ao topo 
 * sempre que mudamos de rota.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * PÁGINA INICIAL (HOME)
 * Agora o Menu, Footer e Botão do WhatsApp vivem AQUI.
 * Assim, eles não invadem as páginas de demonstração dos clientes.
 */
function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <WhyWeb />
      <Solutions />
      <Samples /> 
      <FAQ />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-black selection:text-white">
      <ScrollToTop />

      <main>
        <Routes>
          {/* Rota Raiz: Mostra a Landing Page da Agência com o seu menu */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rota Dinâmica: Mostra APENAS a barra de controlo e o site do cliente */}
          <Route path="/exemplos/:slug" element={<SampleSitePage />} />
        </Routes>
      </main>
    </div>
  );
}