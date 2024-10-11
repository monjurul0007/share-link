import MobileUI from '@/components/MobileUI';
import NavBar from '@/components/NavBar';
import { MobileUiContextProvider } from '@/contexts/MobileUiContext';

export default function ProfileLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="container mx-auto px-3 lg:px-0">
            <NavBar />
            <div className="flex">
                <MobileUiContextProvider>
                    <MobileUI />
                    {children}
                </MobileUiContextProvider>
            </div>
        </div>
    );
}
