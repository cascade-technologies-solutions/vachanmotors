
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electricLime focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-electricLime to-neonEmerald text-jetBlack hover:shadow-lg hover:shadow-electricLime/20",
        // New variants for enhanced CTA styling
        "cta-primary": "bg-electricLime text-jetBlack hover:bg-neonEmerald hover:text-white hover:shadow-lg hover:shadow-electricLime/20 border border-transparent",
        "cta-secondary": "bg-transparent border border-electricLime text-jetBlack dark:text-white hover:bg-electricLime/10 hover:shadow-inner",
        "cta-accent": "bg-tangerineOrange text-white hover:bg-tangerineOrange/90 hover:shadow-lg hover:shadow-tangerineOrange/20",
        "cta-minimal": "bg-transparent text-jetBlack dark:text-white hover:bg-electricLime/10 border border-gray-200 dark:border-gray-700",
        "cta-glass": "bg-white/20 backdrop-blur-md border border-white/10 text-jetBlack dark:text-white hover:bg-white/30",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-9 rounded-full px-4 text-xs",
        lg: "h-12 rounded-full px-8 text-base",
        xl: "h-14 rounded-full px-10 py-3 text-lg",
        icon: "h-10 w-10 rounded-full",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
