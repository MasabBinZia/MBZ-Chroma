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
import { capitalizeFirstLetter, cn } from '@/lib/utils';
import { Badge } from './ui/badge';

type ResourceDescModalProps = {
  trigger: React.ReactNode;
  title: string;
  description: string;
  imgUrl: string;
  requestBy: string;
  link: string;
  submittedByPfp: string | undefined;
  tags: string[];
  submittedBy: string | undefined;
};

export default function ResourceDescModal({
  trigger,
  title,
  description,
  imgUrl,
  link,
  submittedByPfp,
  submittedBy,
  tags,
}: ResourceDescModalProps) {
  return (
    <Credenza>
      <CredenzaTrigger asChild className="cursor-pointer">
        {trigger}
      </CredenzaTrigger>
      <CredenzaContent className="bg-white dark:bg-background">
        <CredenzaHeader>
          <CredenzaTitle className="bg-gradient-to-b from-[#F5AF19] to-[#F12711] bg-clip-text py-2 text-center font-sans text-4xl font-bold tracking-tight text-transparent">
            {title}
          </CredenzaTitle>
          <CredenzaDescription className="text-center text-xl">
            {description}
          </CredenzaDescription>
        </CredenzaHeader>
        <CredenzaBody>
          <div className="flex flex-wrap justify-center gap-1 pb-2">
            {tags?.map((tag) => (
              <Badge key={tag}>{capitalizeFirstLetter(tag)}</Badge>
            ))}{' '}
          </div>
          <Image
            src={imgUrl}
            alt={title}
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </CredenzaBody>
        <div className="flex items-center gap-1">
          <img
            src={submittedByPfp}
            alt={submittedBy}
            className="h-8 w-8 rounded-full border dark:border-white dark:bg-white"
          />
          <p>
            Submitted By -{' '}
            <span className="bg-gradient-to-b from-[#F5AF19] to-[#F12711] bg-clip-text py-2 text-center font-sans text-lg font-bold tracking-tight text-transparent">
              {submittedByPfp ? submittedBy : 'Admin'}
            </span>
          </p>
        </div>

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
