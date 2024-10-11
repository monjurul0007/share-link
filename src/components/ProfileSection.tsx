'use client';

import React, { ChangeEventHandler, useContext, useState } from 'react';
import { IoImageOutline } from 'react-icons/io5';
import Image from 'next/image';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import TextInput from './Form/TextInput';
import FormWrapper from './FormWrapper';

export default function ProfileSection() {
    const {
        id,
        firstName: fName,
        lastName: lName,
        email,
        handleState,
    } = useContext(MobileUiContext);
    const [firstName, setFirstName] = useState(fName || '');
    const [lastName, setLastName] = useState(lName || '');
    const [error, setError] = useState<Record<string, string>>({});

    const handleFirstName: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;
        setFirstName(value);
        handleState?.('firstName', value.trim());
    };

    const handleLastName: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;

        setLastName(value);
        handleState?.('lastName', value.trim());
    };

    const handleEmail: ChangeEventHandler<HTMLInputElement> = (event) => {
        const value = event.target.value;

        handleState?.('email', value);
    };

    const onUpdateUserInfo = async () => {
        const response = await fetch('/api/user/info', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Tells the server you're sending JSON data
            },
            body: JSON.stringify({
                id,
                firstName,
                lastName,
                email,
            }),
        });

        if (!response.ok) {
            const error = await response.json();

            setError(error);
        }
    };

    return (
        <FormWrapper
            title="Profile Details"
            subTitle="Add your details to create a personal touch to you profile."
            onSave={onUpdateUserInfo}
        >
            <div className="px-5 py-4 bg-[#fafafa] rounded-md flex flex-col sm:flex-row sm:items-center">
                <span className="sm:w-1/3 text-gray-500">Profile picture</span>
                <div className="relative group sm:w-1/3 my-5 sm:my-5">
                    <Image
                        src="https://via.placeholder.com/1024"
                        alt="Profile"
                        className="rounded-md w-50 h-50 object-cover"
                        width={170}
                        height={170}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 rounded-md flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer w-[170px] h-[170px]">
                        <span className="text-white text-sm flex flex-col items-center">
                            <IoImageOutline className="text-3xl" />
                            Change Image
                        </span>
                    </div>
                </div>

                <div className="text-gray-500 text-sm">
                    <span>Image must be bellow 1024x1024px.</span> <br />
                    <span>Use PNG, JPG or BMP format.</span>
                </div>
            </div>

            <div className="mt-3 px-5 py-4 bg-[#fafafa] rounded-md flex flex-col items-center">
                <TextInput
                    label="First Name"
                    value={firstName}
                    onChange={handleFirstName}
                    error={error?.firstName}
                />
                <TextInput
                    label="Last Name"
                    value={lastName}
                    onChange={handleLastName}
                    error={error?.lastName}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    error={error?.email}
                />
            </div>
        </FormWrapper>
    );
}
