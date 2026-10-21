import type { vec } from 'mafs';
import { useEffect, useRef, useState } from 'react';

const lerp = (a: vec.Vector2, b: vec.Vector2, t: number): vec.Vector2 => [
    a[0] + (b[0] - a[0]) * t,
    a[1] + (b[1] - a[1]) * t,
];

const easeInOutCubic = (t: number) => (t < 0.5 ? 4 * t ** 3 : 1 - (-2 * t + 2) ** 3 / 2);

export function useTweenedPoint(target: vec.Vector2, duration = 500) {
    const [pos, setPos] = useState(target);
    const posRef = useRef(target);

    useEffect(() => {
        const from = posRef.current;

        if (from[0] === target[0] && from[1] === target[1]) {
            return;
        }

        const start = performance.now();
        let frame: number;

        const tick = (now: number) => {
            const t = Math.min(Math.max((now - start) / duration, 0), 1);
            const p = lerp(from, target, easeInOutCubic(t));
            posRef.current = p;
            setPos(p);

            if (t < 1) {
                frame = requestAnimationFrame(tick);
            }
        };

        frame = requestAnimationFrame(tick);

        return () => cancelAnimationFrame(frame);
    }, [target[0], target[1], duration]);

    return pos;
}
