"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { FocusCards } from "@/components/ui/focus-cards";
import RequestResourceModal from "@/components/RequestResourceModal";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
  useUser,
} from "@clerk/nextjs";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const { user } = useUser();

  const resources = useQuery(api.resources.getApprovedResources);

  const isAuthorized =
    user?.emailAddresses[0]?.emailAddress ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  const cards =
    resources?.map((resource) => ({
      title: resource.title,
      src: resource.imageUrl,
      link: resource.link,
    })) || [];

  return (
    <main className="absolute inset-0 -z-10 h-full w-full items-center [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div className="flex justify-between items-center">
        <RequestResourceModal />

        <div className="flex items-center">
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>

        {isAuthorized && <Link href={"/admin"} className={buttonVariants()}>Admin</Link>}
        </div>
      
      </div>
      <h1 className="text-6xl text-white">Hellow</h1>
      {/* {resources && <FocusCards cards={cards} />} */}
    </main>
  );
}
