import { Search } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Button } from "../ui/button";

export default function SearchModal() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <div>
                    <Button
                        variant="outline"
                        className="relative hidden w-40 px-3 py-2 text-start md:block [&_svg]:size-auto"
                    >
                        <Search className="absolute left-0 top-0 mx-3 my-2" />
                        <p className="pl-8 text-muted-foreground">
                            Search here...
                        </p>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="block cursor-pointer p-2 md:hidden [&_svg]:size-auto"
                    >
                        <Search />
                    </Button>
                </div>
            </DialogTrigger>
            <DialogContent className="m-2 gap-0 rounded-md p-0">
                <VisuallyHidden asChild>
                    <DialogTitle>Search</DialogTitle>
                </VisuallyHidden>
                <div className="relative border-b">
                    <Search className="absolute left-0 top-0 mx-4 my-4" />
                    <input
                        type="text"
                        placeholder="Search here..."
                        className="w-full rounded-md border-none bg-background px-14 py-4 text-xl focus:outline-none"
                    />
                </div>
                <div className="p-8 text-center">No recent searches.</div>
            </DialogContent>
        </Dialog>
    );
}
