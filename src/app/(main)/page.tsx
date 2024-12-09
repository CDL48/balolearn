"use client";

import Scroller from "@/components/scroller/Scroller";
import TiltingCard from "@/components/card/TiltingCard";
import { Button } from "@/components/ui/button";
import {
    BookOpenText,
    BookPlus,
    BookUp2,
    ChevronDown,
    LucideProps,
    NotebookPen,
} from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes, useRef } from "react";
import Link from "next/link";

function Feature({
    icon: Icon,
    title,
    text,
    orientation,
}: {
    icon: ForwardRefExoticComponent<
        Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
    >;
    title: string;
    text: string;
    orientation: "left" | "right";
}) {
    return (
        <div
            className={`flex items-center gap-10 ${orientation === "right" && "flex-row-reverse"}`}
        >
            <Icon className="hidden h-36 w-36 sm:block" />
            <div
                className={`max-w-96 ${orientation === "right" && "text-right"}`}
            >
                <h2 className="mb-2 font-serif text-3xl font-bold">{title}</h2>
                <p>{text}</p>
            </div>
        </div>
    );
}

export default function Page() {
    const featuresRef = useRef<HTMLElement>(null);

    return (
        <div>
            <section className="-mt-16 flex h-screen items-center justify-center gap-8 md:gap-16">
                <div className="max-w-[36rem] text-center md:text-left">
                    <h1 className="mb-4 font-serif text-6xl font-bold md:text-5xl lg:text-7xl">
                        Learn and Share,{" "}
                        <span className="italic">Anywhere.</span>
                    </h1>
                    <p className="mb-4 text-2xl">
                        Free/Libre and Open Source Course Platform.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 md:justify-start">
                        <Button className="w-36 py-6 text-xl" asChild>
                            <Link href={"/courses"}>Get Started</Link>
                        </Button>
                        <Button
                            variant="outline"
                            className="w-36 py-6 text-xl"
                            onClick={() => {
                                featuresRef.current?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                        >
                            Explore
                            <ChevronDown />
                        </Button>
                    </div>
                </div>
                <TiltingCard />
            </section>

            <section className="mx-auto my-24">
                <h2 className="mb-12 text-center font-serif text-5xl font-bold">
                    Top Comments
                </h2>
                <Scroller direction="normal" />
                <Scroller direction="reverse" />
            </section>

            <section ref={featuresRef} className="mx-auto my-44">
                <h2 className="mb-24 text-center font-serif text-5xl font-bold">
                    Our Features
                </h2>

                <div className="grid gap-12">
                    <Feature
                        icon={BookPlus}
                        title="Enroll Courses"
                        text="Anybody can browse available courses, enroll, and gain access to all course materials, activities, and quizzes within."
                        orientation="left"
                    />
                    <Feature
                        icon={BookOpenText}
                        title="Read Materials"
                        text="Anybody can access a variety of learning materials like text, videos, and documents to study independently at their own pace."
                        orientation="right"
                    />
                    <Feature
                        icon={NotebookPen}
                        title="Do Quizzes"
                        text="Anybody can complete quizzes with various question types, receiving immediate feedback, scores, and progress tracking to evaluate their understanding."
                        orientation="left"
                    />
                    <Feature
                        icon={BookUp2}
                        title="Upload Courses"
                        text="Anybody can create, manage, and upload new courses, including materials, assignments, and quizzes for students to enroll and learn."
                        orientation="right"
                    />
                </div>
            </section>
        </div>
    );
}
