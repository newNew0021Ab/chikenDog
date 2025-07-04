import { Link } from 'wouter';
import { scrollToSection } from '@/lib/utils';

export default function Footer() {
  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-black py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center">
                <span className="text-dark-bg font-bold text-sm">S</span>
              </div>
              <span className="text-2xl font-bold text-white">Synecology</span>
            </div>
            <p className="text-light-gray mb-6 max-w-md">
              Лидер в области цифровой экологии. Превращаем экологические требования в конкурентные преимущества для вашего бизнеса.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors">
                <span className="text-white text-sm">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors">
                <span className="text-white text-sm">t</span>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-accent-green transition-colors">
                <span className="text-white text-sm">in</span>
              </a>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Услуги</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-light-gray hover:text-accent-green transition-colors"
                >
                  Цифровой эколог
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-light-gray hover:text-accent-green transition-colors"
                >
                  Гарантия от штрафов
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-light-gray hover:text-accent-green transition-colors"
                >
                  ESG-консалтинг
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavClick('services')}
                  className="text-light-gray hover:text-accent-green transition-colors"
                >
                  Экологический аудит
                </button>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-light-gray">+7 (495) 123-45-67</li>
              <li>
                <a href="mailto:info@synecology.ru" className="text-light-gray hover:text-accent-green transition-colors">
                  info@synecology.ru
                </a>
              </li>
              <li className="text-light-gray">Москва, ул. Тверская, 1</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-medium-gray">© 2024 Synecology. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
