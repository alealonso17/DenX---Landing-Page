import Button from "../ui/Button";
import { useLanguage } from "../../i18n/language";

const plans = [
    {
        name: "Early",
        price: "€99",
        descriptionKey: "pricing.early.description",
        featureKeys: ["pricing.feature.uniqueInbox", "pricing.feature.500Docs", "pricing.feature.classification", "pricing.feature.basicAlerts"],
        highlight: false,
    },
    {
        name: "Growth",
        price: "€299",
        descriptionKey: "pricing.growth.description",
        featureKeys: [
            "pricing.feature.2000Docs",
            "pricing.feature.matching",
            "pricing.feature.tolerances",
            "pricing.feature.reviewQueue",
            "pricing.feature.dashboard",
        ],
        highlight: true,
    },
    {
        name: "Enterprise",
        price: "pricing.custom",
        descriptionKey: "pricing.enterprise.description",
        featureKeys: [
            "pricing.feature.customVolume",
            "pricing.feature.setup",
            "pricing.feature.audit",
            "pricing.feature.workflows",
        ],
        highlight: false,
    },
] as const;

function CheckIcon() {
    return (
        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#E6F6EF] text-xs font-bold text-[#12B981]">
            ✓
        </span>
    );
}

export default function PricesChart() {
    const { t } = useLanguage();

    return(
        <section className="relative w-full px-4 pb-24 pt-6 sm:px-6">
            <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-[#12B981]/10 blur-3xl" />

            <div className="relative mx-auto grid max-w-6xl gap-6 lg:grid-cols-3">
                {plans.map((plan) => (
                    <article
                        key={plan.name}
                        className={`relative flex min-h-[440px] flex-col overflow-hidden rounded-[2rem] border p-6 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl transition duration-300 hover:-translate-y-1 sm:p-7 ${
                            plan.highlight
                                ? "border-[#12B981]/70 bg-white/75 ring-1 ring-[#12B981]/40"
                                : "border-white/70 bg-white/50"
                        }`}
                    >
                        {plan.highlight && (
                            <span className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-2xl bg-[#12B981] px-5 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-white">
                                {t("pricing.mostPopular")}
                            </span>
                        )}

                        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent" />

                        <div className={plan.highlight ? "pt-6" : ""}>
                            <h2 className="mb-5 text-2xl font-bold text-[#171717]">{plan.name}</h2>
                            <div className="mb-3 flex select-none items-end gap-2 blur-[7px]" aria-hidden="true">
                                <span className="text-5xl font-bold tracking-tight text-[#171717]">
                                    {plan.price === "pricing.custom" ? t("pricing.custom") : plan.price}
                                </span>
                                {plan.price !== "pricing.custom" && <span className="pb-2 text-sm text-[#5B6B82]">{t("pricing.month")}</span>}
                            </div>
                            <p className="min-h-12 text-sm leading-6 text-[#5B6B82]">{t(plan.descriptionKey)}</p>
                        </div>

                        <div className="my-7 h-px bg-gradient-to-r from-transparent via-[#D8E4E0] to-transparent" />

                        <ul className="mb-8 space-y-4">
                            {plan.featureKeys.map((featureKey) => (
                                <li key={featureKey} className="flex gap-3 text-sm leading-6 text-[#33453D]">
                                    <CheckIcon />
                                    <span>{t(featureKey)}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-auto">
                            <Button text={t("cta.requestAccess")} type={plan.highlight ? "primary" : "outline"} to="/contact" />
                        </div>
                    </article>
                ))}

                <div className="pointer-events-none absolute inset-0 z-20 flex items-start justify-center pt-16 sm:pt-20 lg:items-center lg:pt-0">
                    <div className="mx-4 max-w-md rounded-2xl border border-[#12B981]/30 bg-white/85 px-6 py-5 text-center shadow-2xl shadow-[#1F2937]/10 backdrop-blur-md sm:px-8 sm:py-6">
                        <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#E6F6EF] px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-[#0E8A61]">
                            <span className="h-1.5 w-1.5 rounded-full bg-[#12B981]" />
                            {t("pricing.wip.badge")}
                        </span>
                        <h3 className="mb-2 text-xl font-bold tracking-tight text-[#171717]">{t("pricing.wip.title")}</h3>
                        <p className="text-sm leading-6 text-[#5B6B82]">{t("pricing.wip.description")}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}