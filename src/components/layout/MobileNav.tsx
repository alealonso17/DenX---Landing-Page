import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/denx-logo.png";
import Button from "../ui/Button";
import LanguageToggle from "../ui/LanguageToggle";
import { useLanguage } from "../../i18n/language";

const mobileNavLinks = [
    { to: "/", labelKey: "nav.product", end: true },
    { to: "/pricing", labelKey: "nav.pricing", end: false },
    { to: "/contact", labelKey: "nav.contact", end: false },
] as const;

export default function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const { t } = useLanguage();

    const linkClassName = ({ isActive }: { isActive: boolean }) =>
        `rounded-2xl px-4 py-3 text-sm font-semibold transition ${
            isActive ? "bg-[#E6F6EF] text-[#12B981]" : "text-[#33453D] hover:bg-white/60"
        }`;

    return (
        <div className="w-full md:hidden">
            <div className="flex items-center justify-between">
                <NavLink to="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
                    <img src={logo} alt="DenX Logo" className="h-9 w-9" />
                    <span className="text-xl font-bold text-[#016D49]">DenX</span>
                </NavLink>

                <button
                    type="button"
                    onClick={() => setIsOpen((current) => !current)}
                    className="flex h-10 w-10 items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-[#33453D] shadow-lg shadow-[#1F2937]/5 backdrop-blur-xl"
                    aria-label={isOpen ? "Cerrar menu" : "Abrir menu"}
                    aria-expanded={isOpen}
                >
                    <span className="sr-only">{isOpen ? "Cerrar menu" : "Abrir menu"}</span>
                    <span className="relative block h-4 w-5">
                        <span
                            className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition ${
                                isOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                        />
                        <span
                            className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition ${
                                isOpen ? "opacity-0" : ""
                            }`}
                        />
                        <span
                            className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition ${
                                isOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                        />
                    </span>
                </button>
            </div>

            <div
                className={`grid transition-all duration-300 ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                }`}
            >
                <div className="overflow-hidden">
                    <nav className="mt-4 flex flex-col gap-2 rounded-3xl border border-white/70 bg-white/65 p-3 shadow-xl shadow-[#1F2937]/5 backdrop-blur-2xl">
                        {mobileNavLinks.map((link) => (
                            <NavLink
                                key={link.to}
                                to={link.to}
                                end={link.end}
                                className={linkClassName}
                                onClick={() => setIsOpen(false)}
                            >
                                {t(link.labelKey)}
                            </NavLink>
                        ))}

                        <div className="mt-2 grid gap-2 border-t border-white/70 pt-3">
                            <LanguageToggle />
                            <Button type="primary" text={t("cta.requestAccess")} />
                            <Button type="outline" text={t("nav.login")} />
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}
