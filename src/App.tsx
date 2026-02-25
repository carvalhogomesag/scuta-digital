import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyWeb from './components/WhyWeb';
import Solutions from './components/Solutions';
import Samples from './components/Samples'; // Importado conforme a nova estrutura estratégica
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-black selection:text-white">
      {/* 1. Navegação fixa sempre visível para facilitar o contacto */}
      <Navbar />
      
      <main>
        {/* 2. Impacto Inicial: Focado na dor de depender do passa-palavra */}
        <Hero />
        
        {/* 3. Consciência: Porquê o negócio precisa de um site profissional */}
        <WhyWeb />
        
        {/* 4. Entrega: O que a Scuta Digital faz na prática */}
        <Solutions />
        
        {/* 5. Prova Social (UAU): Exemplos reais de dores resolvidas */}
        <Samples /> 
        
        {/* 6. Segurança: Esclarecimento de dúvidas para remover barreiras de compra */}
        <FAQ />
        
        {/* 7. Fecho: Convite direto para orçamento via WhatsApp */}
        <Contact />
      </main>

      {/* 8. Rodapé: Links legais e informações de contacto */}
      <Footer />
      
      {/* Botão Flutuante de WhatsApp: O canal de conversão mais rápido em Portugal */}
      <WhatsAppButton />
    </div>
  );
}