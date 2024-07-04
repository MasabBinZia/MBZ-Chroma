import React from "react";

export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <main className="flex p-4 px-4 lg:px-10 ">{children}</main>;
}
