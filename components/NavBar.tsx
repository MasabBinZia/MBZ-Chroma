'use client';
import {
  NavigationMenu,
  NavigationMenuList,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';
import ModeToggle from './ModeToggle';
import { SignedIn, UserButton, useUser } from '@clerk/nextjs';
import { buttonVariants } from './ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

export function NavBar() {
  const { user } = useUser();

  const isAuthorized =
    user?.emailAddresses[0]?.emailAddress ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  return (
    <div className="fixed z-10 flex w-full min-w-full items-center justify-center p-2">
      <div className="relative mt-[1rem] flex w-[95%] justify-between rounded-xl border border-gray-400 border-opacity-20 bg-white p-2 shadow-lg dark:border-zinc-900 dark:bg-black md:w-[620px]">
        <NavigationMenu>
          <NavigationMenuList className="">
            <Link
              href="/"
              className="flex items-center gap-1 pl-2 text-xl font-bold"
            >
              <Image
                src={'/logo.png'}
                width={30}
                height={30}
                alt="mbz-Chroma"
              />
            </Link>
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-2 px-2">
          {isAuthorized && (
            <Link
              href="/admin"
              className={cn(buttonVariants({ variant: 'link' }), 'px-0')}
            >
              Admin
            </Link>
          )}
          <ModeToggle />
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
