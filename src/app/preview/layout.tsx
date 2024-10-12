export default async function PreviewLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <div className="container mx-auto">{children}</div>;
}
