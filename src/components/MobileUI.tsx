'use client';

import React, { useContext } from 'react';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import LinkButtons from './LinkButtons';
import UserInfo from './UserInfo';

export default function MobileUI() {
    const { imageSrc, firstName, lastName, email, links } = useContext(MobileUiContext);

    return (
        <div className="mt-5 px-20 py-20 bg-white rounded-lg max-lg:hidden">
            <div className="flex justify-center">
                <div className="w-[275px] h-[500px] bg-white rounded-[40px] shadow-lg border-4 border-gray-300 overflow-hidden relative">
                    <div className="border-4 border-t-0 border-gray-300 absolute -top-0 left-1/2 transform -translate-x-1/2 w-1/2 h-6 bg-white rounded-b-2xl"></div>

                    <div className="mt-3 text-center pt-8 px-4 flex flex-col items-center justify-center">
                        <UserInfo
                            imageSrc={imageSrc}
                            firstName={firstName}
                            lastName={lastName}
                            email={email}
                        />
                        <LinkButtons links={links} />
                    </div>
                </div>
            </div>
        </div>
    );
}
