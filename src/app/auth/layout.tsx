export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="dark flex h-screen text-foreground">
            <div className="grid w-full items-center bg-background px-8 sm:w-[35rem] sm:px-20">
                {children}
            </div>
            <div className="hidden flex-grow bg-background/95 sm:block"></div>
        </div>
    );
}
