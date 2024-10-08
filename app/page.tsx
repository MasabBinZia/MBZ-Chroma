'use client';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { FocusCards } from "@/components/ui/focus-cards";

export default function Home() {
  const resources = useQuery(api.resources.getApprovedResources);

  const cards = resources?.map(resource => ({
    title: resource.title,
    src: resource.imageUrl,
    link: resource.link
  })) || [];

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">UI Resources</h1>
      {resources && <FocusCards cards={cards} />}
    </main>
  );
}