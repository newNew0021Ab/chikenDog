import { useEffect } from 'react';
import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import CaseStudyCard from '@/components/CaseStudyCard';
import TeamMemberCard from '@/components/TeamMember';
import BlogCard from '@/components/BlogCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Link } from 'wouter';

// Sample data - in real app this would come from CMS
const sampleServices = [
  {
    id: 1,
    title: 'Цифровой эколог',
    description: 'Автоматизированная система мониторинга и контроля экологических показателей',
    category: 'AI / IoT / Monitoring',
    features: [],
    order: 1,
    isActive: true,
  },
  {
    id: 2,
    title: 'Гарантия от штрафов',
    description: 'Полное юридическое сопровождение и страхование от экологических штрафов',
    category: 'Legal / Insurance',
    features: [],
    order: 2,
    isActive: true,
  },
  {
    id: 3,
    title: 'Экология как инвестиция',
    description: 'Превращение экологических инициатив в источник дохода и конкурентных преимуществ',
    category: 'Strategy / ROI',
    features: [],
    order: 3,
    isActive: true,
  },
  {
    id: 4,
    title: 'Автоматизация отчетности',
    description: 'Автоматическое формирование и подача экологической отчетности',
    category: 'Automation / Reporting',
    features: [],
    order: 4,
    isActive: true,
  },
  {
    id: 5,
    title: 'Экологический аудит',
    description: 'Комплексная проверка соответствия экологическим требованиям',
    category: 'Audit / Compliance',
    features: [],
    order: 5,
    isActive: true,
  },
  {
    id: 6,
    title: 'ESG-консалтинг',
    description: 'Разработка и внедрение стратегий устойчивого развития',
    category: 'ESG / Strategy',
    features: [],
    order: 6,
    isActive: true,
  },
];

const sampleCases = [
  {
    id: 1,
    title: 'Автоматизация экологического мониторинга',
    slug: 'metallurgical-plant-monitoring',
    company: 'Металлургический завод',
    industry: 'Производство',
    challenge: 'Создание системы непрерывного мониторинга выбросов и автоматизации экологической отчетности для крупного металлургического предприятия.',
    solution: 'Внедрена система IoT-мониторинга с AI-анализом данных.',
    results: 'Автоматизирована подача отчетности в контролирующие органы. Снижены операционные расходы на экологическое сопровождение на 40%.',
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
    challenge: 'Разработка ESG-стратегии и внедрение системы управления отходами для сети из 150 магазинов.',
    solution: 'Создана цифровая платформа управления отходами.',
    results: 'Внедрена программа recycling. Получен статус "Зеленый ритейлер". Привлечено дополнительное финансирование под ESG-проекты.',
    imageUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
    logoUrl: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100',
    metrics: '150 точек внедрения',
    createdAt: new Date(),
  },
];

const sampleTeam = [
  {
    id: 1,
    name: 'Александр Иванов',
    position: 'Генеральный директор',
    bio: '15 лет опыта в экологическом консалтинге',
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 1,
  },
  {
    id: 2,
    name: 'Мария Петрова',
    position: 'Технический директор',
    bio: 'Эксперт по IoT и экологическому мониторингу',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 2,
  },
  {
    id: 3,
    name: 'Дмитрий Сидоров',
    position: 'Юридический советник',
    bio: 'Специалист по экологическому праву',
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 3,
  },
  {
    id: 4,
    name: 'Анна Козлова',
    position: 'Директор по развитию',
    bio: 'ESG-консалтинг и устойчивое развитие',
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200',
    linkedinUrl: '',
    order: 4,
  },
];

const sampleBlog = [
  {
    id: 1,
    title: 'Искусственный интеллект в экологическом мониторинге',
    slug: 'ai-environmental-monitoring',
    excerpt: 'Как AI-технологии революционизируют способы контроля за состоянием окружающей среды...',
    content: 'Полная статья о применении AI в экологии...',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Технологии',
    publishedAt: new Date('2024-01-15'),
    createdAt: new Date('2024-01-15'),
  },
  {
    id: 2,
    title: 'ESG-инвестиции: новые возможности для бизнеса',
    slug: 'esg-investments-business',
    excerpt: 'Анализ трендов в области устойчивого развития и их влияние на инвестиционные решения...',
    content: 'Полная статья о ESG-инвестициях...',
    imageUrl: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'ESG',
    publishedAt: new Date('2024-01-12'),
    createdAt: new Date('2024-01-12'),
  },
  {
    id: 3,
    title: 'Изменения в экологическом законодательстве 2024',
    slug: 'environmental-law-changes-2024',
    excerpt: 'Обзор ключевых изменений в нормативно-правовой базе и их влияние на бизнес...',
    content: 'Полная статья о изменениях в законодательстве...',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Законодательство',
    publishedAt: new Date('2024-01-10'),
    createdAt: new Date('2024-01-10'),
  },
];

