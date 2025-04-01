import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Tooltip } from "@/components/tooltip";

const button = cva("button rounded-2xl hover:opacity-75", {
    variants: {
        action: {
            primary: ["bg-primary", "text-primary-on",],
            secondary: ["bg-secondary", "text-secondary-on",],
            tertiary: ["bg-tertiary", "text-tertiary-on",],
            error: ["bg-error", "text-error-on",],
        },
        size: {
            sm: ["text-sm", "py-1", "px-2"],
            md: ["text-base", "py-2", "px-4"],
            lg: ["text-lg", "py-2", "px-6"]
        },
        disabled: {
            false: null,
            true: ["opacity-80", "cursor-not-allowed", "border-transparent", "text-on-surface"],
        },
        outline: {
            true: ["border-2"],
            false: null
        }
    },
    compoundVariants: [
        {
            action: "primary",
            outline: true,
            class: "bg-primary-container border-primary",
        },
        {
            action: "secondary",
            outline: true,
            class: "bg-secondary-container border-secondary",
        },
        {
            action: "tertiary",
            outline: true,
            class: "bg-tertiary-container border-tertiary",
        },
        {
            action: "error",
            outline: true,
            class: "bg-error-container border-error",
        },
    ],
    defaultVariants: {
        disabled: false,
        action: "primary",
        size: "md",
        outline: false
    },
});

export interface ButtonProps
    extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "disabled">,
    VariantProps<typeof button> {
    label?: string
    tooltip: string

}

export const Button: React.FC<ButtonProps> = ({
    label,
    tooltip,
    className,
    action,
    size,
    disabled,
    ...props
}) => (
    <>
    <Tooltip content={tooltip} action={action}>
    <button
        className={button({ action, size, disabled, className })}
        disabled={disabled || undefined}
        {...props}
        />
    </Tooltip>
    </>
);