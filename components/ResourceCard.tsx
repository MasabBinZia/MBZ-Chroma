import { CardType } from '@/types';
import Image from 'next/image';

interface ResourceCardProps {
  resource: CardType;
}

export default function ResourceCard({ resource }: ResourceCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-lg">
      <Image
        src={resource.imageUrl}
        alt={resource.title}
        width={300}
        height={200}
        className="w-full"
      />
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{resource.title}</h2>
        <p className="mb-4 text-gray-600">{resource.description}</p>
        <a
          href={resource.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Resource
        </a>
      </div>
    </div>
  );
}
