import { useLanguage } from "../../i18n/language";

const reviews = [
    {
        roleKey: "testimonials.1.role",
        companyKey: "testimonials.1.company",
        quoteKey: "testimonials.1.quote",
        className:
            "[grid-area:stack] -translate-x-2 -translate-y-8 hover:-translate-y-14 md:-translate-x-10",
    },
    {
        roleKey: "testimonials.2.role",
        companyKey: "testimonials.2.company",
        quoteKey: "testimonials.2.quote",
        className:
            "[grid-area:stack] translate-x-2 translate-y-8 hover:translate-y-2 md:translate-x-14",
    },
    {
        roleKey: "testimonials.3.role",
        companyKey: "testimonials.3.company",
        quoteKey: "testimonials.3.quote",
        className:
            "[grid-area:stack] translate-x-4 translate-y-24 hover:translate-y-16 md:translate-x-28",
    },
] as const;

function Stars() {
    const { t } = useLanguage();

    return (
        <div className="flex gap-1 text-[#12B981]" aria-label={t("testimonials.stars")}>
            {Array.from({ length: 5 }).map((_, index) => (
                <span key={index}>★</span>
            ))}
        </div>
    );
}

export default function ProductTestimonialsSection() {
    const { t } = useLanguage();

    return (
        <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:py-28">
            <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-[#12B981]/10 blur-3xl" />
            <div className="absolute right-12 bottom-12 h-80 w-80 rounded-full bg-white/80 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[0.9fr_1.1fr]">
                <div>
                    <span className="mb-4 inline-flex rounded-full border border-white/70 bg-white/45 px-4 py-2 text-xs font-semibold text-[#12B981] backdrop-blur-xl">
                        {t("testimonials.badge")}
                    </span>
                    <h2 className="mb-5 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#171717] md:text-[44px]">
                        {t("testimonials.title")}
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-[#5B6B82]">
                        {t("testimonials.description")}
                    </p>
                </div>

                <div className="flex min-h-[420px] items-center justify-center">
                    <div className="grid [grid-template-areas:'stack'] place-items-center">
                        {reviews.map((review, index) => (
                            <article
                                key={review.roleKey}
                                className={`relative flex min-h-52 w-[min(19rem,calc(100vw-3rem))] select-none flex-col justify-between rounded-3xl border border-white/70 bg-white/50 p-5 shadow-2xl shadow-[#1F2937]/10 backdrop-blur-2xl transition-all duration-500 hover:scale-[1.02] hover:bg-white/70 sm:w-[21rem] sm:p-6 md:w-[24rem] ${review.className}`}
                                style={{ zIndex: reviews.length - index }}
                            >
                                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                                <div className="flex items-center justify-between">
                                    <Stars />
                                    <span className="rounded-full bg-[#E6F6EF]/80 px-3 py-1 text-xs font-semibold text-[#12B981]">
                                        {t("testimonials.review")}
                                    </span>
                                </div>

                                <p className="my-5 text-sm leading-6 text-[#33453D]">“{t(review.quoteKey)}”</p>

                                <div>
                                    <p className="text-sm font-bold text-[#242424]">{t(review.roleKey)}</p>
                                    <p className="text-xs text-[#5B6B82]">{t(review.companyKey)}</p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
