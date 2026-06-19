import { useLanguage } from "../../i18n/language";

export default function HeroPricing() {
    const { t } = useLanguage();

    return(
        <section className='flex h-auto w-full flex-col items-center justify-center px-4'>
            <h1 className='mx-auto mb-6 max-w-4xl pt-20 text-center text-xl font-bold leading-tight tracking-tight text-neutral-primary sm:pt-24 sm:text-[20px] md:pt-30 md:text-[30px]'>{t("pricingHero.title")}</h1>
            <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-neutral-secondary opacity-50 sm:text-base'>{t("pricingHero.description")}</p>
        </section>
    )
}