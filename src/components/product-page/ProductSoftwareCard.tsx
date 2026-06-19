
import { useLanguage } from "../../i18n/language";

const invoices = [
    { id: "INV-2049", supplier: "Supplier A", active: true },
    { id: "INV-2050", supplier: "Supplier B", active: false },
];

const reconciliationRows = [
    {
        documentKey: "software.orderDocument",
        orderedAmount: "€1,250.00",
        invoicedAmount: "€1,350.00",
        statusKey: "software.discrepancy",
        status: "discrepancy",
    },
    {
        documentKey: "software.deliveryDocument",
        orderedAmount: "€450.00",
        invoicedAmount: "€450.00",
        statusKey: "software.matches",
        status: "matches",
    },
] as const;

export default function ProductSoftwareCard() {
    const { t } = useLanguage();

    return(
        <div className='mt-12 mb-20 w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-2xl border border-white/70 bg-white/60 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl sm:mt-15 sm:mb-30 sm:w-[90%] lg:w-[80%]'>
            <div className='flex flex-col gap-3 border-b border-white/70 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6'>
                <div className='flex items-center gap-3'>
                    <svg
                        aria-hidden="true"
                        className='h-5 w-5 text-gray-500'
                        fill="none"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 4h6v6H4V4Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M14 4h6v6h-6V4Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M4 14h6v6H4v-6Z" stroke="currentColor" strokeWidth="1.8" />
                        <path d="M14 14h6v6h-6v-6Z" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                    <h2 className='text-sm font-semibold text-[#2F3B36]'>{t("software.title")}</h2>
                </div>

                <span className='rounded-md bg-[#DFF8E8] px-3 py-1 text-xs font-semibold text-[#016D49]'>
                    {t("software.badge")}
                </span>
            </div>

            <div className='grid lg:grid-cols-[260px_1fr]'>
                <aside className='grid grid-cols-2 border-b border-white/70 py-3 lg:block lg:border-r lg:border-b-0 lg:py-5'>
                    {invoices.map((invoice) => (
                        <div
                            key={invoice.id}
                            className={`relative px-4 py-4 text-center sm:px-8 sm:py-5 ${
                                invoice.active ? "bg-[#E6F6EF]/55" : "bg-transparent"
                            }`}
                        >
                            {invoice.active && (
                                <span className='absolute left-0 top-0 h-full w-1 bg-[#12B981]' />
                            )}
                            <p className='text-xs font-medium text-gray-500'>{t("software.invoice")} #{invoice.id}</p>
                            <p className='text-sm font-medium text-[#1F2925]'>{invoice.supplier}</p>
                        </div>
                    ))}
                </aside>

                <div className='overflow-x-auto px-4 py-5 sm:px-9'>
                    <div className='min-w-[640px]'>
                        <div className='grid grid-cols-[1.3fr_1fr_1fr_0.7fr] border-b border-white/70 pb-3 text-xs font-medium text-gray-500'>
                            <span>{t("software.document")}</span>
                            <span>{t("software.orderedAmount")}</span>
                            <span>{t("software.invoicedAmount")}</span>
                            <span>{t("software.status")}</span>
                        </div>

                        <div>
                            {reconciliationRows.map((row) => (
                                <div
                                    key={row.documentKey}
                                    className='grid grid-cols-[1.3fr_1fr_1fr_0.7fr] items-center border-b border-white/60 py-5 last:border-b-0'
                                >
                                    <span className='text-sm font-medium text-[#1F2925]'>{t(row.documentKey)}</span>
                                    <span className='font-mono text-sm text-[#1F2925]'>{row.orderedAmount}</span>
                                    <span className='font-mono text-sm text-[#1F2925]'>{row.invoicedAmount}</span>
                                    <span
                                        className={`w-fit rounded-md px-3 py-1 text-xs font-semibold ${
                                            row.status === "discrepancy"
                                                ? "bg-[#FCE6E6] text-[#A33A3A]"
                                                : "bg-[#DFF8E8] text-[#016D49]"
                                        }`}
                                    >
                                        {t(row.statusKey)}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}