import { useLanguage } from "../../i18n/language";

const featureCards = [
    {
        titleKey: "processing.extraction.title",
        descriptionKey: "processing.extraction.description",
        icon: (
            <path
                d="M7 4h7l3 3v13H7V4Zm7 0v4h4M10 12h5M10 15h7M10 18h4"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
    },
    {
        titleKey: "processing.matching.title",
        descriptionKey: "processing.matching.description",
        icon: (
            <>
                <path d="M5 7h4v4H5V7Zm10 0h4v4h-4V7ZM5 15h4v4H5v-4Zm10 0h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 9h6M9 17h6M7 11v4M17 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </>
        ),
        badgeKey: "processing.coreWorkflow",
    },
    {
        titleKey: "processing.review.title",
        descriptionKey: "processing.review.description",
        icon: (
            <path
                d="M12 4 4 8v5c0 4.2 3.2 6.5 8 8 4.8-1.5 8-3.8 8-8V8l-8-4Zm0 5v4M12 17h.01"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        ),
    },
] as const;

const alertRows = [
    {
        titleKey: "processing.alert.price.title",
        descriptionKey: "processing.alert.price.description",
        tone: "danger",
    },
    {
        titleKey: "processing.alert.quantity.title",
        descriptionKey: "processing.alert.quantity.description",
        tone: "neutral",
    },
] as const;

export default function ProductIntelligentProcessingSection() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:py-28">
            <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#12B981]/10 blur-3xl" />
            <div className="absolute right-12 bottom-16 h-56 w-56 rounded-full bg-white/70 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <header className="mb-14 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
                        {t("processing.title")}
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm leading-6 text-[#5B6B82]">
                        {t("processing.description")}
                    </p>
                </header>

                <div className="grid gap-6 md:grid-cols-3 md:items-stretch">
                    {featureCards.map((card, index) => (
                        <article
                            key={card.titleKey}
                            className={`group relative flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/65 sm:p-7 ${
                                index === 1 ? "md:col-span-2" : ""
                            } ${
                                index === 2 ? "md:min-h-[360px]" : ""
                            }`}
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-[#E6F6EF]/80 text-[#12B981] shadow-inner">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        {card.icon}
                                    </svg>
                                </div>
                                {"badgeKey" in card && (
                                    <span className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-semibold text-[#4F5F5A] backdrop-blur-xl">
                                        {t(card.badgeKey)}
                                    </span>
                                )}
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-[#242424]">{t(card.titleKey)}</h3>
                            <p className="max-w-xl text-sm leading-6 text-[#5B6B82]">{t(card.descriptionKey)}</p>

                            {index === 1 && (
                                <div className="mt-8 rounded-2xl border border-white/70 bg-white/45 px-5 py-5 backdrop-blur-xl">
                                    <div className="relative grid grid-cols-3 items-start gap-4">
                                        <div className="absolute left-[16%] right-[16%] top-7 hidden border-t border-dashed border-[#B9C8C1] sm:block" />
                                        <div className="absolute left-[35%] top-[18px] z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-white/80 text-[#4F5F5A] shadow-sm sm:flex">
                                            ✓
                                        </div>
                                        <div className="absolute right-[35%] top-[18px] z-10 hidden h-6 w-6 items-center justify-center rounded-full bg-white/80 text-[#4F5F5A] shadow-sm sm:flex">
                                            ✓
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#4F5F5A] shadow-sm">
                                                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <path d="M7 3h8l3 3v15H7V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                    <path d="M15 3v4h4M10 11h5M10 15h7M10 19h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#33453D]">PO</span>
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#4F5F5A] shadow-sm">
                                                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <path d="M4 7h10v9H4V7ZM14 10h3l3 3v3h-6v-6Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                    <path d="M7 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 18.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" stroke="currentColor" strokeWidth="1.8" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#33453D]">{t("processing.delivery")}</span>
                                        </div>

                                        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/80 text-[#4F5F5A] shadow-sm">
                                                <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                                    <path d="M7 3h10v18l-2-1.2L13 21l-2-1.2L9 21l-2-1.2V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                                                    <path d="M10 8h4M10 12h4M10 16h2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                                                    <path d="M15.5 15.5c0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5.7-1.5 1.5-1.5 1.5-.7 1.5-1.5S14.8 11 14 11s-1.5.7-1.5 1.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                                                </svg>
                                            </div>
                                            <span className="text-sm font-bold text-[#33453D]">{t("processing.invoice")}</span>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </article>
                    ))}

                    <article className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl sm:p-7 md:col-span-2">
                        <div className="grid gap-8 md:grid-cols-[0.9fr_1.5fr] md:items-center">
                            <div>
                                <div className="mb-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-white/70 text-[#4F5F5A] shadow-inner">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        <path
                                            d="M12 5v4M12 15v4M5 12h4M15 12h4M7.8 7.8l2.8 2.8M13.4 13.4l2.8 2.8M16.2 7.8l-2.8 2.8M10.6 13.4l-2.8 2.8"
                                            stroke="currentColor"
                                            strokeWidth="1.8"
                                            strokeLinecap="round"
                                        />
                                    </svg>
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">{t("processing.alerts.title")}</h3>
                                <p className="text-sm leading-6 text-[#5B6B82]">
                                    {t("processing.alerts.description")}
                                </p>
                            </div>

                            <div className="space-y-3 rounded-2xl border border-white/70 bg-white/45 p-4 backdrop-blur-xl">
                                {alertRows.map((row) => (
                                    <div key={row.titleKey} className="flex items-start gap-4 rounded-xl bg-white/60 p-4">
                                        <div
                                            className={`mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                                                row.tone === "danger"
                                                    ? "bg-[#FBE3E3] text-[#B54747]"
                                                    : "bg-[#EEF2F0] text-[#5B6B82]"
                                            }`}
                                        >
                                            {row.tone === "danger" ? "!" : "i"}
                                        </div>
                                        <div>
                                            <p className="text-sm font-bold text-[#242424]">{t(row.titleKey)}</p>
                                            <p className="text-sm leading-6 text-[#5B6B82]">{t(row.descriptionKey)}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </article>
                </div>
            </div>
        </section>
    );
}
