import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const badgeVariants = cva(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default:
                    "border-transparent bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-md",
                secondary:
                    "border-transparent bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800",
                destructive:
                    "border-transparent bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md",
                outline: "text-orange-700 border-orange-300 bg-gradient-to-r from-orange-50 to-white",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

function Badge({ className, variant, ...props }) {
    return (
        <div className={cn(badgeVariants({ variant }), className)} {...props} />
    )
}

export { Badge, badgeVariants }