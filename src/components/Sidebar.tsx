"use client";

import { Search, SidebarIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChangeEventHandler, useEffect, useRef, useState } from "react";
import Link from "next/link";

const defaultLinks = [
    { href: "/courses/materials/1", title: "Blueprint of Life" },
    { href: "/courses/materials/2", title: "Properties of a DNA" },
    { href: "/courses/materials/3", title: "Nucleobase Classification" },
    { href: "/courses/materials/4", title: "Amount of DNA" },
    { href: "/courses/materials/5", title: "Sense and Antisense" },
];

export default function Sidebar() {
    const [sidebarState, setSidebarState] = useState(true);
    const [links, setLinks] = useState(defaultLinks);
    const searchRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        window?.addEventListener("resize", (e) => {
            const window = e.target as Window;
            if (window.innerWidth <= 768) {
                setSidebarState(false);
            }
        });
    }, []);

    const search: ChangeEventHandler<HTMLInputElement> = (e) => {
        setLinks(
            defaultLinks.filter((link) => {
                return link.title.toLowerCase().startsWith(e.target.value);
            }),
        );
    };

    if (!sidebarState) {
        return (
            <aside className="sticky top-28 hidden h-fit gap-2 rounded-md border p-1 sm:grid">
                <Button
                    onClick={() => setSidebarState(!sidebarState)}
                    variant="ghost"
                    size="icon"
                    className="[&_svg]:size-auto"
                >
                    <SidebarIcon />
                </Button>
                <Button
                    onClick={() => {
                        setSidebarState(true);
                        searchRef.current?.focus();
                    }}
                    variant="ghost"
                    size="icon"
                    className="[&_svg]:size-auto"
                >
                    <Search />
                </Button>
            </aside>
        );
    }

    return (
        <aside className="sticky top-28 h-fit w-52 flex-shrink-0">
            <div className="mb-2 flex items-center justify-between">
                <h1 className="font-bold">DNA</h1>
                <Button
                    onClick={() => setSidebarState(!sidebarState)}
                    variant="ghost"
                    size="icon"
                    className="[&_svg]:size-auto"
                >
                    <SidebarIcon />
                </Button>
            </div>
            <Input
                ref={searchRef}
                onChange={search}
                placeholder="Search"
                className="mb-4"
            />
            {links.map((link) => (
                <Button
                    key={link.href}
                    variant="link"
                    className="px-0 text-foreground"
                    asChild
                >
                    <Link href={link.href}>{link.title}</Link>
                </Button>
            ))}
        </aside>
    );
}
