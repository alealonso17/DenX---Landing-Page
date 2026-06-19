import { useLanguage } from "../../i18n/language";

export default function Footer(){
    const { t } = useLanguage();

    return(
        <footer className='relative flex min-h-[360px] w-full items-center overflow-hidden bg-[#0F1F19] px-6 py-12 text-white'>
            <div className='absolute left-[-10rem] top-20 h-96 w-96 rounded-full bg-[#12B981]/20 blur-3xl' />
            <div className='absolute bottom-[-12rem] right-[-8rem] h-[30rem] w-[30rem] rounded-full bg-white/10 blur-3xl' />

            <div className='relative mx-auto grid w-full max-w-6xl gap-10 md:grid-cols-[1.2fr_0.8fr]'>
                <div>
                    <p className='mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-[#12B981]'>DenX</p>
                    <h2 className='mb-4 max-w-2xl text-3xl font-bold leading-tight tracking-tight md:text-4xl'>
                        {t("footer.title")}
                    </h2>
                    <p className='max-w-xl text-sm leading-6 text-white/65'>
                        {t("footer.description")}
                    </p>
                </div>

                <div className='grid gap-6 sm:grid-cols-2'>
                    <div className='rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl'>
                        <h3 className='mb-4 text-sm font-bold text-white'>{t("footer.product")}</h3>
                        <ul className='space-y-3 text-sm text-white/60'>
                            <li>{t("footer.reconciliation")}</li>
                            <li>{t("footer.alerts")}</li>
                            <li>{t("footer.reviewQueue")}</li>
                        </ul>
                    </div>

                    <div className='rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur-2xl'>
                        <h3 className='mb-4 text-sm font-bold text-white'>{t("footer.company")}</h3>
                        <ul className='space-y-3 text-sm text-white/60'>
                            <li>{t("footer.earlyAccess")}</li>
                            <li>{t("nav.contact")}</li>
                            <li>{t("footer.requestDemo")}</li>
                        </ul>
                    </div>
                </div>

                <div className='border-t border-white/10 pt-8 text-sm text-white/45 md:col-span-2'>
                    © 2026 DenX. {t("footer.rights")}
                </div>
            </div>
        </footer>
    )
}