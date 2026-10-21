import { LaTeX } from 'mafs';
import { equationPlacement } from './backprop-state-machine';
import { useBackPropSlideState } from './BackPropSlideStateContext';
import type { BackPropEquationDef } from './EquationRegister';

export default function BackPropEquation({ id, tex }: BackPropEquationDef) {
    const state = useBackPropSlideState();
    const position = equationPlacement(state, id);

    return position ? <LaTeX at={position} tex={tex} /> : <></>;
}
