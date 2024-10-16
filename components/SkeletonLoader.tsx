import React from 'react';

export default function SkeletonLoader() {
  return (
    <div className="mx-auto grid w-full max-w-5xl animate-pulse grid-cols-1 gap-10 px-4 md:grid-cols-3 md:px-8">
      {[...Array(6)].map((_, index) => (
        <div
          key={index}
          className="h-[13rem] w-full rounded-lg bg-gray-200"
        ></div>
      ))}
    </div>
  );
}
