'use client';

import React, { useContext, useEffect, useState } from 'react';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import { UserLinks } from '@/models/api/userLink';
import { PLATFORMS_NAME } from '@/utils/constant';
import { generateRandomNumber } from '@/utils/number';
import FormWrapper from './FormWrapper';
import LinkInputDndSection from './LinkInputDndSection';

export default function LinksSection() {
    const { id, handleState, links: userLinks } = useContext(MobileUiContext);
    const [links, setLinks] = useState<UserLinks[]>(userLinks);
    const [error, setError] = useState<Record<string, Record<string, Record<'message', string>>>>(
        {},
    );

    const addNewLink = () => {
        setLinks((pre) => {
            return [
                ...pre,
                { id: generateRandomNumber().toString(), name: PLATFORMS_NAME.GITHUB, url: '' },
            ];
        });
    };

    const handlePlatfromName = (
        index: number,
        name: (typeof PLATFORMS_NAME)[keyof typeof PLATFORMS_NAME],
    ) => {
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

    const handleRemove = (index: number) => {
        setLinks((pre) => {
            const updatedLinks = [...pre];

            updatedLinks.splice(index, 1);

            return updatedLinks;
        });
    };

    const onUpdateUserLinks = async () => {
        setError({});

        const response = await fetch('/api/user/link', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json', // Tells the server you're sending JSON data
            },
            body: JSON.stringify({
                id,
                links,
            }),
        });

        if (!response.ok) {
            const error = await response.json();

            setError(error?.links);
        } else {
            alert('Links Updated!');
        }
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
            onSave={onUpdateUserLinks}
        >
            <div className="mb-5 space-y-4">
                <button
                    onClick={addNewLink}
                    className="w-full py-3 border-2 border-purple-600 text-purple-600 rounded-md hover:bg-purple-50 transition duration-300 flex items-center justify-center"
                >
                    <span className="mr-2">+</span> Add new link
                </button>
            </div>

            <LinkInputDndSection
                links={links}
                onChange={(updatedLinks) => setLinks(updatedLinks)}
                onPlatfromName={handlePlatfromName}
                onPlatfromUrl={handlePlatfromUrl}
                onRemove={handleRemove}
                errors={error}
            />
        </FormWrapper>
    );
}
