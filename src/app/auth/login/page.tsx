"use client";

import BalolearnLogo from "@/components/BalolearnLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function Page() {
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    async function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        const response = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        });

        if (response.ok) {
            router.push("/dashboard");
        }
    }

    return (
        <form onSubmit={submitHandler} className="grid gap-4">
            <hgroup>
                <BalolearnLogo className="h-16 w-20" />
                <h1 className="text-2xl">Bello there!</h1>
            </hgroup>
            <div>
                <Label>Username</Label>
                <Input
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Enter your username..."
                />
            </div>
            <div>
                <Label>Password</Label>
                <div className="relative">
                    <button
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-0 ml-10 p-2 hover:opacity-70"
                    >
                        {showPassword ? <EyeOff /> : <Eye />}
                    </button>
                    <Input
                        type={showPassword ? "input" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password..."
                    />
                </div>
            </div>
            <Button className="mt-2 sm:w-fit">Log In</Button>
            <p className="text-sm">
                Don&apos;t have an account?{" "}
                <Link
                    href="/auth/register"
                    className="text-blue-300 hover:underline"
                >
                    Register here.
                </Link>
            </p>
        </form>
    );
}
