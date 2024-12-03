import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { GraduationCap, Home, LogOut, UserRoundPen } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Separator } from "../ui/separator";
import { ModeToggle } from "../ModeToggle";
import { Button } from "../ui/button";
import Link from "next/link";

export default function ProfilePopover() {
    return (
        <Popover>
            <PopoverTrigger>
                <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10 sm:h-8 sm:w-8">
                        <AvatarImage
                            src="https://picsum.photos/200/200"
                            alt="profile"
                        />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                </div>
            </PopoverTrigger>
            <PopoverContent className="mt-[-0.5rem] grid rounded-xl p-0 text-muted-foreground sm:mt-2">
                <div className="flex items-center gap-2 p-3">
                    <Avatar className="h-[40px] w-[40px]">
                        <AvatarImage
                            src="https://picsum.photos/200/200"
                            alt="profile"
                        />
                        <AvatarFallback>AR</AvatarFallback>
                    </Avatar>
                    <div>
                        <h2 className="text-foreground">Azhar Rizqullah</h2>
                        <p className="text-sm">azhar@rizqullah.com</p>
                    </div>
                </div>

                <Separator />

                <div className="grid p-2">
                    <Button
                        variant="ghost"
                        className="justify-start text-base [&_svg]:size-6"
                        asChild
                    >
                        <Link href="/profile">
                            <UserRoundPen className="mr-3" />
                            Profile
                        </Link>
                    </Button>

                    <ModeToggle />

                    <Button
                        variant="ghost"
                        className="justify-start text-base md:hidden [&_svg]:size-6"
                        asChild
                    >
                        <Link href="/home">
                            <Home className="mr-3" />
                            Home
                        </Link>
                    </Button>

                    <Button
                        variant="ghost"
                        className="justify-start text-base md:hidden [&_svg]:size-6"
                        asChild
                    >
                        <Link href="/courses">
                            <GraduationCap className="mr-3" />
                            Courses
                        </Link>
                    </Button>
                </div>

                <Separator />

                <div className="grid p-2">
                    <Button
                        variant="ghost"
                        className="justify-start text-base [&_svg]:size-6"
                        asChild
                    >
                        <Link href="">
                            <LogOut className="mr-3 h-6 w-6" />
                            Log Out
                        </Link>
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
}
