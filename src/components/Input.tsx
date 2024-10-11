import { ChangeEventHandler } from 'react';
import clsx from 'clsx';

interface InputProps {
    value?: string;
    className?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
}
export default function Input({ value, className, onChange, placeholder }: InputProps) {
    return (
        <input
            value={value}
            className={clsx(
                'border-2 border-gray-300 focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:drop-shadow-lg focus:shadow-purple-500/50 rounded-md px-3 py-2',
                className,
            )}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}
