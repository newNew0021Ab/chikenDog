import { CaseStudy } from '@shared/schema';

interface CaseStudyCardProps {
  caseStudy: CaseStudy;
}

export default function CaseStudyCard({ caseStudy }: CaseStudyCardProps) {
  return (
    <div className="bg-dark-bg rounded-2xl p-8 hover-lift">
      <div className="flex items-center mb-6">
        {caseStudy.logoUrl && (
          <img 
            src={caseStudy.logoUrl} 
            alt={`${caseStudy.company} logo`} 
            className="w-16 h-16 rounded-lg mr-4 object-cover" 
          />
        )}
        <div>
          <h3 className="text-xl font-bold text-white">{caseStudy.company}</h3>
          <p className="text-medium-gray">{caseStudy.industry}</p>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-accent-green font-medium mb-2">задача</h4>
        <p className="text-light-gray mb-4">{caseStudy.challenge}</p>
        
        <h4 className="text-accent-green font-medium mb-2">результат</h4>
        <p className="text-light-gray mb-4">{caseStudy.results}</p>
      </div>
      
      {caseStudy.metrics && (
        <div className="border-t border-gray-700 pt-6">
          <div className="text-3xl font-bold text-accent-green mb-2">
            {caseStudy.metrics.split(' ')[0]}
          </div>
          <div className="text-medium-gray">
            {caseStudy.metrics.split(' ').slice(1).join(' ')}
          </div>
        </div>
      )}
    </div>
  );
}
