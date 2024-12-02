import * as React from "react";

import { Badge } from "./badge";
import Image from "next/image";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

const CourseCard = ({
    className,
    slug,
    title,
    teacherName,
    rating,
    raterCount,
    tags,
    imageUrl,
    ...restProps
}: {
    className?: string;
    slug: string;
    title: string;
    teacherName: string;
    rating: number;
    raterCount: number;
    tags: string;
    imageUrl: string;
    restProps?: Record<string, unknown>;
}) => {
    console.log(slug);
    return (
        <a
            href={`/courses/${slug}`}
            className={cn(
                "grid cursor-pointer gap-2 rounded-lg border bg-card/30 p-4 text-card-foreground shadow-sm transition-[background-color_ease-in_250ms,_transform_ease-in_250ms] hover:scale-[1.025] hover:bg-accent",
                className,
            )}
            {...restProps}
        >
            <div
                className="relative aspect-square w-full overflow-hidden rounded-lg bg-[image:var(--course-img)]"
                style={
                    {
                        "--course-img": `url(${
                            imageUrl ||
                            "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                        })`,
                    } as React.CSSProperties
                }
            >
                <Image
                    src={
                        imageUrl ||
                        "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
                    }
                    fill={true}
                    className="object-contain backdrop-blur-lg backdrop-brightness-75"
                    alt={title + " Image"}
                />
            </div>
            <h3 className="text-lg font-semibold leading-5">{title}</h3>
            <h4 className="text-base text-muted-foreground">{teacherName}</h4>
            <div className="flex flex-wrap gap-2 text-base">
                <div className="flex gap-2">
                    <span>{rating.toFixed(1)}</span>
                    <div className="flex gap-1">
                        {Array.from({ length: 5 }, (_, i) =>
                            i <= Math.floor(rating) - 1 ? (
                                <Star key={i} className="w-4 fill-foreground" />
                            ) : i === Math.ceil(rating) - 1 ? (
                                <div key={i} className="relative">
                                    <Star className="w-4 fill-none" />
                                    <div
                                        className="absolute left-0 top-0 w-[calc(1rem*var(--remainder))] overflow-hidden"
                                        style={
                                            {
                                                "--remainder": rating % 1,
                                            } as React.CSSProperties
                                        }
                                    >
                                        <Star className="w-4 fill-foreground" />
                                    </div>
                                </div>
                            ) : (
                                <Star key={i} className="w-4 fill-none" />
                            ),
                        )}
                    </div>
                </div>
                <span>({raterCount.toLocaleString()})</span>
            </div>
            <div className="flex w-full gap-2 overflow-x-auto">
                {tags.split(",").map((tag) => (
                    <Badge variant="secondary" key={tag}>
                        {tag}
                    </Badge>
                ))}
            </div>
        </a>
    );
};

export { CourseCard };
