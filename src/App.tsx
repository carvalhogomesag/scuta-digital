import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyWeb from './components/WhyWeb';
import Solutions from './components/Solutions';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-zinc-900 selection:bg-emerald-100 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <WhyWeb />
        <Solutions />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}