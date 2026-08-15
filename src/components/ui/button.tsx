import { cva, type VariantProps } from "class-variance-authority";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

const buttonStyles = cva(
  "inline-flex h-12 items-center justify-center gap-2 rounded-[8px] px-6 font-button text-sm font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ploy-accent-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-ploy-button-primary-background text-ploy-button-primary-text shadow-sm hover:-translate-y-0.5 hover:bg-ploy-accent-primary/90 hover:shadow-lg",
        secondary:
          "border border-ploy-button-secondary-border bg-ploy-button-secondary-background text-ploy-button-secondary-text hover:-translate-y-0.5 hover:border-ploy-text-primary hover:shadow-sm",
        ghost: "text-ploy-text-primary hover:bg-ploy-neutral-primary-s2",
        inverse:
          "bg-ploy-background-primary text-ploy-text-primary hover:-translate-y-0.5 hover:bg-ploy-neutral-primary-s2",
      },
      size: {
        default: "h-12 px-6",
        small: "h-10 px-4",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  },
);

type SharedProps = VariantProps<typeof buttonStyles> & {
  children: ReactNode;
  className?: string;
};

type LinkProps = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type NativeButtonProps = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };
export type ButtonProps = LinkProps | NativeButtonProps;

/**
 * @ployComponent
 * @ployComponentId button
 * @ployComponentType component
 * @ployComponentPattern button
 * @ployComponentDescription Brand button primitive with primary, secondary, ghost, and inverse variants for links or native buttons.
 * @ployComponentStatus stable
 */
export function Button({
  variant,
  size,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = buttonStyles({ variant, size, className });

  if ("href" in props && props.href) {
    const { href, ...linkProps } = props;
    return (
      <a href={href} className={classes} {...linkProps}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...(props as NativeButtonProps)}>
      {children}
    </button>
  );
}
