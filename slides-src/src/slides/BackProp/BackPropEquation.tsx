import AnimatedLaTeX from '../../common/AnimatedLaTeX';
import Fade from '../../common/Fade';
import { useLastDefined } from '../../common/use-last-defined';
import { equationPlacement } from './backprop-state-machine';
import { useBackPropSlideState } from './BackPropSlideStateContext';
import type { BackPropEquationDef, backPropEquationDefs } from './EquationRegister';

export type EquationId = (typeof backPropEquationDefs)[number]['id'];

export type BackPropEquationProps = BackPropEquationDef & { id: EquationId };

export default function BackPropEquation({ id, tex, color }: BackPropEquationProps) {
    const state = useBackPropSlideState();
    const position = equationPlacement(state, id);
    const lastPosition = useLastDefined(position);

    if (!lastPosition) {
        return null;
    }

    return (
        <Fade visible={position !== undefined}>
            <AnimatedLaTeX at={lastPosition} tex={tex} color={color} />
        </Fade>
    );
}
