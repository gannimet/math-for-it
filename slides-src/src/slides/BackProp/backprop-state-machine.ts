import type { vec } from 'mafs';
import { backPropStoryboard } from './storyboard';

const FADE_OPACITY = 0.3;

export type BackPropSlideState = {
    mode: 'full' | 'focus'; // full = alles hell, focus = nur Hervorgehobenes hell
    highlighted: ReadonlySet<string>;
    equations: Readonly<Record<string, vec.Vector2>>;
};

export type BackPropStep = {
    id: string;
    network?: {
        mode?: BackPropSlideState['mode'];
        highlight?: string[];
        unhighlight?: string[];
    };
    eq?: {
        show?: Record<string, vec.Vector2>;
        hide?: string[];
    };
};

export const initialBackPropState: BackPropSlideState = {
    mode: 'full',
    highlighted: new Set(),
    equations: {},
};

export function applyBackPropStep(
    state: BackPropSlideState,
    step: BackPropStep,
): BackPropSlideState {
    const highlighted = new Set(state.highlighted);

    step.network?.highlight?.forEach((id) => highlighted.add(id));
    step.network?.unhighlight?.forEach((id) => highlighted.delete(id));

    const equations: Record<string, vec.Vector2> = { ...state.equations, ...step.eq?.show };

    step.eq?.hide?.forEach((id) => delete equations[id]);

    return {
        mode: step.network?.mode ?? state.mode,
        highlighted,
        equations,
    };
}

export function computeBackPropState(stepIndex: number): BackPropSlideState {
    return backPropStoryboard
        .slice(0, stepIndex + 1)
        .reduce(applyBackPropStep, initialBackPropState);
}

export function partOpacity(state: BackPropSlideState, id: string): number {
    return state.mode === 'full' || state.highlighted.has(id) ? 1 : FADE_OPACITY;
}

export function equationPlacement(state: BackPropSlideState, id: string): vec.Vector2 | undefined {
    return state.equations[id];
}
