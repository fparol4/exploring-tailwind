import * as React from "react"

import { cn } from "@/lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error = false, ...props }, ref) => {
    let elementClass = cn(
      `flex h-10 w-full rounded-md border border-input
      bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm
      file:font-medium placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50`,
      className
    )

    if (error) {
      elementClass = cn(elementClass, 'border-rose-600')
    }

    return (
      <input
        type={type}
        className={elementClass}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
