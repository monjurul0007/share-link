import { ChangeEventHandler, useState } from 'react';
import { TbMenu } from 'react-icons/tb';
import { UserLink } from '@/models/Links';
import { PLATFORMS } from '@/utils/constant';
import Input from './Input';

interface LinkInputProps {
    index: number;
    link: UserLink;
    onPlatfromName: (inx: number, value: string) => void;
    onPlatfromUrl: (inx: number, value: string) => void;
    onRemove: (inx: number) => void;
    error: Record<string, Record<'message', string>>;
}

export default function LinkInput({
    index,
    link,
    onPlatfromName,
    onPlatfromUrl,
    onRemove,
    error,
}: LinkInputProps) {
    const [url, setUrl] = useState(link.url);

    const handleUrl: ChangeEventHandler<HTMLInputElement> = (e) => {
        setUrl(e.target.value);
    };

    return (
        <div className="mt-4 px-5 py-4 bg-[#fafafa] rounded-md">
            <div className="mb-3 flex justify-between text-gray-500">
                <div className="font-semibold flex items-center">
                    <TbMenu className="me-2" />
                    Link #{index + 1}
                </div>
                <div
                    role="button"
                    onClick={() => {
                        onRemove(index);
                    }}
                >
                    Remove
                </div>
            </div>
            <div>
                <label className="block text-xs font-medium text-gray-600">Platform</label>
                <select
                    value={link.name}
                    onChange={(e) => {
                        onPlatfromName(index, e.target.value);
                    }}
                    className="mt-1 pe-10 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:drop-shadow-lg focus:shadow-purple-500/50 sm:text-sm"
                >
                    {PLATFORMS.map((platform) => (
                        <option key={platform.name} value={platform.name}>
                            {platform.name}
                        </option>
                    ))}
                </select>
                {error?.name?.message && (
                    <span className="text-sm text-red-500">{error.name.message}</span>
                )}
            </div>

            <div className="my-3">
                <label className="block text-xs font-medium text-gray-600">Link</label>
                <Input
                    value={url}
                    className="mt-1 w-full"
                    placeholder="https://www.example.com"
                    onChange={handleUrl}
                    onBlur={(e) => onPlatfromUrl(index, e.target.value)}
                />
                {error?.url?.message && (
                    <span className="text-sm text-red-500">{error.url.message}</span>
                )}
            </div>
        </div>
    );
}
