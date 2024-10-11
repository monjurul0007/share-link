'use client';

import React, { useContext } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import { PLATFORMS_ICONS } from '@/utils/constant';

export default function MobileUI() {
    const { firstName, lastName, email, links } = useContext(MobileUiContext);

    return (
        <div className="mt-5 px-20 py-20 bg-white rounded-lg max-lg:hidden">
            <div className="flex justify-center">
                <div className="w-64 h-[500px] bg-white rounded-[40px] shadow-lg border-4 border-gray-300 overflow-hidden relative">
                    <div className="border-4 border-t-0 border-gray-300 absolute -top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-white rounded-b-2xl"></div>

                    <div className="pt-8 px-4 flex flex-col items-center justify-center">
                        <div className="w-20 h-20 mx-auto bg-gray-200 rounded-full mb-4"></div>

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

                        <div className="w-full mt-5">
                            {links.map((link, index) => {
                                const Icon = PLATFORMS_ICONS[link.name].icon;

                                return (
                                    <div
                                        key={index}
                                        className="mt-2 flex items-center justify-between py-3 px-3 w-full rounded-lg text-sm text-white"
                                        style={{
                                            backgroundColor: PLATFORMS_ICONS[link.name].bgColor,
                                        }}
                                    >
                                        <span className="flex items-center">
                                            <Icon className="me-2" /> {link.name}
                                        </span>
                                        <FaArrowRightLong />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
