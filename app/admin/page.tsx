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
    <main>
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          Admin: Unapproved Resources{" "}
          <SignedIn>
            <UserButton />
          </SignedIn>
        </h1>

        <ResquestedResourcesTable
          cards={cards}
          loading={loading}
          handleApprove={handleApprove}
          handleReject={handleReject}
        />
      </div>

      {/* <ResourceForm /> */}
      {unApprovedResources?.length}
      {unApprovedResources && <FocusCards cards={cards} />}
    </main>
  );
}
