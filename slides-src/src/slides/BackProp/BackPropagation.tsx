import { Slide } from '@revealjs/react';
import { Coordinates, Mafs } from 'mafs';
import { useMemo, useRef } from 'react';
import { useFragmentStep } from '../../common/use-fragment-step';
import { computeBackPropState } from './backprop-state-machine';
import BackPropEquations from './BackPropEquations';
import BackPropNetwork from './BackPropNetwork';
import { BackPropSlideStateContext } from './BackPropSlideStateContext';
import BackPropStepFragments from './StepFragments';
import { backPropStoryboard } from './storyboard';

export default function BackPropagation() {
    const rootRef = useRef<HTMLDivElement>(null);
    const step = useFragmentStep(rootRef);
    const state = useMemo(() => computeBackPropState(step), [step]);

    return (
        <Slide>
            <div className="r-stretch" ref={rootRef}>
                <BackPropStepFragments count={backPropStoryboard.length} />

                <BackPropSlideStateContext.Provider value={state}>
                    <Mafs height={800} pan={false} viewBox={{ x: [-10, 10], y: [-5, 7] }}>
                        <Coordinates.Cartesian xAxis={false} yAxis={false} />

                        <BackPropNetwork />
                        <BackPropEquations />
                    </Mafs>
                </BackPropSlideStateContext.Provider>
            </div>
        </Slide>
    );
}
