"use client";

import "./scrollerStyle.css";
import { useEffect, useRef } from "react";

export const items = [
    {
        reviewer: "Ilham Al Basith",
        comment: "Wah, kelasnya mantap parah",
    },
    {
        reviewer: "Rina Sari",
        comment: "Materinya mudah dipahami dan aplikatif, keren banget!",
    },
    {
        reviewer: "Azhar Rizz",
        comment: "Sangat membantu untuk pemula. Penjelasannya sangat jelas!",
    },
    {
        reviewer: "Budi Santoso",
        comment: "Saya merasa lebih percaya diri setelah mengikuti kelas ini.",
    },
    {
        reviewer: "Fajar Nugroho",
        comment:
            "Pengajaran yang sistematis, sangat bermanfaat untuk karir saya.",
    },
    {
        reviewer: "Aisyah Fitriani",
        comment: "Kursusnya lengkap dan selalu update, puas banget!",
    },
    {
        reviewer: "Kevin Wijaya",
        comment:
            "Pembelajaran interaktif dan mudah diikuti. Sangat direkomendasikan!",
    },
    {
        reviewer: "Dina Maharani",
        comment: "Berguna banget untuk meningkatkan skill di bidang teknologi.",
    },
    {
        reviewer: "Hendra Gunawan",
        comment:
            "Jelas dan terstruktur, pengajaran di Balolearn sangat berkualitas.",
    },
    {
        reviewer: "Lina Putri",
        comment: "Sangat bermanfaat, saya bisa belajar sambil bekerja.",
    },
    {
        reviewer: "Rudi Hartono",
        comment:
            "Saya sangat terkesan dengan metode pengajaran yang digunakan.",
    },
    {
        reviewer: "Vira Mutiara",
        comment:
            "Kursus ini memberikan wawasan baru yang sangat berguna dalam pekerjaan saya.",
    },
    {
        reviewer: "Farhan Prabowo",
        comment: "Konten yang disampaikan mudah dipahami, cocok untuk pemula.",
    },
    {
        reviewer: "Siti Zulaikha",
        comment: "Pelatihan yang sangat menyenangkan dan tidak membosankan.",
    },
    {
        reviewer: "Ahmad Rizki",
        comment: "Kursus dengan materi yang lengkap dan mudah diakses.",
    },
    {
        reviewer: "Nina Kurniawati",
        comment:
            "Pengajar yang kompeten dan sangat mengerti materi yang diajarkan.",
    },
    {
        reviewer: "Eko Susanto",
        comment:
            "Saya jadi lebih ahli dalam bidang ini setelah mengikuti kursus di Balolearn.",
    },
    {
        reviewer: "Tika Lestari",
        comment: "Materinya sangat relevan dengan kebutuhan industri saat ini.",
    },
    {
        reviewer: "Gilang Ramadhan",
        comment: "Sangat puas dengan kualitas materi dan pengajarnya.",
    },
    {
        reviewer: "Wulan Aulia",
        comment:
            "Kursus yang sangat membantu karir saya. Terima kasih, Balolearn!",
    },
];
export default function Scroller({
    direction,
}: {
    direction: "forwards" | "reverse";
}) {
    const scroller = useRef<HTMLDivElement>(null);
    const innerScroller = useRef<HTMLUListElement>(null);

    useEffect(() => {
        if (scroller.current) {
            console.log(direction);
            scroller.current.setAttribute("data-direction", direction);
        }

        if (innerScroller.current) {
            const scrollerContent = Array.from(innerScroller.current.children);

            scrollerContent.forEach((item) => {
                if (innerScroller.current) {
                    const duplicatedItem = item.cloneNode(true);
                    innerScroller.current.appendChild(duplicatedItem);
                }
            });
        }
    }, [direction]);

    return (
        <div ref={scroller} className="scroller">
            <ul
                ref={innerScroller}
                className="inner-scroller *:rounded-xl *:bg-background *:px-6 *:py-4 *:shadow-xl"
            >
                {items.map((item) => (
                    <li key={item.reviewer}>
                        <div className="grid max-w-52 gap-2">
                            <h3 className="text-xl font-bold">
                                {item.reviewer}
                            </h3>
                            <p className="text-sm text-muted-foreground">
                                {item.comment}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}
