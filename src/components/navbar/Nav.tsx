import Link from "next/link";
import BalolearnLogo from "../BalolearnLogo";
import { Button } from "../ui/button";
import SearchModal from "./SearchModal";
import ProfilePopover from "./ProfilePopover";

export default function Nav() {
    return (
        <nav className="fixed left-0 top-0 flex w-full items-center justify-between gap-2 border-b bg-background px-8 py-4 md:px-16 lg:px-32">
            <div className="flex items-center gap-2">
                <BalolearnLogo className="w-40" namePosition="right" />
            </div>
            <div className="hidden md:block">
                <Button variant="link" className="text-xl text-foreground">
                    <Link href="/Home">Home</Link>
                </Button>
                <Button variant="link" className="text-xl text-foreground">
                    <Link href="/courses">Courses</Link>
                </Button>
            </div>
            <div className="flex items-center gap-4">
                <SearchModal />
                <ProfilePopover />
            </div>
        </nav>
    );
}