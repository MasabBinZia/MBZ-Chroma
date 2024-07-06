import { cn } from "@/lib/utils";
import React from "react";

export default function PageLayout({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <main className={cn("flex p-4 px-4 lg:px-10", className)}>{children}</main>
  );
}
