import MobileUI from '@/components/MobileUI';
import NavBar from '@/components/NavBar';
import { MobileUiContextProvider } from '@/contexts/MobileUiContext';
import { authOptions } from '@/lib/nextauth';
import { IUser } from '@/models/db/Users';
import { getUserById } from '@/services/userService';
import { getServerSession } from 'next-auth';

export default async function EditorLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);
    let userInfo: IUser | null = null;

    if (session?.user) {
        userInfo = await getUserById((session.user as IUser).id);
    }

    return (
        <div className="container mx-auto px-3 lg:px-0">
            <NavBar userId={userInfo?.id} />
            <div className="flex">
                <MobileUiContextProvider userDataString={JSON.stringify(userInfo)}>
                    <MobileUI />
                    {children}
                </MobileUiContextProvider>
            </div>
        </div>
    );
}
