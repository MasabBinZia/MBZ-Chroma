import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

export const CircleProgress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      `relative h-32 w-32 overflow-hidden rounded-full flex justify-center items-center`,
      className
    )}
    {...props}
    style={{ background: `radial-gradient(closest-side, #333230 79%, transparent 80% 100%), conic-gradient(#2563eb ${(value || 0)}%, white 0)` }}
  >
    <div className="text-lg font-bold">{`${(value || 0)}%`}</div>

  </ProgressPrimitive.Root>
))