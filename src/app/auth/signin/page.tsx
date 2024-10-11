import { redirect } from 'next/navigation';
import SignInSection from '@/components/SignInSection';
import { getServerSession } from 'next-auth';

export default async function SignInPage() {
    const session = await getServerSession();

    if (session?.user) {
        redirect('/');
    }

    return (
        <div className="flex justify-center pt-40">
            <SignInSection />
        </div>
    );
}
