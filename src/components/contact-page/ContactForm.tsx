import { useLanguage } from "../../i18n/language";

const inputClassName =
    "w-full rounded-md border border-[#D8E4E0] bg-white/65 px-4 py-3 text-sm text-[#33453D] outline-none transition placeholder:text-[#7A8796] focus:border-[#12B981] focus:ring-4 focus:ring-[#12B981]/10";

export default function ContactForm() {
    const { t } = useLanguage();

    return (
        <section className="w-full px-4 pb-24">
            <form className="mx-auto w-full max-w-3xl rounded-lg border border-[#D8E4E0] bg-white/55 p-6 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#4F5F77]">
                        {t("contactForm.firstName")}
                        <input
                            type="text"
                            name="firstName"
                            autoComplete="given-name"
                            placeholder={t("contactForm.firstNamePlaceholder")}
                            className={inputClassName}
                        />
                    </label>

                    <label className="flex flex-col gap-1.5 text-sm font-medium text-[#4F5F77]">
                        {t("contactForm.lastName")}
                        <input
                            type="text"
                            name="lastName"
                            autoComplete="family-name"
                            placeholder={t("contactForm.lastNamePlaceholder")}
                            className={inputClassName}
                        />
                    </label>
                </div>

                <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-[#4F5F77]">
                    {t("contactForm.workEmail")}
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder={t("contactForm.emailPlaceholder")}
                        className={inputClassName}
                    />
                </label>

                <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-[#4F5F77]">
                    {t("contactForm.companyName")}
                    <input
                        type="text"
                        name="company"
                        autoComplete="organization"
                        placeholder={t("contactForm.companyPlaceholder")}
                        className={inputClassName}
                    />
                </label>

                <label className="mt-4 flex flex-col gap-1.5 text-sm font-medium text-[#4F5F77]">
                    {t("contactForm.message")}
                    <textarea
                        name="message"
                        rows={5}
                        placeholder={t("contactForm.messagePlaceholder")}
                        className={`${inputClassName} resize-y`}
                    />
                </label>

                <button
                    type="submit"
                    className="mt-7 inline-flex w-full items-center justify-center rounded bg-[#12B981] px-7 py-3 text-sm font-semibold text-white transition hover:bg-[#016D49] sm:w-auto"
                >
                    {t("cta.requestAccess")}
                </button>
            </form>
        </section>
    );
}
