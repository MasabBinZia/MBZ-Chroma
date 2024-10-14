import React from 'react'

export default function SkeletonLoader() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto md:px-8 w-full animate-pulse">
    {[...Array(6)].map((_, index) => (
      <div key={index} className="bg-gray-200 h-[13rem] w-full rounded-lg"></div>
    ))}
  </div>
  )
}
