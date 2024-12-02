import Nav from "@/components/navbar/Nav";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            <Nav />
            <main>{children}</main>
        </>
    );
}
