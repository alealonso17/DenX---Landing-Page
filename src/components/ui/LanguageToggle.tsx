import { useLanguage } from "../../i18n/language";

export default function LanguageToggle() {
    const { language, setLanguage, t } = useLanguage();

    return (
        <div
            className="inline-flex rounded-full border border-white/70 bg-white/55 p-1 shadow-lg shadow-[#1F2937]/5 backdrop-blur-xl"
            aria-label={t("language.label")}
        >
            {(["en", "es"] as const).map((option) => (
                <button
                    key={option}
                    type="button"
                    onClick={() => setLanguage(option)}
                    className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition ${
                        language === option ? "bg-[#12B981] text-white" : "text-[#5B6B82] hover:text-[#12B981]"
                    }`}
                    aria-pressed={language === option}
                >
                    {option}
                </button>
            ))}
        </div>
    );
}
