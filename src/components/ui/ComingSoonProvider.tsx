import { useCallback, useMemo, useState, type ReactNode } from "react";
import ComingSoonModal from "./ComingSoonModal";
import { ComingSoonContext, type ComingSoonContextValue } from "./comingSoon";

export function ComingSoonProvider({ children }: { children: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);

    const showComingSoon = useCallback(() => setIsOpen(true), []);
    const hideComingSoon = useCallback(() => setIsOpen(false), []);

    const value = useMemo<ComingSoonContextValue>(
        () => ({ isOpen, showComingSoon, hideComingSoon }),
        [isOpen, showComingSoon, hideComingSoon]
    );

    return (
        <ComingSoonContext.Provider value={value}>
            {children}
            <ComingSoonModal isOpen={isOpen} onClose={hideComingSoon} />
        </ComingSoonContext.Provider>
    );
}
