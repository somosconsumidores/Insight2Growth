import React from 'react';
import ParticleBackground from './components/ParticleBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Founder from './components/Founder';
import Services from './components/Services';
import Process from './components/Process';
import Cases from './components/Cases';
import Contact from './components/Contact';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen font-sans text-white selection:bg-primary selection:text-white">
      {/* Background Effect */}
      <ParticleBackground />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col">
        <Navbar />
        <Hero />
        <About />
        <Founder />
        <Services />
        <Process />
        <Cases />
        <Contact />
        
        <footer className="py-8 text-center text-gray-500 text-sm border-t border-white/5 bg-black/40 backdrop-blur-md">
          <p>© {new Date().getFullYear()} Insight2Growth. Todos os direitos reservados.</p>
          <p className="mt-2">Desenvolvido com Vibe Coding ⚡</p>
        </footer>
      </div>
    </div>
  );
};

export default App;