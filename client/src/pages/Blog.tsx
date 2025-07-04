import { useEffect } from 'react';
import BlogCard from '@/components/BlogCard';

const blogPosts = [
  {
    id: 1,
    title: 'Искусственный интеллект в экологическом мониторинге',
    slug: 'ai-environmental-monitoring',
    excerpt: 'Как AI-технологии революционизируют способы контроля за состоянием окружающей среды и помогают предотвращать экологические нарушения...',
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
    excerpt: 'Анализ трендов в области устойчивого развития и их влияние на инвестиционные решения. Практические советы по привлечению ESG-финансирования...',
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
    excerpt: 'Обзор ключевых изменений в нормативно-правовой базе и их влияние на бизнес. Практические рекомендации по адаптации к новым требованиям...',
    content: 'Полная статья о изменениях в законодательстве...',
    imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Законодательство',
    publishedAt: new Date('2024-01-10'),
    createdAt: new Date('2024-01-10'),
  },
  {
    id: 4,
    title: 'Цифровизация экологических процессов',
    slug: 'digitalization-environmental-processes',
    excerpt: 'Как цифровые технологии трансформируют экологическое управление. Обзор основных инструментов и платформ для автоматизации...',
    content: 'Полная статья о цифровизации...',
    imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Цифровизация',
    publishedAt: new Date('2024-01-08'),
    createdAt: new Date('2024-01-08'),
  },
  {
    id: 5,
    title: 'Углеродное регулирование: что нужно знать бизнесу',
    slug: 'carbon-regulation-business',
    excerpt: 'Подробный разбор механизмов углеродного регулирования и их влияние на различные отрасли экономики. Стратегии адаптации...',
    content: 'Полная статья об углеродном регулировании...',
    imageUrl: 'https://images.unsplash.com/photo-1569163139394-de4e4f43e4e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Регулирование',
    publishedAt: new Date('2024-01-05'),
    createdAt: new Date('2024-01-05'),
  },
  {
    id: 6,
    title: 'Зеленые технологии в производстве',
    slug: 'green-technologies-manufacturing',
    excerpt: 'Обзор инновационных зеленых технологий для промышленности. Кейсы успешного внедрения и экономический эффект...',
    content: 'Полная статья о зеленых технологиях...',
    imageUrl: 'https://images.unsplash.com/photo-1497440001374-f26997328c7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250',
    category: 'Технологии',
    publishedAt: new Date('2024-01-03'),
    createdAt: new Date('2024-01-03'),
  },
];

const categories = ['Все', 'Технологии', 'ESG', 'Законодательство', 'Цифровизация', 'Регулирование'];

export default function Blog() {
  useEffect(() => {
    document.title = 'Блог - Synecology';
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-tech-pattern">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Блог Synecology
          </h1>
          <p className="text-xl text-light-gray max-w-3xl mx-auto">
            Экспертные материалы, новости и аналитика в области цифровой экологии и устойчивого развития
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-card-bg border-b border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-2 rounded-full border border-gray-700 text-light-gray hover:border-accent-green hover:text-accent-green transition-colors duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-dark-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-card-bg">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Подпишитесь на нашу рассылку
            </h2>
            <p className="text-lg text-light-gray mb-8">
              Получайте свежие статьи и экспертные материалы по цифровой экологии
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Ваш email"
                className="flex-1 px-4 py-3 bg-dark-bg border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-accent-green"
              />
              <button className="bg-accent-green text-dark-bg px-6 py-3 rounded-lg font-medium hover:bg-green-400 transition-colors duration-300">
                Подписаться
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
