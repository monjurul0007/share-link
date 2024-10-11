import { ChangeEventHandler } from 'react';
import Input from './Input';

interface TextInputProps {
    label: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    error?: string;
}

export default function TextInput({ label, value, onChange, error }: TextInputProps) {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center w-full my-2">
            <label className="w-1/3 text-base text-gray-500">{label}</label>
            <div className="flex flex-col sm:w-2/3 w-full">
                <Input
                    value={value}
                    className="sm:w-2/3 w-full"
                    onChange={onChange}
                    error={!!error}
                />
                {error ? <span className="text-sm text-red-500">{error}</span> : null}
            </div>
        </div>
    );
}
