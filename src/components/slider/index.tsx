"use client"
import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../utils';
import * as SliderPrimitive from '@radix-ui/react-slider';

export interface SliderProps
  extends React.ComponentProps<typeof SliderPrimitive.Root>,
    VariantProps<typeof sliderVariants> {
  defaultValue?: number[];
  max?: number;
  min?: number;
  step?: number;
  className?: string; // Add className prop
}

const sliderVariants = cva(
  'relative flex items-center touch-none select-none w-full h-8',
  {
    variants: {
      size: {
        default: 'w-64',
        sm: 'w-48',
        lg: 'w-80',
      },
      action: {
        green: {
          range: 'bg-green-500',
        },
        blue: {
          range: 'bg-blue-500',
        },
        red: {
          range: 'bg-red-500',
        },
        gray: {
          range: 'bg-gray-500',
        },
      },
    },
    defaultVariants: {
      size: 'default',
      action: 'green',
    },
  }
);

export function Slider({
  defaultValue = [50],
  max = 100,
  min = 0,
  step = 1,
  size,
  action,
  className, // Include className prop
  ...props
}: SliderProps) {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <SliderPrimitive.Root
      className={cn(sliderVariants({ size, action }), className)} // Apply className
      defaultValue={defaultValue}
      value={value}
      onValueChange={() => setValue(value)}
      max={max}
      min={min}
      step={step}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-2 w-full grow rounded-full bg-zinc-200">
        <SliderPrimitive.Range
          className={`absolute h-full rounded-full ${
            sliderVariants({ action }).range
          }`}
        />
      </SliderPrimitive.Track>
      <SliderPrimitive.Thumb className="block w-6 h-6 bg-white rounded-full shadow-[0_2px_10px_-1px_#aaa] focus:outline-none focus:shadow-[0_0_0_5px_#aaa] data-[state=dragged]:shadow-none">
        <div className="absolute top-[-40px] left-1/2 transform -translate-x-1/2 bg-zinc-800 text-white px-2 py-1 rounded">
          {value[0]}
        </div>
      </SliderPrimitive.Thumb>
    </SliderPrimitive.Root>
  );
}