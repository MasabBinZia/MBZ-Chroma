"use client";

import React, { useEffect, useState } from "react";
import { useQuery } from "convex/react";
import { api } from "../convex/_generated/api";
import { FocusCards } from "@/components/ui/focus-cards";
import { useInView } from "react-intersection-observer";
import SkeletonLoader from "@/components/SkeletonLoader";

export default function Resources() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();

  const resources = useQuery(api.resources.getApprovedResources);

  const isLoading = resources === undefined;

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prevCount) => prevCount + 6);
    setLoading(false);
  };

  useEffect(() => {
    if (isInView && hasMoreData && !loading) {
      handleLoadMore();
    }
  }, [isInView, hasMoreData, loading]);

  useEffect(() => {
    setHasMoreData(visibleCount < (resources?.length || 0));
  }, [visibleCount, resources]);

  const cards =
    resources?.slice(0, visibleCount).map((resource) => ({
      title: resource.title,
      imageUrl: resource.imageUrl,
      link: resource.link,
      description: resource.description,
      _id: resource._id,
    })) || [];

  if (isLoading) {
    return (
      <main className="h-screen w-full">
        <SkeletonLoader />
      </main>
    );
  }

  if (resources?.length === 0) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-gray-500">No resources found.</p>
      </div>
    );
  }

  return (
    <section>
      <FocusCards cards={cards} />
      {hasMoreData && (
        <div className="flex justify-center pt-4">
          <button
            ref={scrollTrigger}
            onClick={handleLoadMore}
            disabled={loading}
            className="h-10 mt-4"
          >
            {/* {loading ? 'Loading more...' : 'Load More'} */}
          </button>
        </div>
      )}
    </section>
  );
}
