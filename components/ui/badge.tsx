import * as React from "react"
import { cn } from "@/lib/utils"

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline"
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-md px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
        {
          "bg-blue-50 text-blue-600 hover:bg-blue-100 border border-blue-200": variant === "default",
          "bg-neutral-100 text-neutral-700 hover:bg-neutral-200 border border-neutral-200": variant === "secondary",
          "border border-neutral-300 text-neutral-600 hover:bg-neutral-50": variant === "outline",
        },
        className
      )}
      {...props}
    />
  )
}
