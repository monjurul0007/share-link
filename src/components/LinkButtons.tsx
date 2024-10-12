'use client';

import { FaArrowRightLong } from 'react-icons/fa6';
import Link from 'next/link';
import { UserLinks } from '@/models/api/userLink';
import { PLATFORMS_ICONS } from '@/utils/constant';
import clsx from 'clsx';

interface LinkButtonsProps {
    links: UserLinks[];
    className?: string;
}

export default function LinkButtons({ links, className }: LinkButtonsProps) {
    return (
        <div className={clsx('w-full mt-5', className)}>
            {links.map((link, index) => {
                const Icon = PLATFORMS_ICONS[link.name].icon;

                return (
                    <Link
                        key={index}
                        className="mt-2 flex items-center justify-between py-3 px-3 w-full rounded-lg text-sm text-white"
                        style={{
                            backgroundColor: PLATFORMS_ICONS[link.name].bgColor,
                        }}
                        href={link.url}
                        target="_blank"
                    >
                        <span className="flex items-center">
                            <Icon className="me-2" /> {link.name}
                        </span>
                        <FaArrowRightLong />
                    </Link>
                );
            })}
        </div>
    );
}
