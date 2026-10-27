import type { vec } from 'mafs';
import type { backPropEquationDefs } from './EquationRegister';
import { backPropStoryboard } from './storyboard';

const NETWORK_FADE_OPACITY = 0.2;
const EQUATION_FADE_OPACITY = 0.5;

export type BackpropEquationId = (typeof backPropEquationDefs)[number]['id'];

export type BackpropEquationState = {
    position: vec.Vector2;
    faded: boolean;
};

export type BackPropSlideState = {
    mode: 'full' | 'focus'; // full = alles hell, focus = nur Hervorgehobenes hell
    highlighted: ReadonlySet<string>;
    equations: Readonly<Partial<Record<BackpropEquationId, BackpropEquationState>>>;
};

export type BackPropStep = {
    id: string;
    network?: {
        mode?: BackPropSlideState['mode'];
        highlight?: string[];
        unhighlight?: string[];
    };
    eq?: {
        show?: Partial<Record<BackpropEquationId, vec.Vector2>>;
        hide?: BackpropEquationId[];
        fade?: BackpropEquationId[];
        unfade?: BackpropEquationId[];
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

    const equations: Partial<Record<BackpropEquationId, BackpropEquationState>> = {
        ...state.equations,
    };

    Object.keys(step.eq?.show ?? {}).forEach((id) => {
        const eid = id as BackpropEquationId;
        equations[eid] = {
            position: step.eq?.show?.[eid]!,
            faded: false,
        };
    });

    step.eq?.fade?.forEach((id) => {
        if (equations[id]) {
            equations[id].faded = true;
        }
    });

    step.eq?.unfade?.forEach((id) => {
        if (equations[id]) {
            equations[id].faded = false;
        }
    });

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
    return state.mode === 'full' || state.highlighted.has(id) ? 1 : NETWORK_FADE_OPACITY;
}

export function equationPlacement(
    state: BackPropSlideState,
    id: BackpropEquationId,
): vec.Vector2 | undefined {
    return state.equations[id]?.position;
}

export function equationOpacity(state: BackPropSlideState, id: BackpropEquationId): number {
    return state.equations[id]?.faded === true ? EQUATION_FADE_OPACITY : 1;
}
