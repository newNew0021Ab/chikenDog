import { TeamMember } from '@shared/schema';

interface TeamMemberProps {
  member: TeamMember;
}

export default function TeamMemberCard({ member }: TeamMemberProps) {
  return (
    <div className="bg-dark-bg p-6 rounded-2xl text-center hover-lift">
      {member.imageUrl && (
        <img 
          src={member.imageUrl} 
          alt={`${member.name} photo`} 
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" 
        />
      )}
      <h3 className="text-xl font-bold mb-2 text-white">{member.name}</h3>
      <p className="text-accent-green font-medium mb-2">{member.position}</p>
      {member.bio && (
        <p className="text-light-gray text-sm">{member.bio}</p>
      )}
    </div>
  );
}
