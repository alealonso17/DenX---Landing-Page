import { createContext, useContext } from "react";

export type ComingSoonContextValue = {
    isOpen: boolean;
    showComingSoon: () => void;
    hideComingSoon: () => void;
};

export const ComingSoonContext = createContext<ComingSoonContextValue | null>(null);

export function useComingSoon() {
    const context = useContext(ComingSoonContext);

    if (!context) {
        throw new Error("useComingSoon must be used inside ComingSoonProvider");
    }

    return context;
}
