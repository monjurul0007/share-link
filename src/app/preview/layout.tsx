import PreviewNavBar from '@/components/PreviewNavBar';
import { authOptions } from '@/lib/nextauth';
import { getServerSession } from 'next-auth';

export default async function PreviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession(authOptions);

    return (
        <div className="container mx-auto">
            <div className="relative h-[300px] flex justify-center sm:bg-purple-700 bg-white rounded-b-2xl ">
                {session?.user && <PreviewNavBar />}
                <div className="absolute top-[150px] w-full flex justify-center">{children}</div>
            </div>
        </div>
    );
}
