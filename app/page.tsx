"use client";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { FocusCards } from "@/components/ui/focus-cards";
import RequestResourceModal from "@/components/RequestResourceModal";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Home() {
  const resources = useQuery(api.resources.getApprovedResources);

  const cards =
    resources?.map((resource) => ({
      title: resource.title,
      src: resource.imageUrl,
      link: resource.link,
    })) || [];

  return (
    <main className="container mx-auto p-4">
      <div className="flex justify-between items-center">
        <RequestResourceModal />
        <SignedOut>
          <Button>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      {resources && <FocusCards cards={cards} />}
    </main>
  );
}
