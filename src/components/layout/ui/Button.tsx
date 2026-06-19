type ButtonVariant = "primary" | "secondary" | "inverted" | "outline";

type ButtonProps = {
    text: string;
    type: ButtonVariant;
};

const buttonStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#12B981] text-white border border-[#12B981] rounded",
    secondary: "bg-[#F4F0F0] text-[#33453D] border border-[#F4F0F0] rounded",
    inverted: "bg-[#2F2D2D] text-white border border-[#2F2D2D] rounded",
    outline: "bg-transparent text-[#33453D] border border-[#71847C] rounded",
};

export default function Button({ text, type }: ButtonProps) {
    return (
        <button
            type="button"
            className={`inline-flex text-[13px] items-center justify-center px-7 py-3 font-medium transition-colors duration-200 hover:opacity-90 ${buttonStyles[type]}`}
        >
            {text}
        </button>
    )
}
