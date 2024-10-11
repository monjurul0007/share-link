'use client';

import React, { PropsWithChildren } from 'react';

interface ProfileWrapperProps extends PropsWithChildren {
    title: string;
    subTitle: string;
    onSave: () => void;
}

export default function FormWrapper({ title, subTitle, children, onSave }: ProfileWrapperProps) {
    return (
        <div className="mt-5 lg:ms-5 flex flex-col justify-between grow bg-white rounded-lg">
            <div className="sm:p-10 p-4">
                <h1 className="text-2xl font-bold mb-4">{title}</h1>
                <p className="text-gray-600 mb-6">{subTitle}</p>

                {children}
            </div>

            <div className="border-t-2 border-gray-300 flex justify-end mt-5 pt-3 shadow-top-md px-10 py-6">
                <button
                    className="block bg-purple-600 text-white font-medium py-2 px-4 rounded-md shadow hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50"
                    onClick={onSave}
                >
                    Save
                </button>
            </div>
        </div>
    );
}
