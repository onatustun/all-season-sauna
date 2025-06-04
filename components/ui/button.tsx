import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { LuArrowRight } from "react-icons/lu";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "rounded-full px-5 py-3 h-fit w-fit flex items-center justify-center gap-2 whitespace-nowrap text-sm lg:text-base font-medium",
  {
    variants: {
      variant: {
        light: "bg-background text-foreground",
        dark: "bg-foreground text-background",
        primary: "bg-primary text-background",
        link: "text-foreground underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        icon: "h-9 w-9 p-0",
        hero: "max-sm:text-lg text-sm lg:text-lg max-sm:w-full max-sm:rounded-xl max-sm:gap-4",
      },
    },
    defaultVariants: {
      variant: "light",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  href?: string;
  showArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant, size, asChild = false, href, children, showArrow = false, ...props },
    ref,
  ) => {
    const buttonContent = (
      <>
        {children}
        {showArrow && <LuArrowRight />}
      </>
    );

    const buttonClasses = cn(buttonVariants({ variant, size }), className);

    if (asChild) {
      return <Slot className={buttonClasses}>{buttonContent}</Slot>;
    }

    if (href) {
      return React.createElement(
        "div",
        { className: "inline-block" },
        React.createElement(
          Link,
          { href: href },
          React.createElement("span", { className: buttonClasses }, buttonContent),
        ),
      );
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {buttonContent}
      </button>
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
