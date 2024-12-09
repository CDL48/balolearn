import Footer from "@/components/Footer";
import Nav from "@/components/navbar/Nav";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex min-h-screen flex-col">
            <Nav />
            <main className="min-h-[calc(100vh-10rem)] px-8 md:px-16 lg:px-32">
                {children}
            </main>
            <Footer />
        </div>
    );
}
