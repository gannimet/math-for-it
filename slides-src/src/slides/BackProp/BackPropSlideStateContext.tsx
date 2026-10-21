import { createContext, useContext } from 'react';
import type { BackPropSlideState } from './backprop-state-machine';

export const BackPropSlideStateContext = createContext<BackPropSlideState | null>(null);

export function useBackPropSlideState(): BackPropSlideState {
    const state = useContext(BackPropSlideStateContext);

    if (!state) {
        throw new Error(
            'useBackPropSlideState must be used inside a BackPropSlideStateContext provider',
        );
    }

    return state;
}
