import { useLanguage } from "../../i18n/language";

const comparisonRows = [
    {
        step: "1",
        manualIcon: "⌛",
        denxIcon: "✉",
        manualTitleKey: "comparison.manual1.title",
        manualDescriptionKey: "comparison.manual1.description",
        denxTitleKey: "comparison.denx1.title",
        denxDescriptionKey: "comparison.denx1.description",
    },
    {
        step: "2",
        manualIcon: "!",
        denxIcon: "▣",
        manualTitleKey: "comparison.manual2.title",
        manualDescriptionKey: "comparison.manual2.description",
        denxTitleKey: "comparison.denx2.title",
        denxDescriptionKey: "comparison.denx2.description",
    },
    {
        step: "3",
        manualIcon: "⌁",
        denxIcon: "✣",
        manualTitleKey: "comparison.manual3.title",
        manualDescriptionKey: "comparison.manual3.description",
        denxTitleKey: "comparison.denx3.title",
        denxDescriptionKey: "comparison.denx3.description",
    },
] as const;

export default function ProductComparitionSection() {
    const { t } = useLanguage();

    return (
        <section className="flex h-auto w-full flex-col items-center justify-center px-4 py-16 md:py-24">
            <header className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-neutral-primary md:text-display-lg">{t("comparison.title")}</h2>
                <p className="mx-auto max-w-2xl text-sm leading-6 text-neutral-secondary opacity-50 sm:text-base">{t("comparison.description")}</p>
            </header>

            <section className="relative mt-12 w-full max-w-6xl rounded-[2rem] border border-white/60 bg-white/25 px-4 py-10 shadow-xl shadow-[#1F2937]/5 backdrop-blur-xl sm:px-6 md:mt-20 md:py-12">
                <div className="absolute left-1/2 top-0 hidden h-[78%] -translate-x-1/2 border-l border-dashed border-[#D8E4E0] md:block" />

                <div className="space-y-20">
                    {comparisonRows.map((row) => (
                        <div key={row.step} className="relative grid gap-10 md:grid-cols-[1fr_96px_1fr] md:items-start">
                            <article className="flex flex-col items-center text-center md:items-end md:text-right">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-[#E8E4E4] text-lg font-semibold text-[#64748B]">
                                    {row.manualIcon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">{t(row.manualTitleKey)}</h3>
                                <p className="max-w-md text-sm leading-6 text-[#5B6B82]">{t(row.manualDescriptionKey)}</p>
                            </article>

                            <div className="relative z-10 mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[#12B981] text-sm font-bold text-white shadow-lg shadow-[#12B981]/25">
                                {row.step}
                            </div>

                            <article className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-[#E6F6EF] text-lg font-semibold text-[#12B981]">
                                    {row.denxIcon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">{t(row.denxTitleKey)}</h3>
                                <p className="max-w-md text-sm leading-6 text-[#5B6B82]">{t(row.denxDescriptionKey)}</p>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12B981] text-3xl text-white shadow-lg shadow-[#12B981]/25">
                        ✓
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#242424]">{t("comparison.final.title")}</h3>
                    <p className="max-w-xl text-sm leading-6 text-[#5B6B82]">
                        {t("comparison.final.description")}
                    </p>
                </div>
            </section>
        </section>
    )

}