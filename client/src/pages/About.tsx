import { useEffect } from 'react';
import TeamMemberCard from '@/components/TeamMember';

const team = [
  {
    id: 1,
    name: 'Александр Иванов',
    position: 'Генеральный директор',
    bio: '15 лет опыта в экологическом консалтинге. Кандидат экономических наук, эксперт в области устойчивого развития.',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 1,
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Технический директор',
    bio: 'Эксперт по IoT и экологическому мониторингу. PhD в области экологических технологий.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 2,
  },
  {
    id: 3,
    name: 'Дмитрий Сидоров',
    position: 'Юридический советник',
    bio: 'Специалист по экологическому праву. Более 10 лет практики в области природоохранного законодательства.',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 3,
  },
  {
    id: 4,
    name: 'Анна Козлова',
    position: 'Директор по развитию',
    bio: 'ESG-консалтинг и устойчивое развитие. MBA, специализация в области зеленых финансов.',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 4,
  },
];

export default function About() {
  useEffect(() => {
    document.title = 'О нас - Synecology';
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-tech-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            О компании Synecology
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Мы — команда экспертов, которая помогает бизнесу превратить экологические требования в конкурентные преимущества
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Наша миссия
              </h2>
              <p className="text-xl text-light-gray mb-8">
                Создать мир, где бизнес и экология работают в синергии. Мы помогаем компаниям не просто соблюдать экологические требования, а превращать их в источник инноваций и прибыли.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark-bg font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Инновации</h3>
                    <p className="text-light-gray">Используем передовые технологии для решения экологических задач</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark-bg font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Надежность</h3>
                    <p className="text-light-gray">Гарантируем 100% защиту от экологических штрафов</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-6 h-6 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-dark-bg font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-2">Прибыльность</h3>
                    <p className="text-light-gray">Превращаем экологические инициативы в источник дохода</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Environmental monitoring" 
                className="rounded-2xl shadow-2xl" 
              />
              
              <div className="absolute -bottom-6 -right-6 bg-accent-green p-6 rounded-2xl">
                <div className="text-dark-bg font-bold text-2xl">200+</div>
                <div className="text-dark-bg font-medium">проектов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Наши ценности
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Принципы, которые определяют наш подход к работе и взаимодействию с клиентами
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-dark-bg font-bold text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Экологичность</h3>
              <p className="text-light-gray">Забота об окружающей среде — основа всех наших решений</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-dark-bg font-bold text-2xl">⚡</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Эффективность</h3>
              <p className="text-light-gray">Максимальный результат при минимальных затратах ресурсов</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent-green rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-dark-bg font-bold text-2xl">🤝</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-white">Партнерство</h3>
              <p className="text-light-gray">Долгосрочные отношения, основанные на взаимном доверии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Наша команда</h2>
            <p className="text-xl text-light-gray">Эксперты в области экологии и цифровых технологий</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* History */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              История компании
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-accent-green"></div>
              
              <div className="space-y-12">
                <div className="relative flex items-start space-x-8">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2019 - Основание</h3>
                    <p className="text-light-gray">Создание компании группой экспертов в области экологии и IT</p>
                  </div>
                </div>
                
                <div className="relative flex items-start space-x-8">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2020 - Первые проекты</h3>
                    <p className="text-light-gray">Запуск первых проектов по цифровизации экологических процессов</p>
                  </div>
                </div>
                
                <div className="relative flex items-start space-x-8">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2022 - Масштабирование</h3>
                    <p className="text-light-gray">Расширение команды и портфеля услуг, выход на федеральный уровень</p>
                  </div>
                </div>
                
                <div className="relative flex items-start space-x-8">
                  <div className="w-8 h-8 bg-accent-green rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-dark-bg font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">2024 - Лидерство</h3>
                    <p className="text-light-gray">Признание лидером в области цифровой экологии, 200+ успешных проектов</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
