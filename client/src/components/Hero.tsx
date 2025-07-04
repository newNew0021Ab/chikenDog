import { Link } from 'wouter';
import { scrollToSection } from '@/lib/utils';

export default function Hero() {
  const handleCasesClick = () => {
    scrollToSection('cases');
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-tech-pattern pt-20">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white">
            Цифровой эколог для вашего бизнеса
          </h1>
          <p className="text-2xl md:text-3xl text-accent-green mb-8 font-medium">
            Гарантия от штрафов
          </p>
          <p className="text-lg md:text-xl text-light-gray mb-12 max-w-2xl mx-auto leading-relaxed">
            Современные решения для экологического сопровождения бизнеса. Превращаем экологию из расходов в инвестиции для устойчивого развития вашей компании.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link 
              href="/contact" 
              className="bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-400 transition-colors duration-300"
            >
              Получить консультацию
            </Link>
            <button 
              onClick={handleCasesClick}
              className="border-2 border-accent-green text-accent-green px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent-green hover:text-dark-bg transition-colors duration-300"
            >
              Смотреть кейсы
            </button>
          </div>
          
          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">5+</div>
              <div className="text-medium-gray">лет опыта в области цифровой экологии</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">200+</div>
              <div className="text-medium-gray">успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent-green mb-2">100%</div>
              <div className="text-medium-gray">гарантия от штрафов</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
