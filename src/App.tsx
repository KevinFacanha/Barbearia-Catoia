import React, { useState, useEffect } from 'react';
import { Menu, Phone, MapPin, Instagram, BookText as TikTok, Scissors, Rat as Razor, SprayCan, X } from 'lucide-react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleBooking = () => {
    window.open('https://wa.me/5511993638326?text=Salve! Quero marcar um corte. Tem horário disponível?', '_blank');
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMobileNavClick = (sectionId: string) => {
    closeMobileMenu();
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-dark-900 text-accent-white font-sans">
      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-dark-900/98 z-50 transform transition-transform duration-300 ${
        isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
      } md:hidden`}>
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-between items-center mb-12">
            <h1 className="font-gothic text-2xl text-accent-gold">
              Catoia do Corte
            </h1>
            <button onClick={closeMobileMenu} className="text-accent-white hover:text-accent-gold transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-8 text-center">
            <button onClick={() => handleMobileNavClick('home')} 
              className="text-lg tracking-wider hover:text-accent-gold transition-colors py-2">
              INÍCIO
            </button>
            <button onClick={() => handleMobileNavClick('services')}
              className="text-lg tracking-wider hover:text-accent-gold transition-colors py-2">
              SERVIÇOS
            </button>
            <button onClick={() => handleMobileNavClick('about')}
              className="text-lg tracking-wider hover:text-accent-gold transition-colors py-2">
              SOBRE
            </button>
            <button onClick={() => handleMobileNavClick('contact')}
              className="text-lg tracking-wider hover:text-accent-gold transition-colors py-2">
              CONTATO
            </button>
          </nav>
        </div>
      </div>

      {/* Header */}
      <header className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-dark-900/95 backdrop-blur-sm py-4' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <h1 className="font-gothic text-2xl text-accent-gold">
            Catoia do Corte
          </h1>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="text-sm tracking-wider hover:text-accent-gold transition-colors">INÍCIO</a>
            <a href="#services" className="text-sm tracking-wider hover:text-accent-gold transition-colors">SERVIÇOS</a>
            <a href="#about" className="text-sm tracking-wider hover:text-accent-gold transition-colors">SOBRE</a>
            <a href="#contact" className="text-sm tracking-wider hover:text-accent-gold transition-colors">CONTATO</a>
          </nav>
          <button 
            onClick={() => setIsMobileMenuOpen(true)} 
            className="md:hidden text-accent-white hover:text-accent-gold transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-dark-900">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-25 mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-dark-900 via-transparent to-dark-900"></div>
        </div>
        <div className="relative px-6 max-w-4xl mx-auto text-center">
          <h2 className="font-gothic text-5xl md:text-7xl mb-6 leading-tight">
            <span className="block text-accent-gold">Arte & Precisão</span>
            <span className="block text-accent-white">em Cada Corte</span>
          </h2>
          <p className="text-lg md:text-xl mb-10 text-accent-white/80">
            Onde estilo encontra autenticidade
          </p>
          <button
            onClick={handleBooking}
            className="bg-dark-800 text-accent-gold border-2 border-accent-gold px-8 py-4 rounded-none hover:bg-accent-gold hover:text-dark-900 transition-all duration-300 tracking-wider font-bold"
          >
            CHAMA NO WHATS!
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6 bg-dark-800 relative">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="max-w-7xl mx-auto relative">
          <h3 className="font-gothic text-3xl md:text-4xl text-center mb-16 text-accent-gold">
            Nossos Serviços
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Scissors,
                title: "Corte Clássico",
                desc: "Técnica refinada com acabamento impecável"
              },
              {
                icon: Razor,
                title: "Barba Premium",
                desc: "Modelagem e hidratação completa"
              },
              {
                icon: SprayCan,
                title: "Design & Pigmentação",
                desc: "Arte personalizada no seu estilo"
              }
            ].map((service, index) => (
              <div key={index} className="group">
                <div className="bg-dark-900 p-8 border border-accent-gold/20 hover:border-accent-gold transition-all duration-300">
                  <service.icon className="w-12 h-12 mb-6 text-accent-gold" />
                  <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                  <p className="text-accent-white/60">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 bg-dark-900 relative">
        <div className="absolute inset-0 bg-texture opacity-5"></div>
        <div className="max-w-3xl mx-auto text-center relative">
          <h3 className="font-gothic text-3xl md:text-4xl mb-8 text-accent-gold">
            Nossa História
          </h3>
          <p className="text-accent-white/80 leading-relaxed">
            Nascido e criado na quebrada, transformei minha paixão pelos cortes em arte. 
            Desde 2018, venho fazendo história com um trampo diferenciado, onde cada corte 
            não é só um estilo, mas uma marca pessoal. Aqui não é só uma barbearia, é um 
            espaço onde cada corte conta uma história e expressa a personalidade única de 
            cada cliente. Se liga no trampo e vem fazer parte dessa caminhada!
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-dark-800 py-16 px-6 relative">
        <div className="absolute inset-0 bg-texture opacity-10"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 relative">
          <div>
            <h4 className="font-gothic text-xl mb-6 text-accent-gold">Contato</h4>
            <div className="flex items-center gap-3 mb-4">
              <Phone className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-white/80">(11) 99363-8326</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-accent-gold" />
              <span className="text-accent-white/80">
                Rua Agnes Fontoura, 11<br />
                São Paulo, SP
              </span>
            </div>
          </div>
          <div>
            <h4 className="font-gothic text-xl mb-6 text-accent-gold">Social</h4>
            <div className="flex gap-4">
              <a href="#" className="text-accent-white/80 hover:text-accent-gold transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-accent-white/80 hover:text-accent-gold transition-colors">
                <TikTok className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-gothic text-xl mb-6 text-accent-gold">Horário</h4>
            <p className="text-accent-white/80">
              Segunda à Sábado<br />
              09:00 - 20:00
            </p>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-accent-gold/20 text-center">
          <p className="text-accent-white/60 text-sm">
            © 2024 Catoia do Corte. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;