import { LaTeX } from 'mafs';
import { useTweenedPoint } from './use-tweened-point';

export default function AnimatedLaTeX({ at, ...props }: any) {
    return <LaTeX at={useTweenedPoint(at, 800)} {...props} />;
}
