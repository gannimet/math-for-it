import { useBackPropSlideState } from './BackPropSlideStateContext';
import { partOpacity } from './state-machine';

export default function NetworkPart({ id, children }: { id: string; children: React.ReactNode }) {
    const state = useBackPropSlideState();

    return (
        <g style={{ opacity: partOpacity(state, id), transition: 'opacity 0.4s ease-in-out' }}>
            {children}
        </g>
    );
}
