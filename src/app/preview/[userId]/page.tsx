import LinkButtons from '@/components/LinkButtons';
import UserInfo from '@/components/UserInfo';
import { IUser } from '@/models/db/Users';
import { getUserById } from '@/services/userService';

export default async function InfoPage({ params }: { params: { userId: string } }) {
    const { userId } = params;
    const userInfo: IUser | null = await getUserById(userId);

    if (!userInfo) {
        throw new Error('User not found');
    }

    return (
        <div className="bg-white rounded-lg shadow-lg mt-8 px-6 py-10 text-center sm:w-80 w-screen sm:h-min h-screen">
            <UserInfo
                imageBufferString={JSON.stringify(userInfo?.imageData)}
                firstName={userInfo.firstName}
                lastName={userInfo.lastName}
                email={userInfo.email}
            />
            <LinkButtons links={userInfo.links || []} className="mt-10" />
        </div>
    );
}
