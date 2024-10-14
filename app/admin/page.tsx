"use client";
import { FocusCards } from "@/components/ui/focus-cards";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { useUser } from "@clerk/nextjs";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ResquestedResourcesTable from "@/components/ResquestedResourcesTable";
import { Id } from "@/convex/_generated/dataModel";

export default function Page() {
  const { user } = useUser();
  const unApprovedResources = useQuery(api.resources.getUnApprovedResources);
  const approveResource = useMutation(api.resources.approveResource);
  const rejectResource = useMutation(api.resources.rejectResource);
  const [loading, setLoading] = React.useState(false);
  // const rejectResource = useMutation(api.resources.rejectResource);

  const handleApprove = async (resourceId: Id<"uiresources">) => {
    setLoading(true);
    await approveResource({ id: resourceId });
    setLoading(false);
  };

  const handleReject = async (resourceId: Id<"uiresources">) => {
    setLoading(true);
    await rejectResource({ id: resourceId });
    setLoading(false);
  };

  const isAuthorized =
    user?.emailAddresses[0]?.emailAddress ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!isAuthorized) {
    return (
      <div>
        Unauthorized access
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    );
  }

  const cards =
    unApprovedResources?.map((resource) => ({
      _id: resource._id,
      title: resource.title,
      imageUrl: resource.imageUrl,
      link: resource.link,
      description: resource.description,
    })) || [];

  return (
    <main className="absolute h-screen w-full">
      <div className="mx-auto py-32 container">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-[#F5AF19] to-[#F12711] text-2xl md:text-4xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 font-bold tracking-tight">
          Admin <br />
          <span className="text-2xl">
            ({unApprovedResources?.length}){" "}
            <span className="text-foreground">UnApproved Resources left</span>
          </span>
        </h2>

        <ResquestedResourcesTable
          cards={cards}
          loading={loading}
          handleApprove={handleApprove}
          handleReject={handleReject}
        />
      </div>

      {unApprovedResources && <FocusCards cards={cards} />}
    </main>
  );
}
