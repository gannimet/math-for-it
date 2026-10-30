import type { BackPropStep } from './backprop-state-machine';

export type BackPropStepFragmentsProps = { storyboard: BackPropStep[] };

export default function BackPropStepFragments({ storyboard }: BackPropStepFragmentsProps) {
    return (
        <>
            {storyboard.map((step, i) => {
                return (
                    <span
                        key={i}
                        className="fragment"
                        data-fragment-index={i}
                        id={step.id}
                        aria-hidden="true"
                    />
                );
            })}
        </>
    );
}
