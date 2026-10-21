import { useReveal } from '@revealjs/react';
import { useEffect, useState } from 'react';

export function useVisibleFragments() {
    const revealDeck = useReveal();
    const [visibleFragmentIds, setVisibleFragmentIds] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!revealDeck) {
            return;
        }

        const updateFragmentIds = () => {
            const root = revealDeck.getRevealElement();

            if (!root) {
                return;
            }

            const visibleIds = [...root.querySelectorAll('.fragment.visible')]
                .map((el) => el.id)
                .filter(Boolean);
            setVisibleFragmentIds(new Set(visibleIds));
        };

        updateFragmentIds();

        revealDeck.on('fragmentshown', updateFragmentIds);
        revealDeck.on('fragmenthidden', updateFragmentIds);
        revealDeck.on('slidechanged', updateFragmentIds);
        revealDeck.on('ready', updateFragmentIds);

        return () => {
            revealDeck.off('fragmentshown', updateFragmentIds);
            revealDeck.off('fragmenthidden', updateFragmentIds);
            revealDeck.off('slidechanged', updateFragmentIds);
            revealDeck.off('ready', updateFragmentIds);
        };
    }, [revealDeck]);

    return visibleFragmentIds;
}
