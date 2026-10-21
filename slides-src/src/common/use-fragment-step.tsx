import { useReveal } from '@revealjs/react';
import { useEffect, useState, type RefObject } from 'react';

export function useFragmentStep(ref: RefObject<HTMLElement | null>) {
    const revealDeck = useReveal();
    const [step, setStep] = useState(-1);

    useEffect(() => {
        if (!revealDeck) {
            return;
        }

        const update = () => {
            const slide = ref.current?.closest('section');

            if (!slide) {
                return;
            }

            const indices = [...slide.querySelectorAll('.fragment.visible')]
                .map((el) => Number(el.getAttribute('data-fragment-index')))
                .filter((i) => !Number.isNaN(i));

            setStep(indices.length > 0 ? Math.max(...indices) : -1);
        };

        update();

        const events = ['ready', 'fragmentshown', 'fragmenthidden', 'slidechanged'];

        events.forEach((e) => revealDeck.on(e, update));

        return () => events.forEach((e) => revealDeck.off(e, update));
    }, [revealDeck, ref]);

    return step;
}
