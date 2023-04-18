type Props = {
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => any;
    value: string;
    placeholder: string;
    width: string;
    variant: "primary" | "neutral" | "error" | "warning";
    errorMessage?: string;
};

export default function Input({
    type,
    onChange,
    value,
    placeholder,
    width,
    variant,
    errorMessage,
}: Props) {
    const classNames = (): string => {
        switch (variant) {
            case "primary":
                return `w-full px-3 py-1 border-2 rounded-lg placeholder:text-neutral-400 border-neutral-400 outline-primary`;
            case "neutral":
                return `w-full px-3 py-1 border-2 rounded-lg placeholder:text-neutral-400 border-neutral-400 outline-black`;
            case "error":
                return `w-full px-3 py-1 border-2 rounded-lg placeholder:text-neutral-400 border-error`;
            case "warning":
                return `w-full px-3 py-1 border-2 rounded-lg placeholder:text-neutral-400 border-neutral-400 outline-warning`;
        }
    };
    return (
        <div
            className={`flex flex-col items-start justify-center ${width} gap-1`}
        >
            <input
                type={type}
                onChange={(e) => onChange(e)}
                value={value}
                className={classNames()}
                placeholder={placeholder}
            />
            {errorMessage && (
                <p className="text-sm text-error">{errorMessage}</p>
            )}
        </div>
    );
}
