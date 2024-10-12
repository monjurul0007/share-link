import LinkButtons from '@/components/LinkButtons';
import PreviewNavBar from '@/components/PreviewNavBar';
import UserInfo from '@/components/UserInfo';
import { authOptions } from '@/lib/nextauth';
import { CustomSession } from '@/models/Session';
import { IUser } from '@/models/db/Users';
import { getUserById } from '@/services/userService';
import { getServerSession } from 'next-auth';

export default async function InfoPage({ params }: { params: { userId: string } }) {
    const { userId } = params;
    const session = await getServerSession(authOptions);
    const userInfo: IUser | null = await getUserById(userId);

    if (!userInfo) {
        throw new Error('User not found');
    }

    return (
        <div className="relative h-[300px] flex justify-center sm:bg-purple-700 bg-white rounded-b-2xl ">
            {session?.user && userInfo.id === (session.user as CustomSession).id && (
                <PreviewNavBar />
            )}
            <div className="absolute top-[150px] w-full flex justify-center">
                <div className="bg-white rounded-lg shadow-lg mt-8 px-6 py-10 text-center sm:w-80 w-screen sm:h-min h-screen">
                    <UserInfo
                        imageBufferString={JSON.stringify(userInfo?.imageData)}
                        firstName={userInfo.firstName}
                        lastName={userInfo.lastName}
                        email={userInfo.email}
                    />
                    <LinkButtons links={userInfo.links || []} className="mt-10" />
                </div>
            </div>
        </div>
    );
}
