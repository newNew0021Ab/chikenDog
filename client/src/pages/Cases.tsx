import { useEffect } from 'react';
import CaseStudyCard from '@/components/CaseStudyCard';

const cases = [
  {
    id: 1,
    title: 'Автоматизация экологического мониторинга',
    slug: 'metallurgical-plant-monitoring',
    company: 'Металлургический завод',
    industry: 'Производство',
    challenge: 'Создание системы непрерывного мониторинга выбросов и автоматизации экологической отчетности для крупного металлургического предприятия с множественными источниками загрязнения.',
    solution: 'Внедрена система IoT-мониторинга с AI-анализом данных. Установлены датчики на всех критических точках. Разработана система автоматического формирования отчетов.',
    results: 'Автоматизирована подача отчетности в контролирующие органы. Снижены операционные расходы на экологическое сопровождение на 40%. Устранены все нарушения экологического законодательства.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    metrics: '40% снижение операционных расходов',
    createdAt: new Date(),
  },
  {
    id: 2,
    title: 'ESG-стратегия для торговой сети',
    slug: 'retail-chain-esg',
    company: 'Торговая сеть',
    industry: 'Ритейл',
    challenge: 'Разработка ESG-стратегии и внедрение системы управления отходами для сети из 150 магазинов с целью получения зеленого финансирования.',
    solution: 'Создана цифровая платформа управления отходами. Разработана комплексная ESG-стратегия. Внедрена система мониторинга устойчивого развития.',
    results: 'Внедрена программа recycling. Получен статус "Зеленый ритейлер". Привлечено дополнительное финансирование под ESG-проекты на сумму 500 млн рублей.',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    logoUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    metrics: '150 точек внедрения',
    createdAt: new Date(),
  },
  {
    id: 3,
    title: 'Полное соответствие экологическим требованиям',
    slug: 'chemical-plant-compliance',
    company: 'Химический комбинат',
    industry: 'Химическая промышленность',
    challenge: 'Обеспечение полного соответствия требованиям экологического законодательства и получение разрешений на выбросы для химического производства.',
    solution: 'Проведен комплексный экологический аудит. Разработан план приведения в соответствие. Внедрена система превентивного контроля.',
    results: 'Получены все необходимые разрешительные документы. Обеспечена 100% гарантия от штрафов в течение 3 лет. Снижены риски экологических нарушений.',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    logoUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    metrics: '100% гарантия от штрафов',
    createdAt: new Date(),
  },
  {
    id: 4,
    title: 'Углеродная нейтральность IT-компании',
    slug: 'tech-company-carbon-neutral',
    company: 'IT-компания',
    industry: 'Технологии',
    challenge: 'Создание системы carbon footprint tracking и достижение углеродной нейтральности для крупной IT-компании.',
    solution: 'Внедрена система учета углеродного следа. Разработана программа компенсации выбросов. Создана стратегия достижения углеродной нейтральности.',
    results: 'Получен статус "Carbon Neutral Company". Улучшен ESG-рейтинг компании. Привлечены ESG-инвестиции. Снижен углеродный след на 80%.',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    logoUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    metrics: '0 углеродный след',
    createdAt: new Date(),
  },
];

export default function Cases() {
  useEffect(() => {
    document.title = 'Кейсы - Synecology';
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-tech-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Кейсы наших клиентов
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Реальные истории успеха компаний, которые превратили экологические требования в конкурентные преимущества
          </p>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Результаты в цифрах
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-4">200+</div>
              <div className="text-light-gray">Успешных проектов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-4">100%</div>
              <div className="text-light-gray">Гарантия от штрафов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-4">40%</div>
              <div className="text-light-gray">Средняя экономия расходов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-accent-green mb-4">5+</div>
              <div className="text-light-gray">Лет опыта</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ваш проект может быть следующим
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Обсудите ваши задачи с нашими экспертами и получите персональное предложение
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="/contact" 
                className="bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-400 transition-colors duration-300"
              >
                Обсудить проект
              </a>
              <button className="border-2 border-accent-green text-accent-green px-8 py-4 rounded-lg font-medium text-lg hover:bg-accent-green hover:text-dark-bg transition-colors duration-300">
                Скачать кейсы
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
