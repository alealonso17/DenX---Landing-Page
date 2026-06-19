export default function Footer(){
    return(
        <footer className='relative flex min-h-[360px] w-full items-center overflow-hidden bg-[#0F1F19] px-6 py-12 text-white'>
            <div className='absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-[#12B981]/20 blur-3xl' />
            <div className='absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl' />

            <div className='relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]'>
                <div>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#12B981]'>DenX</p>
                    <h2 className='mb-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                        Stop paying invoice mistakes in silence.
                    </h2>
                    <p className='max-w-xl text-sm leading-6 text-white/65'>
                        Compare purchase orders, delivery notes, and invoices before approving payment.
                        Built for teams that need fewer manual checks and clearer discrepancies.
                    </p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2'>
                    <div className='rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl'>
                        <h3 className='mb-4 text-sm font-bold text-white'>Product</h3>
                        <ul className='space-y-3 text-sm text-white/60'>
                            <li>Reconciliation</li>
                            <li>Discrepancy alerts</li>
                            <li>Review queue</li>
                        </ul>
                    </div>

                    <div className='rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl'>
                        <h3 className='mb-4 text-sm font-bold text-white'>Company</h3>
                        <ul className='space-y-3 text-sm text-white/60'>
                            <li>Early access</li>
                            <li>Contact</li>
                            <li>Request demo</li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-white/10 pt-8 text-sm text-white/45 md:col-span-2'>
                    © 2026 DenX. All rights reserved.
                </div>
            </div>
        </footer>
    )
}