import React from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AIChat } from './components/AIChat';
import { NavigationProvider, useNavigation } from './contexts/NavigationContext';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { ServicesPage } from './pages/ServicesPage';
import { Gallery } from './pages/Gallery';
import { FAQ } from './pages/FAQ';
import { ContactPage } from './pages/ContactPage';

const MainContent: React.FC = () => {
  const { currentPage } = useNavigation();

  return (
    <main className="min-h-screen">
      {currentPage === 'home' && <Home />}
      {currentPage === 'about' && <About />}
      {currentPage === 'services' && <ServicesPage />}
      {currentPage === 'gallery' && <Gallery />}
      {currentPage === 'faq' && <FAQ />}
      {currentPage === 'contact' && <ContactPage />}
    </main>
  );
};

function App() {
  return (
    <NavigationProvider>
      <div className="font-sans text-gray-900 bg-white antialiased">
        <Header />
        <MainContent />
        <Footer />
        <AIChat />
      </div>
    </NavigationProvider>
  );
}

export default App;