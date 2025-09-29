import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 touch-target",
    {
        variants: {
            variant: {
                default: "bg-gradient-to-r from-orange-500 to-orange-600 text-white hover:from-orange-600 hover:to-orange-700 shadow-md hover:shadow-lg",
                destructive:
                    "bg-gradient-to-r from-red-500 to-red-600 text-white hover:from-red-600 hover:to-red-700 shadow-md hover:shadow-lg",
                outline:
                    "border border-orange-300 bg-gradient-to-r from-orange-50 to-white hover:from-orange-100 hover:to-orange-50 text-orange-700 shadow-sm hover:shadow",
                secondary:
                    "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 hover:from-orange-200 hover:to-orange-300 shadow-sm hover:shadow",
                ghost: "hover:bg-orange-100 hover:text-orange-800",
                link: "text-orange-600 underline-offset-4 hover:underline",
            },
            size: {
                default: "h-12 px-4 py-2 md:h-10",
                sm: "h-10 rounded-md px-3 md:h-9",
                lg: "h-14 rounded-md px-8 md:h-11",
                icon: "h-12 w-12 md:h-10 md:w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
)

const Button = React.forwardRef(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            >
                {props.children}
            </Comp>
        )
    }
)
Button.displayName = "Button"

export { Button, buttonVariants }