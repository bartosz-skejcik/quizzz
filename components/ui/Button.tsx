import React from "react";

type Props = {
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => any;
    children: React.ReactNode;
    variant: "primary" | "error" | "warning";
    Icon?: React.ReactNode;
    size: "sm" | "md" | "lg";
    width: string;
    className?: string;
};

export default function Button({
    onClick,
    children,
    variant,
    Icon,
    size,
    width,
    className,
}: Props) {
    const classNames = (): string => {
        switch (variant) {
            case "primary":
                return `flex flex-row items-center justify-center bg-primary rounded-xl`;
            case "error":
                return `flex flex-row items-center justify-center bg-error rounded-xl`;
            case "warning":
                return `flex flex-row items-center justify-center bg-warning rounded-xl`;
        }
    };

    return (
        <button
            onClick={onClick}
            className={`${classNames()} text-neutral-100 font-semibold ${
                size == "sm"
                    ? "px-2 py-1 text-base"
                    : size == "md"
                    ? "px-3 py-2 text-lg"
                    : "px-4 py-3 text-xl"
            } ${width} ${className}`}
        >
            {children}
            {Icon}
        </button>
    );
}
