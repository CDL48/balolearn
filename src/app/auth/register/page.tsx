"use client";

import BalolearnLogo from "@/components/BalolearnLogo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";

export default function Page() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function submitHandler(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();

        // TODO
    }

    return (
        <form onSubmit={submitHandler} className="grid gap-4">
            <hgroup>
                <BalolearnLogo className="h-16 w-20" />
                <h1 className="text-2xl">Bello there!</h1>
            </hgroup>
            <div>
                <Label>Email</Label>
                <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your username..."
                />
            </div>
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
            <div>
                <Label>Confirm Password</Label>
                <div className="relative">
                    <button
                        onClick={() =>
                            setShowConfirmPassword(!showConfirmPassword)
                        }
                        className="absolute right-0 ml-10 p-2 hover:opacity-70"
                    >
                        {showConfirmPassword ? <EyeOff /> : <Eye />}
                    </button>
                    <Input
                        type={showConfirmPassword ? "input" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Enter your password again..."
                    />
                </div>
            </div>
            <Button className="mt-2 sm:w-fit">Register</Button>
            <p className="text-sm">
                Already have an account?{" "}
                <Link
                    href="/auth/login"
                    className="text-blue-300 hover:underline"
                >
                    Login here.
                </Link>
            </p>
        </form>
    );
}
