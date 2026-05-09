import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-white hover:bg-primary-600 shadow-sm",
        secondary: "bg-secondary text-white hover:bg-secondary-500 shadow-sm",
        outline: "border border-neutral-200 bg-transparent hover:bg-neutral-100 text-neutral-900",
        ghost: "hover:bg-neutral-100 text-neutral-700",
        link: "text-primary underline-offset-4 hover:underline",
        destructive: "bg-error text-white hover:bg-error-600 shadow-sm",
      },
      size: {
        xs: "h-7 px-2 text-xs",
        sm: "h-9 px-3 rounded-md",
        default: "h-11 px-6 rounded-md",
        lg: "h-12 px-8 rounded-lg text-base",
        xl: "h-14 px-10 rounded-xl text-lg",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, isLoading, children, disabled, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}
      >
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
