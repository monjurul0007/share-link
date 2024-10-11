'use client';

import { FC, ReactNode, createContext, useMemo, useState } from 'react';
import { UserLink } from '@/models/Links';
import { IUser } from '@/models/db/Users';
import { divideString } from '@/utils/string';

interface MobileUiContextProps {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    links: UserLink[];
    handleState?: (name: keyof MobileUiContextProps, value: string | UserLink[]) => void;
}

export const MobileUiContext = createContext<MobileUiContextProps>({
    id: undefined,
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    links: [],
});

export const MobileUiContextProvider: FC<{ user: IUser | null; children: ReactNode }> = ({
    user,
    children,
}) => {
    const [fName, lName] = divideString(user?.name || '');
    const [firstName, setFirstName] = useState(
        user?.firstName && user.lastName ? user.firstName : fName,
    );
    const [lastName, setLastName] = useState(
        user?.firstName && user?.lastName ? user.lastName : lName,
    );
    const [email, setEmail] = useState(user?.email);
    const [links, setLinks] = useState<UserLink[]>(user?.links || []);

    const handleState = (name: keyof MobileUiContextProps, value: string | UserLink[]) => {
        switch (name) {
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
                setLinks(value as UserLink[]);
                break;
            default:
                break;
        }
    };

    const contextValue = useMemo(
        () => ({
            id: user?.id || '',
            firstName,
            lastName,
            email,
            links,
            handleState,
        }),
        [email, firstName, lastName, links],
    );

    return <MobileUiContext.Provider value={contextValue}>{children}</MobileUiContext.Provider>;
};
