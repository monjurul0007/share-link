import { useRef } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import Image from 'next/image';

interface ImageInputProps {
    src: string;
    onUpload: (file: File) => void;
}

export default function ImageInput({ src, onUpload }: ImageInputProps) {
    const fileInputRef = useRef<HTMLInputElement | null>(null);

    const handleDivClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            onUpload(file);
        }
    };

    return (
        <div className="relative group sm:w-1/3 my-5 sm:my-5">
            <Image
                src={src}
                alt="Profile Picture"
                className="rounded-md w-50 h-50 object-cover"
                width={170}
                height={170}
            />
            <div
                onClick={handleDivClick}
                className="absolute inset-0 bg-black bg-opacity-20 rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer w-[170px] h-[170px]"
            >
                <span className="text-white text-sm flex flex-col items-center">
                    <IoImageOutline className="text-3xl" />
                    Change Image
                </span>
                <input
                    type="file"
                    ref={fileInputRef}
                    onChange={handleFileChange}
                    className="hidden"
                    accept="image/*"
                />
            </div>
        </div>
    );
}
