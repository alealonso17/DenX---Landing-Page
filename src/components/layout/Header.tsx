import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "../ui/Button";
import logo from "../../assets/denx-logo.png";
import MobileNav from "./MobileNav";
import LanguageToggle from "../ui/LanguageToggle";
import { useLanguage } from "../../i18n/language";


const mainNavLinks = [
    { to: "/", labelKey: "nav.product", end: true },
    { to: "/pricing", labelKey: "nav.pricing", end: false },
    { to: "/contact", labelKey: "nav.contact", end: false },
] as const;

export default function Header(){
    const location = useLocation();
    const { language, t } = useLanguage();
    const navRef = useRef<HTMLDivElement>(null);
    const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});
    const [sliderStyle, setSliderStyle] = useState({ left: 0, width: 0 });

    const navLinkClassName = ({ isActive }: { isActive: boolean }) =>
        `text-sm font-medium ${isActive ? "text-[#12B981]" : "text-gray-500"}`;

    useEffect(() => {
        const activeLink = mainNavLinks.find((link) =>
            link.to === "/" ? location.pathname === "/" : location.pathname.startsWith(link.to)
        );
        const activeElement = activeLink ? linkRefs.current[activeLink.to] : null;
        const navElement = navRef.current;

        if (!activeElement || !navElement) return;

        const navRect = navElement.getBoundingClientRect();
        const activeRect = activeElement.getBoundingClientRect();

        setSliderStyle({
            left: activeRect.left - navRect.left,
            width: activeRect.width,
        });
    }, [location.pathname, language]);

    return(
        <header
            className="sticky top-0 z-50 flex min-h-16 min-w-full items-center justify-between border-b border-white/70 bg-white/55 px-4 py-4 shadow-lg shadow-[#1F2937]/5 backdrop-blur-2xl transition-all duration-300 md:px-12"
        >
            <MobileNav />

            <div className='hidden items-center justify-between gap-4 md:flex'>
                <img src={logo} alt="DenX Logo" className='w-10 h-10' />
                <NavLink to='/' className='text-2xl font-bold text-[#016D49]'>DenX</NavLink>
            </div>

            <div ref={navRef} className='relative left-10 hidden items-center gap-12 pb-2 md:flex'>
                {mainNavLinks.map((link) => (
                    <NavLink
                        key={link.to}
                        to={link.to}
                        end={link.end}
                        ref={(element) => {
                            linkRefs.current[link.to] = element;
                        }}
                        className={navLinkClassName}
                    >
                        {t(link.labelKey)}
                    </NavLink>
                ))}
                <span
                    className='absolute bottom-0 left-0 h-0.5 rounded-full bg-[#12B981] transition-all duration-300 ease-out'
                    style={{
                        width: sliderStyle.width,
                        transform: `translateX(${sliderStyle.left}px)`,
                    }}
                />
            </div>

            <div className='hidden items-center gap-4 md:flex'>
                <LanguageToggle />
                <Button type='primary' text={t("cta.requestAccess")} />
                <Button type='outline' text={t("nav.login")} />
            </div>
        </header>
    )
}