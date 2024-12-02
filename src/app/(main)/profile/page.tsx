"use client";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Check, SquarePen, X } from "lucide-react";
import { useState } from "react";

export default function Page() {
    const [isEdit, setEdit] = useState(false);
    const [profile, setProfile] = useState({
        name: "",
        username: "",
        email: "",
        phoneNumber: "",
    });

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;

        setProfile((prevProfile) => ({ ...prevProfile, [id]: value }));
    };

    return (
        <div className="grid h-[calc(100vh_-_4rem)] place-items-center pt-4 lg:pt-0">
            <div className="flex w-full flex-col items-center gap-5 px-6 md:px-16 lg:px-44">
                <div className="flex w-full flex-col items-center justify-between gap-4 sm:flex-row sm:gap-0 lg:px-4">
                    <div className="flex items-center gap-3 sm:mt-0">
                        <Avatar className="h-[80px] w-[80px]">
                            <AvatarImage
                                src="https://picsum.photos/200/200"
                                alt="profile"
                            />
                            <AvatarFallback>😺</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex items-center gap-3">
                        <Button
                            variant={isEdit ? "default" : "outline"}
                            onClick={() => {
                                if (isEdit) {
                                    alert("Profile berhasil diubah");
                                }

                                return setEdit(!isEdit);
                            }}
                        >
                            {isEdit ? <Check /> : <SquarePen />}
                            {isEdit ? "Submit" : "Edit Profile"}
                        </Button>
                        {isEdit && (
                            <Button
                                variant="destructive"
                                onClick={() => {
                                    setProfile({
                                        name: "",
                                        username: "",
                                        email: "",
                                        phoneNumber: "",
                                    });

                                    return setEdit(false);
                                }}
                            >
                                <X />
                                Cancel
                            </Button>
                        )}
                    </div>
                </div>
                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>Profile</CardTitle>
                    </CardHeader>
                    <CardContent className="grid gap-3">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            type="text"
                            id="name"
                            value={profile.name}
                            onChange={inputHandler}
                            placeholder="John Doe"
                            disabled={!isEdit}
                        ></Input>
                        <Label htmlFor="username">Username</Label>
                        <Input
                            type="text"
                            id="username"
                            value={profile.username}
                            onChange={inputHandler}
                            placeholder="john_doe"
                            disabled={!isEdit}
                        ></Input>
                        <Label htmlFor="email">Email</Label>
                        <Input
                            type="email"
                            id="email"
                            value={profile.email}
                            onChange={inputHandler}
                            placeholder="JohnDoe@gmail.com"
                            disabled={!isEdit}
                        ></Input>
                        <Label htmlFor="phone">Phone Number</Label>
                        <Input
                            type="tel"
                            id="phone"
                            value={profile.phoneNumber}
                            onChange={inputHandler}
                            placeholder="+62 0000 0000"
                            disabled={!isEdit}
                        ></Input>
                    </CardContent>
                    <CardFooter></CardFooter>
                </Card>
            </div>
        </div>
    );
}
