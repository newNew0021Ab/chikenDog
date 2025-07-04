import { Link } from 'wouter';
import { BlogPost } from '@shared/schema';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="bg-card-bg rounded-2xl overflow-hidden hover-lift">
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className="w-full h-48 object-cover" 
        />
      )}
      <div className="p-6">
        <div className="text-accent-green text-sm font-medium mb-2">{post.category}</div>
        <h3 className="text-xl font-bold mb-3 text-white">{post.title}</h3>
        <p className="text-light-gray mb-4">{post.excerpt}</p>
        <div className="flex items-center justify-between">
          <span className="text-medium-gray text-sm">
            {formatDate(post.publishedAt || post.createdAt || new Date())}
          </span>
          <Link 
            href={`/blog/${post.slug}`} 
            className="text-accent-green hover:text-green-400 transition-colors"
          >
            Читать далее
          </Link>
        </div>
      </div>
    </article>
  );
}
