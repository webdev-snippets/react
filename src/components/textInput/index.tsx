import {cva, VariantProps} from 'class-variance-authority'
import { cn } from '../utils';
import { Asterisk } from 'lucide-react';
import { ChangeEventHandler } from 'react';


const textInput = cva("textInput rounded-lg px-1", {
	variants: {
		action: {
			primary: ["bg-primary-container", "text-on-primary-container",],
			secondary: ["bg-secondary-container", "text-on-secondary-container",],
			tertiary: ["bg-tertiary-container", "text-on-tertiary-container",],
			error: ["bg-error-container", "text-on-error-container",],
		},
	},

	defaultVariants: {
		action: "primary",
	},
});

export interface TextInputProps extends VariantProps<typeof textInput>,Omit<React.InputHTMLAttributes<HTMLInputElement>,'onChange'> {
    required: boolean
    onChange: ChangeEventHandler
}

export function TextInput({action, required,value,onChange, ...props}: TextInputProps) {
    return(
        <div className={cn(textInput({action}),"border-1 flex w-full")}>
            <input value={value} onChange={onChange} type='text' {...props} />
            {
                required && <Asterisk />
            }
        </div>
    )
}