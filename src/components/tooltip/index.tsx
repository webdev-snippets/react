import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from '@/components/utils'
import { Tooltip as TooltipPrimitive } from "radix-ui";

export interface TooltipProps extends React.ComponentProps<typeof TooltipPrimitive.Root>,VariantProps<typeof tooltip> {
	content: string
	className?: string 
}

const tooltip = cva("tooltip rounded-lg px-1", {
	variants: {
		action: {
			primary: ["bg-primary-container", "text-on-primary-container",],
			secondary: ["bg-secondary-container", "text-on-secondary-container",],
			tertiary: ["bg-tertiary-container", "text-on-tertiary-container",],
			error: ["bg-error-container", "text-on-error-container",],
		},
		disabled: {
			true: ["!bg-gray-300", "!text-gray-700"],
			false: null
		}
	},

	defaultVariants: {
		action: "primary",
	},
});


export function Tooltip({
	action,
	children,
	content,
	open,
	defaultOpen,
	onOpenChange,
	disabled,
	className,
	...props
}: TooltipProps) {
	return (
		<TooltipPrimitive.Provider>

			<TooltipPrimitive.Root
				open={open}
				defaultOpen={defaultOpen}
				onOpenChange={onOpenChange}
			>
				<TooltipPrimitive.Trigger asChild>
					{children}
				</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Content side="top" align="center" {...props}>
					<div className={cn(tooltip({action, disabled}), className)}>
					{content}
					</div>
				</TooltipPrimitive.Content>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
}
