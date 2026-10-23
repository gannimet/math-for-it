import type { BackPropStep } from './backprop-state-machine';

export const backPropStoryboard: BackPropStep[] = [
    {
        id: 'a_0^(2)',
        network: {
            mode: 'focus',
            highlight: ['a_0^(2)'],
        },
        eq: {
            show: {
                'C_of_a': [-7, 3],
                'delta_0^(2)': [7.7, 1.4],
                'w_0,1^(2)': [4.5, 0.5],
            },
        },
    },
    {
        id: 'a_0^(2)_moved',
        eq: {
            show: {
                C_of_a: [-4, 3],
            },
        },
    },
];
