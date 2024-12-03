"use client";

import "./scrollerStyle.css";
import { useEffect, useRef } from "react";

const items = [
    "Biology",
    "Mathematics",
    "Physics",
    "Programming",
    "Chemistry",
    "Technology",
    "Calculus",
];

export default function Scroller() {
    const scroller = useRef<HTMLDivElement>(null);
    const innerScroller = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (innerScroller.current) {
            const scrollerContent = Array.from(innerScroller.current.children);

            scrollerContent.forEach((item) => {
                if (innerScroller.current) {
                    const duplicatedItem = item.cloneNode(true);
                    innerScroller.current.appendChild(duplicatedItem);
                }
            });
        }
    }, []);

    return (
        <div ref={scroller} className="scroller pb-8">
            <ul
                ref={innerScroller}
                className="inner-scroller *:rounded-xl *:bg-background *:px-10 *:py-6 *:text-2xl *:shadow-xl"
            >
                {items.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    );
}
