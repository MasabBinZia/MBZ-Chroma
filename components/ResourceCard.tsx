import Image from 'next/image';

interface ResourceCardProps {
  resource: {
    title: string;
    description: string;
    link: string;
    imageUrl: string;
  };
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg">
      <Image src={resource.imageUrl} alt={resource.title} width={300} height={200} className="w-full" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{resource.title}</h2>
        <p className="text-gray-600 mb-4">{resource.description}</p>
        <a href={resource.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
          View Resource
        </a>
      </div>
    </div>
  );
}