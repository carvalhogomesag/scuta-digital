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

// Importação da nova página de detalhes
import SampleSitePage from './pages/SampleSitePage';

/**
 * Componente Auxiliar: UX de Navegação
 * Garante que a página volta ao topo sempre que mudamos de página.
 * Sem isto, se clicares num link no fundo da página, a página nova abre no fundo.
 */
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

/**
 * Página Inicial (Home)
 * Agrupa as secções que compõem a Landing Page principal.
 */
function HomePage() {
  return (
    <>
      <Hero />
      <WhyWeb />
      <Solutions />
      <Samples /> 
      <FAQ />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-black selection:text-white">
      {/* Helper para resetar o scroll em cada navegação */}
      <ScrollToTop />

      {/* 1. Navegação (Fixa no topo em todo o site) */}
      <Navbar />
      
      <main>
        <Routes>
          {/* Rota Raiz: Mostra a Landing Page completa */}
          <Route path="/" element={<HomePage />} />
          
          {/* Rota Dinâmica: Mostra o Estudo de Caso baseado no slug (ex: loja-bairro) */}
          <Route path="/exemplos/:slug" element={<SampleSitePage />} />
        </Routes>
      </main>

      {/* 2. Elementos Globais (Aparecem em todas as rotas) */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}