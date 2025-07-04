import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X } from 'lucide-react';
import { scrollToSection } from '@/lib/utils';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    if (location === '/') {
      scrollToSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-dark-bg/95 backdrop-blur-md border-b border-gray-800' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
              <span className="text-dark-bg font-bold text-sm">S</span>
            </div>
            <span className="text-xl font-bold text-white">Synecology</span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('services')}
              className="text-light-gray hover:text-accent-green transition-colors duration-300"
            >
              Услуги
            </button>
            <button 
              onClick={() => handleNavClick('cases')}
              className="text-light-gray hover:text-accent-green transition-colors duration-300"
            >
              Кейсы
            </button>
            <button 
              onClick={() => handleNavClick('about')}
              className="text-light-gray hover:text-accent-green transition-colors duration-300"
            >
              О нас
            </button>
            <button 
              onClick={() => handleNavClick('team')}
              className="text-light-gray hover:text-accent-green transition-colors duration-300"
            >
              Команда
            </button>
            <Link href="/blog" className="text-light-gray hover:text-accent-green transition-colors duration-300">
              Блог
            </Link>
            <button 
              onClick={() => handleNavClick('reviews')}
              className="text-light-gray hover:text-accent-green transition-colors duration-300"
            >
              Отзывы
            </button>
          </nav>
          
          {/* CTA Button */}
          <Link 
            href="/contact" 
            className="hidden md:block bg-accent-green text-dark-bg px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors duration-300"
          >
            Связаться с нами
          </Link>
          
          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-800">
            <div className="flex flex-col space-y-4 pt-4">
              <button 
                onClick={() => handleNavClick('services')}
                className="text-light-gray hover:text-accent-green transition-colors duration-300 text-left"
              >
                Услуги
              </button>
              <button 
                onClick={() => handleNavClick('cases')}
                className="text-light-gray hover:text-accent-green transition-colors duration-300 text-left"
              >
                Кейсы
              </button>
              <button 
                onClick={() => handleNavClick('about')}
                className="text-light-gray hover:text-accent-green transition-colors duration-300 text-left"
              >
                О нас
              </button>
              <button 
                onClick={() => handleNavClick('team')}
                className="text-light-gray hover:text-accent-green transition-colors duration-300 text-left"
              >
                Команда
              </button>
              <Link 
                href="/blog" 
                className="text-light-gray hover:text-accent-green transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Блог
              </Link>
              <button 
                onClick={() => handleNavClick('reviews')}
                className="text-light-gray hover:text-accent-green transition-colors duration-300 text-left"
              >
                Отзывы
              </button>
              <Link 
                href="/contact" 
                className="bg-accent-green text-dark-bg px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Связаться с нами
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
