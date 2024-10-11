'use client';

import { FC, ReactNode, createContext, useMemo, useState } from 'react';
import { UserLink } from '@/models/Links';

interface MobileUiContextProps {
    firstName?: string;
    lastName?: string;
    email?: string;
    links: UserLink[];
    handleState?: (name: keyof MobileUiContextProps, value: string | UserLink[]) => void;
}

export const MobileUiContext = createContext<MobileUiContextProps>({
    firstName: undefined,
    lastName: undefined,
    email: undefined,
    links: [],
});

export const MobileUiContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [links, setLinks] = useState<UserLink[]>([]);

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
