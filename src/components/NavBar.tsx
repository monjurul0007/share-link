'use client';

import { CgProfile } from 'react-icons/cg';
import { FaRegEye } from 'react-icons/fa';
import { FaLink } from 'react-icons/fa6';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@headlessui/react';
import logo from '@/assets/logo.png';
import clsx from 'clsx';

const navItems = [
    { id: 1, name: 'Links', link: '/profile/links', icon: <FaLink className="text-xl me-2" /> },
    {
        id: 2,
        name: 'Profile Details',
        link: '/profile/info',
        icon: <CgProfile className="text-xl sm:me-2" />,
    },
];

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();

    const onNavClick = (navItemIndex: number) => {
        router.push(navItems[navItemIndex].link);
    };

    return (
        <div className="bg-white rounded-lg sm:px-10 px-3 py-5 mt-5 flex">
            <div className="flex items-center">
                <Image src={logo} alt="brand logo" width={30} height={30} />
                <span className="ms-1 text-gray-900 font-bold text-2xl max-sm:hidden">
                    devlinks
                </span>
            </div>
            <div className="flex justify-center grow font-semibold">
                {navItems.map((item, index) => (
                    <Button
                        key={item.id}
                        className={clsx(
                            'data-[hover]:bg-purple-100 text-purple-700 px-4 py-2 rounded-md flex items-center sm:mx-3',
                            { 'bg-purple-200': pathname === item.link },
                        )}
                        onClick={() => onNavClick(index)}
                    >
                        {item.icon}
                        <span className="max-sm:hidden">{item.name}</span>
                    </Button>
                ))}
            </div>
            <div>
                <Button className="font-semibold border-2 border-purple-700 text-purple-700 px-4 py-2 rounded-md data-[hover]:bg-purple-700 data-[hover]:text-white">
                    <FaRegEye className="sm:hidden" />
                    <span className="max-sm:hidden">Preview</span>
                </Button>
            </div>
        </div>
    );
}
