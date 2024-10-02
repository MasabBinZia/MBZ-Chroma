'use client';
import ResourceForm from "@/components/ResourceForm";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import React from "react";

export default function page() {
  const unApprovedResources = useQuery(api.resources.getUnApprovedResources);
  return (
    <div>
      <ResourceForm />
      {unApprovedResources?.length}
    </div>
  );
}
