
const invoices = [
    { id: "INV-2049", supplier: "Supplier A", active: true },
    { id: "INV-2050", supplier: "Supplier B", active: false },
];

const reconciliationRows = [
    {
        document: "Order PO-102",
        orderedAmount: "€1,250.00",
        invoicedAmount: "€1,350.00",
        status: "Discrepancy",
    },
    {
        document: "Delivery Note AL-998",
        orderedAmount: "€450.00",
        invoicedAmount: "€450.00",
        status: "Matches",
    },
];

export default function ProductSoftwareCard() {
    return(
        <div className='w-[80%] max-w-6xl overflow-hidden rounded-xl bg-white shadow-md mt-15 mb-30 border border-gray-100'>
            <div className='flex items-center justify-between border-b border-gray-100 px-6 py-4'>
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
                    <h2 className='text-sm font-semibold text-[#2F3B36]'>Active Reconciliation</h2>
                </div>

                <span className='rounded-md bg-[#DFF8E8] px-3 py-1 text-xs font-semibold text-[#016D49]'>
                    3 Discrepancies detected
                </span>
            </div>

            <div className='grid grid-cols-[260px_1fr]'>
                <aside className='border-r border-gray-100 py-5'>
                    {invoices.map((invoice) => (
                        <div
                            key={invoice.id}
                            className={`relative px-8 py-5 text-center ${
                                invoice.active ? "bg-[#F7F3F3]" : "bg-white"
                            }`}
                        >
                            {invoice.active && (
                                <span className='absolute left-0 top-0 h-full w-1 bg-[#12B981]' />
                            )}
                            <p className='text-xs font-medium text-gray-500'>Invoice #{invoice.id}</p>
                            <p className='text-sm font-medium text-[#1F2925]'>{invoice.supplier}</p>
                        </div>
                    ))}
                </aside>

                <div className='px-9 py-5'>
                    <div className='grid grid-cols-[1.3fr_1fr_1fr_0.7fr] border-b border-gray-100 pb-3 text-xs font-medium text-gray-500'>
                        <span>Document</span>
                        <span>Ordered Amount</span>
                        <span>Invoiced Amount</span>
                        <span>Status</span>
                    </div>

                    <div>
                        {reconciliationRows.map((row) => (
                            <div
                                key={row.document}
                                className='grid grid-cols-[1.3fr_1fr_1fr_0.7fr] items-center border-b border-gray-100 py-5 last:border-b-0'
                            >
                                <span className='text-sm font-medium text-[#1F2925]'>{row.document}</span>
                                <span className='font-mono text-sm text-[#1F2925]'>{row.orderedAmount}</span>
                                <span className='font-mono text-sm text-[#1F2925]'>{row.invoicedAmount}</span>
                                <span
                                    className={`w-fit rounded-md px-3 py-1 text-xs font-semibold ${
                                        row.status === "Discrepancy"
                                            ? "bg-[#FCE6E6] text-[#A33A3A]"
                                            : "bg-[#DFF8E8] text-[#016D49]"
                                    }`}
                                >
                                    {row.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}