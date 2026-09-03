import { useReveal } from '@revealjs/react';
import { useEffect, useState } from 'react';

export function useFragmentVisibility(fragmentId: string) {
    const [isFragmentVisible, setIsFragmentVisible] = useState(false);
    const revealDeck = useReveal();

    useEffect(() => {
        if (!revealDeck) {
            return;
        }

        const handleShown = (event: any) => {
            if (event.fragment.id === fragmentId) {
                setIsFragmentVisible(true);
            }
        };

        const handleHidden = (event: any) => {
            if (event.fragment.id === fragmentId) {
                setIsFragmentVisible(false);
            }
        };

        revealDeck.on('fragmentshown', handleShown);
        revealDeck.on('fragmenthidden', handleHidden);

        return () => {
            revealDeck.off('fragmentshown', handleShown);
            revealDeck.off('fragmenthidden', handleHidden);
        };
    }, [revealDeck]);

    return isFragmentVisible;
}
