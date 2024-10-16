"use client";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import ModeToggle from "./ModeToggle";
import { SignedIn, UserButton, useUser } from "@clerk/nextjs";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function NavBar() {
  const { user } = useUser();

  const isAuthorized =
    user?.emailAddresses[0]?.emailAddress ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  return (
    <div className="flex items-center min-w-full w-full fixed justify-center p-2 z-10">
      <div className="flex justify-between md:w-[620px] w-[95%] mt-[1rem] border border-gray-400 dark:border-zinc-900 dark:bg-black  relative  bg-white border-opacity-20 rounded-xl p-2 shadow-lg">
        <NavigationMenu>
          <NavigationMenuList className="">
            <Link
              href="/"
              className="pl-2 flex items-center gap-1 text-xl font-bold"
            >
              <Image
                src={"/logo.png"}
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
              className={cn(buttonVariants({ variant: "link" }), "px-0")}
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
