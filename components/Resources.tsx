'use client';

import React, { useEffect, useState } from 'react';
import { useQuery } from 'convex/react';
import { api } from '../convex/_generated/api';
import { FocusCards } from '@/components/ui/focus-cards';
import { useInView } from 'react-intersection-observer';
import SkeletonLoader from '@/components/SkeletonLoader';
import { SearchFilter } from './SearchFilter';
import { Button } from './ui/button';

export default function Resources() {
  const [visibleCount, setVisibleCount] = useState(6);
  const [loading, setLoading] = useState(false);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [scrollTrigger, isInView] = useInView();
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const resources = useQuery(api.resources.getApprovedResources);

  const isLoading = resources === undefined;

  const filteredResources = resources?.filter(
    (resource) =>
      selectedFilters.length === 0 ||
      resource.tags?.some((tag) => selectedFilters.includes(tag)),
  );

  const handleLoadMore = () => {
    setLoading(true);
    setVisibleCount((prevCount) => prevCount + 6);
    setLoading(false);
  };

  const handleResetFilters = () => {
    setSelectedFilters([]);
    setVisibleCount(6);
  };

  useEffect(() => {
    if (isInView && hasMoreData && !loading) {
      handleLoadMore();
    }
  }, [isInView, hasMoreData, loading]);

  useEffect(() => {
    setHasMoreData(visibleCount < (filteredResources?.length || 0));
  }, [visibleCount, filteredResources]);

  const handleFilterChange = (filters: string[]) => {
    setSelectedFilters(filters);
    setVisibleCount(6);
  };

  const cards =
    filteredResources?.slice(0, visibleCount).map((resource) => ({
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

  if (isLoading) {
    return (
      <main className="h-screen w-full">
        <SkeletonLoader />
      </main>
    );
  }

  if (filteredResources?.length === 0) {
    return (
      <h2 className="flex h-screen flex-col text-center text-4xl">
        😔 Not resources found <br />
        <span className="text-foreground">
          <Button onClick={handleResetFilters}>Reset Filters</Button>
        </span>
      </h2>
    );
  }

  return (
    <section>
      <div className="mb-8 flex justify-center">
        <SearchFilter onFilterChange={handleFilterChange} />
      </div>
      <FocusCards cards={cards} />
      {hasMoreData && (
        <div className="flex justify-center pt-4">
          <button
            ref={scrollTrigger}
            onClick={handleLoadMore}
            disabled={loading}
            className="mt-4 h-10"
          ></button>
        </div>
      )}
    </section>
  );
}
