import { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./ui/Button";

const mainNavLinks = [
    { to: "/", label: "Product", end: true },
    { to: "/pricing", label: "Pricing" },
    { to: "/contact", label: "Contact" },
];

export default function Header(){
    const location = useLocation();
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
    }, [location.pathname]);

    return(
        <header className='bg-[#FBF9F9] flex justify-between items-center min-w-full border-b border-gray-200 min-h-16 px-18 py-4 max-w-7xl'>
            <div className='flex items-center justify-between  '>
                <NavLink to='/' className='text-2xl font-bold text-[#016D49]'>DenX</NavLink>
            </div>

            <div ref={navRef} className='relative flex items-center left-20 gap-12 pb-2'>
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
                        {link.label}
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

            <div className='flex items-center gap-4'>
                <Button type='primary' text='Solicitar Acceso' />
                <Button type='outline' text='Login' />
            </div>
        </header>
    )
}