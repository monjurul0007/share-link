'use client';

import Image from 'next/image';
import { generateImageLink } from '@/utils/image';

interface UserInfoProps {
    imageSrc?: string;
    imageBufferString?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
}

export default function UserInfo({
    imageSrc,
    imageBufferString,
    firstName,
    lastName,
    email,
}: UserInfoProps) {
    const src = imageSrc ? imageSrc : generateImageLink(JSON.parse(imageBufferString || '{}'));

    return (
        <div className="w-full flex flex-col justify-center">
            {src ? (
                <Image
                    src={src}
                    alt="User image"
                    width={20}
                    height={20}
                    className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"
                />
            ) : (
                <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>
            )}

            {firstName || lastName ? (
                <span className="text-xl font-semibold">{`${firstName} ${lastName}`}</span>
            ) : (
                <div className="w-3/4 h-4 mx-auto bg-gray-200 rounded mb-2" />
            )}

            {email ? (
                <span className="text-sm text-gray-500">{email}</span>
            ) : (
                <div className="w-1/2 h-3 mx-auto bg-gray-200 rounded mb-6"></div>
            )}
        </div>
    );
}
