'use client';
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import ResourceCard from "./_components/ResourceCard";
import SubmitForm from "./_components/SubmitForm";


export default function Home() {
  const resources = useQuery(api.resources.getApprovedResources);

  return (
    <main className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">UI Resources</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {resources?.map((resource) => (
          <ResourceCard key={resource._id} resource={resource} />
        ))}
      </div>
      {/* <SubmitForm /> */}
    </main>
  );
}