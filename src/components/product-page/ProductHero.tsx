import Button from "../ui/Button";
import PlayIcon from "../../assets/svg/PlayIcon";
import { useLanguage } from "../../i18n/language";

export default function ProductHero() {
    const { t } = useLanguage();

    return(
        <section className='flex h-auto w-full flex-col items-center justify-center px-4'>
            <h1 className='mx-auto mb-6 max-w-4xl pt-20 text-center text-4xl font-bold leading-tight tracking-tight text-neutral-primary sm:pt-24 sm:text-5xl md:pt-30 md:text-[59px]'>{t("productHero.title")}</h1> 
            <p className='mx-auto mb-10 max-w-2xl text-center text-sm leading-6 text-neutral-secondary opacity-50 sm:text-base'>{t("productHero.description")}</p>
            <div className='flex w-full flex-col items-stretch justify-center gap-4 sm:w-auto sm:flex-row sm:items-center sm:gap-10'>
                <Button text={t("cta.requestAccess")} type='primary' />
                <Button text={t("productHero.secondaryCta")} type='outline' icon={<PlayIcon size={20} />} />
            </div>
        </section>
    )
}