import React, { useState, useEffect } from 'react';
import { Sprout, Menu, X } from 'lucide-react';
import { useNavigation, Page } from '../contexts/NavigationContext';

export const Header: React.FC = () => {
  const { currentPage, navigateTo } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { name: string; page: Page }[] = [
    { name: 'Home', page: 'home' },
    { name: 'About', page: 'about' },
    { name: 'Services', page: 'services' },
    { name: 'Gallery', page: 'gallery' },
    { name: 'FAQ', page: 'faq' },
    { name: 'Contact', page: 'contact' },
  ];

  const handleNavClick = (page: Page) => {
    navigateTo(page);
    setIsMobileMenuOpen(false);
  };

  // Logic: Header is transparent only on Home page when not scrolled and menu is closed.
  // On all other pages, or when scrolled, or when menu is open, it is solid white.
  const isHome = currentPage === 'home';
  const useSolidHeader = isScrolled || isMobileMenuOpen || !isHome;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        useSolidHeader ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* Logo */}
        <button onClick={() => handleNavClick('home')} className="flex items-center gap-2 group">
          <div className={`p-2 rounded-lg transition-colors ${useSolidHeader ? 'bg-forest-100' : 'bg-white/20 backdrop-blur-sm'}`}>
            <Sprout className={`${useSolidHeader ? 'text-forest-600' : 'text-white'}`} size={24} />
          </div>
          <span className={`text-2xl font-serif font-bold ${useSolidHeader ? 'text-gray-900' : 'text-white'}`}>
            Canopy Care
          </span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.page)}
              className={`text-sm font-medium transition-colors ${
                currentPage === link.page 
                  ? 'text-forest-600 font-bold' 
                  : useSolidHeader ? 'text-gray-700 hover:text-forest-500' : 'text-white/90 hover:text-white'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all ${
              useSolidHeader 
                ? 'bg-forest-600 text-white hover:bg-forest-700' 
                : 'bg-white text-forest-800 hover:bg-forest-50'
            }`}
          >
            Get a Quote
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="text-gray-900" size={28} />
          ) : (
            <Menu className={useSolidHeader ? 'text-gray-900' : 'text-white'} size={28} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl p-6 md:hidden flex flex-col gap-4 animate-in slide-in-from-top-5 duration-200 h-screen">
          {navLinks.map((link) => (
            <button 
              key={link.name} 
              onClick={() => handleNavClick(link.page)}
              className={`text-lg font-medium text-left py-4 border-b border-gray-50 ${
                currentPage === link.page ? 'text-forest-600' : 'text-gray-800'
              }`}
            >
              {link.name}
            </button>
          ))}
          <button 
            onClick={() => handleNavClick('contact')}
            className="mt-4 w-full text-center py-4 bg-forest-600 text-white rounded-lg font-semibold"
          >
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};