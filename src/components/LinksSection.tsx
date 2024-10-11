'use client';

import React, { useContext, useEffect, useState } from 'react';
import { TbMenu } from 'react-icons/tb';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import { UserLink } from '@/models/Links';
import { PLATFORMS, PLATFORMS_NAME } from '@/utils/constant';
import Input from './Form/Input';
import FormWrapper from './FormWrapper';

export default function LinksSection() {
    const { handleState, links: UserLinks } = useContext(MobileUiContext);
    const [links, setLinks] = useState<UserLink[]>(UserLinks);

    const addNewLink = () => {
        setLinks((pre) => {
            return [...pre, { name: PLATFORMS_NAME.GITHUB, url: '' }];
        });
    };

    const handlePlatfromName = (index: number, name: string) => {
        setLinks((pre) => {
            pre[index].name = name;

            return [...pre];
        });
    };

    const handlePlatfromUrl = (index: number, url: string) => {
        setLinks((pre) => {
            pre[index].url = url;

            return [...pre];
        });
    };

    useEffect(() => {
        handleState?.(
            'links',
            links.filter((link) => link.name && link.url),
        );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [links]);

    return (
        <FormWrapper
            title="Customize your links"
            subTitle="Add/edit/remove links below and then share all your profiles with the world!"
            onSave={() => undefined}
        >
            <div className="mb-5 space-y-4">
                <button
                    onClick={addNewLink}
                    className="w-full py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition duration-300 flex items-center justify-center"
                >
                    <span className="mr-2">+</span> Add new link
                </button>
            </div>

            {links.map((link, index) => (
                <div key={index}>
                    <div className="mt-4 px-5 py-4 bg-[#fafafa] rounded-md">
                        <div className="mb-3 flex justify-between text-gray-500">
                            <div className="font-semibold flex items-center">
                                <TbMenu className="me-2" />
                                Link #{index + 1}
                            </div>
                            <div>Remove</div>
                        </div>
                        <div>
                            <label className="block text-xs font-medium text-gray-600">
                                Platform
                            </label>
                            <select
                                value={link.name}
                                onChange={(e) => {
                                    handlePlatfromName(index, e.target.value);
                                }}
                                className="mt-1 pe-10 block w-full py-2 px-3 border-2 border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:border-purple-500 focus:ring-purple-500 focus:drop-shadow-lg focus:shadow-purple-500/50 sm:text-sm"
                            >
                                {PLATFORMS.map((platform) => (
                                    <option key={platform.name} value={platform.name}>
                                        {platform.name}
                                    </option>
                                ))}
                            </select>
                        </div>

                        <div className="my-3">
                            <label className="block text-xs font-medium text-gray-600">Link</label>
                            <Input
                                value={link.url}
                                className="mt-1 w-full"
                                placeholder="https://www.example.com"
                                onChange={(e) => handlePlatfromUrl(index, e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </FormWrapper>
    );
}
