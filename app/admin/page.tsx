"use client";
import ResourceForm from "@/components/ResourceForm";
import { FocusCards } from "@/components/ui/focus-cards";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";
import { useUser } from "@clerk/nextjs";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import ResquestedResourcesTable from "@/components/ResquestedResourcesTable";
import ReqImageViewer from "@/components/ReqImageViewer";

export default function page() {
  const { user } = useUser();
  const unApprovedResources = useQuery(api.resources.getUnApprovedResources);
  const approveResource = useMutation(api.resources.approveResource);
  const [loading, setLoading] = React.useState(false);
  // const rejectResource = useMutation(api.resources.rejectResource);

  const handleApprove = async (resourceId: string) => {
    setLoading(true);
    await approveResource({ id: resourceId } as any);
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
      src: resource.imageUrl,
      link: resource.link,
      description: resource.description,
    })) || [];

  return (
    <main>
      <div className="mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Admin: Unapproved Resources  <SignedIn>
          <UserButton />
        </SignedIn></h1>
        {/* <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Title</th>
              <th className="py-2 px-4 border-b">Description</th>
              <th className="py-2 px-4 border-b">Link</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cards?.map((resource, idx) => (
              <tr key={idx}>
                <td className="py-2 px-4 border-b">{resource.title}</td>
                <td className="py-2 px-4 border-b">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    {resource.link}
                  </a>
                </td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleApprove(resource._id)}
                    disabled={loading}
                    className="bg-green-500 text-white px-2 py-1 rounded mr-2 hover:bg-green-600"
                  >
                    Approve
                  </button>
      <button
                  onClick={() => handleReject(resource._id)}
                  disabled={loading}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                >
                  Reject
                </button> 
                </td>
              </tr>
            ))}
          </tbody>
        </table> */}

        <ResquestedResourcesTable cards={cards} loading={loading} handleApprove={handleApprove} />
      </div>

      {/* <ResourceForm /> */}
      {unApprovedResources?.length}
      {unApprovedResources && <FocusCards cards={cards} />}
    </main>
  );
}
