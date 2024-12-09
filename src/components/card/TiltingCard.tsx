"use client";

import { useEffect, useRef } from "react";
import "./tiltingCardStyle.css";

export default function TiltingCard() {
    const preRef = useRef<HTMLPreElement>(null);

    function rotateElement(event: MouseEvent, element: HTMLPreElement | null) {
        if (!element) {
            return;
        }
        const x = event.clientX;
        const y = event.clientY;

        const rect = element.getBoundingClientRect();
        const middleX = rect.left + rect.width / 2;
        const middleY = rect.top + rect.height / 2;

        let offsetX = ((x - middleX) / middleX) * 30;
        let offsetY = ((y - middleY) / middleY) * 30;

        const MAX_ROTATION = 45;
        offsetX = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, offsetX));
        offsetY = Math.max(-MAX_ROTATION, Math.min(MAX_ROTATION, offsetY));

        element.style.setProperty("--rotateX", offsetX + "deg");
        element.style.setProperty("--rotateY", -offsetY + "deg");
    }

    useEffect(() => {
        document?.addEventListener("mousemove", (e) =>
            rotateElement(e, preRef.current),
        );
    }, []);

    return (
        <div className="container hidden max-w-[36rem] md:block">
            <pre
                ref={preRef}
                tabIndex={0}
                className="pre relative rounded-2xl bg-background p-8 text-xl font-bold before:absolute before:inset-3 before:z-[-1] before:rounded-2xl before:bg-black before:opacity-50 before:blur-[15px] before:content-[''] after:absolute after:inset-[-1rem] after:z-[-2] after:rounded-2xl after:bg-primary after:content-[''] lg:text-2xl"
            >
                <code className="text-gray-500 dark:text-gray-300">
                    <span className="text-red-700 dark:text-red-300">fn</span>
                    <span className="text-blue-700 dark:text-blue-300">
                        {" main"}
                    </span>
                    <span>{"() {\n"}</span>
                    <span>{"   "}</span>
                    <span className="text-purple-700 dark:text-purple-300">
                        println!
                    </span>
                    (
                    <span className="text-green-600 dark:text-green-200">
                        {'"Hello, World!"'}
                    </span>
                    );
                    <span>{"\n}"}</span>
                </code>
            </pre>
        </div>
    );
}
// bg-[hsl(240_21%_15%)]
