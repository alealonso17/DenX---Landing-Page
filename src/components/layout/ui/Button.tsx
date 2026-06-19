type ButtonVariant = "primary" | "secondary" | "inverted" | "outline";

type ButtonProps = {
    text: string;
    type: ButtonVariant;
};

const buttonStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#12B981] text-white  rounded cursor-pointer hover:bg-[#016D49]",
    secondary: "bg-[#F4F0F0] text-[#33453D]  rounded cursor-pointer hover:bg-[#E4E0E0]",
    inverted: "bg-[#2F2D2D] text-white  rounded cursor-pointer hover:bg-[#1A1818]",
    outline: "bg-transparent text-[#33453D]  rounded cursor-pointer hover:bg-[#E4E0E0]",
};

export default function Button({ text, type }: ButtonProps) {
    return (
        <button
            type="button"
            className={`inline-flex text-[13px] items-center justify-center px-7 py-3 font-medium transition-colors duration-200  ${buttonStyles[type]}`}
        >
            {text}
        </button>
    )
}
