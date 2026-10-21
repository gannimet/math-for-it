const FADE_OPACITY = 0.3;
const FADE_FILL_OPACITY = 0.1;

export type Placement = 'hidden' | `main:${number}` | `compact:${number}`;

export type BackPropSlideState = {
    mode: 'full' | 'focus'; // full = alles hell, focus = nur Hervorgehobenes hell
    highlighted: ReadonlySet<string>;
    equations: Readonly<Record<string, Placement>>;
};

export type BackPropStep = {
    id: string;
    network?: {
        mode?: BackPropSlideState['mode'];
        highlight?: string[];
        unhighlight?: string[];
    };
    eq?: Record<string, Placement>;
};

export const initialBackPropState: BackPropSlideState = {
    mode: 'full',
    highlighted: new Set(),
    equations: {},
};

export const backPropStoryboard: BackPropStep[] = [{ id: 'focus', network: { mode: 'focus' } }];

export function applyBackPropStep(
    state: BackPropSlideState,
    step: BackPropStep,
): BackPropSlideState {
    const highlighted = new Set(state.highlighted);

    step.network?.highlight?.forEach((id) => highlighted.add(id));
    step.network?.unhighlight?.forEach((id) => highlighted.delete(id));

    return {
        mode: step.network?.mode ?? state.mode,
        highlighted,
        equations: { ...state.equations, ...step.eq },
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

export function equationPlacement(state: BackPropSlideState, id: string): Placement {
    return state.equations[id] ?? 'hidden';
}
