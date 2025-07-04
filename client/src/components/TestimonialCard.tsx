import { Testimonial } from '@shared/schema';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="bg-dark-bg p-8 rounded-2xl">
      <div className="flex items-center mb-6">
        {testimonial.imageUrl && (
          <img 
            src={testimonial.imageUrl} 
            alt={testimonial.name} 
            className="w-12 h-12 rounded-full mr-4 object-cover" 
          />
        )}
        <div>
          <div className="font-bold text-white">{testimonial.name}</div>
          <div className="text-medium-gray text-sm">{testimonial.position}</div>
        </div>
      </div>
      <p className="text-light-gray mb-4">"{testimonial.content}"</p>
      <div className="flex text-accent-green">
        <span>{'★'.repeat(testimonial.rating || 5)}</span>
      </div>
    </div>
  );
}
