import { useRef } from 'react';

export function useLastDefined<T>(value: T | undefined): T | undefined {
    const ref = useRef(value);

    if (value !== undefined) {
        ref.current = value;
    }

    return ref.current;
}
