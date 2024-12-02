"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ModeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <Button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            variant="ghost"
            className="justify-start text-base [&_svg]:size-6"
        >
            <Sun className="mr-3 h-6 w-6 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute mr-3 h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            Toggle Theme
        </Button>
    );
}
