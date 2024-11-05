import { twMerge } from "tailwind-merge";

export default function BalolearnLogo({ className }: { className?: string }) {
    return (
        <div
            className={twMerge([
                "grid place-content-center text-inherit",
                className,
            ])}
        >
            <svg
                className="w-full"
                width="198"
                height="116"
                viewBox="0 0 198 116"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M0.33606 65.8261H82.6187V115.196H0.33606V65.8261Z"
                    fill="currentColor"
                />
                <path
                    d="M0.33606 0H41.4774V49.3696H0.33606V0Z"
                    fill="currentColor"
                />
                <path
                    d="M156.673 65.8261H197.814V115.196H156.673V65.8261Z"
                    fill="currentColor"
                />
                <path
                    d="M99.0752 0H140.216V115.196H99.0752V0Z"
                    fill="currentColor"
                />
            </svg>
        </div>
    );
}
