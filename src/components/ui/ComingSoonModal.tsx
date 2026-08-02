import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "../../i18n/language";

type ComingSoonModalProps = {
    isOpen: boolean;
    onClose: () => void;
};

function ClockIcon() {
    return (
        <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
            <path d="M12 7.5V12l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
}

export default function ComingSoonModal({ isOpen, onClose }: ComingSoonModalProps) {
    const { t } = useLanguage();

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") onClose();
        };

        window.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                    <motion.button
                        type="button"
                        aria-label={t("comingSoon.close")}
                        onClick={onClose}
                        className="absolute inset-0 h-full w-full cursor-default bg-[#0F1F19]/25 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                    />

                    <motion.div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="coming-soon-title"
                        className="relative w-full max-w-md overflow-hidden rounded-[2rem] border border-white/70 bg-white/90 p-7 text-center shadow-2xl shadow-[#1F2937]/20 backdrop-blur-2xl sm:p-9"
                        initial={{ opacity: 0, y: 16, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 12, scale: 0.98 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                        <span className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#E6F6EF] text-[#12B981]">
                            <ClockIcon />
                        </span>

                        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#E6F6EF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E8A61]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#12B981]" />
                            {t("comingSoon.badge")}
                        </span>

                        <h2 id="coming-soon-title" className="mb-3 text-2xl font-bold tracking-tight text-[#171717]">
                            {t("comingSoon.title")}
                        </h2>

                        <p className="mb-7 text-sm leading-6 text-[#5B6B82]">{t("comingSoon.description")}</p>

                        <button
                            type="button"
                            autoFocus
                            onClick={onClose}
                            className="inline-flex w-full items-center justify-center rounded bg-[#12B981] px-7 py-3 text-[13px] font-medium text-white transition-colors duration-200 hover:bg-[#016D49] sm:w-auto"
                        >
                            {t("comingSoon.close")}
                        </button>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}
