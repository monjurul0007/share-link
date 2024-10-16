'use client';

import { FC, ReactNode, createContext, useMemo, useState } from 'react';
import { UserLinks } from '@/models/api/userLink';
import { IUser } from '@/models/db/Users';
import { generateImageLink } from '@/utils/image';
import { divideString } from '@/utils/string';

interface MobileUiContextProps {
    id?: string;
    imageSrc?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    links: UserLinks[];
    handleState?: (name: keyof MobileUiContextProps, value: string | UserLinks[]) => void;
}

export const MobileUiContext = createContext<MobileUiContextProps>({
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    imageSrc: undefined,
    links: [],
});

export const MobileUiContextProvider: FC<{
    userDataString: string | null;
    children: ReactNode;
}> = ({ userDataString, children }) => {
    const user = JSON.parse(userDataString || '{}') as IUser;
    const imageUrl = generateImageLink(user?.imageData);
    const [fName, lName] = divideString(user?.name || '');
    const [firstName, setFirstName] = useState(
        user?.firstName && user.lastName ? user.firstName : fName,
    );
    const [lastName, setLastName] = useState(
        user?.firstName && user?.lastName ? user.lastName : lName,
    );
    const [email, setEmail] = useState(user?.email);
    const [links, setLinks] = useState<UserLinks[]>(user?.links || []);
    const [imageSrc, setImageSrc] = useState<string | undefined>(imageUrl);

    const handleState = (name: keyof MobileUiContextProps, value: string | UserLinks[]) => {
        switch (name) {
            case 'imageSrc':
                setImageSrc(value as string);
                break;
            case 'firstName':
                setFirstName(value as string);
                break;
            case 'lastName':
                setLastName(value as string);
                break;
            case 'email':
                setEmail(value as string);
                break;
            case 'links':
                setLinks(value as UserLinks[]);
                break;
            default:
                break;
        }
    };

    const contextValue = useMemo(
        () => ({
            id: user?.id || '',
            imageSrc,
            firstName,
            lastName,
            email,
            links,
            handleState,
        }),
        [email, firstName, imageSrc, lastName, links, user?.id],
    );

    return <MobileUiContext.Provider value={contextValue}>{children}</MobileUiContext.Provider>;
};
