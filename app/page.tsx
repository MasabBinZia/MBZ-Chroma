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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Hero } from "@/components/Hero";

export default function Home() {
  const resources = useQuery(api.resources.getApprovedResources);

 
  const cards =
    resources?.map((resource) => ({
      title: resource.title,
      src: resource.imageUrl,
      link: resource.link,
    })) || [];

  return (
    <main className="absolute h-screen w-full">
      {/* <div className="flex justify-between items-center">
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

        </div>
      
      </div>
      <h1 className="text-6xl text-white">Hellow</h1> */}
 
      <Hero/>
      {/* <div  className="flex justify-center items-center">
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <RequestResourceModal />
        </SignedIn>
      </div> */}
      {resources && <FocusCards cards={cards} />} 
    </main>
  );
}
