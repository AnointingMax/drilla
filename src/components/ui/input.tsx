import * as React from "react"

import { cn } from "@/lib/utils"

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input"> & { icon?: React.ReactNode }>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div className="flex items-center h-10 gap-4 px-4 py-2 border rounded-md border-input focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2">
        {icon}
        <input
          type={type}
          className={cn(
            "flex w-full bg-background text-base outline-none border-none ring-offset-background border-0 outline-0 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    )
  }
)
Input.displayName = "Input"

export { Input }
