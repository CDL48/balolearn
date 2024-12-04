import Sidebar from "@/components/Sidebar";

export default function MainLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="relative mx-auto flex w-fit gap-10">
            <Sidebar />
            <section>{children}</section>
        </div>
    );
}
