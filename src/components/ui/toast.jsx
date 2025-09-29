import * as React from "react"
import * as ToastPrimitives from "@radix-ui/react-toast"
import { cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "../../lib/utils"

const ToastProvider = ToastPrimitives.Provider

const ToastViewport = React.forwardRef(
    (props, ref) => {
        const { className, ...rest } = props;
        return (
            <ToastPrimitives.Viewport
                ref={ref}
                className={cn(
                    "fixed inset-0 z-[100] flex items-center justify-center p-4 pointer-events-none",
                    className
                )}
                {...rest}
            />
        )
    }
)
ToastViewport.displayName = ToastPrimitives.Viewport.displayName

const toastVariants = cva(
    "group pointer-events-auto relative flex flex-col items-center justify-center space-y-2 overflow-hidden rounded-xl border p-6 shadow-2xl transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full w-full max-w-md mx-auto",
    {
        variants: {
            variant: {
                default: "border bg-background text-foreground",
                destructive:
                    "destructive group border-destructive bg-red-50 text-red-900 shadow-lg",
                success:
                    "group border-green-500 bg-gradient-to-r from-green-50 to-emerald-50 text-green-800 shadow-xl",
                info:
                    "group border-blue-500 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-800 shadow-xl",
                warning:
                    "group border-yellow-500 bg-gradient-to-r from-yellow-50 to-amber-50 text-yellow-800 shadow-xl",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
)

const Toast = React.forwardRef((props, ref) => {
    const { className, variant, ...rest } = props;
    return (
        <ToastPrimitives.Root
            ref={ref}
            className={cn(toastVariants({ variant }), className)}
            duration={5000} // 5 seconds duration
            {...rest}
        />
    )
})
Toast.displayName = ToastPrimitives.Root.displayName

const ToastAction = React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <ToastPrimitives.Action
            ref={ref}
            className={cn(
                "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
                className
            )}
            {...rest}
        />
    )
})
ToastAction.displayName = ToastPrimitives.Action.displayName

const ToastClose = React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <ToastPrimitives.Close
            ref={ref}
            className={cn(
                "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
                className
            )}
            toast-close=""
            {...rest}
        >
            <X className="h-4 w-4" />
        </ToastPrimitives.Close>
    )
})
ToastClose.displayName = ToastPrimitives.Close.displayName

const ToastTitle = React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <ToastPrimitives.Title
            ref={ref}
            className={cn("text-xl font-bold text-center", className)}
            {...rest}
        />
    )
})
ToastTitle.displayName = ToastPrimitives.Title.displayName

const ToastDescription = React.forwardRef((props, ref) => {
    const { className, ...rest } = props;
    return (
        <ToastPrimitives.Description
            ref={ref}
            className={cn("text-base opacity-90 text-center", className)}
            {...rest}
        />
    )
})
ToastDescription.displayName = ToastPrimitives.Description.displayName

export {
    ToastProvider,
    ToastViewport,
    Toast,
    ToastTitle,
    ToastDescription,
    ToastClose,
    ToastAction,
}