const sampleTestimonials = [
  {
    id: 1,
    name: 'Сергей Волков',
    position: 'Директор по производству',
    company: 'Металлургический завод',
    content: 'Synecology помогла нам не только избежать штрафов, но и существенно оптимизировать экологические процессы. Система мониторинга работает безупречно.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    createdAt: new Date(),
  },
  {
    id: 2,
    name: 'Елена Смирнова',
    position: 'Эколог предприятия',
    company: 'Химический комбинат',
    content: 'Автоматизация отчетности сэкономила нам десятки часов работы в месяц. Теперь мы можем сосредоточиться на стратегических задачах.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    createdAt: new Date(),
  },
  {
    id: 3,
    name: 'Михаил Попов',
    position: 'Генеральный директор',
    company: 'IT-компания',
    content: 'Благодаря ESG-стратегии от Synecology мы привлекли дополнительные инвестиции и улучшили имидж компании. Экология действительно стала инвестицией.',
    rating: 5,
    imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=60&h=60',
    createdAt: new Date(),
  },
];

export default function Home() {
  useEffect(() => {
    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, observerOptions);
    
    // Observe all sections for animation
    document.querySelectorAll('section').forEach(section => {
      section.style.opacity = '0';
      section.style.transform = 'translateY(20px)';
      section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(section);
    });
    
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white">
      <Hero />
      
      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Надежные инструменты для экологического соответствия
            </h2>
            <p className="text-xl text-light-gray max-w-3xl mx-auto">
              Комплексные решения для автоматизации экологических процессов и обеспечения полного соответствия требованиям законодательства
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleServices.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Cases Section */}
      <section id="cases" className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Кейсы</h2>
            <p className="text-xl text-light-gray">Решения Synecology выбирают лидеры из разных индустрий</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {sampleCases.map((caseStudy) => (
              <CaseStudyCard key={caseStudy.id} caseStudy={caseStudy} />
            ))}
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Synecology — лидер в области цифровой экологии
              </h2>
              <p className="text-xl text-light-gray mb-8">
                Мы помогаем компаниям превратить экологические требования из проблемы в конкурентное преимущество. Наша миссия — создать мир, где бизнес и экология работают в синергии.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-light-gray">Инновационные технологии мониторинга</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-light-gray">Юридическая защита от штрафов</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-light-gray">Превращение экологии в источник дохода</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-2 h-2 bg-accent-green rounded-full"></div>
                  <span className="text-light-gray">Полная автоматизация процессов</span>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-400 transition-colors duration-300"
              >
                Узнать больше
              </Link>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
                alt="Environmental monitoring control room" 
                className="rounded-2xl shadow-2xl" 
              />
              
              <div className="absolute -bottom-6 -left-6 bg-accent-green p-6 rounded-2xl">
                <div className="text-dark-bg font-bold text-2xl">5+</div>
                <div className="text-dark-bg font-medium">лет опыта</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Наша команда</h2>
            <p className="text-xl text-light-gray">Эксперты в области экологии и цифровых технологий</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sampleTeam.map((member) => (
              <TeamMemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Blog Section */}
      <section id="blog" className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Блог</h2>
            <p className="text-xl text-light-gray">Последние новости и экспертные мнения</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleBlog.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="reviews" className="py-20 bg-card-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Отзывы клиентов</h2>
            <p className="text-xl text-light-gray">Что говорят о нас наши партнеры</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleTestimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Готовы превратить экологию в конкурентное преимущество?
            </h2>
            <p className="text-xl text-light-gray mb-8">
              Получите бесплатную консультацию и узнайте, как Synecology может помочь вашему бизнесу
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="bg-accent-green text-dark-bg px-8 py-4 rounded-lg font-medium text-lg hover:bg-green-400 transition-colors duration-300"
              >
                Получить консультацию
              </Link>
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
