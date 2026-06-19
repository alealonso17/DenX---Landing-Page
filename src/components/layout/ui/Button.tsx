type ButtonVariant = "primary" | "secondary" | "inverted" | "outline";

type ButtonProps = {
    text: string;
    type: ButtonVariant;
    icon?: React.ReactNode;
};

const buttonStyles: Record<ButtonVariant, string> = {
    primary: "bg-[#12B981] text-white  rounded cursor-pointer hover:bg-[#016D49]",
    secondary: "bg-[#F4F0F0] text-[#33453D]  rounded cursor-pointer hover:bg-[#E0E0E0]",
    inverted: "bg-[#2F2D2D] text-white  rounded cursor-pointer hover:bg-[#1A1818]",
    outline: "bg-transparent text-[#33453D]  rounded cursor-pointer hover:bg-[#E0E0E0] border-[#E2E8F0] border",
};

export default function Button({ text, type, icon}: ButtonProps) {
    return (
        <button
            type="button"
            className={`inline-flex text-[13px] items-center justify-center px-7 py-3 font-medium transition-colors duration-200  ${buttonStyles[type]}`}
        >
            {icon && <div className='mr-3'>{icon}</div>}
            {text}
        </button>
    )
}
