'use client';
import { FocusCards } from '@/components/ui/focus-cards';
import { api } from '@/convex/_generated/api';
import { useMutation, useQuery } from 'convex/react';
import React from 'react';
import { useUser } from '@clerk/nextjs';
import axios from 'axios';

import ResquestedResourcesTable from '@/components/ResquestedResourcesTable';
import { Id } from '@/convex/_generated/dataModel';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';

export default function Page() {
  const { user } = useUser();
  const unApprovedResources = useQuery(api.resources.getUnApprovedResources);
  const approveResource = useMutation(api.resources.approveResource);
  const rejectResource = useMutation(api.resources.rejectResource);
  const [loading, setLoading] = React.useState(false);

  const handleApprove = async (resourceId: Id<'uiresources'>) => {
    setLoading(true);
    await approveResource({ id: resourceId });
    setLoading(false);
  };

  const handleReject = async (resourceId: Id<'uiresources'>) => {
    try {
      setLoading(true);

      const resourceToReject = unApprovedResources?.find(
        (resource) => resource._id === resourceId,
      );

      if (resourceToReject?.imageUrl) {
        const urlParts = resourceToReject.imageUrl.split('/');
        const publicId = urlParts[urlParts.length - 1].split('.')[0];

        try {
          const response = await axios.post('/api/remove-cloudinary-image', {
            publicId,
          });
          console.log('Cloudinary deletion response:', response.data);
        } catch (error) {
          console.error('Error deleting image from Cloudinary:', error);
        }
      }

      await rejectResource({ id: resourceId });
    } catch (error) {
      console.error('Error rejecting resource:', error);
    } finally {
      setLoading(false);
    }
  };

  const isAuthorized =
    user?.emailAddresses[0]?.emailAddress ===
    process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  if (!isAuthorized) {
    return (
      <h2 className="flex h-screen flex-col items-center justify-center text-center text-4xl">
        😔 Your are not Admin <br />
        <span className="text-foreground">
          <Link href={'/'} className={buttonVariants({ variant: 'link' })}>
            Back to Home
          </Link>
        </span>
      </h2>
    );
  }

  const cards =
    unApprovedResources?.map((resource) => ({
      title: resource.title,
      imageUrl: resource.imageUrl,
      link: resource.link,
      description: resource.description,
      _id: resource._id,
      requestedBy: resource.requestedBy,
      submittedBy: resource.submittedBy,
      submittedByPfp: resource.submittedByPfp,
      tags: resource.tags,
    })) || [];

  return (
    <main className="absolute h-screen w-full">
      <div className="container mx-auto py-32">
        <h2 className="relative z-20 bg-gradient-to-b from-[#F5AF19] to-[#F12711] bg-clip-text py-2 text-center font-sans text-2xl font-bold tracking-tight text-transparent md:py-10 md:text-4xl lg:text-7xl">
          Admin <br />
          <span className="text-2xl">
            ({unApprovedResources?.length}){' '}
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
