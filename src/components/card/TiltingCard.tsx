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
                className="language-css pre relative rounded-2xl bg-background p-8 text-xl font-bold lg:text-2xl"
            >
                <code className="language-css">
                    <span className="token selector">.exquisite</span>
                    <span className="token punctuation">{" {\n"}</span>
                    <span className="token property">{"    "}display</span>
                    <span className="token punctuation">:</span> grid
                    <span className="token punctuation">;{"\n"}</span>
                    <span className="token property">{"    "}gap</span>
                    <span className="token punctuation">:</span> 2rem
                    <span className="token punctuation">;{"\n"}</span>
                    <span className="token punctuation">{"}"}</span>
                </code>
            </pre>
        </div>
    );
}
