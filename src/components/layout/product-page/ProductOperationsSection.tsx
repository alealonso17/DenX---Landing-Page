import Button from "../ui/Button";

const reconciliationRows = [
    { label: "INV-2024-0891", status: "ok" },
    { label: "PO-2024-442", status: "discrepancy" },
    { label: "DN-2024-0892", status: "ok" },
];

function ArrowRightIcon() {
    return (
        <svg className="h-4 w-4" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            <path
                d="M4 10h12m0 0-5-5m5 5-5 5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}

function CheckIcon() {
    return (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#242424] text-xs text-white">
            ✓
        </span>
    );
}

export default function ProductOperationsSection() {
    return (
        <section className="w-full px-4 py-16 sm:px-6 md:py-24">
            <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1fr_0.95fr]">
                <div>
                    <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight tracking-tight text-[#171717] md:text-[46px]">
                        Automate invoice checks before you pay.
                    </h2>
                    <p className="mb-9 max-w-xl text-base leading-7 text-[#4F5F5A]">
                        DenX compares purchase orders, delivery notes, and invoices so your team can spot
                        discrepancies earlier and reduce manual review.
                    </p>

                    <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
                        <Button text="Solicitar acceso" type="primary" icon={<ArrowRightIcon />} />
                        <Button text="View demo" type="outline" />
                    </div>
                </div>

                <div className="rounded-2xl border border-white/70 bg-white/55 p-5 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl">
                    <div className="mb-5 flex items-center justify-between">
                        <p className="text-xs font-semibold text-[#5B6B82]">Reconciliation Status</p>
                        <span className="rounded-md bg-[#E6F6EF] px-3 py-1 text-xs font-semibold text-[#12B981]">
                            Ready for review
                        </span>
                    </div>

                    <div className="space-y-2">
                        {reconciliationRows.map((row) => (
                            <div
                                key={row.label}
                                className={`flex items-center justify-between rounded-sm px-4 py-3 text-sm ${
                                    row.status === "discrepancy"
                                        ? "bg-[#FCF1F1]/80 text-[#242424]"
                                        : "bg-white/55 text-[#242424]"
                                }`}
                            >
                                <span>{row.label}</span>
                                {row.status === "discrepancy" ? (
                                    <span className="rounded bg-[#FBE3E3] px-2 py-1 text-xs font-semibold text-[#B54747]">
                                        Discrepancy
                                    </span>
                                ) : (
                                    <CheckIcon />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
