import * as React from "react"

const badgeVariants = {
  default: "bg-purple-100 text-purple-900 hover:bg-purple-100/80",
  secondary: "bg-gray-100 text-gray-900 hover:bg-gray-100/80",
  outline: "text-gray-900 border border-gray-200 hover:bg-gray-100",
  success: "bg-green-100 text-green-900 hover:bg-green-100/80",
  destructive: "bg-red-100 text-red-900 hover:bg-red-100/80",
}


const Badge = React.forwardRef(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${badgeVariants[variant]} ${className}`}
        {...props}
      />
    )
  }
)
Badge.displayName = "Badge"

export { Badge, badgeVariants }