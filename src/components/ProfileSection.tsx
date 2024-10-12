'use client';

import React, { ChangeEventHandler, useContext, useState } from 'react';
import { MobileUiContext } from '@/contexts/MobileUiContext';
import ImageInput from './Form/ImageInput';
import TextInput from './Form/TextInput';
import FormWrapper from './FormWrapper';

export default function ProfileSection() {
    const {
        id,
        firstName: fName,
        lastName: lName,
        email,
        imageSrc,
        handleState,
    } = useContext(MobileUiContext);
    const [firstName, setFirstName] = useState(fName || '');
    const [lastName, setLastName] = useState(lName || '');
    const [error, setError] = useState<Record<string, Record<'message', string>>>({});
    const [imageRawSrc, setImageRawSrc] = useState<File | undefined>();

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

    const handleImage = (file: File) => {
        const imageUrl = URL.createObjectURL(file);

        setImageRawSrc(file);
        handleState?.('imageSrc', imageUrl);
    };

    const onUpdateUserInfo = async () => {
        const formData = new FormData();
        formData.append('id', id as string);
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email as string);

        if (imageSrc) {
            formData.append('image', imageSrc);
        }

        setError({});

        const response = await fetch('/api/user/info', {
            method: 'PUT',
            body: formData,
        });

        if (!response.ok) {
            const error = await response.json();

            setError(error);
        } else {
            alert('Profile Information Updated!');
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
                <ImageInput
                    src={
                        imageRawSrc
                            ? URL.createObjectURL(imageRawSrc)
                            : imageSrc
                              ? imageSrc
                              : 'https://via.placeholder.com/1024'
                    }
                    onUpload={handleImage}
                />
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
                    error={error?.firstName?.message}
                />
                <TextInput
                    label="Last Name"
                    value={lastName}
                    onChange={handleLastName}
                    error={error?.lastName?.message}
                />
                <TextInput
                    label="Email"
                    value={email}
                    onChange={handleEmail}
                    error={error?.email?.message}
                />
            </div>
        </FormWrapper>
    );
}
