import {
  Credenza,
  CredenzaBody,
  CredenzaContent,
  CredenzaDescription,
  CredenzaFooter,
  CredenzaHeader,
  CredenzaTitle,
  CredenzaTrigger,
} from '@/components/ui/credenza';
import { SquareArrowOutUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';

type ResourceDescModalProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  imgUrl: string;
  requestBy: string;
  link: string;
};

export default function ResourceDescModal({
  trigger,
  title,
  description,
  imgUrl,
  link,
  requestBy,
}: ResourceDescModalProps) {
  return (
    <Credenza>
      <CredenzaTrigger asChild className="cursor-pointer">
        {trigger}
      </CredenzaTrigger>
      <CredenzaContent>
        <CredenzaHeader>
          <CredenzaTitle className="bg-gradient-to-b from-[#F5AF19] to-[#F12711] bg-clip-text py-2 text-center font-sans text-4xl font-bold tracking-tight text-transparent">
            {title}
          </CredenzaTitle>
          <CredenzaDescription className="text-center text-xl">
            {description}
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <div className="flex justify-between py-2">
            {' '}
            <span className="text-transparent">{requestBy}</span>
          </div>
          <Image
            src={imgUrl}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </CredenzaBody>
        <CredenzaFooter>
          <Link
            href={link}
            target="_blank"
            className={cn(
              buttonVariants({ size: 'lg' }),
              'w-full items-center gap-1 bg-gradient-to-b from-[#F5AF19] to-[#F12711] text-xl font-bold text-white',
            )}
          >
            Visit
            <SquareArrowOutUpRight className="h-5 w-5" />
          </Link>
        </CredenzaFooter>
      </CredenzaContent>
    </Credenza>
  );
}
