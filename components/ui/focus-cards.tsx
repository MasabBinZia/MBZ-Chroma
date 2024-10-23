'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { CardType } from '@/types';
import ResourceDescModal from '../ResourceDescModal';

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: CardType;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <>
      <ResourceDescModal
        trigger={
          <div
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={cn(
              'relative h-[20rem] w-full overflow-hidden rounded-lg bg-gray-100 transition-all duration-300 ease-out dark:bg-neutral-900',
              hovered !== null && hovered !== index && 'scale-[0.98] blur-sm',
            )}
          >
            <Image
              src={card.imageUrl}
              alt={card.title}
              width={1000}
              height={1000}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div
              className={cn(
                'absolute inset-0 flex items-end bg-black/50 px-4 py-8 transition-opacity duration-300',
                hovered === index ? 'opacity-100' : 'opacity-0',
              )}
            >
              <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-xl font-medium text-transparent md:text-2xl">
                {card.title}
              </h1>
            </div>
          </div>
        }
        title={card.title}
        description={card.description}
        link={card.link}
        imgUrl={card.imageUrl}
        requestBy={'Requested by '}
      />
    </>
  ),
);

Card.displayName = 'Card';

export function FocusCards({ cards }: { cards: CardType[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-4 md:grid-cols-2 md:px-8">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
