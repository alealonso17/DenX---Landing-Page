const comparisonRows = [
    {
        step: "1",
        manualIcon: "⌛",
        denxIcon: "✉",
        manualTitle: "Slow manual process",
        manualDescription:
            "Hours spent checking purchase orders, delivery notes, and invoices across emails, PDFs, and spreadsheets.",
        denxTitle: "Automatic reception",
        denxDescription:
            "Forward supplier emails to one DenX inbox and keep purchase documents organized from the start.",
    },
    {
        step: "2",
        manualIcon: "!",
        denxIcon: "▣",
        manualTitle: "Costly human errors",
        manualDescription:
            "Small quantity, price, or tax differences are easy to miss when every check depends on manual review.",
        denxTitle: "Structured extraction",
        denxDescription:
            "DenX reads native PDFs, scans, and photos to extract the key fields needed for comparison.",
    },
    {
        step: "3",
        manualIcon: "⌁",
        denxIcon: "✣",
        manualTitle: "Silent money leaks",
        manualDescription:
            "Duplicate invoices, incorrect prices, and goods not received can quietly drain margin month after month.",
        denxTitle: "Automatic comparison",
        denxDescription:
            "Compare purchase order, delivery note, and invoice with configurable tolerance before approving payment.",
    },
];

export default function ProductComparitionSection() {
    return (
        <section className="w-full h-auto flex flex-col items-center justify-center py-24">
            <header className="text-center">
                <h2 className="font-headline-lg text-[30px] text-headline-lg md:text-display-lg font-bold text-neutral-primary mb-4">Manual reconciliation is costing you...</h2>
                <p className="font-body-lg text-body-lg text-neutral-secondary max-w-2xl mx-auto opacity-40">But with DenX, the process becomes seamless and automated.</p>
            </header>

            <section className="relative mt-20 w-full max-w-6xl rounded-[2rem] border border-white/60 bg-white/25 px-6 py-12 shadow-xl shadow-[#1F2937]/5 backdrop-blur-xl">
                <div className="absolute left-1/2 top-0 hidden h-[78%] -translate-x-1/2 border-l border-dashed border-[#D8E4E0] md:block" />

                <div className="space-y-20">
                    {comparisonRows.map((row) => (
                        <div key={row.step} className="relative grid gap-10 md:grid-cols-[1fr_96px_1fr] md:items-start">
                            <article className="flex flex-col items-center text-center md:items-end md:text-right">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-[#E8E4E4] text-lg font-semibold text-[#64748B]">
                                    {row.manualIcon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">{row.manualTitle}</h3>
                                <p className="max-w-md text-sm leading-6 text-[#5B6B82]">{row.manualDescription}</p>
                            </article>

                            <div className="relative z-10 mx-auto flex h-9 w-9 items-center justify-center rounded-xl bg-[#12B981] text-sm font-bold text-white shadow-lg shadow-[#12B981]/25">
                                {row.step}
                            </div>

                            <article className="flex flex-col items-center text-center md:items-start md:text-left">
                                <div className="mb-5 flex h-10 w-10 items-center justify-center rounded bg-[#E6F6EF] text-lg font-semibold text-[#12B981]">
                                    {row.denxIcon}
                                </div>
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">{row.denxTitle}</h3>
                                <p className="max-w-md text-sm leading-6 text-[#5B6B82]">{row.denxDescription}</p>
                            </article>
                        </div>
                    ))}
                </div>

                <div className="mt-20 flex flex-col items-center text-center">
                    <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#12B981] text-3xl text-white shadow-lg shadow-[#12B981]/25">
                        ✓
                    </div>
                    <h3 className="mb-3 text-xl font-bold text-[#242424]">Final approval with confidence</h3>
                    <p className="max-w-xl text-sm leading-6 text-[#5B6B82]">
                        Review each discrepancy clearly, approve or reject payment, and keep a traceable audit trail.
                    </p>
                </div>
            </section>
        </section>
    )

}