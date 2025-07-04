import { useEffect } from 'react';
import ServiceCard from '@/components/ServiceCard';

const services = [
  {
    id: 1,
    title: 'Цифровой эколог',
    description: 'Автоматизированная система мониторинга и контроля экологических показателей с использованием IoT-датчиков и искусственного интеллекта для анализа данных в реальном времени.',
    category: 'AI / IoT / Monitoring',
    features: ['Мониторинг в реальном времени', 'AI-анализ данных', 'Прогнозирование рисков', 'Интеграция с существующими системами'],
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    title: 'Гарантия от штрафов',
    description: 'Полное юридическое сопровождение экологической деятельности с предоставлением страхового покрытия и гарантии защиты от штрафов контролирующих органов.',
    category: 'Legal / Insurance',
    features: ['Юридическое сопровождение', 'Страхование рисков', 'Взаимодействие с органами', 'Подготовка документов'],
    order: 2,
    isActive: true,
  },
  {
    id: 3,
    title: 'Экология как инвестиция',
    description: 'Превращение экологических инициатив в источник дохода через ESG-финансирование, углеродные кредиты и зеленые инвестиции.',
    category: 'Strategy / ROI',
    features: ['ESG-стратегия', 'Углеродные кредиты', 'Зеленое финансирование', 'ROI-анализ'],
    order: 3,
    isActive: true,
  },
  {
    id: 4,
    title: 'Автоматизация отчетности',
    description: 'Автоматическое формирование, проверка и подача экологической отчетности в контролирующие органы с использованием передовых технологий.',
    category: 'Automation / Reporting',
    features: ['Автоматическая генерация отчетов', 'Проверка соответствия', 'Электронная подача', 'Архивирование документов'],
    order: 4,
    isActive: true,
  },
  {
    id: 5,
    title: 'Экологический аудит',
    description: 'Комплексная проверка соответствия экологическим требованиям с выдачей рекомендаций по устранению нарушений и оптимизации процессов.',
    category: 'Audit / Compliance',
    features: ['Комплексный аудит', 'Анализ рисков', 'Рекомендации по оптимизации', 'План устранения нарушений'],
    order: 5,
    isActive: true,
  },
  {
    id: 6,
    title: 'ESG-консалтинг',
    description: 'Разработка и внедрение стратегий устойчивого развития для повышения ESG-рейтинга и привлечения инвестиций.',
    category: 'ESG / Strategy',
    features: ['ESG-стратегия', 'Повышение рейтинга', 'Привлечение инвестиций', 'Отчетность по устойчивому развитию'],
    order: 6,
    isActive: true,
  },
];

export default function Services() {
  useEffect(() => {
    document.title = 'Услуги - Synecology';
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-tech-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Наши услуги
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Комплексные решения для экологического сопровождения вашего бизнеса. От мониторинга до стратегического планирования.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={service.id} className="service-card p-8 rounded-2xl hover-lift">
                <div className="number-badge w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <span className="text-dark-bg font-bold text-lg">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-light-gray mb-6">{service.description}</p>
                <div className="text-accent-green font-medium mb-4">{service.category}</div>
                
                {service.features && service.features.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Ключевые возможности:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-light-gray text-sm">
                          <div className="w-1 h-1 bg-accent-green rounded-full mr-2"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Нужна персональная консультация?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Наши эксперты помогут выбрать оптимальный набор услуг для вашего бизнеса
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-400 transition-colors duration-300"
              >
                Получить консультацию
              </a>
              <button className="border-2 border-accent-green text-accent-green px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent-green hover:text-dark-bg transition-colors duration-300">
                Скачать презентацию
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
