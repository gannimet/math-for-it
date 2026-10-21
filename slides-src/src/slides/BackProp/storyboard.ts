import type { BackPropStep } from './backprop-state-machine';

export const backPropStoryboard: BackPropStep[] = [
    {
        id: 'a_0^2',
        network: {
            mode: 'focus',
            highlight: ['a_0^2'],
        },
        eq: {
            show: {
                C_of_a: [-7, 3],
            },
        },
    },
    {
        id: 'a_0^2_moved',
        eq: {
            show: {
                C_of_a: [-4, 3],
            },
        },
    },
];
