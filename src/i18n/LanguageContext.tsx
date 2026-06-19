import { useEffect, useMemo, useState, type ReactNode } from "react";
import { getInitialLanguage, LanguageContext, translations, type Language, type LanguageContextValue } from "./language";

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>(getInitialLanguage);

    const setLanguage = (nextLanguage: Language) => {
        setLanguageState(nextLanguage);
    };

    const toggleLanguage = () => {
        setLanguageState((currentLanguage) => (currentLanguage === "en" ? "es" : "en"));
    };

    useEffect(() => {
        window.localStorage.setItem("denx-language", language);
        document.documentElement.lang = language;
    }, [language]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage,
            toggleLanguage,
            t: (key) => translations[language][key],
        }),
        [language]
    );

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}
