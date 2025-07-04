import { Service } from '@shared/schema';

interface ServiceCardProps {
  service: Service;
  index: number;
}

export default function ServiceCard({ service, index }: ServiceCardProps) {
  return (
    <div className="service-card p-8 rounded-2xl hover-lift">
      <div className="number-badge w-12 h-12 rounded-full flex items-center justify-center mb-6">
        <span className="text-dark-bg font-bold text-lg">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>
      <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
      <p className="text-light-gray mb-4">{service.description}</p>
      <div className="text-accent-green font-medium">{service.category}</div>
    </div>
  );
}
