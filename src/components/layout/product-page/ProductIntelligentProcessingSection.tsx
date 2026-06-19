const featureCards = [
    {
        title: "Document extraction",
        description:
            "Extract key fields from native PDFs, scans, and supplier documents so the review starts with structured data.",
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
        title: "3-way matching",
        description:
            "Compare purchase order, delivery note, and invoice with tolerance rules before a payment is approved.",
        icon: (
            <>
                <path d="M5 7h4v4H5V7Zm10 0h4v4h-4V7ZM5 15h4v4H5v-4Zm10 0h4v4h-4v-4Z" stroke="currentColor" strokeWidth="1.8" />
                <path d="M9 9h6M9 17h6M7 11v4M17 11v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </>
        ),
        badge: "Core workflow",
    },
    {
        title: "Human review queue",
        description:
            "When confidence is low, DenX routes the case for review instead of guessing. Your team keeps control.",
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
];

const alertRows = [
    {
        title: "Price mismatch: INV-992",
        description: "Invoice total is above the purchase order amount.",
        tone: "danger",
    },
    {
        title: "Quantity variance approved",
        description: "Small delivery variance accepted based on configured tolerance.",
        tone: "neutral",
    },
];

export default function ProductIntelligentProcessingSection() {
    return (
        <section className="relative w-full overflow-hidden px-4 py-16 sm:px-6 md:py-28">
            <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-[#12B981]/10 blur-3xl" />
            <div className="absolute right-12 bottom-16 h-56 w-56 rounded-full bg-white/70 blur-3xl" />

            <div className="relative mx-auto max-w-6xl">
                <header className="mb-14 text-center">
                    <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#171717] md:text-4xl">
                        Intelligent data processing
                    </h2>
                    <p className="mx-auto max-w-2xl text-sm leading-6 text-[#5B6B82]">
                        Turn messy supplier documents into clear checks your team can review before money leaves the business.
                    </p>
                </header>

                <div className="grid gap-6 md:grid-cols-3">
                    {featureCards.map((card, index) => (
                        <article
                            key={card.title}
                            className={`group relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 hover:bg-white/65 sm:p-7 ${
                                index === 1 ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />
                            <div className="mb-6 flex items-center justify-between">
                                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/70 bg-[#E6F6EF]/80 text-[#12B981] shadow-inner">
                                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                        {card.icon}
                                    </svg>
                                </div>
                                {card.badge && (
                                    <span className="rounded-full border border-white/70 bg-white/60 px-3 py-1 text-xs font-semibold text-[#4F5F5A] backdrop-blur-xl">
                                        {card.badge}
                                    </span>
                                )}
                            </div>

                            <h3 className="mb-3 text-xl font-bold text-[#242424]">{card.title}</h3>
                            <p className="max-w-xl text-sm leading-6 text-[#5B6B82]">{card.description}</p>

                            {index === 1 && (
                                <div className="mt-8 grid grid-cols-3 gap-3 rounded-2xl border border-white/70 bg-white/45 p-4 backdrop-blur-xl">
                                    {["PO", "Delivery", "Invoice"].map((item) => (
                                        <div key={item} className="flex flex-col items-center gap-2 text-xs font-semibold text-[#4F5F5A]">
                                            <div className="h-px w-full bg-gradient-to-r from-transparent via-[#B9C8C1] to-transparent" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </article>
                    ))}

                    <article className="relative overflow-hidden rounded-3xl border border-white/70 bg-white/45 p-5 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl sm:p-7 md:col-span-3">
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
                                <h3 className="mb-3 text-xl font-bold text-[#242424]">Discrepancy alerts</h3>
                                <p className="text-sm leading-6 text-[#5B6B82]">
                                    Surface mismatches with the exact field, difference, and review status so the next action is clear.
                                </p>
                            </div>

                            <div className="space-y-3 rounded-2xl border border-white/70 bg-white/45 p-4 backdrop-blur-xl">
                                {alertRows.map((row) => (
                                    <div key={row.title} className="flex items-start gap-4 rounded-xl bg-white/60 p-4">
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
                                            <p className="text-sm font-bold text-[#242424]">{row.title}</p>
                                            <p className="text-sm leading-6 text-[#5B6B82]">{row.description}</p>
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
